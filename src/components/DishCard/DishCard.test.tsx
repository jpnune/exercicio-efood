import { render, screen, fireEvent } from '@testing-library/react'
import DishCard from './DishCard'
import { Dish } from '../../types'

const mockDish: Dish = {
  id: 1,
  nome: 'Pizza Margherita',
  descricao: 'Clássica pizza italiana com molho de tomate e muçarela.',
  foto: 'pizza.jpg',
  preco: 49.9,
  porcao: '1 a 2 pessoas',
}

describe('DishCard', () => {
  it('deve renderizar o nome do prato', () => {
    const onAddToCart = jest.fn()
    render(<DishCard dish={mockDish} onAddToCart={onAddToCart} />)
    expect(screen.getByText('Pizza Margherita')).toBeInTheDocument()
  })

  it('deve renderizar a descrição do prato', () => {
    const onAddToCart = jest.fn()
    render(<DishCard dish={mockDish} onAddToCart={onAddToCart} />)
    expect(screen.getByText(/Clássica pizza italiana/)).toBeInTheDocument()
  })

  it('deve renderizar o botão "Adicionar ao carrinho"', () => {
    const onAddToCart = jest.fn()
    render(<DishCard dish={mockDish} onAddToCart={onAddToCart} />)
    expect(screen.getByTestId('add-to-cart-btn')).toBeInTheDocument()
  })

  it('deve chamar onAddToCart com o prato correto ao clicar no botão', () => {
    const onAddToCart = jest.fn()
    render(<DishCard dish={mockDish} onAddToCart={onAddToCart} />)
    fireEvent.click(screen.getByTestId('add-to-cart-btn'))
    expect(onAddToCart).toHaveBeenCalledTimes(1)
    expect(onAddToCart).toHaveBeenCalledWith(mockDish)
  })
})
