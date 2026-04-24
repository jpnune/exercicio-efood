import styled from 'styled-components'
import { colors } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.overlay};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

export const Modal = styled.div`
  background-color: ${colors.primary};
  padding: 32px;
  max-width: 1024px;
  width: 90%;
  display: flex;
  position: relative;
  gap: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 16px;
    gap: 16px;
    max-height: 90vh;
    overflow-y: auto;
  }
`

export const CloseBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  color: ${colors.white};
  font-size: 24px;
  cursor: pointer;
`

export const Image = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`

export const Content = styled.div`
  color: ${colors.white};
  display: flex;
  flex-direction: column;
`

export const Name = styled.h2`
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 16px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 24px;
`

export const Portion = styled.p`
  font-size: 14px;
  margin-bottom: 16px;
`

export const AddBtn = styled.button`
  background-color: ${colors.beige};
  color: ${colors.primary};
  font-weight: bold;
  padding: 4px 8px;
  align-self: flex-start;
  cursor: pointer;
  border: none;
`
