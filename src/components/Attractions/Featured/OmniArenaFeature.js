/** @jsx jsx */
import PropTypes from "prop-types";
import { Flex, Grid, Heading, Text, jsx } from "theme-ui";
import { Stack } from "raam";
import MediaItem from "../../MediaItem";
import StyledLink from "../../Link.styled";
import Arrow from "../../Images/Arrow";

const OmniArenaFeature = ({ data: { node } }) => (
  <Flex
    sx={{
      flexDirection: ["column", null, null, "row"],
      height: ["auto", null, null, "lg"],
    }}
  >
    <MediaItem
      isVideo={node.isVideo}
      media={node.heroImage}
      sx={{
        width: ["full", null, null, "7/12"],
        height: ["sm", null, null, "full"],
      }}
    />
    <Grid
      bg="black.dark"
      color="white.light"
      px={["3", null, null, "7"]}
      py={["4", null, null, "7"]}
      sx={{
        width: ["full", null, null, "5/12"],
        minHeight: ["xs", null, null, "auto"],
      }}
      variant="featuredAttraction"
    >
      <Arrow
        sx={{
          position: "absolute !important",
          left: [null, null, null, "-80px"],
          right: ["3", null],
          top: ["-4rem", null, null, "-1rem"],
          zIndex: "1",
          width: "180px",
          height: "80px",
          transform: ["rotate(-30deg)", null, null, "rotateZ(-145deg)"],
        }}
      />
      <StyledLink
        color="white.light"
        hoverColor="blue.light"
        to={`/attractions/${node.title.toLowerCase().replace(/\s/g, "-")}`}
      >
        <Stack>
          <Heading variant="heading.featuredTitle">{node.title}</Heading>
          <Text variant="body.normal">{node.description.description}</Text>
        </Stack>
      </StyledLink>
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
      isVideo: PropTypes.bool,
      title: PropTypes.string,
    }),
  }).isRequired,
};

export default OmniArenaFeature;
