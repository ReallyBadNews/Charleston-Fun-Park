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
              fluid {
                ...GatsbyContentfulFluid_withWebp_noBase64
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
      <SEO
        pathname={pathname}
        title="Things to Do in Charleston – Fun Family Entertainment"
      />
      <StarDivider title="Attractions" />
      <WoodBg
        overlayColor="blue.light"
        sx={{ backgroundRepeat: `repeat`, backgroundSize: `auto` }}
      >
        <Container px={[`3`, null, null, null, `0`]} py="7">
          <Grid
            columns={[`1fr`, null, `repeat(2, 1fr)`, `repeat(3, 1fr)`]}
            variant="attractionsPage"
          >
            {posts.map(
              ({
                node: {
                  title,
                  description: { description },
                  isVideo,
                  videoPoster,
                  heroImage,
                  pricePoint1Price,
                  pricePoint1Title,
                  pricePoint1Unit,
                  pricePoint2Price,
                  pricePoint2Title,
                  pricePoint2Unit,
                },
              }) => (
                <AttractionsCard
                  key={title}
                  description={description}
                  media={isVideo ? videoPoster : heroImage}
                  pricePoint1Price={pricePoint1Price}
                  pricePoint1Title={pricePoint1Title}
                  pricePoint1Unit={pricePoint1Unit}
                  pricePoint2Price={pricePoint2Price}
                  pricePoint2Title={pricePoint2Title}
                  pricePoint2Unit={pricePoint2Unit}
                  title={title}
                />
              )
            )}
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
