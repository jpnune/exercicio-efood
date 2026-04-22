import { useAppDispatch } from '../../store/hooks'
import { addItem } from '../../store/cartSlice'
import type { Product } from '../../models/Product'
import * as S from './styles'

type Props = {
  product: Product
  onCardClick?: (product: Product) => void
}

const ProductCard = ({ product, onCardClick }: Props) => {
  const dispatch = useAppDispatch()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation()
    dispatch(addItem(product))
  }

  return (
    <S.Card onClick={() => onCardClick?.(product)}>
      <img src={product.foto} alt={product.nome} />
      <h3>{product.nome}</h3>
      <p>{product.descricao}</p>
      <button type="button" onClick={handleAddToCart}>
        Adicionar ao carrinho
      </button>
    </S.Card>
  )
}

export default ProductCard
