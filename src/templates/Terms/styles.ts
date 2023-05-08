import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import * as HeadingStyles from 'components/Heading/styles'
import { Container } from 'components/Container'

export const Cover = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 39.5rem;
  opacity: 0.18;
  z-index: -1;

  img {
    object-fit: cover;
    object-position: top center;
  }

  ${media.greaterThan('medium')`
    height: 30rem;
  `}
`

export const SectionNews = styled(Container)`
  ${({ theme }) => css`
    margin-bottom: calc(${theme.spacings.xxlarge} * 2);

    ${media.greaterThan('large')`
      margin-top: 5.5rem;
    `}

    ${media.greaterThan('medium')`
      margin-bottom: 0;
      padding-top: 5rem;
      padding-bottom: 10rem;
      background-color: ${theme.colors.lightBg};

      ${HeadingStyles.Wrapper} {
        color: ${theme.colors.black};
      }
    `}

    ${media.lessThan('medium')`
      background-color: ${theme.colors.lightBg};

      ${HeadingStyles.Wrapper} {
        color: ${theme.colors.black};
      }
    `}
  `}
`

export const Heading = styled(Container)`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.huge};
    color: ${theme.colors.primary};
    font-weight: ${theme.font.bold};
    text-align: center;

    ${media.greaterThan('large')`
      margin-top: -18rem;
    `}

    ${media.greaterThan('medium')`
      margin-bottom: 0;
      padding-top: 14rem;
    `}
  `}
`

export const Text = styled.p`
  ${({ theme }) => css`
    margin-bottom: 2.5rem;

    strong {
      color: ${theme.colors.secondary};
    }
  `}

  ${media.lessThan('medium')`
      margin-bottom: 2rem;
      padding-top: 1rem;
    `}
`
