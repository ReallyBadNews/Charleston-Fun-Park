/** @jsxImportSource theme-ui */

import { StaticImage } from "gatsby-plugin-image";
import { Stack } from "raam";
import { FC } from "react";
import { Box, Flex, Grid, Heading, Text } from "theme-ui";
import Arrow from "@/components/Images/Arrow";
import { Link } from "@/components/Link";
import { MediaItem } from "@/components/MediaItem";
import { Attraction } from "@/types/types";

interface FeaturedAttractionProps {
  data: {
    node: Attraction;
  };
}

const AxeThrowingFeature: FC<FeaturedAttractionProps> = ({
  data: {
    node: {
      videoPoster,
      description: { description },
      title,
    },
  },
}) => (
  <Box sx={{ position: "relative", height: ["auto", null, null, "lg"] }}>
    <Flex
      sx={{
        flexDirection: ["column", null, null, "row-reverse"],
        height: "full",
      }}
    >
      <MediaItem
        alt="People throwing axes"
        media={videoPoster}
        sx={{
          bg: "tailwind.red.800",
          width: ["full", null, null, "7/12"],
          height: ["sm", null, null, "full"],
          objectFit: "cover",
        }}
      />
      <Box
        sx={{
          width: ["full", null, null, "5/12"],
          minHeight: ["xs", null, null, "auto"],
          position: "relative",
        }}
      >
        <div sx={{ display: "grid", height: "full", placeContent: "center" }}>
          <StaticImage
            alt="Textured background"
            aria-roledescription="background"
            layout="fullWidth"
            placeholder="dominantColor"
            src="../../../images/axeThrowingBg.jpg"
            sx={{
              gridArea: "1 / 1",
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
            sx={{ height: "full", gridArea: "1 / 1" }}
            variant="featuredAttraction"
          >
            <Arrow
              sx={{
                position: "absolute",
                right: ["3", null, null, "-80px"],
                zIndex: "2",
                width: "180px",
                height: "80px",
                top: ["-3rem", null, null, "-1rem"],
                transform: ["rotateZ(-30deg)", null, null, "rotateZ(325deg)"],
              }}
            />
            <Link
              sx={{ color: "white.light" }}
              to={`/attractions/${title.toLowerCase().replace(/\s/g, "-")}`}
            >
              <Stack>
                <Heading variant="heading.featuredTitle">{title}</Heading>
                <Text variant="body.normal">{description}</Text>
              </Stack>
            </Link>
          </Grid>
        </div>
      </Box>
    </Flex>
  </Box>
);

export default AxeThrowingFeature;
