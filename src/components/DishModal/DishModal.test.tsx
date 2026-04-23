import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import DishModal from './DishModal'
import cartReducer from '../../store/slices/cartSlice'
import checkoutReducer from '../../store/slices/checkoutSlice'
import { Dish } from '../../types'

const mockDish: Dish = {
  id: 1,
  nome: 'Pizza Margherita',
  descricao: 'Clássica pizza italiana com molho de tomate e muçarela.',
  foto: 'pizza.jpg',
  preco: 49.9,
  porcao: '1 a 2 pessoas',
}

const createTestStore = () =>
  configureStore({
    reducer: { cart: cartReducer, checkout: checkoutReducer },
  })

describe('DishModal', () => {
  it('não deve renderizar nada quando dish é null', () => {
    const store = createTestStore()
    const { container } = render(
      <Provider store={store}>
        <DishModal dish={null} onClose={jest.fn()} />
      </Provider>
    )
    expect(container).toBeEmptyDOMElement()
  })

  it('deve renderizar o nome do prato', () => {
    const store = createTestStore()
    render(
      <Provider store={store}>
        <DishModal dish={mockDish} onClose={jest.fn()} />
      </Provider>
    )
    expect(screen.getByText('Pizza Margherita')).toBeInTheDocument()
  })

  it('deve renderizar a descrição do prato', () => {
    const store = createTestStore()
    render(
      <Provider store={store}>
        <DishModal dish={mockDish} onClose={jest.fn()} />
      </Provider>
    )
    expect(screen.getByText(/Clássica pizza italiana/)).toBeInTheDocument()
  })

  it('deve chamar onClose ao clicar no botão X', () => {
    const store = createTestStore()
    const onClose = jest.fn()
    render(
      <Provider store={store}>
        <DishModal dish={mockDish} onClose={onClose} />
      </Provider>
    )
    fireEvent.click(screen.getByTestId('close-modal-btn'))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('deve exibir o preço formatado no botão de adicionar', () => {
    const store = createTestStore()
    render(
      <Provider store={store}>
        <DishModal dish={mockDish} onClose={jest.fn()} />
      </Provider>
    )
    expect(screen.getByTestId('modal-add-to-cart-btn')).toHaveTextContent('R$')
    expect(screen.getByTestId('modal-add-to-cart-btn')).toHaveTextContent('49')
  })
})
