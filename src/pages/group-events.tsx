import React, { FC, useState } from "react";
import { graphql, PageProps } from "gatsby";
import { Card, Container, Flex, Heading, Text } from "theme-ui";
import { FormiumForm } from "@formium/react";
import { Form } from "@formium/types";
import { Stack } from "raam";
import { formium } from "@/lib/formium";
import { formComponents } from "@/components/Forms/FormiumComponents";
import SEO from "@/components/seo";
import StarDivider from "@/components/Dividers/StarDivider";
import WoodBg from "@/components/Images/WoodBg";

interface JobPageProps extends PageProps {
  data: {
    formiumForm: Form;
    contentfulSectionPages: {
      title: string;
      description: string;
    };
  };
}

const JobPage: FC<JobPageProps> = ({
  location: { pathname },
  data: {
    formiumForm,
    contentfulSectionPages: { title, description },
  },
}) => {
  const [success, setSuccess] = useState(false);

  return (
    <>
      <SEO pathname={pathname} title={title} description={description} />
      <StarDivider title={title} />
      <WoodBg>
        <Flex sx={{ flexDirection: "column", minHeight: "screenHeight" }}>
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
                    Charleston Fun Park Team Member Application
                  </Heading>
                  <Text variant="body.mid">
                    This application must be filled out completely and
                    accurately to be considered for employment.
                  </Text>
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
      description {
        description
      }
    }
  }
`;
