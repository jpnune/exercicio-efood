import styled from 'styled-components'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
  padding: 80px 0;

  @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    column-gap: 0;
  }
`
