import { render, screen } from '../../../utils/test-utils'
import Header from '../index'

describe('Teste para o componente Header', () => {
  test('Deve renderizar corretamente na versão Home', () => {
    const { asFragment } = render(<Header variant="home" />)
    
    // Verifica se o logo está presente
    expect(screen.getByAltText('efood')).toBeInTheDocument()
    
    // Verifica se o título da Home está presente
    expect(screen.getByText(/viva experiências gastronômicas com o sabor do mar/i)).toBeInTheDocument()
    
    // Snapshot para garantir que o layout (centralização) não mude
    expect(asFragment()).toMatchSnapshot()
  })

  test('Deve renderizar corretamente na versão Profile', () => {
    const { asFragment } = render(<Header variant="profile" />)
    
    // Verifica se o link "Restaurantes" está presente
    expect(screen.getByText(/Home/i)).toBeInTheDocument()
    
    // Verifica se o contador de produtos está presente
    expect(screen.getByText(/0 produto\(s\) no carrinho/i)).toBeInTheDocument()
    
    // Snapshot para a versão de perfil
    expect(asFragment()).toMatchSnapshot()
  })
})
