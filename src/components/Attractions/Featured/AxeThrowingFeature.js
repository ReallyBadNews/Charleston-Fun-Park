/** @jsx jsx */
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { Box, Flex, Grid, Heading, Text, jsx } from "theme-ui";
import Img from "gatsby-image";
import { Stack } from "raam";
import Arrow from "../../Arrow";

const AxeThrowingFeature = ({ data: { node } }) => {
  const {
    axeThrowing: {
      childImageSharp: { fluid: goKartsBg },
    },
  } = useStaticQuery(graphql`
    query AxeThrowingBgQuery {
      axeThrowing: file(relativePath: { eq: "axeThrowingBg.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);

  return (
    <Box sx={{ position: "relative", height: "lg" }}>
      <Flex sx={{ flexDirection: "row-reverse", height: "full" }}>
        <Img fluid={node.heroImage.fluid} sx={{ width: "7/12" }} />
        <Box sx={{ width: "5/12", position: "relative" }}>
          <BackgroundImage
            fluid={goKartsBg}
            sx={{
              position: "absolute !important",
              bg: "black.dark",
              height: "full",
              width: "full",
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
                right: "-15%",
                top: "-1rem",
                zIndex: "2",
                width: "180px",
                height: "80px",
                transform: "rotateZ(325deg)",
              }}
            />
            <Stack>
              <Heading variant="heading.featuredTitle">{node.title}</Heading>
              <Text variant="body.normal">{node.description.description}</Text>
            </Stack>
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
};

AxeThrowingFeature.propTypes = {
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

export default AxeThrowingFeature;
