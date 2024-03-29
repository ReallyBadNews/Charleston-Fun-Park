/** @jsxImportSource theme-ui */

import { graphql, PageProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Stack } from "raam";
import { FC } from "react";
import { Card, Container, Flex, Heading, Text } from "theme-ui";
import StarDivider from "@/components/Dividers/StarDivider";
import WoodBg from "@/components/Images/WoodBg";
import { MediaItem } from "@/components/MediaItem";
import SEO from "@/components/seo";
import { MediaObject } from "@/types/types";

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
    <SEO description={description} pathname={pathname} title={seoTitle} />
    <StarDivider title={title} />
    <WoodBg>
      <Flex
        sx={{
          flexDirection: "column",
          minHeight: "screenHeight",
          gridArea: "1 / 1",
          zIndex: "1",
        }}
      >
        {media ? (
          <MediaItem
            alt={description}
            media={media}
            sx={{
              bg: "blue.dark",
              maxHeight: "xl",
              height: "md",
              width: "full",
              objectFit: "cover",
            }}
          />
        ) : null}
        <Container py="7">
          <Card variant="image">
            <Stack gap="5" p="4">
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
                  {/* @ts-expect-error - TODO: update theme-ui */}
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
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
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

SectionLayout.defaultProps = {
  description: undefined,
  title: undefined,
};

export default SectionLayout;
