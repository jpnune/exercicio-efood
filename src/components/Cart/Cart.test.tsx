import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import Cart from './Cart'
import cartReducer from '../../store/slices/cartSlice'
import checkoutReducer from '../../store/slices/checkoutSlice'
import { Dish } from '../../types'

const mockDish: Dish = {
  id: 1,
  nome: 'Pizza Margherita',
  descricao: 'Clássica pizza italiana.',
  foto: 'pizza.jpg',
  preco: 49.9,
  porcao: '1 a 2 pessoas',
}

const createTestStore = (items = [{ dish: mockDish, quantity: 1 }]) =>
  configureStore({
    reducer: { cart: cartReducer, checkout: checkoutReducer },
    preloadedState: {
      cart: { isOpen: true, items },
      checkout: { step: 'cart' as const, deliveryData: null, paymentData: null, orderId: null },
    },
  })

describe('Cart', () => {
  it('deve renderizar os itens do carrinho', () => {
    const store = createTestStore()
    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    )
    expect(screen.getByText('Pizza Margherita')).toBeInTheDocument()
  })

  it('deve exibir o total correto', () => {
    const store = createTestStore()
    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    )
    expect(screen.getByTestId('cart-total')).toHaveTextContent('49')
  })

  it('deve remover item ao clicar no botão de remover', () => {
    const store = createTestStore()
    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    )
    fireEvent.click(screen.getByTestId('remove-item-btn'))
    expect(screen.queryByText('Pizza Margherita')).not.toBeInTheDocument()
  })

  it('deve exibir mensagem de carrinho vazio quando não há itens', () => {
    const store = createTestStore([])
    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    )
    expect(screen.getByText(/Seu carrinho está vazio/)).toBeInTheDocument()
  })

  it('botão "Continuar com a entrega" deve estar desabilitado com carrinho vazio', () => {
    const store = createTestStore([])
    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    )
    expect(screen.getByTestId('continue-to-delivery-btn')).toBeDisabled()
  })
})
