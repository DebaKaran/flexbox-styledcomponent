import AppHighlight from './AppHighlight';
import { StyledHeader, StyledSection } from './styled/Section.styled'

const Section = () => {
  return (
    <StyledSection>
      <StyledHeader>
        <AppHighlight variant="secondary">
          Mindful living
        </AppHighlight>
        for the <br/> digital world
      </StyledHeader>
    </StyledSection>
  )
}

export default Section;