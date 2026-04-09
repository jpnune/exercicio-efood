import type { Product } from '../../models/Product'
import * as S from './styles'

type Props = {
  product: Product
}

const ProductCard = ({ product }: Props) => {
  return (
    <S.Card>
      <img src={product.foto} alt={product.nome} />
      <h3>{product.nome}</h3>
      <p>{product.descricao}</p>
      <button type="button">Adicionar ao carrinho</button>
    </S.Card>
  )
}

export default ProductCard
