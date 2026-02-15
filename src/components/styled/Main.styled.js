import styled from "styled-components";

const mbVariants = {
  cta: "30rem",       // default paragraph size
  features: "30rem",
};

export const StyledMain = styled.main``;

export const FeaturesSectionWrapper = styled.section`
    margin-bottom: ${({$mb = "features"}) => mbVariants[$mb]};
`
export const FeatureCard = styled.div``;

export const FeatureTitle = styled.h3`
    margin-bottom: 2rem;
`;

export const FeatureHeader = styled.h2`
    text-align: center;
    margin-bottom: 8rem;
`

export const StyledParagraph = styled.p``;

export const FeatureImage = styled.img`
    max-width: 400px;
    width: 100%;
`;


