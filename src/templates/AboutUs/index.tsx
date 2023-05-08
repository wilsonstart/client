import Image from 'next/image'
import Base from 'templates/Base'
import { Container } from 'components/Container'

import * as S from './styles'

const AboutUs = () => (
  <Base>
    <S.Cover>
      <Image src="/img/aboutus.png" alt="Home background" layout="fill" />
    </S.Cover>

    <S.Heading>
      Sobre a <strong>START</strong>
    </S.Heading>

    <S.SectionNews>
      <Container>
        <p>teste</p>
      </Container>
    </S.SectionNews>
  </Base>
)

export default AboutUs
