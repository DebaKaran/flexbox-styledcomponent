import AppHighlight from './AppHighlight';
import AppParagraph from './AppParagraph';
import Button from './Button';
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
        <AppParagraph mb='5rem'>
          The ultimate bullet journal app to document, reflect, and embrace your personal journey
        </AppParagraph>
        <ul>
            <li>
                <Button variant="primary" href="register.html">
                    Get started
                </Button>
            </li>
            <li>
                <Button variant="primary-outline" href="#features">
                    Learn more
                </Button>
            </li>
        </ul>
    </StyledSection>
  )
}

export default Section;