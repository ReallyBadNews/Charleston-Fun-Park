/** @jsx jsx */
import { Box, jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import SectionDivider from "../Dividers/SectionDivider";
import OmniArenaFeature from "../Attractions/Featured/OmniArenaFeature";
import GoKartsFeature from "../Attractions/Featured/GoKartsFeature";
import MiniGolfFeature from "../Attractions/Featured/MiniGolfFeature";
import AxeThrowingFeature from "../Attractions/Featured/AxeThrowingFeature";

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
              fluid {
                ...GatsbyContentfulFluid_withWebp_noBase64
              }
              file {
                contentType
                url
              }
            }
            description {
              description
            }
            isVideo
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
