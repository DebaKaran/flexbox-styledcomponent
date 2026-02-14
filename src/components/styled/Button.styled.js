import styled from "styled-components";

const variants = {
  primary: {
    background: "#339af0",
    color: "#ffffff",
    border: "#339af0",
    hoverBackground: "#1c7ed6",
    hoverBorder: "#1c7ed6",
  },
  "primary-outline": {
    background: "#ffffff",
    color: "#339af0",
    border: "#339af0",
    hoverBackground: "#ffffff",
    hoverBorder: "#1c7ed6",
    hoverColor: "#1c7ed6",
  },
  secondary: {
    background: "#9775fa",
    color: "#ffffff",
    border: "#9775fa",
    hoverBackground: "#7048e8",
    hoverBorder: "#7048e8",
  },
};

export const StyledButton = styled.button`
  display: inline-block;
  font-size: 1.6rem;
  padding: 1.5rem 3rem;
  border-radius: 8px;
  border: 2px solid;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  ${({ $variant = "primary" }) => {
    const v = variants[$variant] || variants.primary;

    return `
      background-color: ${v.background};
      color: ${v.color};
      border-color: ${v.border};

      &:hover {
        background-color: ${v.hoverBackground};
        border-color: ${v.hoverBorder};
        color: ${v.hoverColor || v.color};
      }

      &:active {
        transform: translateY(1px);
      }

      &:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(51, 154, 240, 0.3);
      }
    `;
  }}
`;