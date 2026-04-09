import styled from 'styled-components'

export const HeroContainer = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 32px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  position: relative;
  z-index: 1;
  background-color: transparent;
`

export const Banner = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  color: ${(props) => props.theme.colors.white};

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    content: '';
  }
`

export const Category = styled.span`
  font-weight: 100;
  font-size: 32px;
  line-height: 37px;
  text-transform: capitalize;
`

export const Name = styled.h2`
  font-weight: 900;
  font-size: 32px;
  line-height: 37px;
`
