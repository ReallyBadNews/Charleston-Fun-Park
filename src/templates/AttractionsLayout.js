/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { Container, Flex, jsx, Heading, Card } from "theme-ui";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import SEO from "../components/seo";
import WoodBg from "../components/Images/WoodBg";
import MediaItem from "../components/MediaItem";

const AttractionsLayout = ({
  data: { contentfulAttraction },
  location: { pathname },
}) => (
  <>
    <SEO
      description={contentfulAttraction.description.description}
      pathname={pathname}
      title={contentfulAttraction.title}
    />
    <WoodBg overlayColor="blue.light">
      <Flex sx={{ flexDirection: "column", minHeight: "screenHeight" }}>
        <MediaItem
          isVideo={contentfulAttraction.isVideo}
          media={contentfulAttraction.heroImage}
          sx={{ maxHeight: "xl", width: "full", objectFit: "cover" }}
        />
        <Container
          mx="auto"
          my="6"
          px="3"
          sx={{ flex: "1 1 auto", width: "auto" }}
        >
          <Card
            bg="white.light"
            color="black.dark"
            p="4"
            sx={{ borderRadius: "lg", maxWidth: "3xl" }}
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
        file {
          contentType
          url
        }
      }
      isVideo
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
      isVideo: PropTypes.bool,
      title: PropTypes.string,
    }),
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default AttractionsLayout;
