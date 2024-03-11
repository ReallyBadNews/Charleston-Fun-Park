import { memo, NamedExoticComponent } from "react";
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
  ButtonProps,
  HeadingProps,
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
  ({ children, description, error, label, labelFor }) => (
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
  )
);
FormControl.displayName = "FormControl";

const CustomHeading = memo((props: HeadingProps) => (
  <Heading variant="heading.title" {...props} />
));
CustomHeading.displayName = "CustomHeading";

const CustomButton = memo((props: ButtonProps) => (
  <Button variant="cta" {...props} />
));
CustomButton.displayName = "CustomButton";

const PreviousButton = (props: ButtonProps) => (
  <CustomButton bg="blue.dark" color="white.light" mr="3" {...props} />
);

const PageGrid = memo((props) => <Grid columns="1fr" my="3" {...props} />);
PageGrid.displayName = "PageGrid";

const TextInput: NamedExoticComponent<TextInputProps> = memo((props) => (
  <Input {...props} />
));
TextInput.displayName = "TextInput";

const TextArea: NamedExoticComponent<TextareaProps> = memo((props) => (
  <Textarea {...props} />
));
TextArea.displayName = "TextArea";

const Radio: NamedExoticComponent<ControlProps> = memo((props) => {
  const { label } = props;

  return (
    <Label sx={{ alignItems: "center" }}>
      <ThemeUIRadio {...props} />
      {label}
    </Label>
  );
});
Radio.displayName = "Radio";

export const formComponents: FormiumComponents = {
  ...defaultComponents,
  FormControl,
  SubmitButton: CustomButton as FormiumComponents["SubmitButton"],
  NextButton: CustomButton as FormiumComponents["NextButton"],
  PreviousButton: PreviousButton as FormiumComponents["PreviousButton"],
  TextInput,
  Textarea: TextArea,
  ElementsWrapper: PageGrid,
  Radio,
  Header: CustomHeading,
};
