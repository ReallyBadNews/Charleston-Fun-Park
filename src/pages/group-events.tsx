import React, { FC, useState } from "react";
import { graphql, PageProps } from "gatsby";
import { Card, Container, Flex, Heading, Text } from "theme-ui";
import { FormiumForm } from "@formium/react";
import { Form } from "@formium/types";
import { Stack } from "raam";
import { formium } from "@/src/lib/formium";
import { formComponents } from "@/components/Forms/FormiumComponents";
import SEO from "@/components/seo";
import StarDivider from "@/components/Dividers/StarDivider";
import WoodBg from "@/components/Images/WoodBg";
import { MediaItem } from "../components/MediaItem";
import { MediaObject } from "../types";
import { MDXRenderer } from "gatsby-plugin-mdx";

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
      <SEO pathname={pathname} title={seoTitle} description={description} />
      <StarDivider title={title} />
      <WoodBg>
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
            <Card variant="image">
              <Stack p="4" gap="3" sx={null}>
                {success ? (
                  <Stack gap="2" sx={null}>
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
                    <Stack gap="2" sx={null}>
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
                      data={formiumForm}
                      components={formComponents}
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
