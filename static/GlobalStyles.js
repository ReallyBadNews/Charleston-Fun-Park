import React from "react";
import { Global } from "@emotion/react";

const GlobalStyles = () => (
  <Global
    styles={`
      @font-face {
        font-family: "Playfair Display";
        font-display: optional;
        src: url("./fonts/PlayfairDisplay-Black.woff2") format("woff2");
        font-weight: 900;
        font-style: normal;
      }

      @font-face {
        font-family: "Greycliff";
        font-display: optional;
        src: url("./fonts/greycliff-cf-regular.woff2") format("woff2");
        font-weight: 400;
        font-style: normal;
      }

      @font-face {
        font-family: "Greycliff";
        font-display: optional;
        src: url("./fonts/greycliff-cf-medium.woff2") format("woff2");
        font-weight: 500;
        font-style: normal;
      }

      @font-face {
        font-family: "Greycliff";
        font-display: optional;
        src: url("./fonts/greycliff-cf-bold.woff2") format("woff2");
        font-weight: 700;
        font-style: normal;
      }

      @font-face {
        font-family: "Greycliff";
        font-display: optional;
        src: url("./fonts/greycliff-cf-heavy.woff2") format("woff2");
        font-weight: 900;
        font-style: normal;
      }

      @font-face {
        font-family: "Neon Tubes";
        font-display: optional;
        src: url("./fonts/NeonTubes2-Regular.woff2") format("woff2");
        font-weight: 700;
        font-style: normal;
      }

      html {
        overflow-x: hidden;
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
