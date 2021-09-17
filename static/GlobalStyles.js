import { Global, css } from "@emotion/react";
import fontFiles from "./fonts";

const GlobalStyles = () => (
  <Global
    styles={css`
      @font-face {
        font-family: "Playfair Display";
        font-display: swap;
        src: url(${fontFiles.PlayfairDisplayBlack}) format("woff2");
        font-weight: 900;
        font-style: normal;
      }

      @font-face {
        font-family: "Greycliff";
        font-display: swap;
        src: url(${fontFiles.GreycliffRegular}) format("woff2");
        font-weight: 400;
        font-style: normal;
      }

      @font-face {
        font-family: "Greycliff";
        font-display: swap;
        src: url(${fontFiles.GreycliffMedium}) format("woff2");
        font-weight: 500;
        font-style: normal;
      }

      @font-face {
        font-family: "Greycliff";
        font-display: swap;
        src: url(${fontFiles.GreycliffBold}) format("woff2");
        font-weight: 700;
        font-style: normal;
      }

      @font-face {
        font-family: "Greycliff";
        font-display: swap;
        src: url(${fontFiles.GreycliffHeavy}) format("woff2");
        font-weight: 900;
        font-style: normal;
      }

      @font-face {
        font-family: "Neon Tubes";
        font-display: swap;
        src: url(${fontFiles.NeonTubes}) format("woff2");
        font-weight: 700;
        font-style: normal;
      }

      html {
        overflow-x: hidden;
        scroll-behavior: smooth;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      hr {
        margin: 0;
        padding: 0;
      }
    `}
  />
);

export default GlobalStyles;
