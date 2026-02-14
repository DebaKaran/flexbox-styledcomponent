import { StyledButton } from "./styled/Button.styled";


const Button = ({ variant, href, children, ...props }) => {
  if (href) {
    return (
      <StyledButton
        as="a"
        href={href}
        $variant={variant}
        {...props}
      >
        {children}
      </StyledButton>
    );
  }

  return (
    <StyledButton $variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;