import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { clearCart, closeCart } from '../../store/slices/cartSlice'
import { resetCheckout, selectOrderId } from '../../store/slices/checkoutSlice'
import {
  ConfirmationContainer,
  Title,
  ConfirmText,
  SubmitButton
} from './styles'

const OrderConfirmation = () => {
  const dispatch = useAppDispatch()
  const orderId = useAppSelector(selectOrderId)

  const handleFinish = () => {
    dispatch(clearCart())
    dispatch(resetCheckout())
    dispatch(closeCart())
  }

  return (
    <ConfirmationContainer data-testid="order-confirmation">
      <Title>
        Pedido realizado — {orderId}
      </Title>
      <ConfirmText>
        Estamos felizes em informar que seu pedido já está em processo de preparação
        e, em breve, será entregue no endereço fornecido.
      </ConfirmText>
      <ConfirmText>
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar
        cobranças extras. Lembre-se da importância de higienizar as mãos após o recebimento
        do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
      </ConfirmText>
      <ConfirmText>
        Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica.
        Bom apetite!
      </ConfirmText>
      <SubmitButton
        onClick={handleFinish}
        data-testid="finish-order-btn"
      >
        Concluir
      </SubmitButton>
    </ConfirmationContainer>
  )
}

export default OrderConfirmation
