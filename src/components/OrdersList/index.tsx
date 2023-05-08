import Empty from 'components/Empty'
import GameItem, { GameItemProps, PaymentInfoProps } from 'components/GameItem'
import Heading from 'components/Heading'
import * as S from './styles'

type OrderProps = {
  id: string
  paymentInfo: PaymentInfoProps
  games: GameItemProps[]
}

export type OrdersListProps = {
  items?: OrderProps[]
}

const OrdersList = ({ items = [] }: OrdersListProps) => (
  <S.Wrapper>
    <Heading lineBottom lineColor="primary" color="black" size="small">
      Minhas compras
    </Heading>

    {items.length ? (
      items.map((order) => {
        return order.games.map((game) => (
          <GameItem
            key={`${order.id}-${game.id}`}
            {...game}
            paymentInfo={order.paymentInfo}
          />
        ))
      })
    ) : (
      <Empty
        title="Você ainda não tem pedidos"
        description="Volte para a loja e explore os ótimos cursos e ofertas"
        hasLink
      />
    )}
  </S.Wrapper>
)

export default OrdersList
