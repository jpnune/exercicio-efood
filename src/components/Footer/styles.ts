import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${colors.beige};
  padding: 40px 0;
  text-align: center;
`

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SocialLinks = styled.nav`
  display: flex;
  gap: 8px;
  margin: 32px 0 80px;

  a {
    color: ${colors.white};
    background-color: ${colors.primary};
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
    }

    svg {
      width: 16px;
      height: 16px;
    }
  }
`

export const Logo = styled.a`
  font-size: 24px;
  font-weight: 900;
  color: ${colors.primary};
  text-decoration: none;
`

export const Copy = styled.p`
  font-size: 10px;
  max-width: 480px;
  margin: 0 auto;
  color: ${colors.primary};
`
