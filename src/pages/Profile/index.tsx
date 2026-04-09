import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Footer from '../../components/Footer'
import ProductList from '../../components/ProductList'
import { mockRestaurants } from '../../data/restaurants'
import { categoryProductsMap } from '../../data/categoryProducts'

import { Container } from '../../styles/Container'

const Profile = () => {
  const { id } = useParams()
  const restaurantId = Number(id)

  const restaurant = mockRestaurants.find((r) => r.id === restaurantId)

  if (!restaurant) {
    return <h3>Restaurante não encontrado</h3>
  }

  const products = categoryProductsMap[restaurantId] || []

  return (
    <>
      <Header variant="profile" />
      <Hero
        category={restaurant.tipo}
        name={restaurant.titulo}
        image={restaurant.capa}
      />
      <Container>
        <ProductList products={products} />
      </Container>
      <Footer />
    </>
  )
}

export default Profile
