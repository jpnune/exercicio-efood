import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import RestaurantProfile from './pages/RestaurantProfile/RestaurantProfile'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurante/:id" element={<RestaurantProfile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
