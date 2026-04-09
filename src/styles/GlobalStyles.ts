import { createGlobalStyle } from 'styled-components'
import backgroundBody from '../assets/brainstorm/e8490c8091b33b08a55e6b0bdb9a9a0a.jpg'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
    text-decoration: none;
  }

  body {
    background-color: ${(props) => props.theme.colors.background};
    background-image: url(${backgroundBody});
    background-attachment: fixed;
    background-size: cover;
    color: ${(props) => props.theme.colors.text};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

`

export default GlobalStyles
