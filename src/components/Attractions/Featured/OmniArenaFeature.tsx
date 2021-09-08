/** @jsxImportSource theme-ui */

import { Flex, Grid, Heading, Text } from "theme-ui";
import { Stack } from "raam";
import { FC } from "react";
import { MediaItem } from "@/components/MediaItem";
import { Link } from "@/components/Link";
import Arrow from "@/components/Images/Arrow";
import { Attraction } from "@/types/types";

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
      alt={node.videoPoster.description}
      media={node.videoPoster}
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
          position: "absolute !important" as any,
          left: [null, null, null, "-80px"],
          right: ["3", null],
          top: ["-4rem", null, null, "-1rem"],
          zIndex: "1",
          width: "180px",
          height: "80px",
          transform: ["rotate(-30deg)", null, null, "rotateZ(-145deg)"],
        }}
      />
      <Link
        sx={{ color: "white.light" }}
        to={`/attractions/${node.title.toLowerCase().replace(/\s/g, "-")}`}
      >
        <Stack>
          <Heading variant="heading.featuredTitle">{node.title}</Heading>
          <Text variant="body.normal">{node.description.description}</Text>
        </Stack>
      </Link>
    </Grid>
  </Flex>
);

export default OmniArenaFeature;
