import styled from "styled-components";

const sizeVariants = {
  normal: "2rem",       // default paragraph size
  small: "1.2rem",
};

export const StyledParagraph = styled.p`
    display: inline-block;
    font-size: ${({$size = "normal"}) => sizeVariants[$size]};
    margin-bottom: ${({ $mb = "0" }) => $mb};
`