import styled from 'styled-components'

export const Card = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.primary};
  position: relative;
  margin-bottom: 48px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 217px;
  object-fit: cover;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
`

export const Tag = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  font-size: 12px;
  font-weight: bold;
  padding: 6px 10px;
  margin-left: 8px;
  display: inline-block;
  border-radius: 4px;
`

export const Content = styled.div`
  padding: 8px;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  color: ${(props) => props.theme.colors.text}; // Garantindo hierarquia de cor

  h3 {
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: bold;

    img {
      margin-left: 8px;
    }
  }
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
  color: ${(props) => props.theme.colors.text};
`

export const Button = styled.a`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  font-size: 14px;
  font-weight: bold;
  padding: 6px 12px;
  display: inline-block;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-radius: 4px;

  &:hover {
    background-color: ${(props) => props.theme.colors.text};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`
