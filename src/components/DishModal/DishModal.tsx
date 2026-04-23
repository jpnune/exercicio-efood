import { useEffect } from 'react'
import { Dish } from '../../types'
import { useAppDispatch } from '../../store/hooks'
import { addItem, openCart } from '../../store/slices/cartSlice'
import {
  Overlay,
  Modal,
  CloseBtn,
  Image,
  Content,
  Name,
  Description,
  Portion,
  AddBtn
} from './styles'

interface DishModalProps {
  dish: Dish | null
  onClose: () => void
}

const DishModal = ({ dish, onClose }: DishModalProps) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (dish) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [dish])

  if (!dish) return null

  const handleAddToCart = () => {
    dispatch(addItem(dish))
    dispatch(openCart())
    onClose()
  }

  const formatPrice = (price: number) =>
    price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

  return (
    <Overlay
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Detalhes do prato ${dish.nome}`}
      data-testid="dish-modal"
    >
      <Modal onClick={(e) => e.stopPropagation()}>
        <CloseBtn
          onClick={onClose}
          aria-label="Fechar modal"
          data-testid="close-modal-btn"
        >
          ✕
        </CloseBtn>

        <Image src={dish.foto} alt={dish.nome} />

        <Content>
          <Name>{dish.nome}</Name>
          <Description>{dish.descricao}</Description>
          <Portion>Serve: {dish.porcao}</Portion>
          <AddBtn
            onClick={handleAddToCart}
            data-testid="modal-add-to-cart-btn"
          >
            Adicionar ao carrinho — {formatPrice(dish.preco)}
          </AddBtn>
        </Content>
      </Modal>
    </Overlay>
  )
}

export default DishModal
