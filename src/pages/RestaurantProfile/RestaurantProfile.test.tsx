/// <reference types="jest" />
import { render, screen, waitFor, act, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit'
import RestaurantProfile from './RestaurantProfile'
import cartReducer from '../../store/slices/cartSlice'
import checkoutReducer from '../../store/slices/checkoutSlice'
import { Restaurant } from '../../types'

const mockRestaurant: Restaurant = {
  id: 1,
  titulo: 'Bella Tavola Italiana',
  destacado: true,
  tipo: 'italiana',
  avaliacao: 4.7,
  descricao: 'Autêntica culinária italiana.',
  capa: 'capa.jpg',
  cardapio: [
    {
      id: 1,
      nome: 'Pizza Margherita',
      descricao: 'Pizza clássica',
      foto: 'pizza.jpg',
      porcao: '1 pessoa',
      preco: 45.9,
    },
  ],
}

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: '1' }),
}))

jest.mock('../../services/api', () => ({
  getRestaurantById: jest.fn(() => Promise.resolve(mockRestaurant)),
}))

const createTestStore = () =>
  configureStore({
    reducer: { cart: cartReducer, checkout: checkoutReducer },
  })

const renderProfile = async () => {
  const store = createTestStore()
  await act(async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <RestaurantProfile />
        </MemoryRouter>
      </Provider>
    )
  })
  return store
}

describe('RestaurantProfile Botões', () => {
  it('deve garantir que o link "Restaurantes" aponte para a home', async () => {
    await renderProfile()
    const backLink = screen.getByTestId('back-link')
    expect(backLink).toBeInTheDocument()
    expect(backLink.getAttribute('href')).toBe('/')
  })

  it('deve garantir que a logo aponte para a home', async () => {
    await renderProfile()
    const logoLink = screen.getByTestId('logo')
    expect(logoLink).toBeInTheDocument()
    expect(logoLink.getAttribute('href')).toBe('/')
  })

  it('deve abrir o carrinho ao clicar no botão do carrinho no Header', async () => {
    const store = await renderProfile()
    const cartBtn = screen.getByTestId('cart-button')
    
    expect(store.getState().cart.isOpen).toBe(false)
    fireEvent.click(cartBtn)
    expect(store.getState().cart.isOpen).toBe(true)
  })

  it('deve abrir o modal do prato ao clicar em "Adicionar ao carrinho" no card do prato', async () => {
    await renderProfile()
    
    await waitFor(() => {
      expect(screen.getByTestId('dish-card')).toBeInTheDocument()
    })
    
    const addToCartBtn = screen.getByTestId('add-to-cart-btn')
    fireEvent.click(addToCartBtn)
    
    expect(screen.getByTestId('dish-modal')).toBeInTheDocument()
  })

  it('deve adicionar o prato ao carrinho e abrir o carrinho ao confirmar no modal', async () => {
    const store = await renderProfile()
    
    await waitFor(() => {
      expect(screen.getByTestId('dish-card')).toBeInTheDocument()
    })
    
    // Abre o modal
    const addToCartBtn = screen.getByTestId('add-to-cart-btn')
    fireEvent.click(addToCartBtn)
    
    // Clica no botão de adicionar dentro do modal
    const modalAddBtn = screen.getByTestId('modal-add-to-cart-btn')
    fireEvent.click(modalAddBtn)
    
    // O item deve ser adicionado ao carrinho e o carrinho deve abrir
    expect(store.getState().cart.items).toHaveLength(1)
    expect(store.getState().cart.items[0].dish.nome).toBe('Pizza Margherita')
    expect(store.getState().cart.isOpen).toBe(true)
    
    // O modal deve ser fechado após a adição
    expect(screen.queryByTestId('dish-modal')).not.toBeInTheDocument()
  })
})
