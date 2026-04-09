import { render, screen } from '../../../utils/test-utils'
import Home from '../index'

// Como a Home usa os dados reais de src/data/restaurants.ts, 
// podemos testar a integração real.

describe('Teste de Integração da página Home', () => {
  test('Deve renderizar o Header e a lista de restaurantes corretamente', () => {
    render(<Home />)
    
    // Verifica Header
    expect(screen.getByText(/viva experiências gastronômicas com o sabor do mar/i)).toBeInTheDocument()
    
    // Verifica se os restaurantes principais estão na tela
    // Cada card é um link
    const restaurantLinks = screen.getAllByRole('link')
    expect(restaurantLinks.length).toBeGreaterThan(0)
  })

  test('Deve manter a integridade estrutural da página (Snapshot)', () => {
    const { asFragment } = render(<Home />)
    expect(asFragment()).toMatchSnapshot()
  })
})
