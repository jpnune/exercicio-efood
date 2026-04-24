import { createGlobalStyle } from 'styled-components'

export const colors = {
  primary: '#E66767',
  background: '#FFF8F2',
  beige: '#FFEBD9',
  white: '#FFFFFF',
  textDark: '#1a1a1a',
  overlay: 'rgba(0, 0, 0, 0.8)',
}

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: ${colors.background};
    color: ${colors.textDark};
    line-height: 1.5;
  }

  img {
    max-width: 100%;
    display: block;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .container {
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 16px;
  }
`
