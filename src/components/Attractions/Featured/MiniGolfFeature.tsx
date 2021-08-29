/** @jsxImportSource theme-ui */

import { FC } from "react";
import { Box, Flex, Grid, Heading, Text } from "theme-ui";
import { GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import { Stack } from "raam";
import StyledLink from "@/components/Link.styled";
import Arrow from "@/components/Images/Arrow";
import Brick from "@/components/../images/brick.png";
import { MediaItem } from "@/components/MediaItem";
import { ChildFluidObject, FeaturedAttractionProps } from "@/types/types";

interface Query {
  grass: ChildFluidObject;
}

const MiniGolfFeature: FC<FeaturedAttractionProps> = ({ data: { node } }) => {
  const {
    grass: {
      childImageSharp: { gatsbyImageData: grassTexture },
    },
  } = useStaticQuery<Query>(graphql`
    query grassQuery {
      grass: file(relativePath: { eq: "grass.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE, layout: FULL_WIDTH)
        }
      }
    }
  `);

  return (
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
          width: ["full", null, null, "7/12"],
          height: ["sm", null, null, "full"],
          objectFit: "cover",
          bg: "green.dark",
        }}
      />
      <Box
        sx={{
          display: "grid",
          position: "relative",
          width: ["full", null, null, "5/12"],
          minHeight: ["xs", null, null, "auto"],
          borderTop: ["24px solid", null, null, "none"],
          borderRight: "0",
          borderBottom: "0",
          borderLeft: ["0", null, null, "48px solid"],
          borderImage: [
            `url(${Brick}) 24 0 repeat`,
            null,
            null,
            `url(${Brick}) 0 48 repeat`,
          ],
        }}
      >
        <GatsbyImage
          image={grassTexture}
          alt="Textured background"
          aria-roledescription="background"
          sx={{
            gridArea: "1 / 1",
            bg: "green.light",
            height: "full",
            width: "full",
          }}
        />
        <Box
          sx={{
            gridArea: "1 / 1",
            position: "absolute",
            bg: "green.dark",
            width: "full",
            height: "full",
            opacity: "0.75",
          }}
        />
        <Grid
          color="white.light"
          p="7"
          sx={{ height: "full", gridArea: "1 / 1" }}
          variant="featuredAttraction"
        >
          <Arrow
            sx={{
              position: ["absolute !important"],
              left: [null, null, null, "-80px"],
              right: ["3", null],
              top: ["-3rem", null, null, "-1rem"],
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
      </Box>
    </Flex>
  );
};

export default MiniGolfFeature;
