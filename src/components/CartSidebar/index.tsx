import { useState } from 'react'
import { useCart } from '../../contexts/CartContext'
import * as S from './styles'

type CheckoutStep = 'cart' | 'delivery' | 'payment' | 'confirmation'

const TrashIcon = () => (
  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 3h-2V2.5A1.5 1.5 0 0 0 9.5 1h-3A1.5 1.5 0 0 0 5 2.5V3H3a1 1 0 0 0-1 1v1h12V4a1 1 0 0 0-1-1ZM6 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V3H6V2.5ZM3 6l.5 8.5A1.5 1.5 0 0 0 5 16h6a1.5 1.5 0 0 0 1.5-1.5L13 6H3Z" />
  </svg>
)

const CartSidebar = () => {
  const { items, isOpen, closeCart, removeItem, totalPrice, clearCart } = useCart()
  const [step, setStep] = useState<CheckoutStep>('cart')

  // Delivery form state
  const [deliveryForm, setDeliveryForm] = useState({
    receiver: '',
    address: '',
    city: '',
    cep: '',
    number: '',
    complement: ''
  })

  // Payment form state
  const [paymentForm, setPaymentForm] = useState({
    cardName: '',
    cardNumber: '',
    cvv: '',
    expiryMonth: '',
    expiryYear: ''
  })

  const [orderId, setOrderId] = useState('')

  const handleClose = () => {
    closeCart()
    // Reset to cart step after a short delay (after animation)
    setTimeout(() => setStep('cart'), 350)
  }

  const handleContinueToDelivery = () => {
    setStep('delivery')
  }

  const handleContinueToPayment = () => {
    setStep('payment')
  }

  const handleFinishPayment = () => {
    // Gera um ID de pedido simulado
    const id = 'ORD-' + Math.random().toString(36).substring(2, 8).toUpperCase()
    setOrderId(id)
    setStep('confirmation')
  }

  const handleConclude = () => {
    clearCart()
    setStep('cart')
    setDeliveryForm({ receiver: '', address: '', city: '', cep: '', number: '', complement: '' })
    setPaymentForm({ cardName: '', cardNumber: '', cvv: '', expiryMonth: '', expiryYear: '' })
    closeCart()
  }

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
                <span>R$ {(item.preco * item.quantity).toFixed(2)}</span>
              </S.CartItemInfo>
              <S.RemoveButton
                type="button"
                onClick={() => removeItem(item.id)}
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

  const renderDelivery = () => (
    <>
      <S.FormContainer>
        <S.FormTitle>Entrega</S.FormTitle>

        <S.FormGroup>
          <S.Label htmlFor="receiver">Quem irá receber</S.Label>
          <S.Input
            id="receiver"
            type="text"
            value={deliveryForm.receiver}
            onChange={(e) => setDeliveryForm({ ...deliveryForm, receiver: e.target.value })}
          />
        </S.FormGroup>

        <S.FormGroup>
          <S.Label htmlFor="address">Endereço</S.Label>
          <S.Input
            id="address"
            type="text"
            value={deliveryForm.address}
            onChange={(e) => setDeliveryForm({ ...deliveryForm, address: e.target.value })}
          />
        </S.FormGroup>

        <S.FormGroup>
          <S.Label htmlFor="city">Cidade</S.Label>
          <S.Input
            id="city"
            type="text"
            value={deliveryForm.city}
            onChange={(e) => setDeliveryForm({ ...deliveryForm, city: e.target.value })}
          />
        </S.FormGroup>

        <S.InputRow>
          <S.FormGroup>
            <S.Label htmlFor="cep">CEP</S.Label>
            <S.Input
              id="cep"
              type="text"
              value={deliveryForm.cep}
              onChange={(e) => setDeliveryForm({ ...deliveryForm, cep: e.target.value })}
            />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label htmlFor="number">Número</S.Label>
            <S.Input
              id="number"
              type="text"
              value={deliveryForm.number}
              onChange={(e) => setDeliveryForm({ ...deliveryForm, number: e.target.value })}
            />
          </S.FormGroup>
        </S.InputRow>

        <S.FormGroup>
          <S.Label htmlFor="complement">Complemento (opcional)</S.Label>
          <S.Input
            id="complement"
            type="text"
            value={deliveryForm.complement}
            onChange={(e) => setDeliveryForm({ ...deliveryForm, complement: e.target.value })}
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

  const renderPayment = () => (
    <>
      <S.FormContainer>
        <S.FormTitle>Pagamento - Valor a pagar R$ {totalPrice.toFixed(2)}</S.FormTitle>

        <S.FormGroup>
          <S.Label htmlFor="cardName">Nome no cartão</S.Label>
          <S.Input
            id="cardName"
            type="text"
            value={paymentForm.cardName}
            onChange={(e) => setPaymentForm({ ...paymentForm, cardName: e.target.value })}
          />
        </S.FormGroup>

        <S.InputRow>
          <S.FormGroup style={{ flex: 2 }}>
            <S.Label htmlFor="cardNumber">Número do cartão</S.Label>
            <S.Input
              id="cardNumber"
              type="text"
              value={paymentForm.cardNumber}
              onChange={(e) => setPaymentForm({ ...paymentForm, cardNumber: e.target.value })}
            />
          </S.FormGroup>
          <S.FormGroup style={{ flex: 1 }}>
            <S.Label htmlFor="cvv">CVV</S.Label>
            <S.Input
              id="cvv"
              type="text"
              maxLength={4}
              value={paymentForm.cvv}
              onChange={(e) => setPaymentForm({ ...paymentForm, cvv: e.target.value })}
            />
          </S.FormGroup>
        </S.InputRow>

        <S.InputRow>
          <S.FormGroup>
            <S.Label htmlFor="expiryMonth">Mês de vencimento</S.Label>
            <S.Input
              id="expiryMonth"
              type="text"
              maxLength={2}
              placeholder="MM"
              value={paymentForm.expiryMonth}
              onChange={(e) => setPaymentForm({ ...paymentForm, expiryMonth: e.target.value })}
            />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label htmlFor="expiryYear">Ano de vencimento</S.Label>
            <S.Input
              id="expiryYear"
              type="text"
              maxLength={4}
              placeholder="AAAA"
              value={paymentForm.expiryYear}
              onChange={(e) => setPaymentForm({ ...paymentForm, expiryYear: e.target.value })}
            />
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
