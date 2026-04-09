import styled from 'styled-components'

export const Card = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 8px;
  color: ${(props) => props.theme.colors.white};
  position: relative;
  border-radius: 8px;

  img {
    width: 100%;
    height: 167px;
    object-fit: cover;
    display: block;
    margin-bottom: 8px;
    border-radius: 8px;
  }

  h3 {
    font-size: 16px;
    font-weight: 900;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 8px;
  }

  button {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.primary};
    border: none;
    padding: 4px 0;
    width: 100%;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    border-radius: 8px;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${(props) => props.theme.colors.white};
    }
  }
`
