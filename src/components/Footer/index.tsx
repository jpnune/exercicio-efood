import logo from '../../assets/logo.png'
import * as S from './styles'

const Footer = () => (
  <S.Container>
    <S.Logo src={logo} alt="efood" />
    <S.SocialLinks>
      <li>
        <a href="#">Instagram</a>
      </li>
      <li>
        <a href="#">Facebook</a>
      </li>
      <li>
        <a href="#">Twitter</a>
      </li>
    </S.SocialLinks>
    <S.Copyright>
      A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado.
    </S.Copyright>
  </S.Container>
)

export default Footer
