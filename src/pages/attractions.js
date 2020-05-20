/** @jsx jsx */
import { jsx, Grid, Container } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import MainLayout from "../templates/MainLayout";
import WoodBg from "../components/Images/WoodBg";
import MoreAttractionsDivider from "../components/SectionDivider/MoreAttractionsDivider";
import AttractionsCard from "../components/Attractions/AttractionsCard";

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
          }
        }
      }
    }
  `);

  return (
    <MainLayout title="Attractions">
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
