import CartButton from 'components/CartButton'
import WishlistButton from 'components/WishlistButton'
import Heading from 'components/Heading'
import Ribbon from 'components/Ribbon'
import formatPrice from 'utils/format-price'

import * as S from './styles'

export type CourseInfoProps = {
  id: string
  title: string
  description: string
  price: number
}

const CourseInfo = ({ id, title, description, price }: CourseInfoProps) => (
  <S.Wrapper data-cy="game-info">
    <Heading color="black" lineBottom>
      {title}
    </Heading>

    <Ribbon color="secondary">{formatPrice(price)}</Ribbon>

    <S.Description>{description}</S.Description>

    <S.ButtonsWrapper>
      <CartButton id={id} size="large" hasText />
      <WishlistButton id={id} hasText size="large" />
    </S.ButtonsWrapper>
  </S.Wrapper>
)

export default CourseInfo
