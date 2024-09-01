import StarDivider from "@/components/Dividers/StarDivider";
import WoodBg from "@/components/Images/WoodBg";
import { MediaItem } from "@/components/MediaItem";
import SEO from "@/components/seo";
import { MediaObject } from "@/types/types";
import { PageProps, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Stack } from "raam";
import { FC } from "react";
import { Card, Container, Flex, Heading } from "theme-ui";

interface JobPageProps extends PageProps {
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

const JobPage: FC<JobPageProps> = ({
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
              alt={media.description}
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
              <Stack gap="3" p="4">
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
                  <MDXRenderer>{content}</MDXRenderer>
                </Stack>
              </Stack>
            </Card>
          </Container>
        </Flex>
      </WoodBg>
    </>
  );
};

export default JobPage;

export const query = graphql`
  {
    contentfulSectionPages(id: { eq: "84ee1051-4200-57f6-9ede-7a128f8ecace" }) {
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
        gatsbyImageData(width: 735, layout: CONSTRAINED, formats: [WEBP, AUTO])
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
