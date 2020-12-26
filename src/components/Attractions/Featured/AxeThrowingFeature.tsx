/** @jsx jsx */

import { FC } from "react";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { Box, Flex, Grid, Heading, Text, jsx } from "theme-ui";
import { Stack } from "raam";
import { FeaturedAttractionProps } from "../../../types";
import StyledLink from "../../Link.styled";
import Arrow from "../../Images/Arrow";
import { MediaItem } from "../../MediaItem";

const AxeThrowingFeature: FC<FeaturedAttractionProps> = ({
  data: { node },
}) => {
  const {
    axeThrowing: {
      childImageSharp: { fluid: goKartsBg },
    },
  } = useStaticQuery(graphql`
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
          isVideo={false}
          media={node.videoPoster}
          alt="People throwing axes"
          sx={{
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
            fluid={goKartsBg}
            sx={{
              position: "absolute",
              bg: "black.dark",
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
                position: "absolute",
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
              to={`/attractions/${node.title
                .toLowerCase()
                .replace(/\s/g, "-")}`}
            >
              <Stack>
                <Heading variant="heading.featuredTitle">{node.title}</Heading>
                <Text variant="body.mid">{node.description.description}</Text>
              </Stack>
            </StyledLink>
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
};

export default AxeThrowingFeature;
