export default {
  borderWidths: {
    "0": "0",
    "2": "2px",
    "4": "4px",
    "8": "8px",
    px: "1px",
  },
  breakpoints: ["475px", "768px", "1024px", "1280px"],
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
  grids: {
    featuredAttraction: {
      position: "relative",
      placeContent: "center",
    },
    attractionsPage: {
      columnGap: "3",
      rowGap: "5",
    },
  },
  layout: {
    flexContainer: {
      display: "flex",
      alignItems: "center",
      height: "full",
      px: ["3", null, null, null, "0"],
      py: "7",
    },
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
    default: "0px 2px 16px #1D243529",
    neonYellow: "0 0 1rem #FFEF5C",
    neonWhite: "0 0 0.5rem #FFFDFABF",
    none: "none",
    text: "0 0.25rem 0.25rem #1D243540",
  },
  space: [0, 4, 8, 16, 24, 32, 40, 48, 64, 96, 128, 256, 512],
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
      fontSize: ["5", null, null, "8", "9"],
      sectionTitle: {
        variant: "heading",
        fontSize: "8",
        lineHeight: "none",
      },
      title: {
        variant: "heading",
        fontSize: "5",
        lineHeight: "none",
      },
      smallTitle: {
        variant: "heading.title",
        fontSize: "4",
      },
      featuredTitle: {
        variant: "heading",
        fontSize: ["7", null, "9"],
        textShadow: "text",
      },
    },
    body: {
      normal: {
        fontFamily: "body",
        fontWeight: "regular",
        fontSize: 2,
        lineHeight: "normal",
      },
      mid: {
        variant: "text.body.normal",
        fontSize: ["2", null, null, null, "3"],
      },
      lg: {
        variant: "text.body.normal",
        fontSize: [null, null, "3", null, "4"],
      },
    },
    cardPricing: {
      variant: "text.body.normal",
      fontWeight: "bold",
      lineHeight: "tight",
    },
    display: {
      fontFamily: "display",
      fontSize: [4, 5, 6, 8, 9],
      textAlign: "center",
      lineHeight: "none",
      color: "yellow.light",
      textShadow: "neonYellow",
    },
  },
  buttons: {
    white: {
      variant: "buttons.cta",
      color: "green.dark",
      backgroundColor: "white.light",
    },
    mini: {
      white: {
        fontSize: "1",
        lineHeight: "0.875rem",
        fontWeight: "bold",
        backgroundColor: "white.light",
        color: "green.dark",
        px: "3",
        py: "1",
        maxHeight: "6",
      },
      blue: {
        variant: "buttons.mini.white",
        color: "blue.xdark",
        backgroundColor: "white.light",
      },
    },
    cta: {
      fontSize: "2",
      fontWeight: "heavy",
      textTransform: "uppercase",
      letterSpacing: "wide",
      backgroundColor: "yellow.light",
      color: "black.dark",
      px: "3",
      py: "2",
    },
  },
  cards: {
    attraction: {
      display: "flex",
      flexDirection: "column",
      bg: "white.light",
      borderRadius: "lg",
      boxShadow: "default",
      color: "black.dark",
      height: "full",
    },
    image: {
      variant: "cards.attraction",
      height: "auto",
      overflow: "hidden",
    },
    bDays: {
      bg: "white.light",
      color: "black.dark",
      p: "4",
      borderRadius: "lg",
      display: "flex",
      flexDirection: ["column", null, "row"],
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
      overflowX: "hidden",
    },
    a: {
      color: "black.dark",
      fontWeight: "bold",
      textDecoration: "none",
    },
    h1: {
      mb: "3",
    },
    h2: {
      fontSize: ["5", null, "6"],
      lineHeight: "none",
      mb: "3",
    },
    h3: {
      fontSize: ["2", null, "3"],
      lineHeight: "none",
      mb: "3",
    },
    h5: {
      fontSize: "2",
      lineHeight: "none",
      mb: "3",
    },
    ul: {
      mt: "3",
      mb: "5",
    },
    li: {
      fontSize: ["2", null, "3"],
      mt: "3",
      mb: "3",
      lineHeight: "normal",
    },
    p: {
      fontSize: ["2", null, "3"],
      lineHeight: "normal",
      mb: "5",
    },
    hr: {
      height: "px",
      bg: "black.light",
      opacity: "50%",
      border: "none",
      m: "0",
    },
    img: {
      display: "block",
      maxWidth: "full",
    },
  },
};
