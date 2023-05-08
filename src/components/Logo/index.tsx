import Image from 'next/image'
import * as S from './styles'

export type LogoProps = {
  color?: 'white' | 'black'
  size?: 'normal' | 'large'
  hideOnMobile?: boolean
  id?: string
}

const Logo = ({
  // id = 'logo',
  // color = 'white',
  // size = 'normal',
  hideOnMobile = false
}: LogoProps) => (
  <S.Wrapper hideOnMobile={hideOnMobile}>
    <Image
      src="/img/logo-start-white.png"
      width={150}
      height={44}
      alt="Logo START"
    />
  </S.Wrapper>
)

export default Logo
