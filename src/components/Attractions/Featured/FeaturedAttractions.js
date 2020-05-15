/** @jsx jsx */
import { Box, jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import OmniArenaFeature from "./OmniArenaFeature";
import GoKartsFeature from "./GoKartsFeature";

const AttractionsSection = () => {
  const {
    allContentfulAttraction: { edges },
  } = useStaticQuery(graphql`
    query AttractionsQuery {
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
          }
        }
      }
    }
  `);

  return (
    <Box as="section">
      <OmniArenaFeature data={edges[0]} />
      <GoKartsFeature data={edges[1]} />
    </Box>
  );
};

export default AttractionsSection;
