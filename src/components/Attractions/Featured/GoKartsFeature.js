/** @jsx jsx */
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { Box, Flex, Grid, Heading, Text, jsx } from "theme-ui";
import Img from "gatsby-image";
import { Stack } from "raam";
import Arrow from "../../Arrow";

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

  return (
    <Box sx={{ position: "relative" }}>
      {/* TODO: Figure out how to make SVG pattern repeat */}
      <svg
        fill="none"
        height="32"
        sx={{ position: "absolute", zIndex: "1", top: "0" }}
        viewBox="0 0 1440 32"
        width="1440"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect fill="white" height="32" width="1440" />
        <rect fill="black" height="32" width="32" />
        <rect fill="white" height="32" width="32" x="32" />
        <rect fill="white" height="32" width="32" x="96" />
        <rect fill="white" height="32" width="32" x="160" />
        <rect fill="white" height="32" width="32" x="224" />
        <rect fill="white" height="32" width="32" x="288" />
        <rect fill="white" height="32" width="32" x="352" />
        <rect fill="white" height="32" width="32" x="416" />
        <rect fill="white" height="32" width="32" x="480" />
        <rect fill="white" height="32" width="32" x="544" />
        <rect fill="white" height="32" width="32" x="608" />
        <rect fill="white" height="32" width="32" x="672" />
        <rect fill="white" height="32" width="32" x="736" />
        <rect fill="white" height="32" width="32" x="800" />
        <rect fill="white" height="32" width="32" x="864" />
        <rect fill="white" height="32" width="32" x="928" />
        <rect fill="white" height="32" width="32" x="992" />
        <rect fill="white" height="32" width="32" x="1056" />
        <rect fill="white" height="32" width="32" x="1120" />
        <rect fill="white" height="32" width="32" x="1184" />
        <rect fill="white" height="32" width="32" x="1248" />
        <rect fill="white" height="32" width="32" x="1312" />
        <rect fill="white" height="32" width="32" x="1376" />
        <rect fill="black" height="32" width="32" x="64" />
        <rect fill="black" height="32" width="32" x="128" />
        <rect fill="black" height="32" width="32" x="192" />
        <rect fill="black" height="32" width="32" x="256" />
        <rect fill="black" height="32" width="32" x="320" />
        <rect fill="black" height="32" width="32" x="384" />
        <rect fill="black" height="32" width="32" x="448" />
        <rect fill="black" height="32" width="32" x="512" />
        <rect fill="black" height="32" width="32" x="576" />
        <rect fill="black" height="32" width="32" x="640" />
        <rect fill="black" height="32" width="32" x="704" />
        <rect fill="black" height="32" width="32" x="768" />
        <rect fill="black" height="32" width="32" x="832" />
        <rect fill="black" height="32" width="32" x="896" />
        <rect fill="black" height="32" width="32" x="960" />
        <rect fill="black" height="32" width="32" x="1024" />
        <rect fill="black" height="32" width="32" x="1088" />
        <rect fill="black" height="32" width="32" x="1152" />
        <rect fill="black" height="32" width="32" x="1216" />
        <rect fill="black" height="32" width="32" x="1280" />
        <rect fill="black" height="32" width="32" x="1344" />
        <rect fill="black" height="32" width="32" x="1408" />
      </svg>
      <Flex sx={{ flexDirection: "row-reverse" }}>
        <Img fluid={node.heroImage.fluid} sx={{ width: "7/12" }} />
        <Box sx={{ width: "5/12", position: "relative" }}>
          <svg
            fill="none"
            height="16"
            sx={{
              position: "absolute",
              zIndex: "1",
              width: "full",
              top: "3rem",
            }}
            viewBox="0 0 604 16"
            width="604"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M604 0H0V16H604V0Z" fill="#E15A4E" />
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
                zIndex: "2",
                width: "180px",
                height: "80px",
                transform: "rotateZ(325deg)",
              }}
            />
            <Stack>
              <Heading variant="heading">{node.title}</Heading>
              <Text variant="body.normal">{node.description.description}</Text>
            </Stack>
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
            viewBox="0 0 604 16"
            width="604"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M604 0H0V16H604V0Z" fill="#E15A4E" />
          </svg>
        </Box>
      </Flex>
      <svg
        fill="none"
        height="32"
        sx={{ position: "absolute", zIndex: "1", bottom: "0" }}
        viewBox="0 0 1440 32"
        width="1440"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect fill="white" height="32" width="1440" />
        <rect fill="black" height="32" width="32" />
        <rect fill="white" height="32" width="32" x="32" />
        <rect fill="white" height="32" width="32" x="96" />
        <rect fill="white" height="32" width="32" x="160" />
        <rect fill="white" height="32" width="32" x="224" />
        <rect fill="white" height="32" width="32" x="288" />
        <rect fill="white" height="32" width="32" x="352" />
        <rect fill="white" height="32" width="32" x="416" />
        <rect fill="white" height="32" width="32" x="480" />
        <rect fill="white" height="32" width="32" x="544" />
        <rect fill="white" height="32" width="32" x="608" />
        <rect fill="white" height="32" width="32" x="672" />
        <rect fill="white" height="32" width="32" x="736" />
        <rect fill="white" height="32" width="32" x="800" />
        <rect fill="white" height="32" width="32" x="864" />
        <rect fill="white" height="32" width="32" x="928" />
        <rect fill="white" height="32" width="32" x="992" />
        <rect fill="white" height="32" width="32" x="1056" />
        <rect fill="white" height="32" width="32" x="1120" />
        <rect fill="white" height="32" width="32" x="1184" />
        <rect fill="white" height="32" width="32" x="1248" />
        <rect fill="white" height="32" width="32" x="1312" />
        <rect fill="white" height="32" width="32" x="1376" />
        <rect fill="black" height="32" width="32" x="64" />
        <rect fill="black" height="32" width="32" x="128" />
        <rect fill="black" height="32" width="32" x="192" />
        <rect fill="black" height="32" width="32" x="256" />
        <rect fill="black" height="32" width="32" x="320" />
        <rect fill="black" height="32" width="32" x="384" />
        <rect fill="black" height="32" width="32" x="448" />
        <rect fill="black" height="32" width="32" x="512" />
        <rect fill="black" height="32" width="32" x="576" />
        <rect fill="black" height="32" width="32" x="640" />
        <rect fill="black" height="32" width="32" x="704" />
        <rect fill="black" height="32" width="32" x="768" />
        <rect fill="black" height="32" width="32" x="832" />
        <rect fill="black" height="32" width="32" x="896" />
        <rect fill="black" height="32" width="32" x="960" />
        <rect fill="black" height="32" width="32" x="1024" />
        <rect fill="black" height="32" width="32" x="1088" />
        <rect fill="black" height="32" width="32" x="1152" />
        <rect fill="black" height="32" width="32" x="1216" />
        <rect fill="black" height="32" width="32" x="1280" />
        <rect fill="black" height="32" width="32" x="1344" />
        <rect fill="black" height="32" width="32" x="1408" />
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
