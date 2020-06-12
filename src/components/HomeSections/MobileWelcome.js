/** @jsx jsx */
import { Box, Heading, Text, jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import { Stack } from "raam";
import WoodBg from "../Images/WoodBg";

const MobileWelcome = () => {
  const {
    contentfulHomePageHero: {
      description: { description },
      subtitle,
      title,
    },
  } = useStaticQuery(graphql`
    query MobileWelcomeQuery {
      contentfulHomePageHero(
        id: { eq: "04ac880b-e825-5040-8011-5641ebc3dc27" }
      ) {
        description {
          description
        }
        subtitle
        title
      }
    }
  `);

  return (
    <WoodBg overlayColor="blue.light">
      <Box color="white.light" px="3" py="6" sx={{ textAlign: "center" }}>
        <Heading variant="heading.smallTitle">{subtitle}</Heading>
        <Stack gap="3">
          <Heading as="h1" variant="heading.title">
            {title}
          </Heading>
          <Text variant="body.normal">{description}</Text>
        </Stack>
      </Box>
    </WoodBg>
  );
};

export default MobileWelcome;
