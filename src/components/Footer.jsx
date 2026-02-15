import { FooterNavItem, FooterNavList, FooterSocialIcons, StyledFooter } from './styled/Footer.styled'
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

        <FooterNavList>
             <FooterNavItem> 
                <FooterLink href="https://www.instagram.com/">
                    <FooterSocialIcons src="images/instagram.svg" alt="instagram logo" />
                </FooterLink>
            </FooterNavItem>
            <FooterNavItem> 
                <FooterLink href="https://www.facebook.com/">
                    <FooterSocialIcons src="images/facebook.svg" alt="facebook logo"/>
                </FooterLink>
            </FooterNavItem>
            <FooterNavItem> 
                <FooterLink href="https://www.tiktok.com/">
                    <FooterSocialIcons src="images/tiktok.svg" alt="tiktok logo"/>
                </FooterLink>
            </FooterNavItem>
            <FooterNavItem> 
                <FooterLink href="https://www.linkedin.com/">
                    <FooterSocialIcons src="images/linkedin.svg" alt="linkedin logo"/>
                </FooterLink>
            </FooterNavItem>
            <FooterNavItem> 
                <FooterLink href="https://www.youtube.com/">
                    <FooterSocialIcons src="images/youtube.svg" alt="youtube logo"/>
                </FooterLink>
            </FooterNavItem>
        </FooterNavList>
    </StyledFooter>
  )
}

export default Footer