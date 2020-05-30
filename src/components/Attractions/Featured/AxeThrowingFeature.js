/** @jsx jsx */
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { Box, Flex, Grid, Heading, Text, jsx } from "theme-ui";
import Img from "gatsby-image";
import { Stack } from "raam";
import StyledLink from "../../Link.styled";
import Arrow from "../../Images/Arrow";

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
    <Box sx={{ position: "relative", height: ["auto", null, null, "lg"] }}>
      <Flex
        sx={{
          flexDirection: ["column", null, null, "row-reverse"],
          height: "full",
        }}
      >
        <Img
          fluid={node.heroImage.fluid}
          sx={{
            width: ["full", null, null, "7/12"],
            height: ["sm", null, null, "full"],
          }}
        />
        <Box
          sx={{
            width: ["full", null, null, "5/12"],
            minHeight: ["xs", null, null, "auto"],
            position: "relative",
          }}
        >
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
            sx={{ height: "full" }}
            variant="featuredAttraction"
          >
            <Arrow
              sx={{
                position: "absolute !important",
                right: ["3", null, null, "-15%"],
                zIndex: "2",
                width: "180px",
                height: "80px",
                top: ["-3rem", null, null, "-1rem"],
                transform: ["rotateZ(-30deg)", null, null, "rotateZ(325deg)"],
              }}
            />
            <StyledLink
              color="white.light"
              hoverColor="blue.light"
              to={`/attractions/${node.title
                .toLowerCase()
                .replace(/\s/g, "-")}`}
            >
              <Stack>
                <Heading variant="heading.featuredTitle">{node.title}</Heading>
                <Text variant="body.normal">
                  {node.description.description}
                </Text>
              </Stack>
            </StyledLink>
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
