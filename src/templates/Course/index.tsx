import { NextSeo } from 'next-seo'

import Base from 'templates/Base'

import GameInfo, { GameInfoProps } from 'components/GameInfo'
import CourseDetails, { CourseDetailsProps } from 'components/CourseDetails'
import TextContent from 'components/TextContent'
import Showcase from 'components/Showcase'
import { Divider } from 'components/Divider'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'

import * as S from './styles'
import Image from 'next/image'

export type CourseTemplateProps = {
  slug?: string
  cover: string
  courseInfo: GameInfoProps
  description: string
  details: CourseDetailsProps
  upcomingTitle: string
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  recommendedTitle: string
  recommendedGames: GameCardProps[]
}

const Game = ({
  slug,
  cover,
  courseInfo,
  description,
  details,
  recommendedTitle,
  recommendedGames
}: CourseTemplateProps) => (
  <Base>
    <NextSeo
      title={`${courseInfo.title} - Escola START`}
      description={courseInfo.description}
      canonical={`https://www.portalescolastart.com/courses/${slug}`}
      openGraph={{
        url: `https://www.portalescolastart.com/courses/${slug}`,
        title: `${courseInfo.title} - Escola START`,
        description: courseInfo.description,
        images: [
          {
            url: cover,
            alt: `${courseInfo.title}`
          }
        ]
      }}
    />
    <S.Cover>
      <Image src={cover} alt={courseInfo.title} layout="fill" />
    </S.Cover>

    <S.Main>
      <S.SectionGameInfo>
        <GameInfo {...courseInfo} />
      </S.SectionGameInfo>

      <S.SectionGameDetails>
        <CourseDetails {...details} />
      </S.SectionGameDetails>

      <S.SectionDescription>
        <TextContent title="Descrição" content={description} />
        <Divider />
      </S.SectionDescription>

      <Showcase title={recommendedTitle} games={recommendedGames} />
    </S.Main>
  </Base>
)

export default Game
