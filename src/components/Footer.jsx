import { FooterNavItem, FooterNavList, StyledFooter } from './styled/Footer.styled'
import FooterLink from './FooterLink'

const Footer = () => {
  return (
    <StyledFooter>
        <FooterNavList>
            <FooterNavItem> 
                <FooterLink href="index.html">
                    Home
                </FooterLink>
            </FooterNavItem> 
            <FooterNavItem> 
                <FooterLink href="login.html">
                    Login
                </FooterLink>
            </FooterNavItem>
            <FooterNavItem> 
                <FooterLink href="register.html">
                    Register
                </FooterLink>
            </FooterNavItem>
        </FooterNavList>
    </StyledFooter>
  )
}

export default Footer