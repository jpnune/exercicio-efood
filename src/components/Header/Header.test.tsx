import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit'
import Header from './Header'
import cartReducer from '../../store/slices/cartSlice'
import checkoutReducer from '../../store/slices/checkoutSlice'

const createTestStore = (cartCount = 0) =>
  configureStore({
    reducer: { cart: cartReducer, checkout: checkoutReducer },
    preloadedState: {
      cart: {
        isOpen: false,
        items: Array(cartCount).fill({
          dish: { id: 1, nome: 'Test', descricao: '', foto: '', preco: 10, porcao: '1' },
          quantity: 1,
        }),
      },
    },
  })

const renderHeader = (variant: 'home' | 'profile' = 'home', cartCount = 0) => {
  const store = createTestStore(cartCount)
  return render(
    <Provider store={store}>
      <MemoryRouter>
        <Header variant={variant} />
      </MemoryRouter>
    </Provider>
  )
}

describe('Header', () => {
  it('deve renderizar o logo efood', () => {
    renderHeader()
    expect(screen.getByTestId('logo')).toBeInTheDocument()
  })

  it('variante home não deve exibir botão do carrinho', () => {
    renderHeader('home')
    expect(screen.queryByTestId('cart-button')).not.toBeInTheDocument()
  })

  it('variante profile deve exibir botão do carrinho', () => {
    renderHeader('profile')
    expect(screen.getByTestId('cart-button')).toBeInTheDocument()
  })

  it('variante profile deve exibir link Restaurantes', () => {
    renderHeader('profile')
    expect(screen.getByTestId('back-link')).toBeInTheDocument()
    expect(screen.getByText('Restaurantes')).toBeInTheDocument()
  })

  it('deve exibir a quantidade correta no carrinho', () => {
    renderHeader('profile', 3)
    expect(screen.getByTestId('cart-button')).toHaveTextContent('3')
  })
})
