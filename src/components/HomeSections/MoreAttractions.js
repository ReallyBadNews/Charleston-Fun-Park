/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Container, Grid, jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import WoodBg from "../Images/WoodBg";
import StarDivider from "../Dividers/StarDivider";
import AttractionsCard from "../Attractions/AttractionsCard";

const MoreAttractions = () => {
  const {
    allContentfulAttraction: { edges: attractions },
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
              fluid {
                ...GatsbyContentfulFluid_withWebp_noBase64
              }
            }
            isVideo
            title
            order
            videoPoster {
              fluid {
                ...GatsbyContentfulFluid_withWebp_noBase64
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
      <WoodBg overlayColor="blue.light">
        <Container px={[`3`, null, null, null, `0`]} py="7">
          <Grid columns={[`1fr`, null, `repeat(2, 1fr)`, `repeat(4, 1fr)`]}>
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
      </WoodBg>
    </>
  );
};

export default MoreAttractions;
