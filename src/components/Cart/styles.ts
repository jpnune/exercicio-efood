import styled from 'styled-components'
import { colors } from '../../styles'

export const Sidebar = styled.aside`
  background-color: ${colors.primary};
  z-index: 1001;
  padding: 32px 8px;
  max-width: 360px;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    max-width: 300px;
  }
`

export const List = styled.ul`
  list-style: none;
  flex-grow: 1;
  overflow-y: auto;
  margin-bottom: 32px;
`

export const Item = styled.li`
  background-color: ${colors.cardDish};
  padding: 8px;
  display: flex;
  position: relative;
  margin-bottom: 16px;
`

export const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 8px;
`

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.primary};
`

export const ItemName = styled.span`
  font-weight: 900;
  font-size: 18px;
  margin-bottom: 16px;
`

export const ItemPrice = styled.span`
  font-size: 14px;
`

export const RemoveBtn = styled.button`
  position: absolute;
  bottom: 8px;
  right: 8px;
  color: ${colors.primary};
  cursor: pointer;
`

export const Empty = styled.p`
  color: ${colors.white};
  text-align: center;
  margin-top: 32px;
`

export const CartFooter = styled.div`
  color: ${colors.white};
`

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 16px;
`

export const Button = styled.button`
  background-color: ${colors.cardDish};
  color: ${colors.primary};
  font-weight: bold;
  font-size: 14px;
  width: 100%;
  padding: 4px;
  cursor: pointer;
  border: none;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
