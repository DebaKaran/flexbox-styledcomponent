import styled from "styled-components";

const widthVariants = {
  social: "20px",       // default paragraph size
  logo: "80px",
};

export const StyledFooter = styled.footer`
    text-align: center;
`;

export const FooterNavList = styled.ul``

export const FooterNavItem = styled.li``

export const FooterSocialIcons = styled.img`
    width: ${({$width = "logo"}) => widthVariants[$width]};
`

export const FooterParagraph = styled.p`
    font-size: 1.2rem;
`