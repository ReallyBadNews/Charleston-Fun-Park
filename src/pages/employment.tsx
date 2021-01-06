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
import { FluidObject } from "gatsby-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
interface JobPageProps extends PageProps {
  data: {
    formiumForm: Form;
    contentfulSectionPages: {
      title: string;
      seoTitle: string;
      content: {
        childMdx: {
          body: string;
        };
      };
      media: {
        fluid: FluidObject;
      };
      description: string;
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
      description,
      content: {
        childMdx: { body: content },
      },
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
          <Container px={["3", null, null, null, "0"]} py="7">
            <Card variant="image">
              <Stack p="4" gap="3">
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
                {success ? (
                  <Text variant="body.mid">
                    Your application was successfully submitted. Thank you!
                  </Text>
                ) : (
                  <FormiumForm
                    data={formiumForm}
                    components={formComponents}
                    onSubmit={async (values) => {
                      // Send form values to Formium
                      await formium.submitForm("job-application", values);
                      window.scrollTo(0, 0);
                      setSuccess(true);
                    }}
                  />
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
    formiumForm(slug: { eq: "job-application" }) {
      id
      createAt
      name
      projectId
      schema
      slug
      updateAt
      version
    }
    contentfulSectionPages(id: { eq: "698a581a-8d43-542d-8a04-3a218d362955" }) {
      title
      seoTitle
      media {
        fluid {
          src
        }
      }
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
