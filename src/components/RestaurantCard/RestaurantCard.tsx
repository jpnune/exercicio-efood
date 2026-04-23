import { useNavigate } from 'react-router-dom'
import { Restaurant } from '../../types'
import Tag from '../Tag/Tag'
import {
  Card,
  ImageWrapper,
  Tags,
  Content,
  TitleRow,
  Title,
  Rating,
  Description,
  Button
} from './styles'

interface RestaurantCardProps {
  restaurant: Restaurant
}

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  const navigate = useNavigate()

  return (
    <Card data-testid="restaurant-card">
      <ImageWrapper>
        <img src={restaurant.capa} alt={restaurant.titulo} />
        <Tags>
          {restaurant.destacado && (
            <Tag variant="featured">Destaque da semana</Tag>
          )}
          <Tag>{restaurant.tipo}</Tag>
        </Tags>
      </ImageWrapper>

      <Content>
        <TitleRow>
          <Title>{restaurant.titulo}</Title>
          <Rating aria-label={`Avaliação: ${restaurant.avaliacao}`}>
            {restaurant.avaliacao}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="#E66767" aria-hidden="true">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
          </Rating>
        </TitleRow>

        <Description>{restaurant.descricao}</Description>

        <Button
          onClick={() => navigate(`/restaurante/${restaurant.id}`)}
          data-testid="saiba-mais-btn"
        >
          Saiba mais
        </Button>
      </Content>
    </Card>
  )
}

export default RestaurantCard
