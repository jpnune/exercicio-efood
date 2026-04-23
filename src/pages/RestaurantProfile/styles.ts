import styled from 'styled-components'
import { colors } from '../../styles'

export const Page = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const Banner = styled.section`
  height: 280px;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`

export const BannerInner = styled.div`
  position: relative;
  z-index: 1;
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 32px 0;
`

export const RestaurantType = styled.span`
  font-size: 32px;
  font-weight: 100;
  text-transform: capitalize;
`

export const RestaurantName = styled.h1`
  font-size: 32px;
  font-weight: 900;
`

export const MenuSection = styled.section`
  padding: 56px 0;
  flex-grow: 1;
`

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  list-style: none;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const Loading = styled.p`
  text-align: center;
  padding: 80px 0;
  color: ${colors.primary};
  font-weight: bold;
`

export const ErrorMsg = styled.p`
  text-align: center;
  padding: 80px 0;
  color: red;
  font-weight: bold;
`

export const CartOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 2000;
`

export const CartBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.overlay};
`
