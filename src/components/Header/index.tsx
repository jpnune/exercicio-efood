import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { openCart } from '../../store/cartSlice'
import * as S from './styles'

type Props = {
  variant?: 'home' | 'profile'
}

const Header = ({ variant = 'home' }: Props) => {
  const dispatch = useAppDispatch()
  const totalItems = useAppSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  )

  return (
    <S.HeaderBar $variant={variant}>
      <S.HeaderContainer>
        {variant === 'profile' ? (
          <S.HeaderLinks>
            <Link to="/">Home</Link>
            <S.Logo src={logo} alt="efood" />
            <S.CartLink onClick={() => dispatch(openCart())}>
              {totalItems} produto(s) no carrinho
            </S.CartLink>
          </S.HeaderLinks>
        ) : (
          <>
            <S.Logo src={logo} alt="efood" />
            <S.Title>viva experiências gastronômicas com o sabor do mar</S.Title>
          </>
        )}
      </S.HeaderContainer>
    </S.HeaderBar>
  )
}

export default Header
