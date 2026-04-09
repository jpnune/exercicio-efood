import styled from 'styled-components'

export const List = styled.div`
  padding: 40px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 32px;

  @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 5;

  &.is-visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  max-width: 1024px;
  position: relative;
  z-index: 1;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 32px;
  color: ${(props) => props.theme.colors.white};
  border-radius: 4px;

  header {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 8px;

    button {
      background: none;
      border: none;
      color: ${(props) => props.theme.colors.white};
      cursor: pointer;
      font-weight: bold;
    }
  }

  main {
    display: flex;
    gap: 32px;

    img {
      width: 280px;
      height: 280px;
      object-fit: cover;
      border-radius: 4px;
    }

    div {
      h4 {
        font-size: 18px;
        font-weight: 900;
        margin-bottom: 16px;
      }

      p {
        font-size: 14px;
        line-height: 22px;
        margin-bottom: 16px;
      }

      button {
        background-color: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors.primary};
        border: none;
        padding: 4px 12px;
        font-weight: bold;
        cursor: pointer;
        border-radius: 4px;
      }
    }

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
      flex-direction: column;
      img {
        width: 100%;
        height: 200px;
      }
    }
  }
`
