/** @jsx jsx */
import { jsx, Heading, Text, Container, Box } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { Stack, Flex } from "raam";

const Hero = () => {
  const { video } = useStaticQuery(graphql`
    query VideoQuery {
      video: file(relativePath: { eq: "videoPlaceholder.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);

  // Destructure image
  const {
    childImageSharp: { fluid },
  } = video;

  return (
    <BackgroundImage
      fluid={fluid}
      sx={{ bg: "black.mid", height: "calc(100vh - 133.5px - 104px)" }}
    >
      <Box
        sx={{
          position: "absolute",
          zIndex: "-1",
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
          background:
            "linear-gradient(90deg, #1D2435FF, #1D2435FF 50%, #1D243500 100%)",
          opacity: "0.5",
        }}
      />
      <Container
        px={["3", null, null, null, "0"]}
        py="7"
        sx={{ height: "full" }}
      >
        <Flex
          alignItems="center"
          flexShrink="1"
          sx={{ height: "full", zIndex: "2" }}
        >
          <Box
            sx={{
              width: ["full", null, "3/4", null, "7/12"],
              color: "white.light",
            }}
          >
            <Heading variant="heading.title">Welcome to the</Heading>
            <Stack gap="3">
              <Heading as="h1" variant="heading">
                Charleston Fun Park
              </Heading>
              <Text variant="body.large">
                From 36 holes of mini-golf, go karts, bumper cars,a full arcade
                with a VR coaster and the OMNI VR Arena and even axe throwing.
                We have something for everyone!
              </Text>
            </Stack>
          </Box>
        </Flex>
      </Container>
    </BackgroundImage>
  );
};

export default Hero;
