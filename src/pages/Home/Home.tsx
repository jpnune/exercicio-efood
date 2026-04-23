import { useEffect, useState } from 'react'
import { getRestaurants } from '../../services/api'
import { Restaurant } from '../../types'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard'
import { Page, Hero, HeroText, Section, Grid, Loading, ErrorMsg } from './styles'

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getRestaurants()
      .then(setRestaurants)
      .catch(() => setError('Erro ao carregar restaurantes. Tente novamente.'))
      .finally(() => setLoading(false))
  }, [])

  return (
    <Page>
      <Header variant="home" />

      <main>
        <Hero>
          <div className="container">
            <HeroText>
              Viva experiências gastronômicas<br />
              no conforto da sua casa
            </HeroText>
          </div>
        </Hero>

        <Section>
          <div className="container">
            {loading && (
              <Loading data-testid="loading">
                Carregando restaurantes...
              </Loading>
            )}

            {error && (
              <ErrorMsg role="alert" data-testid="error-message">
                {error}
              </ErrorMsg>
            )}

            {!loading && !error && (
              <Grid data-testid="restaurant-list">
                {restaurants.map((restaurant) => (
                  <li key={restaurant.id}>
                    <RestaurantCard restaurant={restaurant} />
                  </li>
                ))}
              </Grid>
            )}
          </div>
        </Section>
      </main>

      <Footer />
    </Page>
  )
}

export default Home
