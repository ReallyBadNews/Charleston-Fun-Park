/** @jsx jsx */
/** @jsxFrag */

import React, { FC } from "react";
import { jsx, Grid, Container } from "theme-ui";
import { useStaticQuery, graphql, PageProps } from "gatsby";
import WoodBg from "../components/Images/WoodBg";
import StarDivider from "../components/Dividers/StarDivider";
import AttractionsCard from "../components/Attractions/AttractionsCard";
import SEO from "../components/seo";
import { FluidObject } from "gatsby-image";

type AllAttractions = {
  node: {
    id: string;
    heroImage: {
      fluid: FluidObject;
    };
    description: {
      description: string;
    };
    isVideo: boolean;
    title: string;
    order: string;
    pricePoint1Price: string;
    pricePoint1Title: string;
    pricePoint1Unit: string;
    pricePoint2Price: string;
    pricePoint2Title: string;
    pricePoint2Unit: string;
    videoPoster: {
      fluid: FluidObject;
    };
  };
};

type AttractionsQuery = {
  allContentfulAttraction: {
    edges: AllAttractions[];
  };
};

const AttractionsPage: FC<PageProps> = ({ location: { pathname } }) => {
  const {
    allContentfulAttraction: { edges: posts },
  } = useStaticQuery<AttractionsQuery>(graphql`
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
        description="Get your FUN on with Go-Karts, 36 Holes of Mini-Golf, an Outdoor Axe Throwing Arena, a Virtual Reality Roller Coaster, Bumper Cars, a Full Arcade with Prizes and the all new OMNI VR Battle Arena! And if all that makes you hungry or thirsty… we have snacks like Dippin’ Dots, F’Real Milkshakes, chips and drinks (including adult beverages like beer and wine). If you’re looking for some fun, then you’ve come to the right place!"
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

export default AttractionsPage;
