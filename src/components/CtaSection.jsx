import Button from "./Button";
import {
  CtaSectionWrapper,
  CtaCard,
  CtaHeading,
} from "./styled/CtaSection.styled";

const CtaSection = () => {
  return (
    <CtaSectionWrapper>
      <CtaCard>
        <CtaHeading>Get started now</CtaHeading>

        <Button variant="secondary" href="register.html">
          Get started
        </Button>
      </CtaCard>
    </CtaSectionWrapper>
  );
};

export default CtaSection;