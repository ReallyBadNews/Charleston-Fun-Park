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
import StarDivider from "../components/Dividers/StarDivider";

const AttractionsLayout = ({ data: { contentfulSectionPages } }) => {
  const { theme } = useThemeUI();

  return (
    <>
      <SEO
        description={contentfulSectionPages.description.description}
        title={contentfulSectionPages.title}
      />
      <WoodBg overlayColor="blue.light">
        <Flex sx={{ flexDirection: "column", minHeight: "screenHeight" }}>
          <StarDivider title={contentfulSectionPages.title} />
          <Container my="6" sx={{ flex: "1 1 auto", width: "auto" }}>
            <Grid
              columns={[
                "1fr",
                null,
                contentfulSectionPages.media
                  ? `1fr minmax(${theme.sizes.xs}, ${theme.sizes["1/3"]})`
                  : `1fr`,
              ]}
              px={["3", null, null, null, "0"]}
              sx={!contentfulSectionPages.media && { maxWidth: "3xl" }}
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
              {contentfulSectionPages.media && (
                <Box>
                  {contentfulSectionPages.media.map((image) => (
                    <Card key={image.title} variant="image">
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
              )}
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
      id: PropTypes.string,
      media: PropTypes.arrayOf(
        PropTypes.shape({
          description: PropTypes.string,
          fluid: PropTypes.shape({
            aspectRatio: PropTypes.number,
            sizes: PropTypes.string,
            src: PropTypes.string,
            srcSet: PropTypes.string,
            srcSetWebp: PropTypes.string,
            srcWebp: PropTypes.string,
          }),
          title: PropTypes.string,
        })
      ),
      slug: PropTypes.string,
      title: PropTypes.string,
    }),
  }).isRequired,
};

export default AttractionsLayout;
