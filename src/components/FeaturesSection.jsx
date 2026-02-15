import AppParagraph from './AppParagraph'
import { FeatureCard, FeatureImage, FeaturesSectionWrapper, FeatureTitle } from './styled/Main.styled'

const featureItems = [
    {
        header: "Write all your journals in a few clicks",
        paragraph: "Unlock the simplicity of online journaling - say goodbye to the hassle of pen and paper and hello to effortless journaling with just a few clicks.",
        src: "images/features-1.png",
        alt: "simple online journaling",
    },
    {
        header: "Beautifully displayed and neatly organised",
        paragraph: "Not just words on a screen - our journals are beautifully displayed and neatly organised.",
        src: "images/features-2.png",
        alt: "beautifully displayed jounrals",
    },
    {
        header: "Create and reflect from anywhere in the world",
        paragraph: "Whether you're at home or exploring the far corners of the world, create and reflect on your experiences, thoughts, and emotions from anywhere on the globe.",
        src: "images/features-3.png",
        alt: "create jounrals anywhere",
    },
]

const FeaturesSection = () => {
  return (
    <FeaturesSectionWrapper>
        {featureItems.map(link => (
            <FeatureCard key={link.alt}>
                <FeatureTitle>{link.header}</FeatureTitle>
                <AppParagraph>{link.paragraph}</AppParagraph>
                <FeatureImage src={link.src} alt={link.alt} />
            </FeatureCard>
        ))}
    </FeaturesSectionWrapper>
  )
}

export default FeaturesSection