import { FC, useState } from "react";
import { graphql, PageProps } from "gatsby";
import { Card, Container, Flex, Heading, Text } from "theme-ui";
import { FormiumForm } from "@formium/react";
import { Form } from "@formium/types";
import { Stack } from "raam";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { formium } from "@/src/lib/formium";
import { formComponents } from "@/components/Forms/FormiumComponents";
import SEO from "@/components/seo";
import StarDivider from "@/components/Dividers/StarDivider";
import WoodBg from "@/components/Images/WoodBg";
import { MediaItem } from "@/components/MediaItem";
import { MediaObject } from "@/types/types";

interface JobPageProps extends PageProps {
  data: {
    formiumForm: Form;
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
    formiumForm,
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
  const [success, setSuccess] = useState(false);

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
                {success ? (
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
                      Your application was successfly submitted. Thank you!
                    </Text>
                  </Stack>
                ) : (
                  <>
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
                    <FormiumForm
                      components={formComponents}
                      data={formiumForm}
                      onSubmit={async (values) => {
                        // Send form values to Formium
                        await formium.submitForm("event-request", values);
                        window.scrollTo(0, 0);
                        setSuccess(true);
                      }}
                    />
                  </>
                )}
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
    formiumForm(slug: { eq: "event-request" }) {
      id
      createAt
      name
      projectId
      schema
      slug
      updateAt
      version
    }
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
