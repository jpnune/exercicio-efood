import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { useCart } from '../../contexts/CartContext'
import * as S from './styles'

type Props = {
  variant?: 'home' | 'profile'
}

const Header = ({ variant = 'home' }: Props) => {
  const { totalItems, openCart } = useCart()

  return (
    <S.HeaderBar $variant={variant}>
      <S.HeaderContainer>
        {variant === 'profile' ? (
          <S.HeaderLinks>
            <Link to="/">Home</Link>
            <S.Logo src={logo} alt="efood" />
            <S.CartLink onClick={openCart}>
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
