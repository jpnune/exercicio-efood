import styled from 'styled-components'
import background from '../../assets/brainstorm/e5ea281306f4a1803ec9e52ff1899e87.jpg'

export const HeaderContainer = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  background-color: transparent;
`

export const HeaderBar = styled.header<{ $variant?: 'home' | 'profile' }>`
  padding: ${(props) => (props.$variant === 'profile' ? '40px 0' : '40px 0 160px 0')};
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  position: relative;
  background-color: transparent;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 248, 217, 0.4);
    z-index: 0;
  }
`

export const HeaderLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-weight: 900;
  font-size: 18px;

  a {
    color: ${(props) => props.theme.colors.text};
    text-shadow: 0 1px 3px rgba(255, 255, 255, 0.6);
  }

  span {
    color: ${(props) => props.theme.colors.text};
    text-shadow: 0 1px 3px rgba(255, 255, 255, 0.6);
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 16px;
  }
`

export const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 32px;
  line-height: 42px;
  text-align: center;
  margin-top: 138px;
  max-width: 540px;
  color: ${(props) => props.theme.colors.text};
  text-shadow: 0 2px 6px rgba(255, 255, 255, 0.7);
  z-index: 1;
`

export const Logo = styled.img`
  width: 125px;
  height: auto;
  z-index: 1;
`

export const CartLink = styled.span`
  color: ${(props) => props.theme.colors.text};
  text-shadow: 0 1px 3px rgba(255, 255, 255, 0.6);
  cursor: pointer;
  font-weight: 900;
  font-size: 18px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
`
