import { Logo, LogoLink } from "./styled/NavBar.styled"


const AppLogo = ({href="/", src, alt}) => {
  return  <LogoLink href={href}>
              <Logo src={src} alt={alt} />
          </LogoLink>
}

export default AppLogo