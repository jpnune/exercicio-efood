import { useState } from 'react'
import type { Product } from '../../models/Product'
import ProductCard from '../ProductCard'
import { useAppDispatch } from '../../store/hooks'
import { addItem } from '../../store/cartSlice'
import * as S from './styles'

type Props = {
  products: Product[]
}

const ProductList = ({ products }: Props) => {
  const [modalProduct, setModalProduct] = useState<Product | null>(null)
  const dispatch = useAppDispatch()

  const handleAddToCart = (product: Product) => {
    dispatch(addItem(product))
    setModalProduct(null)
  }

  return (
    <>
      <S.List>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onCardClick={(p) => setModalProduct(p)}
          />
        ))}
      </S.List>

      {modalProduct && (
        <S.Modal className={modalProduct ? 'is-visible' : ''}>
          <S.ModalContent>
            <header>
              <button type="button" onClick={() => setModalProduct(null)}>
                Fechar
              </button>
            </header>
            <main>
              <img src={modalProduct.foto} alt={modalProduct.nome} />
              <div>
                <h4>{modalProduct.nome}</h4>
                <p>{modalProduct.descricao}</p>
                <p>Serve: {modalProduct.porcao}</p>
                <button
                  type="button"
                  onClick={() => handleAddToCart(modalProduct)}
                >
                  Adicionar ao carrinho - R$ {modalProduct.preco.toFixed(2)}
                </button>
              </div>
            </main>
          </S.ModalContent>
          <div className="overlay" onClick={() => setModalProduct(null)}></div>
        </S.Modal>
      )}
    </>
  )
}

export default ProductList
