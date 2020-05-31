/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { Container, Flex, jsx, Card } from "theme-ui";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import SEO from "../components/seo";
import WoodBg from "../components/Images/WoodBg";
import MoreAttractionsDivider from "../components/SectionDivider/MoreAttractionsDivider";

const AttractionsLayout = ({ data: { contentfulSectionPages } }) => (
  <>
    <SEO
      description={contentfulSectionPages.description.description}
      title={contentfulSectionPages.title}
    />
    <WoodBg overlayColor="blue.light">
      <Flex sx={{ flexDirection: "column", minHeight: "screenHeight" }}>
        <MoreAttractionsDivider title={contentfulSectionPages.title} />
        <Container
          mx={["3", null, null, null, "auto"]}
          my="6"
          sx={{ flex: "1 1 auto", width: "auto" }}
        >
          <Card
            bg="white.light"
            color="black.dark"
            mx="auto"
            p="4"
            sx={{ borderRadius: "lg", maxWidth: "3xl" }}
          >
            <MDXRenderer>
              {contentfulSectionPages.content.childMdx.body}
            </MDXRenderer>
          </Card>
        </Container>
      </Flex>
    </WoodBg>
  </>
);

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
      heroImage: PropTypes.shape({
        fluid: PropTypes.shape({
          aspectRatio: PropTypes.number,
          sizes: PropTypes.string,
          src: PropTypes.string,
          srcSet: PropTypes.string,
          srcSetWebp: PropTypes.string,
          srcWebp: PropTypes.string,
        }),
      }),
      id: PropTypes.string,
      title: PropTypes.string,
    }),
  }).isRequired,
};

export default AttractionsLayout;
