import { FooterNavItem, FooterNavList, FooterParagraph, FooterSocialIcons, StyledFooter } from './styled/Footer.styled'
import FooterLink from './FooterLink'

const footerLinks = [
  { label: "Home", href: "index.html" },
  { label: "Login", href: "login.html" },
  { label: "Register", href: "register.html" },
];

const footerSocialLinks = [
    {href: "https://www.instagram.com/", src: "images/instagram.svg", alt: "instagram logo"},
    {href: "https://www.facebook.com/", src:"images/facebook.svg", alt:"facebook logo"},
    {href: "https://www.tiktok.com/", src:"images/tiktok.svg", alt: "tiktok logo"},
    {href: "https://www.linkedin.com/", src: "images/linkedin.svg", alt:"linkedin logo"},
    {href: "https://www.youtube.com/", src: "images/youtube.svg", alt:"youtube logo"},
]
const Footer = () => {
  return (
    <StyledFooter>
        <FooterSocialIcons src="images/quill.svg" alt="quill logo" $width="logo"/>
        <FooterNavList>
            {footerLinks.map(link => (
            <FooterNavItem key={link.href}> 
                <FooterLink href={link.href}>
                    {link.label}
                </FooterLink>
            </FooterNavItem> 
        ))}
        </FooterNavList>

        <FooterNavList>
            {footerSocialLinks.map(link => (
            <FooterNavItem key={link.href}> 
                <FooterLink href={link.href}>
                    <FooterSocialIcons src={link.src} alt={link.alt} $width="social"/>
                </FooterLink>
            </FooterNavItem> 
        ))}
        </FooterNavList>
        <FooterParagraph>
            Made with ♥︎ in India
        </FooterParagraph>
    </StyledFooter>
  )
}

export default Footer