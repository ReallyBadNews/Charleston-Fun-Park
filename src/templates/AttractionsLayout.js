/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { Container, Flex, jsx, Heading } from "theme-ui";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import SEO from "../components/seo";
import GlobalStyles from "../../static/GlobalStyles";
import Header from "../components/Header/Header";

const AttractionsLayout = ({ data: { contentfulAttraction } }) => (
  <>
    <SEO title="Attractions" />
    <GlobalStyles />
    <Flex sx={{ flexDirection: "column", minHeight: "screenHeight" }}>
      <Header />
      <Img fluid={contentfulAttraction.heroImage.fluid} />
      <Container px={["3", null, "0"]} py="6" sx={{ flex: "1 1 auto" }}>
        <Heading mb="3">{contentfulAttraction.title}</Heading>
        <MDXRenderer>{contentfulAttraction.body.childMdx.body}</MDXRenderer>
      </Container>
    </Flex>
  </>
);

export const attractionsQuery = graphql`
  query AutoAttractionsQuery($id: String) {
    contentfulAttraction(id: { eq: $id }) {
      id
      body {
        childMdx {
          body
        }
      }
      heroImage {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
        title
      }
      title
    }
  }
`;

AttractionsLayout.propTypes = {
  data: PropTypes.shape({
    contentfulAttraction: PropTypes.shape({
      body: PropTypes.shape({
        childMdx: PropTypes.shape({
          body: PropTypes.string,
        }),
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
