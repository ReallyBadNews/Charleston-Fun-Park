import { extendTheme, Theme } from "@chakra-ui/react";
import { Button } from "../components/Button";

const colors = {
  transparent: "transparent",
  text: "#000",
  background: "#fff",
  primary: "#000",
  secondary: "#fff",
  muted: "#fff",
  white: {
    light: "#FFFDFA",
    mid: "#FFF6E5",
    dark: "#FBEFDA",
  },
  black: {
    light: "#60697B",
    mid: "#333D52",
    dark: "#1D2435",
    border: "#60697B80",
  },
  blue: {
    light: "#75E7FF",
    mid: "#1DCDF2",
    dark: "#1597B2",
    xdark: "#003A59",
  },
  red: {
    mid: "#E15A4E",
    dark: "#E22100",
  },
  yellow: {
    light: "#FFEF5C",
    mid: "#F3DB00",
    dark: "#DBC600",
  },
  green: {
    light: "#50F2B2",
    mid: "#25B67D",
    dark: "#399861",
    xdark: "#146143",
  },
};

const theme: Theme = extendTheme({
  colors,
  Button,
  fonts: {
    heading: "Playfair Display, serif",
    body: "Greycliff, sans-serif",
    mono: "Neon Tubes, mono-space",
  },
  sizes: {
    "7xl": "80rem",
  },
  layerStyles: {
    dropShadow: {
      boxShadow: "0px 2px 16px #1D243529",
    },
  },
});

export default theme;
