/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { Global, css } from "@emotion/core";
import fontFiles from "./fonts";

const GlobalStyles = () => (
  <Global
    styles={css`
      @font-face {
        font-family: "Playfair Display";
        font-display: block;
        src: url(${fontFiles.PlayfairDisplayBlack}) format("woff2");
        font-weight: 900;
        font-style: normal;
      }

      @font-face {
        font-family: "Greycliff";
        font-display: block;
        src: url(${fontFiles.GreycliffRegular}) format("woff2");
        font-weight: 400;
        font-style: normal;
      }

      @font-face {
        font-family: "Greycliff";
        font-display: block;
        src: url(${fontFiles.GreycliffMedium}) format("woff2");
        font-weight: 500;
        font-style: normal;
      }

      @font-face {
        font-family: "Greycliff";
        font-display: block;
        src: url(${fontFiles.GreycliffBold}) format("woff2");
        font-weight: 700;
        font-style: normal;
      }

      @font-face {
        font-family: "Greycliff";
        font-display: block;
        src: url(${fontFiles.GreycliffHeavy}) format("woff2");
        font-weight: 900;
        font-style: normal;
      }

      @font-face {
        font-family: "Neon Tubes";
        font-display: block;
        src: url(${fontFiles.NeonTubes}) format("woff2");
        font-weight: 700;
        font-style: normal;
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
