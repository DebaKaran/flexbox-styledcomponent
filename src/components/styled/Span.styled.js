import styled from "styled-components";

const variants = {
    primary: {
        "background": "#339af0",
    },
     secondary: {
        "background": "#9775fa",
    },
     tertiary: {
        "background": "#ff922b",
    }
}

export const StyledSpan = styled.span`
    color: #ffffff;
    padding: 0.5rem 1rem;
    border-radius: 4px;

    ${({ $variant = "primary" }) => {
    const v = variants[$variant] || variants.primary;

    return `
      background-color: ${v.background};
    `;
  }}
`;