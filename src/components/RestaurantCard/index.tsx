import * as S from './styles'
import { Link } from 'react-router-dom'

type Props = {
  id: number
  title: string
  category: string
  description: string
  image: string
  rating: number
  isFeatured?: boolean
}

const RestaurantCard = ({
  id,
  title,
  category,
  description,
  image,
  rating,
  isFeatured
}: Props) => (
  <Link to={`/perfil/${id}`} style={{ textDecoration: 'none' }}>
    <S.Card>
      <S.Image src={image} alt={title} />
      <S.Infos>
        {isFeatured && <S.Tag>Destaque da semana</S.Tag>}
        <S.Tag>{category}</S.Tag>
      </S.Infos>
      <S.Content>
        <S.Header>
          <h3>{title}</h3>
          <div>
            <span>{rating}</span>
            <span style={{ marginLeft: '8px', color: '#FFB84D' }}>★</span>
          </div>
        </S.Header>
        <S.Description>{description}</S.Description>
        <S.Button as="span">Saiba mais</S.Button>
      </S.Content>
    </S.Card>
  </Link>
)

export default RestaurantCard
