/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { jsx, Grid, Container } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import WoodBg from "../components/Images/WoodBg";
import MoreAttractionsDivider from "../components/SectionDivider/MoreAttractionsDivider";
import AttractionsCard from "../components/Attractions/AttractionsCard";
import SEO from "../components/seo";

const AttractionsPage = () => {
  const {
    allContentfulAttraction: { edges: posts },
  } = useStaticQuery(graphql`
    query AttractionsPageQuery {
      allContentfulAttraction(sort: { order: ASC, fields: order }) {
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
            pricePoint1Price
            pricePoint1Title
            pricePoint1Unit
            pricePoint2Price
            pricePoint2Title
            pricePoint2Unit
          }
        }
      }
    }
  `);

  return (
    <>
      <SEO title="Things to Do in Charleston – Fun Family Entertainment" />
      <MoreAttractionsDivider title="Attractions" />
      <WoodBg overlayColor="blue.light">
        <Container px={["3", null, null, null, "0"]} py="7">
          <Grid
            columns={["1fr", null, "repeat(2, 1fr)", "repeat(3, 1fr)"]}
            variant="attractionsPage"
          >
            {posts.map((attraction) => (
              <AttractionsCard
                key={attraction.node.title}
                description={attraction.node.description.description}
                image={attraction.node.heroImage.fluid}
                pricePoint1Price={attraction.node.pricePoint1Price}
                pricePoint1Title={attraction.node.pricePoint1Title}
                pricePoint1Unit={attraction.node.pricePoint1Unit}
                pricePoint2Price={attraction.node.pricePoint2Price}
                pricePoint2Title={attraction.node.pricePoint2Title}
                pricePoint2Unit={attraction.node.pricePoint2Unit}
                title={attraction.node.title}
              />
            ))}
          </Grid>
        </Container>
      </WoodBg>
    </>
  );
};

export default AttractionsPage;
