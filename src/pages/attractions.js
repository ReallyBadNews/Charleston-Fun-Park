/** @jsx jsx */
import { jsx, Grid, Container } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import MainLayout from "../templates/MainLayout";
import WoodBg from "../components/Images/WoodBg";
import MoreAttractionsDivider from "../components/SectionDivider/MoreAttractionsDivider";
import AttractionsCard from "../components/Attractions/AttractionsCard";

const AttractionsPage = () => {
  const {
    allContentfulAttraction: { edges },
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
          }
        }
      }
    }
  `);

  return (
    <MainLayout title="Attractions">
      <MoreAttractionsDivider />
      <WoodBg overlayColor="blue.light">
        <Container px={["3", null, null, null, "0"]} py="7">
          <Grid columns={["1fr", null, "repeat(2, 1fr)", "repeat(4, 1fr)"]}>
            {edges.map((attraction) => (
              <AttractionsCard
                key={attraction.node.title}
                image={attraction.node.heroImage.fluid}
                title={attraction.node.title}
              />
            ))}
          </Grid>
        </Container>
      </WoodBg>
    </MainLayout>
  );
};

export default AttractionsPage;
