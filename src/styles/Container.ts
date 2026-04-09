import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 40px;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.background};

  @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
    max-width: 80%;
  }
`
