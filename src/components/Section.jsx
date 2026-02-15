import AppHighlight from './AppHighlight';
import AppParagraph from './AppParagraph';
import { StyledHeader, StyledSection } from './styled/Section.styled'
import { ActionItem, ActionList } from './styled/ActionList.styled';
import Button from './Button';

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
        <ActionList>
            <ActionItem>
              <Button variant="primary" href="register.html">
                  Get started
              </Button>
            </ActionItem>
            <ActionItem>
              <Button variant="primary-outline" href="#features">
                  Learn more
              </Button>
            </ActionItem>
        </ActionList>
    </StyledSection>
  )
}

export default Section;