import { useState, useCallback } from 'react'
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import {
  incrementItem,
  decrementItem,
  removeItem,
  clearCart,
  closeCart
} from '../../store/cartSlice'
import * as S from './styles'

type CheckoutStep = 'cart' | 'delivery' | 'payment' | 'confirmation'

// ==============================
// Máscaras
// ==============================
const maskCPF = (value: string): string => {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  return digits
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
}

const maskPhone = (value: string): string => {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (digits.length <= 2) return digits.length ? `(${digits}` : ''
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

const maskCEP = (value: string): string => {
  const digits = value.replace(/\D/g, '').slice(0, 8)
  if (digits.length <= 5) return digits
  return `${digits.slice(0, 5)}-${digits.slice(5)}`
}

const maskCardNumber = (value: string): string => {
  const digits = value.replace(/\D/g, '').slice(0, 16)
  return digits.replace(/(\d{4})(?=\d)/g, '$1 ')
}

const maskOnlyDigits = (value: string, max: number): string => {
  return value.replace(/\D/g, '').slice(0, max)
}

// Permite apenas letras (incluindo acentuadas), espaços e apóstrofos
const maskNameOnly = (value: string): string => {
  return value.replace(/[^a-zA-ZÀ-ÿ\s']/g, '')
}

// ==============================
// Validações
// ==============================
interface DeliveryErrors {
  receiver?: string
  cpf?: string
  email?: string
  phone?: string
  address?: string
  city?: string
  cep?: string
  number?: string
}

interface PaymentErrors {
  cardName?: string
  cardNumber?: string
  cvv?: string
  expiryMonth?: string
  expiryYear?: string
}

const validateEmail = (email: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

const validateDelivery = (form: {
  receiver: string
  cpf: string
  email: string
  phone: string
  address: string
  city: string
  cep: string
  number: string
}): DeliveryErrors => {
  const errors: DeliveryErrors = {}

  if (!form.receiver.trim() || form.receiver.trim().length < 3)
    errors.receiver = 'Nome deve ter ao menos 3 caracteres'
  else if (/[^a-zA-ZÀ-ÿ\s']/.test(form.receiver))
    errors.receiver = 'Nome não pode conter caracteres especiais'

  const cpfDigits = form.cpf.replace(/\D/g, '')
  if (cpfDigits.length !== 11) errors.cpf = 'CPF deve ter 11 dígitos'

  if (!validateEmail(form.email)) errors.email = 'E-mail inválido'

  const phoneDigits = form.phone.replace(/\D/g, '')
  if (phoneDigits.length < 10 || phoneDigits.length > 11)
    errors.phone = 'Celular inválido (DDD + número)'

  if (!form.address.trim()) errors.address = 'Endereço é obrigatório'
  if (!form.city.trim()) errors.city = 'Cidade é obrigatória'

  const cepDigits = form.cep.replace(/\D/g, '')
  if (cepDigits.length !== 8) errors.cep = 'CEP deve ter 8 dígitos'

  if (!form.number.trim()) errors.number = 'Obrigatório'

  return errors
}

const validatePayment = (form: {
  cardName: string
  cardNumber: string
  cvv: string
  expiryMonth: string
  expiryYear: string
}): PaymentErrors => {
  const errors: PaymentErrors = {}

  if (!form.cardName.trim() || form.cardName.trim().length < 3)
    errors.cardName = 'Nome deve ter ao menos 3 caracteres'
  else if (/[^a-zA-ZÀ-ÿ\s']/.test(form.cardName))
    errors.cardName = 'Somente letras e acentos são permitidos'

  const cardDigits = form.cardNumber.replace(/\D/g, '')
  if (cardDigits.length !== 16) errors.cardNumber = 'Cartão deve ter 16 dígitos'

  if (form.cvv.length < 3 || form.cvv.length > 4)
    errors.cvv = '3 ou 4 dígitos'

  const month = parseInt(form.expiryMonth, 10)
  if (!form.expiryMonth || month < 1 || month > 12)
    errors.expiryMonth = 'Mês inválido (1 a 12)'

  const year = parseInt(form.expiryYear, 10)
  if (!form.expiryYear || year < 1900 || year > 2026)
    errors.expiryYear = 'Ano inválido (1900 a 2026)'

  return errors
}

// ==============================
// Ícones
// ==============================
const TrashIcon = () => (
  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 3h-2V2.5A1.5 1.5 0 0 0 9.5 1h-3A1.5 1.5 0 0 0 5 2.5V3H3a1 1 0 0 0-1 1v1h12V4a1 1 0 0 0-1-1ZM6 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V3H6V2.5ZM3 6l.5 8.5A1.5 1.5 0 0 0 5 16h6a1.5 1.5 0 0 0 1.5-1.5L13 6H3Z" />
  </svg>
)

// ==============================
// Componente
// ==============================
const CartSidebar = () => {
  const dispatch = useAppDispatch()
  const items = useAppSelector((state) => state.cart.items)
  const isOpen = useAppSelector((state) => state.cart.isOpen)
  const totalPrice = useAppSelector((state) =>
    state.cart.items.reduce(
      (sum, item) => sum + item.preco * item.quantity,
      0
    )
  )

  const [step, setStep] = useState<CheckoutStep>('cart')

  // Delivery form
  const [deliveryForm, setDeliveryForm] = useState({
    receiver: '',
    cpf: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    cep: '',
    number: '',
    complement: ''
  })
  const [deliveryErrors, setDeliveryErrors] = useState<DeliveryErrors>({})

  // Payment form
  const [paymentForm, setPaymentForm] = useState({
    cardName: '',
    cardNumber: '',
    cvv: '',
    expiryMonth: '',
    expiryYear: ''
  })
  const [paymentErrors, setPaymentErrors] = useState<PaymentErrors>({})

  const [orderId, setOrderId] = useState('')

  const handleClose = () => {
    dispatch(closeCart())
    setTimeout(() => setStep('cart'), 350)
  }

  // Delivery field handler with masks
  const handleDeliveryChange = useCallback(
    (field: string, value: string) => {
      let masked = value
      if (field === 'cpf') masked = maskCPF(value)
      else if (field === 'phone') masked = maskPhone(value)
      else if (field === 'cep') masked = maskCEP(value)
      else if (field === 'receiver') masked = maskNameOnly(value)

      setDeliveryForm((prev) => ({ ...prev, [field]: masked }))
      // Remove erro do campo ao digitar
      setDeliveryErrors((prev) => ({ ...prev, [field]: undefined }))
    },
    []
  )

  // Payment field handler with masks
  const handlePaymentChange = useCallback(
    (field: string, value: string) => {
      let masked = value
      if (field === 'cardName') masked = maskNameOnly(value)
      else if (field === 'cardNumber') masked = maskCardNumber(value)
      else if (field === 'cvv') masked = maskOnlyDigits(value, 4)
      else if (field === 'expiryMonth') masked = maskOnlyDigits(value, 2)
      else if (field === 'expiryYear') masked = maskOnlyDigits(value, 4)

      setPaymentForm((prev) => ({ ...prev, [field]: masked }))
      setPaymentErrors((prev) => ({ ...prev, [field]: undefined }))
    },
    []
  )

  const handleContinueToDelivery = () => {
    setStep('delivery')
  }

  const handleContinueToPayment = () => {
    const errors = validateDelivery(deliveryForm)
    setDeliveryErrors(errors)
    if (Object.keys(errors).length === 0) {
      setStep('payment')
    }
  }

  const handleFinishPayment = () => {
    const errors = validatePayment(paymentForm)
    setPaymentErrors(errors)
    if (Object.keys(errors).length === 0) {
      const id = 'ORD-' + Math.random().toString(36).substring(2, 8).toUpperCase()
      setOrderId(id)
      setStep('confirmation')
    }
  }

  const handleConclude = () => {
    dispatch(clearCart())
    setStep('cart')
    setDeliveryForm({ receiver: '', cpf: '', email: '', phone: '', address: '', city: '', cep: '', number: '', complement: '' })
    setPaymentForm({ cardName: '', cardNumber: '', cvv: '', expiryMonth: '', expiryYear: '' })
    setDeliveryErrors({})
    setPaymentErrors({})
    dispatch(closeCart())
  }

  // ========== CART STEP ==========
  const renderCart = () => (
    <>
      <S.SidebarContent>
        {items.length === 0 ? (
          <S.EmptyCart>
            <p>
              O carrinho está vazio.
              <br />
              Adicione itens do cardápio!
            </p>
          </S.EmptyCart>
        ) : (
          items.map((item) => (
            <S.CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <S.CartItemInfo>
                <h4>{item.nome}</h4>
                <span className="price">
                  R$ {(item.preco * item.quantity).toFixed(2)}
                </span>
                <S.QuantityControls>
                  <S.QuantityButton
                    type="button"
                    onClick={() => dispatch(decrementItem(item.id))}
                    aria-label="Diminuir quantidade"
                  >
                    −
                  </S.QuantityButton>
                  <S.QuantityValue>{item.quantity}</S.QuantityValue>
                  <S.QuantityButton
                    type="button"
                    onClick={() => dispatch(incrementItem(item.id))}
                    aria-label="Aumentar quantidade"
                  >
                    +
                  </S.QuantityButton>
                </S.QuantityControls>
              </S.CartItemInfo>
              <S.RemoveButton
                type="button"
                onClick={() => dispatch(removeItem(item.id))}
                aria-label={`Remover ${item.nome}`}
              >
                <TrashIcon />
              </S.RemoveButton>
            </S.CartItem>
          ))
        )}
      </S.SidebarContent>

      {items.length > 0 && (
        <S.SidebarFooter>
          <S.TotalRow>
            <span>Valor total</span>
            <span>R$ {totalPrice.toFixed(2)}</span>
          </S.TotalRow>
          <S.CheckoutButton type="button" onClick={handleContinueToDelivery}>
            Continuar com a entrega
          </S.CheckoutButton>
        </S.SidebarFooter>
      )}
    </>
  )

  // ========== DELIVERY STEP ==========
  const renderDelivery = () => (
    <>
      <S.FormContainer>
        <S.FormTitle>Entrega</S.FormTitle>

        <S.FormGroup>
          <S.Label htmlFor="receiver">Quem irá receber</S.Label>
          <S.Input
            id="receiver"
            type="text"
            placeholder="Nome completo"
            $hasError={!!deliveryErrors.receiver}
            value={deliveryForm.receiver}
            onChange={(e) => handleDeliveryChange('receiver', e.target.value)}
          />
          {deliveryErrors.receiver && <S.ErrorMessage>{deliveryErrors.receiver}</S.ErrorMessage>}
        </S.FormGroup>

        <S.FormGroup>
          <S.Label htmlFor="cpf">CPF</S.Label>
          <S.Input
            id="cpf"
            type="text"
            placeholder="000.000.000-00"
            $hasError={!!deliveryErrors.cpf}
            value={deliveryForm.cpf}
            onChange={(e) => handleDeliveryChange('cpf', e.target.value)}
          />
          {deliveryErrors.cpf && <S.ErrorMessage>{deliveryErrors.cpf}</S.ErrorMessage>}
        </S.FormGroup>

        <S.FormGroup>
          <S.Label htmlFor="email">E-mail</S.Label>
          <S.Input
            id="email"
            type="email"
            placeholder="seu@email.com"
            $hasError={!!deliveryErrors.email}
            value={deliveryForm.email}
            onChange={(e) => handleDeliveryChange('email', e.target.value)}
          />
          {deliveryErrors.email && <S.ErrorMessage>{deliveryErrors.email}</S.ErrorMessage>}
        </S.FormGroup>

        <S.FormGroup>
          <S.Label htmlFor="phone">Celular</S.Label>
          <S.Input
            id="phone"
            type="tel"
            placeholder="(00) 00000-0000"
            $hasError={!!deliveryErrors.phone}
            value={deliveryForm.phone}
            onChange={(e) => handleDeliveryChange('phone', e.target.value)}
          />
          {deliveryErrors.phone && <S.ErrorMessage>{deliveryErrors.phone}</S.ErrorMessage>}
        </S.FormGroup>

        <S.FormGroup>
          <S.Label htmlFor="address">Endereço</S.Label>
          <S.Input
            id="address"
            type="text"
            placeholder="Rua, Avenida..."
            $hasError={!!deliveryErrors.address}
            value={deliveryForm.address}
            onChange={(e) => handleDeliveryChange('address', e.target.value)}
          />
          {deliveryErrors.address && <S.ErrorMessage>{deliveryErrors.address}</S.ErrorMessage>}
        </S.FormGroup>

        <S.FormGroup>
          <S.Label htmlFor="city">Cidade</S.Label>
          <S.Input
            id="city"
            type="text"
            $hasError={!!deliveryErrors.city}
            value={deliveryForm.city}
            onChange={(e) => handleDeliveryChange('city', e.target.value)}
          />
          {deliveryErrors.city && <S.ErrorMessage>{deliveryErrors.city}</S.ErrorMessage>}
        </S.FormGroup>

        <S.InputRow>
          <S.FormGroup>
            <S.Label htmlFor="cep">CEP</S.Label>
            <S.Input
              id="cep"
              type="text"
              placeholder="00000-000"
              $hasError={!!deliveryErrors.cep}
              value={deliveryForm.cep}
              onChange={(e) => handleDeliveryChange('cep', e.target.value)}
            />
            {deliveryErrors.cep && <S.ErrorMessage>{deliveryErrors.cep}</S.ErrorMessage>}
          </S.FormGroup>
          <S.FormGroup>
            <S.Label htmlFor="number">Número</S.Label>
            <S.Input
              id="number"
              type="text"
              $hasError={!!deliveryErrors.number}
              value={deliveryForm.number}
              onChange={(e) => handleDeliveryChange('number', e.target.value)}
            />
            {deliveryErrors.number && <S.ErrorMessage>{deliveryErrors.number}</S.ErrorMessage>}
          </S.FormGroup>
        </S.InputRow>

        <S.FormGroup>
          <S.Label htmlFor="complement">Complemento (opcional)</S.Label>
          <S.Input
            id="complement"
            type="text"
            value={deliveryForm.complement}
            onChange={(e) => handleDeliveryChange('complement', e.target.value)}
          />
        </S.FormGroup>
      </S.FormContainer>

      <S.FormFooter>
        <S.FormButton type="button" onClick={handleContinueToPayment}>
          Continuar com o pagamento
        </S.FormButton>
        <S.BackButton type="button" onClick={() => setStep('cart')}>
          Voltar para o carrinho
        </S.BackButton>
      </S.FormFooter>
    </>
  )

  // ========== PAYMENT STEP ==========
  const renderPayment = () => (
    <>
      <S.FormContainer>
        <S.FormTitle>Pagamento - Valor a pagar R$ {totalPrice.toFixed(2)}</S.FormTitle>

        <S.FormGroup>
          <S.Label htmlFor="cardName">Nome no cartão</S.Label>
          <S.Input
            id="cardName"
            type="text"
            placeholder="Como está impresso no cartão"
            $hasError={!!paymentErrors.cardName}
            value={paymentForm.cardName}
            onChange={(e) => handlePaymentChange('cardName', e.target.value)}
          />
          {paymentErrors.cardName && <S.ErrorMessage>{paymentErrors.cardName}</S.ErrorMessage>}
        </S.FormGroup>

        <S.InputRow>
          <S.FormGroup style={{ flex: 2 }}>
            <S.Label htmlFor="cardNumber">Número do cartão</S.Label>
            <S.Input
              id="cardNumber"
              type="text"
              placeholder="0000 0000 0000 0000"
              $hasError={!!paymentErrors.cardNumber}
              value={paymentForm.cardNumber}
              onChange={(e) => handlePaymentChange('cardNumber', e.target.value)}
            />
            {paymentErrors.cardNumber && <S.ErrorMessage>{paymentErrors.cardNumber}</S.ErrorMessage>}
          </S.FormGroup>
          <S.FormGroup style={{ flex: 1 }}>
            <S.Label htmlFor="cvv">CVV</S.Label>
            <S.Input
              id="cvv"
              type="text"
              placeholder="000"
              $hasError={!!paymentErrors.cvv}
              value={paymentForm.cvv}
              onChange={(e) => handlePaymentChange('cvv', e.target.value)}
            />
            {paymentErrors.cvv && <S.ErrorMessage>{paymentErrors.cvv}</S.ErrorMessage>}
          </S.FormGroup>
        </S.InputRow>

        <S.InputRow>
          <S.FormGroup>
            <S.Label htmlFor="expiryMonth">Mês de vencimento</S.Label>
            <S.Input
              id="expiryMonth"
              type="text"
              placeholder="MM"
              $hasError={!!paymentErrors.expiryMonth}
              value={paymentForm.expiryMonth}
              onChange={(e) => handlePaymentChange('expiryMonth', e.target.value)}
            />
            {paymentErrors.expiryMonth && <S.ErrorMessage>{paymentErrors.expiryMonth}</S.ErrorMessage>}
          </S.FormGroup>
          <S.FormGroup>
            <S.Label htmlFor="expiryYear">Ano de vencimento</S.Label>
            <S.Input
              id="expiryYear"
              type="text"
              placeholder="AAAA"
              $hasError={!!paymentErrors.expiryYear}
              value={paymentForm.expiryYear}
              onChange={(e) => handlePaymentChange('expiryYear', e.target.value)}
            />
            {paymentErrors.expiryYear && <S.ErrorMessage>{paymentErrors.expiryYear}</S.ErrorMessage>}
          </S.FormGroup>
        </S.InputRow>
      </S.FormContainer>

      <S.FormFooter>
        <S.FormButton type="button" onClick={handleFinishPayment}>
          Finalizar pagamento
        </S.FormButton>
        <S.BackButton type="button" onClick={() => setStep('delivery')}>
          Voltar para a edição de endereço
        </S.BackButton>
      </S.FormFooter>
    </>
  )

  // ========== CONFIRMATION STEP ==========
  const renderConfirmation = () => (
    <>
      <S.ConfirmationContainer>
        <S.ConfirmationTitle>Pedido realizado - {orderId}</S.ConfirmationTitle>

        <S.ConfirmationText>
          Estamos felizes em informar que seu pedido já está
          em processo de preparação e, em breve, será entregue
          no endereço fornecido.
        </S.ConfirmationText>

        <S.ConfirmationText>
          Gostaríamos de ressaltar que nossos entregadores não
          estão autorizados a realizar cobranças extras.
        </S.ConfirmationText>

        <S.ConfirmationText>
          Lembre-se da importância de higienizar as mãos após o
          recebimento do pedido, garantindo assim sua segurança
          e bem-estar durante a refeição.
        </S.ConfirmationText>

        <S.ConfirmationText>
          Esperamos que desfrute de uma deliciosa e agradável
          experiência gastronômica. Bom apetite!
        </S.ConfirmationText>
      </S.ConfirmationContainer>

      <S.FormFooter>
        <S.FormButton type="button" onClick={handleConclude}>
          Concluir
        </S.FormButton>
      </S.FormFooter>
    </>
  )

  return (
    <>
      <S.Overlay $isOpen={isOpen} onClick={handleClose} />
      <S.Sidebar $isOpen={isOpen} role="complementary" aria-label="Carrinho">
        {step === 'cart' && renderCart()}
        {step === 'delivery' && renderDelivery()}
        {step === 'payment' && renderPayment()}
        {step === 'confirmation' && renderConfirmation()}
      </S.Sidebar>
    </>
  )
}

export default CartSidebar
