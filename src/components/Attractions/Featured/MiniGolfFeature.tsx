/** @jsxImportSource theme-ui */

import { StaticImage } from "gatsby-plugin-image";
import { Stack } from "raam";
import { FC } from "react";
import { Box, Flex, Grid, Heading, Text } from "theme-ui";
import Arrow from "@/components/Images/Arrow";
import { Link } from "@/components/Link";
import { MediaItem } from "@/components/MediaItem";
import Brick from "@/src/images/brick.png";
import { FeaturedAttractionProps } from "@/types/types";

const MiniGolfFeature: FC<FeaturedAttractionProps> = ({ data: { node } }) => (
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
        width: ["full", null, null, "7/12"],
        height: ["sm", null, null, "full"],
        objectFit: "cover",
        bg: "green.dark",
      }}
    />
    <Box
      sx={{
        display: "grid",
        width: ["full", null, null, "5/12"],
        minHeight: ["xs", null, null, "auto"],
        borderTop: ["24px solid", null, null, "none"],
        borderRight: "0",
        borderBottom: "0",
        borderLeft: ["0", null, null, "48px solid"],
        borderImage: [
          `url(${Brick as string}) 24 0 repeat`,
          null,
          null,
          `url(${Brick as string}) 0 48 repeat`,
        ],
      }}
    >
      <div sx={{ display: "grid", gridArea: "1 / 1" }}>
        <StaticImage
          alt="Textured background"
          aria-roledescription="background"
          layout="fullWidth"
          placeholder="dominantColor"
          src="../../../images/grass.jpg"
          sx={{
            gridArea: "1 / 1",
            bg: "green.light",
          }}
        />
        <Box
          sx={{
            gridArea: "1 / 1",
            bg: "green.dark",
            opacity: "0.75",
          }}
        />
      </div>
      <Grid
        color="white.light"
        p="7"
        sx={{ gridArea: "1 / 1" }}
        variant="featuredAttraction"
      >
        <Arrow
          sx={{
            position: "absolute",
            left: [null, null, null, "-80px"],
            right: ["3", null],
            top: ["-3rem", null, null, "-1rem"],
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
    </Box>
  </Flex>
);

export default MiniGolfFeature;
