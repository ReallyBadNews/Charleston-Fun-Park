export default {
  borderWidths: {
    "0": "0",
    "2": "2px",
    "4": "4px",
    "8": "8px",
    px: "1px",
  },
  breakpoints: ["476px", "960px", "1024px", "1280px"],
  colors: {
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
    },
    blue: {
      light: "#75E7FF",
      mid: "#1DCDF2",
      dark: "#1597B2",
      xdark: "#003A59",
    },
    red: {
      mid: "#E15A4E",
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
  },
  fonts: {
    heading: "Playfair Display, serif",
    body: "Greycliff, sans-serif",
    display: "Neon Tubes, mono-space",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 48, 64, 72],
  fontWeights: {
    regular: 400,
    medium: 500,
    bold: 700,
    heavy: 900,
    heading: 900,
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
  lineHeights: {
    none: "1",
    tight: "1.25",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.625",
    loose: "2",
    body: "1.625",
    heading: "1",
  },
  sizes: {
    "0": "0",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "8": "2rem",
    "10": "2.5rem",
    "12": "3rem",
    "16": "4rem",
    "20": "5rem",
    "24": "6rem",
    "32": "8rem",
    "40": "10rem",
    "48": "12rem",
    "56": "14rem",
    "64": "16rem",
    px: "1px",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "1/2": "50%",
    "1/3": "33.333333%",
    "2/3": "66.666667%",
    "1/4": "25%",
    "2/4": "50%",
    "3/4": "75%",
    "1/5": "20%",
    "2/5": "40%",
    "3/5": "60%",
    "4/5": "80%",
    "1/6": "16.666667%",
    "2/6": "33.333333%",
    "3/6": "50%",
    "4/6": "66.666667%",
    "5/6": "83.333333%",
    "1/12": "8.333333%",
    "2/12": "16.666667%",
    "3/12": "25%",
    "4/12": "33.333333%",
    "5/12": "41.666667%",
    "6/12": "50%",
    "7/12": "58.333333%",
    "8/12": "66.666667%",
    "9/12": "75%",
    "10/12": "83.333333%",
    "11/12": "91.666667%",
    full: "100%",
    screenHeight: "100vh",
    screenWidth: "100vw",
    container: 1280,
  },
  shadows: {
    xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    default: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
    outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
    neonYellow: "0 0 1rem #FFEF5C",
    neonWhite: "0 0 0.5rem #FFFDFABF",
    none: "none",
  },
  space: [0, 4, 8, 16, 24, 32, 40, 48, 64, 128, 256, 512],
  radii: {
    none: "0",
    sm: "0.125rem",
    default: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    full: "9999px",
  },
  text: {
    heading: {
      fontFamily: "heading",
      fontSize: 9,
      title: {
        variant: "heading",
        fontSize: "5",
        lineHeight: "none",
      },
    },
    body: {
      normal: {
        fontFamily: "body",
        fontWeight: "regular",
        fontSize: 2,
        lineHeight: "normal",
      },
      large: {
        variant: "text.body.normal",
        fontSize: "4",
      },
    },
    display: {
      fontFamily: "display",
      fontSize: 9,
      lineHeight: "none",
      color: "yellow.light",
      textShadow: "neonYellow",
    },
  },
  buttons: {
    mini: {
      fontSize: "1",
      fontWeight: "heavy",
      backgroundColor: "white.light",
      color: "green.dark",
      px: "3",
      py: "1",
    },
  },
  divider: {
    glow: {
      height: "0.125rem",
      width: "full",
      backgroundColor: "white.light",
      margin: 0,
      boxShadow: "neonWhite",
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      color: "black.dark",
    },
  },
};
