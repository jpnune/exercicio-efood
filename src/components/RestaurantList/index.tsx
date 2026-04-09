import RestaurantCard from '../RestaurantCard'
import * as S from './styles'
import type { Restaurant } from '../../models/Restaurant'

type Props = {
  restaurants: Restaurant[]
}

import { Container } from '../../styles/Container'

const RestaurantList = ({ restaurants }: Props) => (
  <Container>
    <S.List>
      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          id={restaurant.id}
          title={restaurant.titulo}
          category={restaurant.tipo}
          description={restaurant.descricao}
          image={restaurant.capa}
          rating={restaurant.avaliacao}
          isFeatured={restaurant.destacado}
        />
      ))}
    </S.List>
  </Container>
)

export default RestaurantList
