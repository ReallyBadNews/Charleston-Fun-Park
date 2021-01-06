/** @jsx jsx */

import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { Box, jsx, SxProps } from "theme-ui";
import { FC } from "react";
import { ChildFluidObject } from "@/src/types";

type WoodBgProps = {
  overlayColor?: string;
  className?: string;
};

type Query = {
  darkWood: ChildFluidObject;
};

const WoodBg: FC<WoodBgProps & SxProps> = ({
  children,
  className,
  overlayColor = "blue.light",
  sx,
}) => {
  const {
    darkWood: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery<Query>(graphql`
    query WoodQuery {
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
      className={className}
      sx={{
        ...sx,
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
        backgroundColor: "blue.xdark",
        backgroundPosition: "top center",
      }}
      Tag="section"
    >
      <Box
        sx={{
          position: "absolute",
          zIndex: "-1",
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
          bg: overlayColor,
          opacity: "0.85",
        }}
      />
      {children}
    </BackgroundImage>
  );
};

export default WoodBg;
