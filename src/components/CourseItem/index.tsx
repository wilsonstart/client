import Image from 'next/image'
import { Download } from '@styled-icons/boxicons-solid/Download'
import { useCart } from 'hooks/use-cart'

import * as S from './styles'

export type PaymentInfoProps = {
  number: string
  flag: string | null
  img: string | null
  purchaseDate: string
}

export type CourseItemProps = {
  id: string
  img: string
  title: string
  price: string
  promotionalPrice?: string
  downloadLink?: string
  paymentInfo?: PaymentInfoProps
}

const CourseItem = ({
  id,
  img,
  title,
  price,
  promotionalPrice,
  downloadLink,
  paymentInfo
}: CourseItemProps) => {
  const { isInCart, removeFromCart } = useCart()

  return (
    <S.Wrapper data-cy="game-item">
      <S.GameContent>
        <S.ImageBox>
          <Image src={img} alt={title} width={150} height={70} />
        </S.ImageBox>

        <S.Content>
          <S.Title>
            {title}
            {!!downloadLink && (
              <S.DownloadLink
                href={downloadLink}
                target="_blank"
                aria-label={`Pegue ${title} aqui`}
              >
                <Download size={22} />
              </S.DownloadLink>
            )}
          </S.Title>
          <S.Group>
            {promotionalPrice ? (
              <S.Price>{promotionalPrice}</S.Price>
            ) : (
              <S.Price>{price}</S.Price>
            )}

            {isInCart(id) && (
              <S.Remove onClick={() => removeFromCart(id)}>Remover</S.Remove>
            )}
          </S.Group>
        </S.Content>
      </S.GameContent>

      {!!paymentInfo && (
        <S.PaymentContent>
          <p>{paymentInfo.purchaseDate}</p>
          <S.CardInfo>
            <span>{paymentInfo.number}</span>
            {!!paymentInfo.img && !!paymentInfo.flag && (
              <Image
                src={paymentInfo.img}
                alt={paymentInfo.flag}
                width={38}
                height={24}
              />
            )}
          </S.CardInfo>
        </S.PaymentContent>
      )}
    </S.Wrapper>
  )
}

export default CourseItem
