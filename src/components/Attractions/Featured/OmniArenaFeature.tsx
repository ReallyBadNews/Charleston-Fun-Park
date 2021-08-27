/** @jsxImportSource theme-ui */

import { Flex, Grid, Heading, Text } from "theme-ui";
import { Stack } from "raam";
import { MediaItem } from "@/components/MediaItem";
import StyledLink from "@/components/Link.styled";
import Arrow from "@/components/Images/Arrow";
import { Attraction } from "@/types/types";
import { FC } from "react";

interface OmniFeatureProps {
  data: {
    node: Attraction;
  };
}

const OmniArenaFeature: FC<OmniFeatureProps> = ({ data: { node } }) => (
  <Flex
    sx={{
      flexDirection: ["column", null, null, "row"],
      height: ["auto", null, null, "lg"],
    }}
  >
    <MediaItem
      media={node.videoPoster}
      alt={node.videoPoster.description}
      sx={{
        backgroundColor: "green.dark",
        width: ["full", null, null, "7/12"],
        height: ["sm", null, null, "full"],
        objectFit: "cover",
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
          position: ["absolute !important"],
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
          <Text variant="body.mid">{node.description.description}</Text>
        </Stack>
      </StyledLink>
    </Grid>
  </Flex>
);

export default OmniArenaFeature;
