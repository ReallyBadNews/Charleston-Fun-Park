import StarDivider from "@/components/Dividers/StarDivider";
import WoodBg from "@/components/Images/WoodBg";
import { MediaItem } from "@/components/MediaItem";
import SEO from "@/components/seo";
import { MediaObject } from "@/types/types";
import { graphql, PageProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Stack } from "raam";
import React, { FC } from "react";
import { Card, Container, Flex, Heading } from "theme-ui";

interface PuttOpenPageProps extends PageProps {
  data: {
    contentfulSectionPages: {
      title: string;
      seoTitle: string;
      description: {
        description: string;
      };
      content: {
        childMdx: {
          body: string;
        };
      };
      media: MediaObject;
    };
  };
}

const PuttOpenPage: FC<PuttOpenPageProps> = ({
  location: { pathname },
  data: {
    contentfulSectionPages: {
      title,
      seoTitle,
      description: { description },
      content: {
        childMdx: { body: content },
      },
      media,
    },
  },
}) => {
  return (
    <>
      <SEO pathname={pathname} title={seoTitle} description={description} />
      <StarDivider title={title} />
      <WoodBg overlayColor="tailwind.green.300">
        <Flex sx={{ flexDirection: "column", minHeight: "screenHeight" }}>
          {media ? (
            <MediaItem
              media={media}
              alt={media.description}
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
            <Card variant="image" sx={{ minHeight: "32rem" }}>
              <Stack p="4" gap="3">
                <Heading
                  as="h2"
                  sx={{
                    fontFamily: "body",
                    fontSize: ["4", null, "7"],
                  }}
                >
                  {title}
                </Heading>
                <MDXRenderer>{content}</MDXRenderer>
              </Stack>
            </Card>
          </Container>
        </Flex>
      </WoodBg>
    </>
  );
};

export default PuttOpenPage;

export const query = graphql`
  {
    contentfulSectionPages(slug: { eq: "fun-putt-open" }) {
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
