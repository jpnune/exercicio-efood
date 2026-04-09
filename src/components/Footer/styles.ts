import styled from 'styled-components'

export const Container = styled.footer`
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Logo = styled.img`
  width: 125px;
  height: 57px;
  margin-bottom: 32px;
`

export const SocialLinks = styled.ul`
  display: flex;
  margin-bottom: 80px;

  li {
    margin: 0 8px;
  }
`

export const Copyright = styled.p`
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  max-width: 480px;
`
