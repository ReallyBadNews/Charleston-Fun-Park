/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Container, Flex, jsx, Heading } from "theme-ui";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import SEO from "../components/seo";
import GlobalStyles from "../../static/GlobalStyles";
import Header from "../components/Header/Header";

const AttractionsLayout = ({ data: { contentfulAttraction } }) => {
  console.log("data", contentfulAttraction);
  console.log("body", contentfulAttraction.body.body);

  return (
    <>
      <SEO title="Attractions" />
      <GlobalStyles />
      <Flex sx={{ flexDirection: "column", minHeight: "screenHeight" }}>
        <Header />
        <Container px={["3", null, "0"]} py="6" sx={{ flex: "1 1 auto" }}>
          <Heading>{contentfulAttraction.title}</Heading>
          <MDXRenderer>{contentfulAttraction.body.childMdx.body}</MDXRenderer>
        </Container>
      </Flex>
    </>
  );
};

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

export default AttractionsLayout;
