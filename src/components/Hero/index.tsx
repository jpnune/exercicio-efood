import * as S from './styles'

type Props = {
  category: string
  name: string
  image?: string
}

const Hero = ({ category, name, image }: Props) => (
  <S.Banner style={{ backgroundImage: `url(${image})` }}>
    <S.HeroContainer>
      <S.Category>{category}</S.Category>
      <S.Name>{name}</S.Name>
    </S.HeroContainer>
  </S.Banner>
)

export default Hero
