import StarDivider from "@/components/Dividers/StarDivider";
import { formComponents } from "@/components/Forms/FormiumComponents";
import WoodBg from "@/components/Images/WoodBg";
import SEO from "@/components/seo";
import { formium } from "@/src/lib/formium";
import { FormiumForm } from "@formium/react";
import { Form } from "@formium/types";
import { FormikValues } from "formik";
import { graphql, PageProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Stack } from "raam";
import React, { FC, useState } from "react";
import { Card, Container, Flex, Heading, Text } from "theme-ui";
import { MediaItem } from "../components/MediaItem";
import { MediaObject } from "../types";

interface PuttOpenPageProps extends PageProps {
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

const PuttOpenPage: FC<PuttOpenPageProps> = ({
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
  const [formValues, setFormValues] = useState<FormikValues | null>(null);

  //   {
  //   "name": "name 1",
  //   "phoneNumber": "phone 1",
  //   "emailAddress": "kelshoff+email1@grahamdigital.com",
  //   "addPerson1": "+ Player",
  //   "fullName2": "name 2",
  //   "emailAddress2": "kelshoff+email2@grahamdigital.com",
  //   "addPerson2": "+ Player",
  //   "fullName3": "name 3",
  //   "emailAddress3": "kelshoff+email3@grahamdigital.com",
  //   "addPerson3": "+ Player",
  //   "fullName4": "name 4",
  //   "emailAddress4": "kelshoff+email4@grahamdigital.com",
  //   "teeTime": "3pm",
  //   "website": ""
  // }

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
            <Card variant="image" sx={{ minHeight: "32rem" }}>
              <Stack p="4" gap="3">
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
                    <Text variant="body.lg">
                      {`Thanks for signing up ${formValues?.name}, an email was sent to ${formValues?.emailAddress}. Your tee time is at ${formValues?.teeTime}, good luck!`}
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
                      data={formiumForm}
                      components={formComponents}
                      onSubmit={async (values) => {
                        // Send form values to Formium
                        await formium.submitForm(
                          "mini-golf-tournament",
                          values
                        );
                        window.scrollTo(0, 0);
                        setFormValues(values);
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

export default PuttOpenPage;

export const query = graphql`
  {
    formiumForm(slug: { eq: "mini-golf-tournament" }) {
      id
      createAt
      name
      projectId
      schema
      slug
      updateAt
      version
    }
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
