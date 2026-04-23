import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.article`
  background-color: ${colors.white};
  border: 1px solid ${colors.primary};
  position: relative;
  display: flex;
  flex-direction: column;
`

export const ImageWrapper = styled.div`
  width: 100%;
  height: 217px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const Content = styled.div`
  padding: 8px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.primary};
`

export const Rating = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  font-weight: bold;
  color: ${colors.primary};
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
  color: ${colors.primary};
`

export const Button = styled.button`
  background-color: ${colors.primary};
  color: ${colors.white};
  border: none;
  padding: 4px 6px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  align-self: flex-start;
`
