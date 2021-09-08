/** @jsxImportSource theme-ui */

import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Stack } from "raam";
import { FC } from "react";
import { Box, Flex, Grid, Heading, Text } from "theme-ui";
import { Attraction, ChildFluidObject } from "@/types/types";
import { MediaItem } from "@/components/MediaItem";
import { Link } from "@/components/Link";
import Arrow from "@/components/Images/Arrow";

interface FeaturedAttractionProps {
  data: {
    node: Attraction;
  };
}

interface ImageQuery {
  axeThrowing: ChildFluidObject;
}

const AxeThrowingFeature: FC<FeaturedAttractionProps> = ({
  data: {
    node: {
      videoPoster,
      description: { description },
      title,
    },
  },
}) => {
  const {
    axeThrowing: {
      childImageSharp: { gatsbyImageData: axeThrowingBg },
    },
  } = useStaticQuery<ImageQuery>(graphql`
    query AxeThrowingBgQuery {
      axeThrowing: file(relativePath: { eq: "axeThrowingBg.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE, layout: FULL_WIDTH)
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
            <GatsbyImage
              alt="Textured background"
              aria-roledescription="background"
              image={axeThrowingBg}
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
                  position: "absolute !important" as any,
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
};

export default AxeThrowingFeature;
