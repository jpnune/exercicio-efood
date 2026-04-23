import { useForm } from 'react-hook-form'
import { useAppDispatch } from '../../store/hooks'
import { setDeliveryData, setStep } from '../../store/slices/checkoutSlice'
import { DeliveryData } from '../../types'
import {
  maskCep,
  maskPhone,
  maskNumeric,
  validateCep,
  validatePhone,
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

const DeliveryForm = () => {
  const dispatch = useAppDispatch()
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<DeliveryData>()

  const onSubmit = (data: DeliveryData) => {
    dispatch(setDeliveryData(data))
    dispatch(setStep('payment'))
  }

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)} data-testid="delivery-form">
      <Title>Entrega</Title>

      <FieldGroup>
        <label htmlFor="receiver">Quem irá receber</label>
        <input
          id="receiver"
          data-testid="input-receiver"
          placeholder="Nome completo"
          {...register('receiver', {
            required: 'Nome do destinatário é obrigatório',
            minLength: { value: 3, message: 'Mínimo de 3 caracteres' },
          })}
        />
        {errors.receiver && (
          <ErrorMessage role="alert">{errors.receiver.message}</ErrorMessage>
        )}
      </FieldGroup>

      <FieldGroup>
        <label htmlFor="address">Endereço</label>
        <input
          id="address"
          data-testid="input-address"
          placeholder="Rua, Avenida..."
          {...register('address', {
            required: 'Endereço é obrigatório',
            minLength: { value: 5, message: 'Endereço muito curto' },
          })}
        />
        {errors.address && (
          <ErrorMessage role="alert">{errors.address.message}</ErrorMessage>
        )}
      </FieldGroup>

      <FieldGroup>
        <label htmlFor="city">Cidade</label>
        <input
          id="city"
          data-testid="input-city"
          placeholder="Sua cidade"
          {...register('city', { required: 'Cidade é obrigatória' })}
        />
        {errors.city && (
          <ErrorMessage role="alert">{errors.city.message}</ErrorMessage>
        )}
      </FieldGroup>

      <Row>
        <FieldGroup>
          <label htmlFor="zipCode">CEP</label>
          <input
            id="zipCode"
            data-testid="input-zipCode"
            placeholder="00000-000"
            maxLength={9}
            {...register('zipCode', {
              required: 'CEP é obrigatório',
              validate: validateCep,
              onChange: (e) => {
                e.target.value = maskCep(e.target.value)
                setValue('zipCode', e.target.value)
              },
            })}
          />
          {errors.zipCode && (
            <ErrorMessage role="alert">{errors.zipCode.message}</ErrorMessage>
          )}
        </FieldGroup>

        <FieldGroup>
          <label htmlFor="number">Número</label>
          <input
            id="number"
            data-testid="input-number"
            placeholder="000"
            inputMode="numeric"
            maxLength={6}
            {...register('number', {
              required: 'Número é obrigatório',
              onChange: (e) => {
                e.target.value = maskNumeric(e.target.value)
                setValue('number', e.target.value)
              },
            })}
          />
          {errors.number && (
            <ErrorMessage role="alert">{errors.number.message}</ErrorMessage>
          )}
        </FieldGroup>
      </Row>

      <FieldGroup>
        <label htmlFor="complement">Complemento (opcional)</label>
        <input
          id="complement"
          data-testid="input-complement"
          placeholder="Apto, Bloco, Casa..."
          {...register('complement')}
        />
      </FieldGroup>

      <FieldGroup>
        <label htmlFor="phone">Telefone para contato</label>
        <input
          id="phone"
          data-testid="input-phone"
          placeholder="(00) 00000-0000"
          maxLength={16}
          inputMode="numeric"
          {...register('phone', {
            required: 'Telefone é obrigatório',
            validate: validatePhone,
            onChange: (e) => {
              e.target.value = maskPhone(e.target.value)
              setValue('phone', e.target.value)
            },
          })}
        />
        {errors.phone && (
          <ErrorMessage role="alert">{errors.phone.message}</ErrorMessage>
        )}
      </FieldGroup>

      <SubmitButton type="submit" data-testid="continue-to-payment-btn">
        Continuar com o pagamento
      </SubmitButton>
      <SecondaryButton
        type="button"
        onClick={() => dispatch(setStep('cart'))}
        data-testid="back-to-cart-btn"
      >
        Voltar para o carrinho
      </SecondaryButton>
    </FormContainer>
  )
}

export default DeliveryForm
