/** @jsxImportSource theme-ui */

import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Stack } from "raam";
import { FC } from "react";
import { Box, Flex, Grid, Heading, Text } from "theme-ui";
import { Attraction, ChildFluidObject } from "@/types/types";
import { MediaItem } from "@/components/MediaItem";
import StyledLink from "@/components/Link.styled";
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
          media={videoPoster}
          alt="People throwing axes"
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
              image={axeThrowingBg}
              alt="Textured background"
              aria-roledescription="background"
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
                  position: ["absolute !important"],
                  right: ["3", null, null, "-80px"],
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
                to={`/attractions/${title.toLowerCase().replace(/\s/g, "-")}`}
              >
                <Stack>
                  <Heading variant="heading.featuredTitle">{title}</Heading>
                  <Text variant="body.normal">{description}</Text>
                </Stack>
              </StyledLink>
            </Grid>
          </div>
        </Box>
      </Flex>
    </Box>
  );
};

export default AxeThrowingFeature;
