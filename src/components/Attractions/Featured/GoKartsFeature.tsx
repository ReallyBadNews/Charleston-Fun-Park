/** @jsxImportSource theme-ui */

import { StaticImage } from "gatsby-plugin-image";
import { Stack } from "raam";
import { FC } from "react";
import { Box, Flex, Grid, Heading, Text, useThemeUI } from "theme-ui";
import Arrow from "@/components/Images/Arrow";
import { Link } from "@/components/Link";
import { MediaItem } from "@/components/MediaItem";
import { FeaturedAttractionProps } from "@/types/types";

const GoKartsFeature: FC<FeaturedAttractionProps> = ({ data: { node } }) => {
  const { rawColors: colors = {} } = useThemeUI().theme;

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
        sx={{
          backgroundColor: colors?.background as string,
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
            id="finishLine"
            patternUnits="userSpaceOnUse"
            width="64"
            x="0"
            y="0"
          >
            <rect fill={colors.text as string} height="32" width="32" />
          </pattern>
        </defs>
        <rect fill="url(#finishLine)" height="32" width="100%" />
      </svg>
      <Flex
        sx={{
          flexDirection: ["column", null, null, "row-reverse"],
          height: "full",
        }}
      >
        <MediaItem
          alt={node.videoPoster.description}
          media={node.videoPoster}
          sx={{
            bg: "tailwind.gray.800",
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
            {/* @ts-ignore */}
            <rect fill={colors.red.dark as string} height="16" width="100%" />
          </svg>
          <div sx={{ display: "grid", height: "full", placeContent: "center" }}>
            <StaticImage
              alt="Textured background"
              aria-roledescription="background"
              layout="fullWidth"
              placeholder="dominantColor"
              src="../../../images/goKartsBg.jpg"
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
                to={`/attractions/${node.title
                  .toLowerCase()
                  .replace(/\s/g, "-")}`}
              >
                <Stack>
                  <Heading variant="heading.featuredTitle">
                    {node.title}
                  </Heading>
                  <Text variant="body.normal">
                    {node.description.description}
                  </Text>
                </Stack>
              </Link>
            </Grid>
          </div>
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
            {/* @ts-ignore */}
            <rect fill={colors.red.dark as string} height="16" width="100%" />
          </svg>
        </Box>
      </Flex>
      <svg
        fill="white"
        height="32"
        sx={{
          backgroundColor: colors.background,
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
            id="finishLineBottom"
            patternUnits="userSpaceOnUse"
            width="64"
            x="0"
            y="0"
          >
            <rect fill={colors.text as string} height="32" width="32" />
          </pattern>
        </defs>
        <rect fill="url(#finishLineBottom)" height="32" width="100%" />
      </svg>
    </Box>
  );
};

export default GoKartsFeature;
