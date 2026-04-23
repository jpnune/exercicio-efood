import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { openCart, selectCartCount } from '../../store/slices/cartSlice'
import { HeaderBar, HeaderContainer, Logo, BackLink, CartButton } from './styles'

interface HeaderProps {
  variant?: 'home' | 'profile'
}

const Header = ({ variant = 'home' }: HeaderProps) => {
  const dispatch = useAppDispatch()
  const cartCount = useAppSelector(selectCartCount)

  return (
    <HeaderBar $variant={variant}>
      <HeaderContainer className="container" $variant={variant}>
        {variant === 'profile' && (
          <BackLink to="/" data-testid="back-link">
            Restaurantes
          </BackLink>
        )}

        <Logo to="/" data-testid="logo">
          efood
        </Logo>

        {variant === 'profile' && (
          <CartButton
            onClick={() => dispatch(openCart())}
            data-testid="cart-button"
            aria-label="Abrir carrinho"
          >
            {cartCount} produto(s) no carrinho
          </CartButton>
        )}
      </HeaderContainer>
    </HeaderBar>
  )
}

export default Header
