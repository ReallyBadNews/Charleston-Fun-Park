/** @jsx jsx */
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { Box, Flex, Grid, Heading, Text, jsx, useThemeUI } from "theme-ui";
import Img from "gatsby-image";
import { Stack } from "raam";
import StyledLink from "../../Link.styled";
import Arrow from "../../Images/Arrow";

const GoKartsFeature = ({ data: { node } }) => {
  const {
    goKarts: {
      childImageSharp: { fluid: goKartsBg },
    },
  } = useStaticQuery(graphql`
    query GoKartsBgQuery {
      goKarts: file(relativePath: { eq: "goKartsBg.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);

  const { theme } = useThemeUI();

  return (
    <Box
      sx={{
        position: "relative",
        height: ["auto", null, null, "lg"],
      }}
    >
      <svg
        fill="white"
        height="32"
        style={{ backgroundColor: theme.colors.background }}
        sx={{
          position: "absolute",
          zIndex: "1",
          top: "0",
        }}
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            height="32"
            id="Pattern"
            patternUnits="userSpaceOnUse"
            width="64"
            x="0"
            y="0"
          >
            <rect fill={theme.colors.text} height="32" width="32" />
          </pattern>
        </defs>
        <rect fill="url(#Pattern)" height="32" width="100%" />
      </svg>
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
          <svg
            fill="none"
            height="16"
            sx={{
              position: "absolute",
              zIndex: "1",
              width: "full",
              top: ["1rem", null, null, "3rem"],
            }}
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect fill={theme.colors.red.dark} height="16" width="100%" />
          </svg>
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
            pb={["9", null, null, "7"]}
            pt="7"
            px={["3", null, null, "7"]}
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
          <svg
            fill="none"
            height="16"
            sx={{
              position: "absolute",
              zIndex: "1",
              width: "full",
              bottom: "3rem",
            }}
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect fill={theme.colors.red.dark} height="16" width="100%" />
          </svg>
        </Box>
      </Flex>
      <svg
        fill="white"
        height="32"
        style={{ backgroundColor: theme.colors.background }}
        sx={{
          position: "absolute",
          zIndex: "1",
          bottom: "0",
        }}
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            height="32"
            id="Pattern"
            patternUnits="userSpaceOnUse"
            width="64"
            x="0"
            y="0"
          >
            <rect fill={theme.colors.text} height="32" width="32" />
          </pattern>
        </defs>
        <rect fill="url(#Pattern)" height="32" width="100%" />
      </svg>
    </Box>
  );
};

GoKartsFeature.propTypes = {
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

export default GoKartsFeature;
