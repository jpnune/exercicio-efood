import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'
import Footer from '../../components/Footer'
import { mockRestaurants } from '../../data/restaurants'

const Home = () => (
  <>
    <Header />
    <RestaurantList restaurants={mockRestaurants} />
    <Footer />
  </>
)

export default Home
