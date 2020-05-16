/** @jsx jsx */
import PropTypes from "prop-types";
import { Flex, Grid, Heading, Text, jsx } from "theme-ui";
import Img from "gatsby-image";
import { Stack } from "raam";
import Arrow from "../../Arrow";

const OmniArenaFeature = ({ data: { node } }) => (
  <Flex sx={{ height: "lg" }}>
    <Img fluid={node.heroImage.fluid} sx={{ width: "7/12" }} />
    <Grid
      bg="black.dark"
      color="white.light"
      p="7"
      sx={{ placeContent: "center", width: "5/12", position: "relative" }}
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
  </Flex>
);

OmniArenaFeature.propTypes = {
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

export default OmniArenaFeature;
