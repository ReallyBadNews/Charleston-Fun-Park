import React, { FC, memo, NamedExoticComponent, useState } from "react";
import { graphql, PageProps } from "gatsby";
import {
  Button,
  Card,
  Container,
  Flex,
  Grid,
  Heading,
  Input,
  Textarea,
  Label,
  Radio as ThemeUIRadio,
  Text,
} from "theme-ui";
import { motion } from "framer-motion";
import {
  FormiumForm,
  defaultComponents,
  FormiumComponents,
  FormControlProps,
} from "@formium/react";
import {
  ControlProps,
  TextareaProps,
  TextInputProps,
} from "@formium/react/dist/inputs";
import { Form } from "@formium/types";
import { formium } from "@/lib/formium";
import SEO from "@/components/seo";
import StarDivider from "@/components/Dividers/StarDivider";
import WoodBg from "@/components/Images/WoodBg";
import { Inline, Stack } from "raam";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons/faTimesCircle";

const fieldMessageVariant = {
  hide: { opacity: 0, y: -8 },
  show: { opacity: 1, y: 0 },
};

const FormControl: NamedExoticComponent<FormControlProps> = memo(
  function FormControl({ children, description, error, label, labelFor }) {
    return (
      <Stack gap="2" sx={{ lineHeight: "none" }}>
        <Stack gap="1">
          {label && <Label htmlFor={labelFor}>{label}</Label>}
          {description && (
            <Text sx={{ color: "tailwind.coolGray.400", fontSize: "0" }}>
              {description}
            </Text>
          )}
        </Stack>
        {children}
        <motion.div
          animate={error ? "show" : "hide"}
          initial="hide"
          variants={fieldMessageVariant}
        >
          <Inline gap="1" sx={{ color: "red.dark", fontSize: "0" }}>
            <FontAwesomeIcon icon={faTimesCircle} />
            <Text>{error}</Text>
          </Inline>
        </motion.div>
      </Stack>
    );
  }
);

const CustomButton = memo(function CustomButton(props) {
  return <Button variant="cta" {...props} />;
});

const PreviousButton = (props) => (
  <CustomButton mr="3" bg="blue.dark" color="white.light" {...props} />
);

const PageGrid = memo(function PageGrid(props) {
  return <Grid columns="1fr" my="3" {...props} />;
});

const TextInput: NamedExoticComponent<TextInputProps> = memo(function TextInput(
  props
) {
  return <Input {...props} />;
});

const TextArea: NamedExoticComponent<TextareaProps> = memo(function TextArea(
  props
) {
  return <Textarea {...props} />;
});

const Radio: NamedExoticComponent<ControlProps> = memo(function Radio(props) {
  return (
    <Label sx={{ alignItems: "center" }}>
      <ThemeUIRadio {...props} />
      {props.label}
    </Label>
  );
});

const formComponents: FormiumComponents = {
  ...defaultComponents,
  FormControl,
  SubmitButton: CustomButton,
  NextButton: CustomButton,
  PreviousButton,
  TextInput,
  Textarea: TextArea,
  ElementsWrapper: PageGrid,
  Radio,
};

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
      description {
        description
      }
    }
  }
`;
