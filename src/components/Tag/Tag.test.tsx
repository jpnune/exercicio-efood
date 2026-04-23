import { render, screen } from '@testing-library/react'
import Tag from './Tag'

describe('Tag', () => {
  it('deve renderizar o texto passado via children', () => {
    render(<Tag>Italiana</Tag>)
    expect(screen.getByText('Italiana')).toBeInTheDocument()
  })

  it('deve renderizar com variant featured sem erro', () => {
    render(<Tag variant="featured">Destaque da semana</Tag>)
    expect(screen.getByText('Destaque da semana')).toBeInTheDocument()
  })

  it('deve renderizar com variant default por padrão', () => {
    render(<Tag>Japonesa</Tag>)
    const tag = screen.getByText('Japonesa')
    expect(tag).toBeInTheDocument()
  })
})
