/** @jsx jsx */
import { Box, jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import SectionDivider from "../../SectionDivider/SectionDivider";
import OmniArenaFeature from "./OmniArenaFeature";
import GoKartsFeature from "./GoKartsFeature";
import MiniGolfFeature from "./MiniGolfFeature";
import AxeThrowingFeature from "./AxeThrowingFeature";

const AttractionsSection = () => {
  const {
    allContentfulAttraction: { edges },
  } = useStaticQuery(graphql`
    query AttractionsQuery {
      allContentfulAttraction(
        sort: { order: ASC, fields: order }
        filter: { order: { lt: 5 } }
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
