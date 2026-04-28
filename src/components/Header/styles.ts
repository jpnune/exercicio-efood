import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles'
import fundo from '../../assets/images/fundo.png'

export const HeaderBar = styled.header<{ $variant: 'home' | 'profile' }>`
  background-image: url(${fundo});
  padding: 40px 0;
  display: block;
`

export const HeaderContainer = styled.div<{ $variant: 'home' | 'profile' }>`
  display: flex;
  align-items: center;
  justify-content: ${props => props.$variant === 'home' ? 'center' : 'space-between'};
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`

export const Logo = styled(Link)`
  text-decoration: none;
`

export const BackLink = styled(Link)`
  color: ${colors.primary};
  font-weight: 900;
  font-size: 18px;
`

export const CartButton = styled.button`
  color: ${colors.primary};
  font-weight: 900;
  font-size: 18px;
  cursor: pointer;
  background: transparent;
  border: none;
`
