import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import theme from 'styles/theme'

export const Wrapper = styled.menu`
  padding: 2.4rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  background-color: #d9d9d9;
`

export const FormImageWrapper = styled.div`
  display: flex;

  height: calc(100vh - 105px);

  ${media.lessThan('medium')`
    height: auto;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  `}

  width: auto;
`

export const ImageContainer = styled.div`
  position: relative;

  width: 40%;
  aspect-ratio: 1.07/1;
  min-height: auto;

  overflow: hidden;

  ${media.lessThan('medium')`
    width: 100%;
    height: calc(100vh - 105px);
  `}
`

export const ImageDescription = styled.div`
  background-color: ${() => theme.colors.mainBg + 'D9'};

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  padding: 0 2rem;

  top: 0;
  position: absolute;

  > span {
    font-size: ${() => theme.font.sizes.xsmall};
    color: ${() => theme.colors.gray};
  }
`
