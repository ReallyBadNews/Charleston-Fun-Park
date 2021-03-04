/** @jsx jsx */
/** @jsxFrag */

import React, { FC } from "react";
import { Container, Flex, jsx, Card, Text, Heading } from "theme-ui";
import { graphql, PageProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import SEO from "@/components/seo";
import WoodBg from "@/components/Images/WoodBg";
import StarDivider from "@/components/Dividers/StarDivider";
import { MediaItem } from "@/components/MediaItem";
import { Stack } from "raam";
import { MediaObject } from "@/types/index";

type CommonProps = {
  description?: string;
  title?: string;
};

interface SectionLayoutProps extends PageProps {
  data: {
    contentfulSectionPages: {
      content: {
        childMdx: {
          body: string;
        };
      };
      description: {
        description: string;
      };
      id: string;
      media: MediaObject;
      slug: string;
      title: string;
      seoTitle: string;
    };
  };
}

const SectionLayout: FC<SectionLayoutProps & CommonProps> = ({
  data: {
    contentfulSectionPages: {
      content: {
        childMdx: { body: content },
      },
      description: { description },
      media,
      title,
      seoTitle,
    },
  },
  location: { pathname },
}) => (
  <>
    <SEO pathname={pathname} title={seoTitle} description={description} />
    <StarDivider title={title} />
    <WoodBg>
      <Flex sx={{ flexDirection: "column", minHeight: "screenHeight" }}>
        {media ? (
          <MediaItem
            media={media}
            alt={description}
            sx={{
              bg: "blue.dark",
              maxHeight: "xl",
              height: "md",
              width: "full",
              objectFit: "cover",
            }}
          />
        ) : null}
        <Container px={["3", null, null, null, "0"]} py="7">
          <Card variant="image">
            <Stack p="4" gap="5">
              <Stack gap="2">
                <Heading
                  as="h2"
                  sx={{
                    fontFamily: "body",
                    fontSize: ["4", null, "7"],
                  }}
                >
                  {title}
                </Heading>
                <Text variant="body.mid">
                  <MDXRenderer>{content}</MDXRenderer>
                </Text>
              </Stack>
            </Stack>
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
      seoTitle
      description {
        description
      }
      content {
        childMdx {
          body
        }
      }
      media {
        fluid(maxWidth: 735) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
        file {
          contentType
          url
        }
        title
        description
      }
    }
  }
`;

export default SectionLayout;
