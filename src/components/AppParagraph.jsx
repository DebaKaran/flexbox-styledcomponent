import { StyledParagraph } from './styled/Paragraph.styled'

const AppParagraph = ({size = "normal", mb = "0", children}) => {
  return (
    <StyledParagraph $size={size} $mb={mb}>
        {children}
    </StyledParagraph>
  )
}

export default AppParagraph