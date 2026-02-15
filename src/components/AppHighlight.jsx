import { StyledSpan } from './styled/Span.styled'

const AppHighlight  = ({variant="primary", children }) => {
  return <StyledSpan $variant={variant}>
    {children}
  </StyledSpan>
}

export default AppHighlight 