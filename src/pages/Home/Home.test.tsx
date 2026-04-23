import { render, screen, waitFor, act } from '@testing-library/react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit'
import Home from './Home'
import cartReducer from '../../store/slices/cartSlice'
import checkoutReducer from '../../store/slices/checkoutSlice'
import { Restaurant } from '../../types'

const mockRestaurants: Restaurant[] = [
  {
    id: 1,
    titulo: 'Bella Tavola Italiana',
    destacado: true,
    tipo: 'italiana',
    avaliacao: 4.7,
    descricao: 'Autêntica culinária italiana.',
    capa: 'capa.jpg',
    cardapio: [],
  },
  {
    id: 2,
    titulo: 'Sakura Sushi House',
    destacado: false,
    tipo: 'japonesa',
    avaliacao: 4.9,
    descricao: 'Sushi autêntico.',
    capa: 'capa2.jpg',
    cardapio: [],
  },
]

jest.mock('../../services/api', () => ({
  getRestaurants: jest.fn(() => Promise.resolve(mockRestaurants)),
}))

const createTestStore = () =>
  configureStore({
    reducer: { cart: cartReducer, checkout: checkoutReducer },
  })

const renderHome = async () => {
  const store = createTestStore()
  await act(async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>
    )
  })
}

describe('Home', () => {
  it('deve renderizar o texto do hero banner', async () => {
    await renderHome()
    expect(screen.getByText(/Viva experiências gastronômicas/i)).toBeInTheDocument()
  })

  it('deve renderizar a lista de restaurantes após o fetch', async () => {
    await renderHome()
    await waitFor(() => {
      expect(screen.getByTestId('restaurant-list')).toBeInTheDocument()
    })
    expect(screen.getByText('Bella Tavola Italiana')).toBeInTheDocument()
    expect(screen.getByText('Sakura Sushi House')).toBeInTheDocument()
  })

  it('deve renderizar os dois cards de restaurantes', async () => {
    await renderHome()
    await waitFor(() => {
      const cards = screen.getAllByTestId('restaurant-card')
      expect(cards).toHaveLength(2)
    })
  })
})
