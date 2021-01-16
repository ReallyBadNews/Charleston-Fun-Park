import * as React from "react";
import {
  forwardRef,
  ChakraProps,
  chakra,
  ComponentWithAs,
} from "@chakra-ui/react";
import { motion, MotionProps, isValidMotionProp } from "framer-motion";

export type MotionBoxProps = Omit<ChakraProps, keyof MotionProps> &
  MotionProps & {
    as?: React.ElementType;
  };

export const MotionBox = motion.custom(
  forwardRef<MotionBoxProps, "div">((props, ref) => {
    const chakraProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return <chakra.div ref={ref} {...chakraProps} />;
  })
) as ComponentWithAs<"div", MotionBoxProps>;
