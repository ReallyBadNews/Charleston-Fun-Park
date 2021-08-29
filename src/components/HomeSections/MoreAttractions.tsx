/** @jsxImportSource theme-ui */

import React from "react";
import { Container, Grid, jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import WoodBg from "@/components/Images/WoodBg";
import StarDivider from "@/components/Dividers/StarDivider";
import AttractionsCard from "@/components/Attractions/AttractionsCard";
import { MediaObject } from "@/types/types";

interface AttractionProps {
  node: {
    id: string;
    heroImage: MediaObject;
    title: string;
    isVideo: boolean;
    order: number;
    videoPoster: MediaObject;
  };
}

interface Query {
  allContentfulAttraction: {
    edges: AttractionProps[];
  };
}

const MoreAttractions = (): JSX.Element => {
  const {
    allContentfulAttraction: { edges: attractions },
  } = useStaticQuery<Query>(graphql`
    query MoreAttractionsQuery {
      allContentfulAttraction(
        sort: { order: ASC, fields: order }
        filter: { order: { gt: 4 } }
      ) {
        edges {
          node {
            id
            heroImage {
              gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
              file {
                contentType
                url
              }
            }
            title
            isVideo
            order
            videoPoster {
              gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
              file {
                contentType
                url
              }
            }
          }
        }
      }
    }
  `);

  return (
    <>
      <StarDivider
        as="h4"
        overlayColor="blue.xdark"
        title="More Attractions"
        to="/attractions/"
      />
      <div sx={{ display: "grid", position: "relative", overflow: "hidden" }}>
        <WoodBg overlayColor="blue.light" sx={{ position: "absolute" }} />
        <Container
          px={["3", null, null, null, "0"]}
          py="7"
          sx={{ zIndex: "1" }}
        >
          <Grid columns={["1fr", null, "repeat(2, 1fr)", "repeat(4, 1fr)"]}>
            {attractions.map((attraction) => (
              <AttractionsCard
                key={attraction.node.title}
                media={
                  attraction.node.isVideo
                    ? attraction.node.videoPoster
                    : attraction.node.heroImage
                }
                textAlign="center"
                title={attraction.node.title}
              />
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default MoreAttractions;
