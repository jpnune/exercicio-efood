import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import RestaurantCard from './RestaurantCard'
import { Restaurant } from '../../types'

const mockRestaurant: Restaurant = {
  id: 1,
  titulo: 'Bella Tavola Italiana',
  destacado: true,
  tipo: 'italiana',
  avaliacao: 4.7,
  descricao: 'Autêntica culinária italiana com massas artesanais.',
  capa: 'https://example.com/capa.jpg',
  cardapio: [],
}

const mockNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}))

describe('RestaurantCard', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <RestaurantCard restaurant={mockRestaurant} />
      </MemoryRouter>
    )
  })

  it('deve renderizar o nome do restaurante', () => {
    expect(screen.getByText('Bella Tavola Italiana')).toBeInTheDocument()
  })

  it('deve renderizar a avaliação', () => {
    expect(screen.getByText('4.7')).toBeInTheDocument()
  })

  it('deve renderizar a descrição', () => {
    expect(screen.getByText(/Autêntica culinária italiana/)).toBeInTheDocument()
  })

  it('deve renderizar a tag "Destaque da semana" quando destacado=true', () => {
    expect(screen.getByText('Destaque da semana')).toBeInTheDocument()
  })

  it('deve renderizar a tag com o tipo do restaurante', () => {
    expect(screen.getByText('italiana')).toBeInTheDocument()
  })

  it('deve renderizar o botão "Saiba mais"', () => {
    expect(screen.getByTestId('saiba-mais-btn')).toBeInTheDocument()
  })

  it('deve navegar para a página do restaurante ao clicar em "Saiba mais"', () => {
    fireEvent.click(screen.getByTestId('saiba-mais-btn'))
    expect(mockNavigate).toHaveBeenCalledWith('/restaurante/1')
  })
})
