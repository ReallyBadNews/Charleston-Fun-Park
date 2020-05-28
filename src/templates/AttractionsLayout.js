/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { Container, Flex, jsx, Heading, Card } from "theme-ui";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import SEO from "../components/seo";
import WoodBg from "../components/Images/WoodBg";

const AttractionsLayout = ({ data: { contentfulAttraction } }) => (
  <>
    <SEO
      description={contentfulAttraction.description.description}
      title={contentfulAttraction.title}
    />
    <WoodBg overlayColor="blue.light">
      <Flex sx={{ flexDirection: "column", minHeight: "screenHeight" }}>
        <Img
          fluid={contentfulAttraction.heroImage.fluid}
          sx={{ maxHeight: "xl" }}
        />
        <Container
          mx={["3", null, null, null, "auto"]}
          my="6"
          sx={{ flex: "1 1 auto", width: "auto" }}
        >
          <Card
            bg="white.light"
            color="black.dark"
            p="4"
            sx={{ borderRadius: "lg", width: "auto" }}
          >
            <Heading mb="3">{contentfulAttraction.title}</Heading>
            <MDXRenderer>{contentfulAttraction.body.childMdx.body}</MDXRenderer>
          </Card>
        </Container>
      </Flex>
    </WoodBg>
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
      description {
        description
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
