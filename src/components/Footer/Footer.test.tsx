import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Footer from './Footer'

describe('Footer', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    )
  })

  it('deve renderizar o logo efood', () => {
    expect(screen.getByTestId('footer-logo')).toBeInTheDocument()
  })

  it('deve renderizar o link do Instagram', () => {
    expect(screen.getByTestId('social-instagram')).toBeInTheDocument()
  })

  it('deve renderizar o link do Facebook', () => {
    expect(screen.getByTestId('social-facebook')).toBeInTheDocument()
  })

  it('deve renderizar o link do Twitter', () => {
    expect(screen.getByTestId('social-twitter')).toBeInTheDocument()
  })

  it('deve renderizar o texto institucional', () => {
    expect(screen.getByText(/A efood é uma plataforma/i)).toBeInTheDocument()
  })
})
