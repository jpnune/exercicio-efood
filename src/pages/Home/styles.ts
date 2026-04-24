import styled from 'styled-components'
import { colors } from '../../styles'

export const Page = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const Hero = styled.section`
  background-color: ${colors.beige};
  padding: 40px 0 160px;
  text-align: center;
`

export const HeroText = styled.h1`
  font-size: 36px;
  font-weight: 900;
  line-height: 42px;
  color: ${colors.primary};
  max-width: 540px;
  margin: 0 auto;
`

export const Section = styled.section`
  padding: 80px 0;
  flex-grow: 1;
`

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
  list-style: none;

  @media (max-width: 1024px) {
    column-gap: 40px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const Loading = styled.p`
  text-align: center;
  color: ${colors.primary};
  font-weight: bold;
`

export const ErrorMsg = styled.p`
  text-align: center;
  color: red;
  font-weight: bold;
`
