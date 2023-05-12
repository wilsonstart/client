import { PlayCircle } from '@styled-icons/material-outlined'
import Heading from 'components/Heading'
import { StickyNote } from 'components/StickyNote'
import * as S from './styles'

const Learning = () => (
  <S.Wrapper>
    <StickyNote>Seu progresso</StickyNote>

    <S.BannerBlock>
      <S.BannerContent>
        <S.CurriculumBox>
          <S.Module>Como fazer isso e aquilo</S.Module>
          <S.Lesson>
            Javascript na prática{' '}
            <S.VideoLenght>
              05 min{' '}
              <a href="#">
                <PlayCircle width={30} />
              </a>
            </S.VideoLenght>
          </S.Lesson>
          <S.Lesson>
            React e Next.JS{' '}
            <S.VideoLenght>
              05 min{' '}
              <a href="#">
                <PlayCircle width={30} />
              </a>
            </S.VideoLenght>
          </S.Lesson>
          <S.Lesson>
            React e Next.JS{' '}
            <S.VideoLenght>
              05 min{' '}
              <a href="#">
                <PlayCircle width={30} />
              </a>
            </S.VideoLenght>
          </S.Lesson>
          <S.Lesson>
            React e Next.JS{' '}
            <S.VideoLenght>
              05 min{' '}
              <a href="#">
                <PlayCircle width={30} />
              </a>
            </S.VideoLenght>
          </S.Lesson>
        </S.CurriculumBox>

        <S.CurriculumBox>
          <S.Module>Como fazer isso e aquilo e aquilo</S.Module>
          <S.Lesson>
            javascript e uaha auha uah uahauh7{' '}
            <S.VideoLenght>
              05 min{' '}
              <a href="#">
                <PlayCircle width={30} />
              </a>
            </S.VideoLenght>
          </S.Lesson>
          <S.Lesson>
            javascript e uaha auha uah uahauh7{' '}
            <S.VideoLenght>
              05 min{' '}
              <a href="#">
                <PlayCircle width={30} />
              </a>
            </S.VideoLenght>
          </S.Lesson>
        </S.CurriculumBox>
      </S.BannerContent>
    </S.BannerBlock>

    <S.Content>
      <S.ContentWrapper>
        <S.Title>Gestão de Negócios e Liderança</S.Title>
        <S.VideoContent>
          <S.VideoBox>
            <video width="100%" height="100%" controls>
              <source src="/img/video01.mp4" type="video/mp4" />
            </video>
          </S.VideoBox>
        </S.VideoContent>

        <Heading color="black" lineBottom size="medium">
          teste
        </Heading>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
          egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac
          sodales id, porttitor vitae est. Donec laoreet rutrum libero sed
          pharetra. Donec vel egestas dolor, nec dignissim metus. Donec augue
          elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum
          libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis
          diam.
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
          egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac
          sodales id, porttitor vitae est. Donec laoreet rutrum libero sed
          pharetra. Donec vel egestas dolor, nec dignissim metus. Donec augue
          elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum
          libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis
          diam.
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
          egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac
          sodales id, porttitor vitae est. Donec laoreet rutrum libero sed
          pharetra. Donec vel egestas dolor, nec dignissim metus. Donec augue
          elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum
          libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis
          diam.
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
          egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac
          sodales id, porttitor vitae est. Donec laoreet rutrum libero sed
          pharetra. Donec vel egestas dolor, nec dignissim metus. Donec augue
          elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum
          libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis
          diam.
        </p>
      </S.ContentWrapper>
    </S.Content>
  </S.Wrapper>
)

export default Learning
