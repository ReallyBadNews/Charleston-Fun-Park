/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Container,
  Flex,
  jsx,
  Heading,
  Text,
  Card,
  Divider,
} from "theme-ui";
import { Flex as Flexbox } from "raam";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import SEO from "../components/seo";
import WoodBg from "../components/Images/WoodBg";
import { MediaItem } from "../components/MediaItem";

const AttractionsLayout = ({
  data: { contentfulAttraction },
  location: { pathname },
}) => {
  return (
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
            sx={{
              maxHeight: "xl",
              height: "xl",
              width: "full",
              objectFit: "cover",
            }}
            videoPoster={contentfulAttraction.videoPoster.fixed.src}
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
              <MDXRenderer>
                {contentfulAttraction.body.childMdx.body}
              </MDXRenderer>
              {contentfulAttraction.pricePoint1Price && (
                <Box>
                  <Divider />
                  <Flexbox gap="3" py="3">
                    <Box
                      gap="0"
                      pr="3"
                      sx={{
                        borderRight:
                          contentfulAttraction.pricePoint2Price && "1px solid",
                        borderRightColor: "black.border",
                      }}
                    >
                      <Text variant="text.cardPricing">
                        {contentfulAttraction.pricePoint1Title}
                      </Text>
                      <Text variant="text.cardPricing">
                        {`$${contentfulAttraction.pricePoint1Price}`}
                        <span> / </span>
                        {contentfulAttraction.pricePoint1Unit}
                      </Text>
                    </Box>
                    {contentfulAttraction.pricePoint2Price && (
                      <Box>
                        <Text variant="text.cardPricing">
                          {contentfulAttraction.pricePoint2Title}
                        </Text>
                        <Text variant="text.cardPricing">
                          {`$${contentfulAttraction.pricePoint2Price}`}
                          <span> / </span>
                          {contentfulAttraction.pricePoint2Unit}
                        </Text>
                      </Box>
                    )}
                  </Flexbox>
                  <Divider />
                </Box>
              )}
            </Card>
          </Container>
        </Flex>
      </WoodBg>
    </>
  );
};

export const attractionsQuery = graphql`
  query AutoAttractionsQuery($id: String) {
    contentfulAttraction(id: { eq: $id }) {
      body {
        childMdx {
          body
        }
      }
      description {
        description
      }
      heroImage {
        fluid(maxWidth: 2048) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
        file {
          contentType
          url
        }
      }
      id
      isVideo
      title
      pricePoint1Price
      pricePoint1Title
      pricePoint1Unit
      pricePoint2Price
      pricePoint2Title
      pricePoint2Unit
      videoPoster {
        fixed(width: 1920) {
          src
        }
      }
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
      pricePoint1Price: PropTypes.number,
      pricePoint1Title: PropTypes.string,
      pricePoint1Unit: PropTypes.string,
      pricePoint2Price: PropTypes.number,
      pricePoint2Title: PropTypes.string,
      pricePoint2Unit: PropTypes.string,
      title: PropTypes.string,
      videoPoster: PropTypes.shape({
        fixed: PropTypes.shape({
          src: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default AttractionsLayout;
