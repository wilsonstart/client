import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { Container } from 'components/Container'

export const Wrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
`

export const LogoWrapper = styled.div`
  margin-top: 2rem;
  margin-left: 5rem;
  display: inline-block;
`

export const TextUp = styled.div`
  ${({ theme }) => css`
    display: inline-block;
    margin-top: 2rem;
    color: white;
    float: right;
    text-align: center;
    font-weight: ${theme.font.bold};

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.small}
    `}

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    justify-content: center;
    text-align: center;
    max-width: 720px;
    font-weight: ${theme.font.normal};
    margin: {
      left: auto;
      right: auto;
      bottom: 55px;
    }

    strong {
      color: ${theme.colors.primary};
    }

    ${media.lessThan('medium')`
      padding-left: 1rem;
      padding-bottom: 1rem;
      background-color: ${theme.colors.lightBg};
      font-size: ${theme.font.sizes.large};
    `}
  `}
`

export const SubTitle = styled.h3`
  ${({ theme }) => css`
    margin-top: 5rem;
    text-transform: uppercase;
    color: ${theme.colors.secondary};
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    justify-content: center;
    text-align: center;
    max-width: 720px;
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.small};

    ${media.lessThan('medium')`
      padding-top: 1rem;
      padding-left: 1rem;
      background-color: ${theme.colors.lightBg};
      font-size: ${theme.font.sizes.xsmall};
    `}
  `}
`

export const Description = styled.h4`
  ${({ theme }) => css`
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    justify-content: center;
    text-align: center;
    max-width: 720px;
    font-weight: ${theme.font.light};
    font-size: ${theme.font.sizes.xsmall};

    ${media.lessThan('medium')`
      padding-top: 1rem;
      padding-left: 1rem;
      padding-bottom: 1rem;
      background-color: ${theme.colors.lightBg};
      font-size: ${theme.font.sizes.xsmall};
    `}
  `}
`

export const Cover = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 39.5rem;
  opacity: 0.18;

  img {
    object-fit: cover;
    object-position: top center;
  }

  ${media.greaterThan('medium')`
    height: 80rem;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
  `}
`

export const SectionClients = styled.div`
  ${({ theme }) => css`
    margin-bottom: calc(${theme.spacings.xxlarge} * 2);
    background-color: ${theme.colors.mainBg};

    ${media.greaterThan('large')`
      margin-top: -1rem;
    `}

    ${media.greaterThan('medium')`
      margin-bottom: 0;
      padding-top: 14rem;
      padding-bottom: 1rem;
      height: 70rem;
      background-color: ${theme.colors.mainBg};
    `}

    ${media.lessThan('medium')`
      margin-top: 3rem;
      height: 135rem;
      padding-left: 1rem;
      padding-right: 1rem;
      background-color: ${theme.colors.mainBg};
    `}
  `}
`

export const CTitle = styled.h1`
  ${({ theme }) => css`
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    justify-content: center;
    text-align: center;
    max-width: 900px;
    color: white;
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.huge};
    margin: {
      left: auto;
      right: auto;
      bottom: 55px;
    }

    strong {
      color: ${theme.colors.primary};
    }

    ${media.lessThan('medium')`
      padding-left: 1rem;
      padding-bottom: 1rem;
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`

export const CSubtitle = styled.div`
  ${({ theme }) => css`
    text-transform: uppercase;
    color: ${theme.colors.primary};
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    justify-content: center;
    text-align: center;
    max-width: 900px;
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.large};
    padding-top: 1rem;

    ${media.lessThan('medium')`
      padding-top: 1rem;
      padding-left: 1rem;
      font-size: ${theme.font.sizes.xsmall};
    `}
  `}
`

export const CImage = styled(Container)`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${theme.grid.gutter};
    `}
  `}
`

export const CImagesCard = styled.div`
  margin-bottom: 30px;
  justify-self: center;

  ${media.lessThan('medium')`
      margin-top: 6rem;
      margin-bottom: -10rem;
    `}
