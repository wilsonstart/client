import { Done } from '@styled-icons/material-outlined/Done'
import Link from 'next/link'
import { useEffect } from 'react'

import Base from 'templates/Base'

import { Container } from 'components/Container'
import { GameCardProps } from 'components/GameCard'
import Showcase from 'components/Showcase'
import { HighlightProps } from 'components/Highlight'

import * as S from './styles'
import { useCart } from 'hooks/use-cart'

export type SuccessTemplateProps = {
  recommendedTitle: string
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
}

const Success = ({
  recommendedTitle,
  recommendedGames
}: SuccessTemplateProps) => {
  const { clearCart } = useCart()

  useEffect(() => {
    clearCart()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Base>
      <Container>
        <S.Wrapper>
          <S.Heading>Sua compra foi efetuada com sucesso!</S.Heading>

          <S.CheckMark>
            <Done />
          </S.CheckMark>

          <S.Text>
            Aguarde seus dados de pagamento por email. Seu curso já está
            disponível na sua{' '}
            <Link href="/profile/orders">
              <a>lista de compras</a>
            </Link>
            . Bom estudo!
          </S.Text>
        </S.Wrapper>
      </Container>

      <Showcase title={recommendedTitle} games={recommendedGames} />
    </Base>
  )
}

export default Success
