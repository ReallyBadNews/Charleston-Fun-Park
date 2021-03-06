import React, { memo, NamedExoticComponent } from "react";
import { Inline, Stack } from "raam";
import {
  Button,
  Grid,
  Input,
  Textarea,
  Label,
  Radio as ThemeUIRadio,
  Text,
  Heading,
} from "theme-ui";
import { motion } from "framer-motion";
import {
  defaultComponents,
  FormiumComponents,
  FormControlProps,
} from "@formium/react";
import {
  ControlProps,
  TextareaProps,
  TextInputProps,
} from "@formium/react/dist/inputs";
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

const CustomHeading = memo(function CustomHeading(props) {
  return <Heading variant="heading.title" {...props} />;
});

const CustomButton = memo(function CustomButton(props) {
  return <Button variant="cta" {...props} />;
});

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
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
  const { label } = props;

  return (
    <Label sx={{ alignItems: "center" }}>
      <ThemeUIRadio {...props} />
      {label}
    </Label>
  );
});

export const formComponents: FormiumComponents = {
  ...defaultComponents,
  FormControl,
  SubmitButton: CustomButton,
  NextButton: CustomButton,
  PreviousButton,
  TextInput,
  Textarea: TextArea,
  ElementsWrapper: PageGrid,
  Radio,
  Header: CustomHeading,
};
