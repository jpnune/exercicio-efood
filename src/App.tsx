import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import GlobalStyles from './styles/GlobalStyles'
import Rotas from './routes'
import { CartProvider } from './contexts/CartContext'
import CartSidebar from './components/CartSidebar'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CartProvider>
          <GlobalStyles />
          <Rotas />
          <CartSidebar />
        </CartProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
