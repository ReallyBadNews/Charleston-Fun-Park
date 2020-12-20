/** @jsx jsx */
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { Box, jsx } from "theme-ui";
import { FC } from "react";
import { FluidObject } from "gatsby-image";

const defaultProps = {
  overlayColor: "blue.light",
};

type WoodBgProps = typeof defaultProps;

type ImageProps = {
  darkWood: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
};

const WoodBg: FC<WoodBgProps> = ({ children, overlayColor }) => {
  const {
    darkWood: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery<ImageProps>(graphql`
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
      sx={{
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

WoodBg.defaultProps = defaultProps;

export default WoodBg;
