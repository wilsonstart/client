import Image from 'next/image'
import { Container } from 'components/Container'

import * as S from './styles'
import {
  BusinessCenter,
  Group,
  QueryStats,
  School
} from '@styled-icons/material-outlined'
import { Graduation } from '@styled-icons/boxicons-solid'

const LadingPage = () => (
  <S.Wrapper>
    <S.Cover>
      <Image src="/img/bg01.png" alt="Home background" layout="fill" />
    </S.Cover>
    <Container>
      <S.LogoWrapper>
        <Image
          src="/img/logo-start-white-02.png"
          alt="Logo START"
          width="160"
          height="60"
        />
      </S.LogoWrapper>
      <S.TextUp>
        <p>Transformando vidas</p>
        <p>Mudanado histórias</p>
      </S.TextUp>
    </Container>

    <S.SectionClients>
      <S.CTitle>A nossa plataforma vem ai!</S.CTitle>
      <S.CSubtitle>
        Acompanhe as nossas redes sociais e fique por dentro de todas as
        novidades.
      </S.CSubtitle>

      <S.CImage>
        <S.CImagesCard>
          <S.RedesSociais>
            <S.RSBox>
              <S.RSImage>
                <Image src="/img/facebook.png" width="60" height="60"></Image>
              </S.RSImage>
              <S.RSText>facebook.com/canaisstart</S.RSText>
            </S.RSBox>

            <S.RSBox>
              <S.RSImage>
                <Image src="/img/instagram.png" width="60" height="60"></Image>
              </S.RSImage>
              <S.RSText>instagram.com/_escolastart</S.RSText>
            </S.RSBox>

            <S.RSBox>
              <S.RSImage>
                <Image src="/img/linkedin.png" width="60" height="60"></Image>
              </S.RSImage>
              <S.RSText>linkedin.com/company/canaisstart</S.RSText>
            </S.RSBox>
          </S.RedesSociais>
        </S.CImagesCard>
        <S.CImagesCard>
          <Image src="/img/courses-01.png" width="600" height="600"></Image>
        </S.CImagesCard>
      </S.CImage>
    </S.SectionClients>

    <S.SectionNumbers>
      <S.SubTitle>Clientes e parceiros</S.SubTitle>
      <S.Title>
        Números de realizações da <strong>Escola START</strong>
      </S.Title>

      <S.NWrapper>
        <S.NContent>
          <S.NBox>
            <S.NSingleBox>
              <S.NIcon>
                <Group />
              </S.NIcon>
              <S.NTitle>
                <b>+20.000</b>
              </S.NTitle>
              <S.NSubTitle>alunos capacitados</S.NSubTitle>
            </S.NSingleBox>
            <S.NSingleBox>
              <S.NIcon>
                <BusinessCenter />
              </S.NIcon>
              <S.NTitle>
                <b>+5.000</b>
              </S.NTitle>
              <S.NSubTitle>inseridos no mercado de trabalho</S.NSubTitle>
            </S.NSingleBox>
          </S.NBox>

          <S.NBox>
            <S.NSingleBox>
              <S.NIcon>
                <QueryStats />
              </S.NIcon>
              <S.NTitle>
                <b>77</b>
              </S.NTitle>
              <S.NSubTitle>nps</S.NSubTitle>
            </S.NSingleBox>
            <S.NSingleBox>
              <S.NIcon>
                <School />
              </S.NIcon>
              <S.NTitle>
                <b>+50</b>
              </S.NTitle>
              <S.NSubTitle>cursos presenciais</S.NSubTitle>
            </S.NSingleBox>
          </S.NBox>
        </S.NContent>

        <S.NContent>
          <S.CredBox>
            <S.CredSingleBox>
              <Image
                src="/clients/logo-exercito.png"
                width={140}
                height={140}
              />
            </S.CredSingleBox>

            <S.CredSingleBox>
              <Image
                src="/clients/logo-forcaaerea.png"
                width={140}
                height={140}
              />
            </S.CredSingleBox>

            <S.CredSingleBox>
              <Image src="/clients/logo-marinha.png" width={130} height={180} />
            </S.CredSingleBox>
          </S.CredBox>

          <S.CredBox>
            <S.CredSingleBox>
              <Image src="/cred/crc.png" width={120} height={100} />
            </S.CredSingleBox>

            <S.CredSingleBox>
              <Image src="/cred/abed.png" width={130} height={60} />
            </S.CredSingleBox>
          </S.CredBox>
        </S.NContent>
      </S.NWrapper>
    </S.SectionNumbers>
  </S.Wrapper>
)

export default LadingPage
