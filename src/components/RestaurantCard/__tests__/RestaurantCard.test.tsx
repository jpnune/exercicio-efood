import userEvent from '@testing-library/user-event'
import { render, screen } from '../../../utils/test-utils'
import RestaurantCard from '../index'

const mockRestaurant = {
  id: 1,
  title: 'La Dolce Vita',
  isFeatured: true,
  category: 'Italiana',
  rating: 4.8,
  description: 'O melhor da culinária italiana no centro da cidade.',
  image: 'italiana.png'
}

describe('Teste para o componente RestaurantCard', () => {
  test('Deve renderizar as informações do restaurante corretamente', () => {
    render(
      <RestaurantCard
        id={mockRestaurant.id}
        title={mockRestaurant.title}
        isFeatured={mockRestaurant.isFeatured}
        category={mockRestaurant.category}
        rating={mockRestaurant.rating}
        description={mockRestaurant.description}
        image={mockRestaurant.image}
      />
    )

    expect(screen.getByText('La Dolce Vita')).toBeInTheDocument()
    expect(screen.getByText('4.8')).toBeInTheDocument()
    expect(screen.getByText(/O melhor da culinária italiana/)).toBeInTheDocument()
    expect(screen.getByText('Italiana')).toBeInTheDocument()
    expect(screen.getByText('Destaque da semana')).toBeInTheDocument()
  })

  test('Deve navegar para a página de perfil ao clicar no card', async () => {
    const user = userEvent.setup()
    render(
      <RestaurantCard
        id={mockRestaurant.id}
        title={mockRestaurant.title}
        isFeatured={mockRestaurant.isFeatured}
        category={mockRestaurant.category}
        rating={mockRestaurant.rating}
        description={mockRestaurant.description}
        image={mockRestaurant.image}
      />
    )

    const cardLink = screen.getByRole('link')
    await user.click(cardLink)

    // O LocationDisplay dentro do AllTheProviders deve mostrar a nova rota
    expect(screen.getByTestId('location-display')).toHaveTextContent('/perfil/1')
  })
})
