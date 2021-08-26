/** @jsxImportSource theme-ui */

import React, { FC } from "react";
import { Box, Container, Flex, Heading, Text, Card, Divider } from "theme-ui";
import { Flex as Flexbox } from "raam";
import { graphql, PageProps } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import SEO from "@/components/seo";
import WoodBg from "@/components/Images/WoodBg";
import { MediaItem } from "@/components/MediaItem";
import { MediaObject } from "@/types/types";

interface AttractionsLayoutProps extends PageProps {
  data: {
    contentfulAttraction: {
      body: {
        childMdx: {
          body: string;
        };
      };
      description: {
        description: string;
      };
      heroImage: MediaObject;
      id: string;
      isVideo: boolean;
      pricePoint1Price: number;
      pricePoint1Title: string;
      pricePoint1Unit: string;
      pricePoint2Price: number;
      pricePoint2Title: string;
      pricePoint2Unit: string;
      title: string;
      videoPoster: {
        fixed: GatsbyImage;
      };
    };
  };
}

const AttractionsLayout: FC<AttractionsLayoutProps> = ({
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
            media={contentfulAttraction.heroImage}
            alt={contentfulAttraction.description.description}
            sx={{
              maxHeight: "xl",
              height: "xl",
              width: "full",
              objectFit: "cover",
              backgroundColor: "blue.dark",
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
              <Heading as="h1" mb="3" variant="heading.largeTitle">
                {contentfulAttraction.title}
              </Heading>
              <MDXRenderer>
                {contentfulAttraction.body.childMdx.body}
              </MDXRenderer>
              {contentfulAttraction.pricePoint1Price && (
                <Box>
                  <Divider />
                  <Flexbox gap="3" py="3">
                    <Box
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

export default AttractionsLayout;
