/** @jsx jsx */
/**  @jsxFrag */

import React, { FC } from "react";
import PropTypes from "prop-types";
import { Box, jsx } from "theme-ui";
import { useStaticQuery, graphql, PageProps } from "gatsby";
import BackgroundImage from "gatsby-background-image";

interface SectionDividerProps extends PageProps {
  bg?: string;
  stars?: boolean;
}

const SectionDivider: FC<SectionDividerProps> = ({ bg, stars }) => {
  const {
    darkWood: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(graphql`
    query SectionDividerQuery {
      darkWood: file(relativePath: { eq: "darkWood.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);

  return (
    <BackgroundImage
      fluid={fluid}
      sx={{
        height: "12",
        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
    >
      {stars && (
        <>
          <svg
            fill="none"
            height="40"
            sx={{
              position: "absolute",
              filter: "drop-shadow( 0px 0px 4px #FFEF5C)",
            }}
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                height="40"
                id="Pattern2"
                patternUnits="userSpaceOnUse"
                width="112"
                x="0"
                y="0"
              >
                <path
                  // eslint-disable-next-line max-len
                  d="M17 1.23607L20.3147 11.4377C20.5825 12.2617 21.3504 12.8197 22.2168 12.8197H32.9434L24.2654 19.1246C23.5645 19.6339 23.2711 20.5366 23.5389 21.3607L26.8536 31.5623L18.1756 25.2574C17.4746 24.7481 16.5254 24.7481 15.8244 25.2574L7.14641 31.5623L10.4611 21.3607C10.7289 20.5366 10.4355 19.6339 9.73458 19.1246L9.14679 19.9336L9.73457 19.1246L1.05655 12.8197H11.7832C12.6496 12.8197 13.4175 12.2617 13.6853 11.4377L17 1.23607Z"
                  stroke="#75E7FF"
                  strokeWidth="2"
                  x="0"
                />
                <path
                  // eslint-disable-next-line max-len
                  d="M17 1.23607L20.3147 11.4377C20.5825 12.2617 21.3504 12.8197 22.2168 12.8197H32.9434L24.2654 19.1246C23.5645 19.6339 23.2711 20.5366 23.5389 21.3607L26.8536 31.5623L18.1756 25.2574C17.4746 24.7481 16.5254 24.7481 15.8244 25.2574L7.14641 31.5623L10.4611 21.3607C10.7289 20.5366 10.4355 19.6339 9.73458 19.1246L9.14679 19.9336L9.73457 19.1246L1.05655 12.8197H11.7832C12.6496 12.8197 13.4175 12.2617 13.6853 11.4377L17 1.23607Z"
                  stroke="#FFEF5C"
                  strokeWidth="2"
                  x="56"
                />
              </pattern>
            </defs>
            <rect fill="url(#Pattern2)" height="40" width="100%" />
          </svg>
          <svg
            fill="none"
            height="40"
            sx={{
              position: "absolute",
              filter: "drop-shadow( 0px 0px 4px #75E7FF)",
            }}
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                height="40"
                id="Pattern3"
                patternUnits="userSpaceOnUse"
                width="112"
                x="56"
                y="0"
              >
                <path
                  // eslint-disable-next-line max-len
                  d="M17 1.23607L20.3147 11.4377C20.5825 12.2617 21.3504 12.8197 22.2168 12.8197H32.9434L24.2654 19.1246C23.5645 19.6339 23.2711 20.5366 23.5389 21.3607L26.8536 31.5623L18.1756 25.2574C17.4746 24.7481 16.5254 24.7481 15.8244 25.2574L7.14641 31.5623L10.4611 21.3607C10.7289 20.5366 10.4355 19.6339 9.73458 19.1246L9.14679 19.9336L9.73457 19.1246L1.05655 12.8197H11.7832C12.6496 12.8197 13.4175 12.2617 13.6853 11.4377L17 1.23607Z"
                  stroke="#75E7FF"
                  strokeWidth="2"
                  x="0"
                />
              </pattern>
            </defs>
            <rect fill="url(#Pattern3)" height="40" width="100%" />
          </svg>
        </>
      )}
      <Box
        sx={{
          backgroundBlendMode: "screen",
          position: "absolute",
          zIndex: "-1",
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
          bg,
          opacity: "0.85",
        }}
      />
    </BackgroundImage>
  );
};

SectionDivider.propTypes = {
  bg: PropTypes.string,
  stars: PropTypes.bool,
};

SectionDivider.defaultProps = {
  bg: "green.light",
  stars: false,
};

export default SectionDivider;
