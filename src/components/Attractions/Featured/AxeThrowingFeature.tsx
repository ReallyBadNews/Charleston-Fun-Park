/** @jsx jsx */

import { FC } from "react";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { Box, Flex, Grid, Heading, Text, jsx } from "theme-ui";
import { Stack } from "raam";
import { ChildFluidObject, Attraction } from "@/types/types";
import StyledLink from "@/components/Link.styled";
import Arrow from "@/components/Images/Arrow";
import { MediaItem } from "@/components/MediaItem";

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
      childImageSharp: { fluid: axeThrowingBg },
    },
  } = useStaticQuery<ImageQuery>(graphql`
    query AxeThrowingBgQuery {
      axeThrowing: file(relativePath: { eq: "axeThrowingBg.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
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
          <BackgroundImage
            fluid={axeThrowingBg}
            sx={{
              position: ["absolute !important"],
              bg: "tailwind.red.900",
              height: "full",
              width: "full",
            }}
          />
          <Grid
            color="white.light"
            p="7"
            sx={{ height: "full" }}
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
                <Text className="description" variant="body.mid">
                  {description}
                </Text>
              </Stack>
            </StyledLink>
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
};

export default AxeThrowingFeature;
