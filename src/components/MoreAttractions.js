/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Container, Grid, jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import WoodBg from "./Images/WoodBg";
import MoreAttractionsDivider from "./SectionDivider/MoreAttractionsDivider";
import AttractionsCard from "./Attractions/AttractionsCard";

const MoreAttractions = () => {
  const {
    allContentfulAttraction: { edges },
  } = useStaticQuery(graphql`
    query MoreAttractionsQuery {
      allContentfulAttraction(
        sort: { order: ASC, fields: order }
        filter: { order: { gt: 4 } }
      ) {
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
            order
          }
        }
      }
    }
  `);

  return (
    <>
      <MoreAttractionsDivider title="More Attractions" to="/attractions/" />
      <WoodBg overlayColor="blue.light">
        <Container px={["3", null, null, null, "0"]} py="7">
          <Grid columns={["1fr", null, "repeat(2, 1fr)", "repeat(4, 1fr)"]}>
            {edges.map((attraction) => (
              <AttractionsCard
                key={attraction.node.title}
                image={attraction.node.heroImage.fluid}
                textAlign="center"
                title={attraction.node.title}
              />
            ))}
          </Grid>
        </Container>
      </WoodBg>
    </>
  );
};

export default MoreAttractions;
