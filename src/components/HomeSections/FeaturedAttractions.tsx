/** @jsxImportSource theme-ui */
import { Box, jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import SectionDivider from "@/components/Dividers/SectionDivider";
import OmniArenaFeature from "@/components/Attractions/Featured/OmniArenaFeature";
import GoKartsFeature from "@/components/Attractions/Featured/GoKartsFeature";
import MiniGolfFeature from "@/components/Attractions/Featured/MiniGolfFeature";
import AxeThrowingFeature from "@/components/Attractions/Featured/AxeThrowingFeature";
import { Attraction } from "@/types/types";

interface FeaturedAttraction {
  node: Attraction;
}

interface Query {
  allContentfulAttraction: {
    edges: FeaturedAttraction[];
  };
}

const AttractionsSection = (): JSX.Element => {
  const {
    allContentfulAttraction: { edges },
  } = useStaticQuery<Query>(graphql`
    query AttractionsQuery {
      allContentfulAttraction(
        sort: { order: ASC, fields: order }
        filter: { order: { lt: 5 } }
      ) {
        edges {
          node {
            id
            heroImage {
              file {
                contentType
                url
              }
              title
              description
              gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR)
            }
            videoPoster {
              file {
                contentType
                url
              }
              title
              description
              gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR)
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

  // TODO: Make ordering controllable via the `Order` field
  return (
    <Box as="section">
      <OmniArenaFeature data={edges[0]} />
      <GoKartsFeature data={edges[1]} />
      <MiniGolfFeature data={edges[2]} />
      <SectionDivider bg="black.dark" stars />
      <AxeThrowingFeature data={edges[3]} />
    </Box>
  );
};

export default AttractionsSection;
