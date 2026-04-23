import { useForm } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { setPaymentData, setStep, setOrderId } from '../../store/slices/checkoutSlice'
import { selectCartTotal } from '../../store/slices/cartSlice'
import { PaymentData } from '../../types'
import {
  maskCardNumber,
  maskCvv,
  maskMonth,
  maskYear,
  maskCpf,
  validateCardNumber,
  validateCvv,
  validateMonth,
  validateYear,
  validateCpf,
} from '../../utils/masks'
import {
  FormContainer,
  Title,
  FieldGroup,
  Row,
  ErrorMessage,
  SubmitButton,
  SecondaryButton
} from './styles'

const PaymentForm = () => {
  const dispatch = useAppDispatch()
  const total = useAppSelector(selectCartTotal)
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<PaymentData>()

  const formatPrice = (price: number) =>
    price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

  const onSubmit = (data: PaymentData) => {
    dispatch(setPaymentData(data))
    const orderId = Math.random().toString(36).substr(2, 9).toUpperCase()
    dispatch(setOrderId(orderId))
    dispatch(setStep('confirm'))
  }

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)} data-testid="payment-form">
      <Title>
        Pagamento — Valor a pagar {formatPrice(total)}
      </Title>

      <FieldGroup>
        <label htmlFor="cardName">Nome no cartão</label>
        <input
          id="cardName"
          data-testid="input-cardName"
          placeholder="Como está no cartão"
          autoComplete="cc-name"
          {...register('cardName', {
            required: 'Nome no cartão é obrigatório',
            minLength: { value: 3, message: 'Mínimo de 3 caracteres' },
          })}
        />
        {errors.cardName && (
          <ErrorMessage role="alert">{errors.cardName.message}</ErrorMessage>
        )}
      </FieldGroup>

      <Row>
        <FieldGroup>
          <label htmlFor="cardNumber">Número do cartão</label>
          <input
            id="cardNumber"
            data-testid="input-cardNumber"
            placeholder="0000 0000 0000 0000"
            maxLength={19}
            inputMode="numeric"
            autoComplete="cc-number"
            {...register('cardNumber', {
              required: 'Número do cartão é obrigatório',
              validate: validateCardNumber,
              onChange: (e) => {
                e.target.value = maskCardNumber(e.target.value)
                setValue('cardNumber', e.target.value)
              },
            })}
          />
          {errors.cardNumber && (
            <ErrorMessage role="alert">{errors.cardNumber.message}</ErrorMessage>
          )}
        </FieldGroup>

        <FieldGroup $width="88px">
          <label htmlFor="cvv">CVV</label>
          <input
            id="cvv"
            data-testid="input-cvv"
            placeholder="000"
            maxLength={3}
            inputMode="numeric"
            autoComplete="cc-csc"
            {...register('cvv', {
              required: 'CVV é obrigatório',
              validate: validateCvv,
              onChange: (e) => {
                e.target.value = maskCvv(e.target.value)
                setValue('cvv', e.target.value)
              },
            })}
          />
          {errors.cvv && (
            <ErrorMessage role="alert">{errors.cvv.message}</ErrorMessage>
          )}
        </FieldGroup>
      </Row>

      <Row>
        <FieldGroup>
          <label htmlFor="expiryMonth">Mês de vencimento</label>
          <input
            id="expiryMonth"
            data-testid="input-expiryMonth"
            placeholder="MM"
            maxLength={2}
            inputMode="numeric"
            autoComplete="cc-exp-month"
            {...register('expiryMonth', {
              required: 'Mês é obrigatório',
              validate: validateMonth,
              onChange: (e) => {
                e.target.value = maskMonth(e.target.value)
                setValue('expiryMonth', e.target.value)
              },
            })}
          />
          {errors.expiryMonth && (
            <ErrorMessage role="alert">{errors.expiryMonth.message}</ErrorMessage>
          )}
        </FieldGroup>

        <FieldGroup>
          <label htmlFor="expiryYear">Ano de vencimento</label>
          <input
            id="expiryYear"
            data-testid="input-expiryYear"
            placeholder="AAAA"
            maxLength={4}
            inputMode="numeric"
            autoComplete="cc-exp-year"
            {...register('expiryYear', {
              required: 'Ano é obrigatório',
              validate: validateYear,
              onChange: (e) => {
                e.target.value = maskYear(e.target.value)
                setValue('expiryYear', e.target.value)
              },
            })}
          />
          {errors.expiryYear && (
            <ErrorMessage role="alert">{errors.expiryYear.message}</ErrorMessage>
          )}
        </FieldGroup>
      </Row>

      <FieldGroup>
        <label htmlFor="cpf">CPF do titular</label>
        <input
          id="cpf"
          data-testid="input-cpf"
          placeholder="000.000.000-00"
          maxLength={14}
          inputMode="numeric"
          {...register('cpf', {
            required: 'CPF é obrigatório',
            validate: validateCpf,
            onChange: (e) => {
              e.target.value = maskCpf(e.target.value)
              setValue('cpf', e.target.value)
            },
          })}
        />
        {errors.cpf && (
          <ErrorMessage role="alert">{errors.cpf.message}</ErrorMessage>
        )}
      </FieldGroup>

      <SubmitButton type="submit" data-testid="finalize-payment-btn">
        Finalizar pagamento
      </SubmitButton>
      <SecondaryButton
        type="button"
        onClick={() => dispatch(setStep('delivery'))}
        data-testid="back-to-delivery-btn"
      >
        Voltar para a edição de endereço
      </SecondaryButton>
    </FormContainer>
  )
}

export default PaymentForm
