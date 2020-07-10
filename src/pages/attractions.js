/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { jsx, Grid, Container } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import WoodBg from "../components/Images/WoodBg";
import StarDivider from "../components/Dividers/StarDivider";
import AttractionsCard from "../components/Attractions/AttractionsCard";
import SEO from "../components/seo";

const AttractionsPage = ({ location: { pathname } }) => {
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
            isVideo
            title
            order
            pricePoint1Price
            pricePoint1Title
            pricePoint1Unit
            pricePoint2Price
            pricePoint2Title
            pricePoint2Unit
            videoPoster {
              fluid {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  return (
    <>
      <SEO
        pathname={pathname}
        title="Things to Do in Charleston – Fun Family Entertainment"
      />
      <StarDivider title="Attractions" />
      <WoodBg
        overlayColor="blue.light"
        sx={{ backgroundRepeat: "repeat", backgroundSize: "auto" }}
      >
        <Container px={["3", null, null, null, "0"]} py="7">
          <Grid
            columns={["1fr", null, "repeat(2, 1fr)", "repeat(3, 1fr)"]}
            variant="attractionsPage"
          >
            {posts.map((attraction) => (
              <AttractionsCard
                key={attraction.node.title}
                description={attraction.node.description.description}
                media={
                  attraction.node.isVideo
                    ? attraction.node.videoPoster
                    : attraction.node.heroImage
                }
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

AttractionsPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default AttractionsPage;