`

export const SectionNumbers = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightBg};

    ${media.greaterThan('large')`
      margin-top: 1rem;
    `}

    ${media.greaterThan('medium')`
      margin-bottom: 5rem;
      padding-top: 2rem;
      padding-bottom: 10rem;
      height: 65rem;
      background-color: ${theme.colors.lightBg};
    `}

    ${media.lessThan('medium')`
      margin-bottom: 5rem;
      height: 135rem;
      padding-left: 1rem;
      padding-right: 1rem;
      background-color: ${theme.colors.lightBg};
    `}
  `}
`
export const NWrapper = styled(Container)`
  ${({ theme }) => css`
    padding-top: 4rem;

    ${media.greaterThan('medium')`
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: ${theme.grid.gutter};
    `}
  `}
`
export const NContent = styled.div`
  ${({ theme }) => css`
    margin-bottom: 1px;
    border-radius: 10px;
    padding: 25px 25px;
    background-color: ${theme.colors.lightBg};
    transition: $transition;
    align-self: center;
    justify-self: center;
  `}
`

export const NBox = styled.div`
  ${({ theme }) => css`
    margin-bottom: 15px;
    text-align: center;
    transition: $transition;
    position: relative;
    overflow: hidden;

    ${media.greaterThan('medium')`
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: ${theme.grid.gutter};
    `}
  `}
`

export const NTitle = styled.h1`
  ${({ theme }) => css`
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    justify-content: center;
    text-align: center;
    max-width: 720px;
    font-weight: ${theme.font.normal};
    margin: {
      left: auto;
      right: auto;
      bottom: 55px;
    }

    strong {
      color: ${theme.colors.primary};
    }

    ${media.lessThan('medium')`
      padding-left: 1rem;
      padding-bottom: 1rem;
      background-color: ${theme.colors.lightBg};
      font-size: ${theme.font.sizes.large};
    `}
  `}
`

export const NSubTitle = styled.h3`
  ${({ theme }) => css`
    text-transform: uppercase;
    color: ${theme.colors.secondary};
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    justify-content: center;
    text-align: center;
    max-width: 720px;
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.small};

    ${media.lessThan('medium')`
      padding-top: 1rem;
      padding-left: 1rem;
      background-color: ${theme.colors.lightBg};
      font-size: ${theme.font.sizes.xsmall};
    `}
  `}
`

export const CredBox = styled.div`
  ${({ theme }) => css`
    text-align: center;
    transition: $transition;

    ${media.greaterThan('medium')`
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: ${theme.grid.gutter};
    `}

    ${media.lessThan('medium')`
      background-color: white;
      svg {
        width: 3.5rem;
      }
    `}
  `}
`

export const NSingleBox = styled.div`
  ${({ theme }) => css`
    text-align: center;
    border: 1px dashed ${theme.colors.primary};
    background-color: ${theme.colors.white};
    border-radius: 1rem;
    transition: $transition;
    position: relative;
  `}

  ${media.lessThan('medium')`
    ${({ theme }) => css`
      margin-bottom: 1rem;
      svg {
        width: 3.5rem;
      }
      background-color: ${theme.colors.white};
    `}
    `}
`

export const CredSingleBox = styled.div`
  border-radius: 1rem;
  transition: $transition;
  position: relative;

  ${media.lessThan('medium')`
    padding-top: 1rem;
    padding-bottom: 1rem;
    background-color: white;
      svg {
        width: 3.5rem;
      }
    `}
`

export const NIcon = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    right: 1rem;
    top: -0.5rem;
    padding-bottom: 1rem;
    svg {
      width: 5.5rem;
    }

    ${media.lessThan('medium')`
      svg {
        width: 3.5rem;
      }
    `}
  `}
`

export const RedesSociais = styled.div`
  ${({ theme }) => css`
    margin-top: 7rem;
    display: grid;
    grid-template-columns: 3fr;
    gap: ${theme.grid.gutter};
  `}
`

export const RSBox = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${theme.grid.gutter};
  `}
`

export const RSImage = styled.div`
  display: inline-block;
  justify-self: right;

  ${media.greaterThan('large')`
      justify-self: right;
  `}

  ${media.lessThan('medium')`
      justify-self: left;
  `}
`

export const RSText = styled.a`
  ${({ theme }) => css`
    margin-top: 2rem;
    color: ${theme.colors.white};
    justify-self: left;
    text-decoration: none;

    ${media.lessThan('medium')`
      justify-self: left;
      font-size; ${theme.font.sizes.xsmall}
   `}
  `}
`
