import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getRestaurantById } from '../../services/api'
import { Restaurant, Dish } from '../../types'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { selectIsCartOpen, closeCart } from '../../store/slices/cartSlice'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import DishCard from '../../components/DishCard/DishCard'
import DishModal from '../../components/DishModal/DishModal'
import Cart from '../../components/Cart/Cart'
import {
  Page,
  Banner,
  BannerInner,
  RestaurantType,
  RestaurantName,
  MenuSection,
  Grid,
  Loading,
  ErrorMsg,
  CartOverlay,
  CartBackdrop
} from './styles'

const RestaurantProfile = () => {
  const { id } = useParams<{ id: string }>()
  const dispatch = useAppDispatch()
  const isCartOpen = useAppSelector(selectIsCartOpen)

  const [restaurant, setRestaurant] = useState<Restaurant | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null)

  useEffect(() => {
    if (id) {
      getRestaurantById(Number(id))
        .then(setRestaurant)
        .catch(() => setError('Erro ao carregar restaurante.'))
        .finally(() => setLoading(false))
    }
  }, [id])

  if (loading) {
    return (
      <Page>
        <Header variant="profile" />
        <Loading data-testid="loading">Carregando...</Loading>
        <Footer />
      </Page>
    )
  }

  if (error || !restaurant) {
    return (
      <Page>
        <Header variant="profile" />
        <ErrorMsg role="alert" data-testid="error-message">
          {error ?? 'Restaurante não encontrado.'}
        </ErrorMsg>
        <Footer />
      </Page>
    )
  }

  return (
    <Page>
      <Header variant="profile" />

      <main>
        <Banner
          style={{ backgroundImage: `url(${restaurant.capa})` }}
          data-testid="restaurant-hero"
        >
          <BannerInner className="container">
            <RestaurantType>{restaurant.tipo}</RestaurantType>
            <RestaurantName>{restaurant.titulo}</RestaurantName>
          </BannerInner>
        </Banner>

        <MenuSection>
          <div className="container">
            <Grid data-testid="dish-list">
              {restaurant.cardapio.map((dish) => (
                <li key={dish.id}>
                  <DishCard
                    dish={dish}
                    onAddToCart={(d) => setSelectedDish(d)}
                  />
                </li>
              ))}
            </Grid>
          </div>
        </MenuSection>
      </main>

      <Footer />

      {selectedDish && (
        <DishModal
          dish={selectedDish}
          onClose={() => setSelectedDish(null)}
        />
      )}

      {isCartOpen && (
        <CartOverlay>
          <CartBackdrop
            onClick={() => dispatch(closeCart())}
            data-testid="cart-backdrop"
          />
          <Cart />
        </CartOverlay>
      )}
    </Page>
  )
}

export default RestaurantProfile
