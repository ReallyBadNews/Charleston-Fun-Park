/** @jsxImportSource theme-ui */

import { Container, Grid } from "theme-ui";
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

const MoreAttractions = () => {
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
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
              file {
                contentType
                url
              }
            }
            title
            isVideo
            order
            videoPoster {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
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
        <WoodBg
          overlayColor="blue.light"
          sx={{
            gridArea: "1 / 1",
            position: "absolute",
            top: "0",
            right: "0",
            bottom: "0",
            left: "0",
          }}
        />
        <Container py="7" sx={{ gridArea: "1 / 1", zIndex: "1" }}>
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
