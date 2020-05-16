/** @jsx jsx */
import PropTypes from "prop-types";
import { Box, Flex, Grid, Heading, Text, jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image";
import { Stack } from "raam";
import Arrow from "../../Arrow";
import Brick from "../../../images/brick.png";

const MiniGolfFeature = ({ data: { node } }) => {
  const {
    grass: {
      childImageSharp: { fluid: grassTexture },
    },
  } = useStaticQuery(graphql`
    query grassQuery {
      grass: file(relativePath: { eq: "grassTexture.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);

  return (
    <Flex sx={{ height: "lg" }}>
      <Img fluid={node.heroImage.fluid} sx={{ width: "7/12" }} />
      <Box
        sx={{
          width: "5/12",
          position: "relative",
          borderLeft: "48px solid",
          borderImage: `url(${Brick}) 0 48 repeat`,
        }}
      >
        <BackgroundImage
          fluid={grassTexture}
          sx={{
            position: "absolute !important",
            bg: "green.light",
            height: "full",
            width: "full",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bg: "green.dark",
            width: "full",
            height: "full",
            opacity: "0.75",
          }}
        />
        <Grid
          color="white.light"
          p="7"
          sx={{
            placeContent: "center",
            height: "full",
            position: "relative",
          }}
        >
          <Arrow
            sx={{
              position: "absolute !important",
              left: "-15%",
              top: "-1rem",
              zIndex: "1",
              width: "180px",
              height: "80px",
              transform: "rotateZ(-145deg)",
            }}
          />
          <Stack>
            <Heading variant="heading.featuredTitle">{node.title}</Heading>
            <Text variant="body.normal">{node.description.description}</Text>
          </Stack>
        </Grid>
      </Box>
    </Flex>
  );
};

MiniGolfFeature.propTypes = {
  data: PropTypes.shape({
    node: PropTypes.shape({
      description: PropTypes.shape({
        description: PropTypes.string,
      }),
      heroImage: PropTypes.shape({
        fluid: PropTypes.shape({
          aspectRatio: PropTypes.number,
          base64: PropTypes.string,
          sizes: PropTypes.string,
          src: PropTypes.string,
          srcSet: PropTypes.string,
          srcSetWebp: PropTypes.string,
          srcWebp: PropTypes.string,
        }),
        id: PropTypes.string,
      }),
      id: PropTypes.string,
      title: PropTypes.string,
    }),
  }).isRequired,
};

export default MiniGolfFeature;
