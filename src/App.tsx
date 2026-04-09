import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { store } from './store'
import { theme } from './styles/theme'
import GlobalStyles from './styles/GlobalStyles'
import Rotas from './routes'
import CartSidebar from './components/CartSidebar'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Rotas />
          <CartSidebar />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  )
}

export default App
