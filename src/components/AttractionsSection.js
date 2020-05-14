/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Box, Flex, Grid, Heading, Text, jsx } from "theme-ui";
import Img from "gatsby-image";
import { Stack } from "raam";

const AttractionsSection = () => {
  const {
    allContentfulAttraction: { edges },
  } = useStaticQuery(graphql`
    query AttractionsQuery {
      allContentfulAttraction {
        edges {
          node {
            id
            heroImage {
              id
              fluid {
                ...GatsbyContentfulFluid_withWebp
              }
            }
            description {
              description
            }
            title
          }
        }
      }
    }
  `);

  const Attractions = edges.map((attraction) => (
    <Flex key={attraction.node.id}>
      <Img fluid={attraction.node.heroImage.fluid} sx={{ width: "7/12" }} />
      <Grid
        bg="black.dark"
        color="white.light"
        p="7"
        sx={{ placeContent: "center", width: "5/12" }}
      >
        <Stack>
          <Heading variant="heading">{attraction.node.title}</Heading>
          <Text variant="description">
            {attraction.node.description.description}
          </Text>
        </Stack>
      </Grid>
    </Flex>
  ));

  return <Box>{Attractions}</Box>;
};

export default AttractionsSection;
