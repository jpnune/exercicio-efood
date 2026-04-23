import { useAppDispatch, useAppSelector } from '../../store/hooks'
import {
  selectCartItems,
  selectCartTotal,
  removeItem,
} from '../../store/slices/cartSlice'
import { setStep, selectCheckoutStep } from '../../store/slices/checkoutSlice'
import DeliveryForm from '../Checkout/DeliveryForm'
import PaymentForm from '../Checkout/PaymentForm'
import OrderConfirmation from '../Checkout/OrderConfirmation'
import {
  Sidebar,
  List,
  Item,
  ItemImage,
  ItemInfo,
  ItemName,
  ItemPrice,
  RemoveBtn,
  Empty,
  CartFooter,
  Total,
  Button
} from './styles'

const Cart = () => {
  const dispatch = useAppDispatch()
  const items = useAppSelector(selectCartItems)
  const total = useAppSelector(selectCartTotal)
  const step = useAppSelector(selectCheckoutStep)

  const formatPrice = (price: number) =>
    price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

  const handleContinue = () => {
    dispatch(setStep('delivery'))
  }

  return (
    <Sidebar data-testid="cart-sidebar">
      {step === 'cart' && (
        <>
          <List>
            {items.map((item) => (
              <Item key={item.dish.id} data-testid="cart-item">
                <ItemImage src={item.dish.foto} alt={item.dish.nome} />
                <ItemInfo>
                  <ItemName>{item.dish.nome}</ItemName>
                  <ItemPrice>{formatPrice(item.dish.preco)}</ItemPrice>
                </ItemInfo>
                <RemoveBtn
                  onClick={() => dispatch(removeItem(item.dish.id))}
                  aria-label={`Remover ${item.dish.nome}`}
                  data-testid="remove-item-btn"
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                  </svg>
                </RemoveBtn>
              </Item>
            ))}
          </List>

          {items.length === 0 && (
            <Empty>Seu carrinho está vazio.</Empty>
          )}

          <CartFooter>
            <Total>
              <span>Valor total</span>
              <span data-testid="cart-total">{formatPrice(total)}</span>
            </Total>
            <Button
              onClick={handleContinue}
              disabled={items.length === 0}
              data-testid="continue-to-delivery-btn"
            >
              Continuar com a entrega
            </Button>
          </CartFooter>
        </>
      )}

      {step === 'delivery' && <DeliveryForm />}
      {step === 'payment' && <PaymentForm />}
      {step === 'confirm' && <OrderConfirmation />}
    </Sidebar>
  )
}

export default Cart
