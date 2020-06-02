/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Flex,
  jsx,
  Card,
  Grid,
  useThemeUI,
  Box,
  Text,
} from "theme-ui";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import SEO from "../components/seo";
import WoodBg from "../components/Images/WoodBg";
import MoreAttractionsDivider from "../components/SectionDivider/MoreAttractionsDivider";

const AttractionsLayout = ({ data: { contentfulSectionPages } }) => {
  const { theme } = useThemeUI();
  console.log("theme", theme);
  console.log(theme.sizes["1/3"]);

  return (
    <>
      <SEO
        description={contentfulSectionPages.description.description}
        title={contentfulSectionPages.title}
      />
      <WoodBg overlayColor="blue.light">
        <Flex sx={{ flexDirection: "column", minHeight: "screenHeight" }}>
          <MoreAttractionsDivider title={contentfulSectionPages.title} />
          <Container my="6" sx={{ flex: "1 1 auto", width: "auto" }}>
            <Grid
              columns={`1fr minmax(${theme.sizes.xs}, ${theme.sizes["1/3"]})`}
            >
              <Card
                bg="white.light"
                color="black.dark"
                p="4"
                sx={{ borderRadius: "lg" }}
              >
                <MDXRenderer>
                  {contentfulSectionPages.content.childMdx.body}
                </MDXRenderer>
              </Card>
              <Box>
                {contentfulSectionPages.media.map((image) => (
                  <Card key={image.title} variant="attraction">
                    <Img
                      alt={image.title}
                      fluid={image.fluid}
                      sx={{ borderRadius: "lg" }}
                    />
                    <Text p="3">
                      {contentfulSectionPages.description.description}
                    </Text>
                  </Card>
                ))}
              </Box>
            </Grid>
          </Container>
        </Flex>
      </WoodBg>
    </>
  );
};

export const sectionsQuery = graphql`
  query AutoSectionQuery($id: String) {
    contentfulSectionPages(id: { eq: $id }) {
      id
      title
      slug
      description {
        description
      }
      content {
        childMdx {
          body
        }
      }
      media {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
        title
        description
      }
    }
  }
`;
// TODO: Fix PropTypes
AttractionsLayout.propTypes = {
  data: PropTypes.shape({
    contentfulSectionPages: PropTypes.shape({
      content: PropTypes.shape({
        childMdx: PropTypes.shape({
          body: PropTypes.string,
        }),
      }),
      description: PropTypes.shape({
        description: PropTypes.string,
      }),
      media: PropTypes.shape({
        fluid: PropTypes.shape({
          aspectRatio: PropTypes.number,
          sizes: PropTypes.string,
          src: PropTypes.string,
          srcSet: PropTypes.string,
          srcSetWebp: PropTypes.string,
          srcWebp: PropTypes.string,
        }),
      }),
      title: PropTypes.string,
    }),
  }).isRequired,
};

export default AttractionsLayout;
