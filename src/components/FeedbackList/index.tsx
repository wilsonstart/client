import { Container } from 'components/Container'
import * as S from './style'
import Heading from 'components/Heading'
import Render from 'components/Render'
import FeedbackCard from 'components/FeedbackCard'
import { feedbacks } from './mocks'
import { Grid } from 'components/Grid'
import Slider from 'components/Slider'
import { useState, useEffect } from 'react'
import { settings } from './sliderConfig'
import Button from 'components/Button'

const FeedbackList = () => {
  return (
    <S.FeedbackListContainer>
      <Container>
        <S.FlexGap>
          <S.FeedbackHeading>
            <Heading>Feedback positivo:</Heading>
            <p>O sucesso dos clientes com a Escola Start</p>
          </S.FeedbackHeading>
          <Slider settings={settings}>
            <FeedbackCard {...feedbacks[0]} />
            <FeedbackCard {...feedbacks[0]} />
            <FeedbackCard {...feedbacks[0]} />
            <FeedbackCard {...feedbacks[0]} />
          </Slider>
          <Button
            size="large"
            css={{
              width: '100%',
              maxWidth: '320px',
              background: '#01003B',
              alignSelf: 'center',
              ':hover': {
                background: '#34365F'
              }
            }}
          >
            Quero Reeceber Informações
          </Button>
        </S.FlexGap>
      </Container>
    </S.FeedbackListContainer>
  )
}

export default FeedbackList
