import AppHighlight from './AppHighlight';
import AppParagraph from './AppParagraph';
import { StyledHeader, StyledSection } from './styled/Section.styled'

const Section = () => {
  return (
    <StyledSection>
      <StyledHeader>
        <AppHighlight variant="secondary">
          Mindful living
        </AppHighlight>
        for the <br/> digital world
        <AppParagraph mb='5rem'>
          The ultimate bullet journal app to document, reflect, and embrace your personal journey
        </AppParagraph>
      </StyledHeader>
    </StyledSection>
  )
}

export default Section;