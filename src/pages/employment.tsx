import StarDivider from "@/components/Dividers/StarDivider";
import WoodBg from "@/components/Images/WoodBg";
import SEO from "@/components/seo";
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
      content: {
        childMdx: {
          body: string;
        };
      };
      description: { description: string };
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
    contentfulSectionPages(id: { eq: "698a581a-8d43-542d-8a04-3a218d362955" }) {
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
    }
  }
`;
