import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.article`
  background-color: ${colors.primary};
  padding: 8px;
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const Image = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
  margin-bottom: 8px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

export const Name = styled.h3`
  font-size: 16px;
  font-weight: 900;
  color: ${colors.beige};
  margin-bottom: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${colors.beige};
  margin-bottom: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const Button = styled.button`
  background-color: ${colors.beige};
  color: ${colors.primary};
  font-size: 14px;
  font-weight: bold;
  padding: 4px;
  width: 100%;
  margin-top: auto;
  cursor: pointer;
  border: none;
`
