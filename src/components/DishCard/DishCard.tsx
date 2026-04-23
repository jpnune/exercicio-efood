import { Dish } from '../../types'
import { Card, Image, Content, Name, Description, Button } from './styles'

interface DishCardProps {
  dish: Dish
  onAddToCart: (dish: Dish) => void
}

const DishCard = ({ dish, onAddToCart }: DishCardProps) => {
  return (
    <Card data-testid="dish-card">
      <Image src={dish.foto} alt={dish.nome} />
      <Content>
        <Name>{dish.nome}</Name>
        <Description title={dish.descricao}>{dish.descricao}</Description>
        <Button
          onClick={() => onAddToCart(dish)}
          data-testid="add-to-cart-btn"
        >
          Adicionar ao carrinho
        </Button>
      </Content>
    </Card>
  )
}

export default DishCard
