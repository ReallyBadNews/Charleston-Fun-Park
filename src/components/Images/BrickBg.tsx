/** @jsxImportSource theme-ui */

import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { Box, SxProps } from "theme-ui";
import { FC } from "react";
import { ChildFluidObject } from "@/types/types";

interface BrickBgProps {
  id?: string;
  className?: string;
}

interface Query {
  brickTexture: ChildFluidObject;
}

const BrickBg: FC<BrickBgProps & SxProps> = ({
  children,
  id,
  sx,
  className,
}) => {
  const {
    brickTexture: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery<Query>(graphql`
    query BrickQuery {
      brickTexture: file(relativePath: { eq: "brickTexture.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);

  return (
    <BackgroundImage
      fluid={fluid}
      id={id}
      sx={{ ...sx, position: "relative", bg: "black.dark" }}
      className={className}
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
          bg: "blue.xdark",
          opacity: "0.75",
        }}
      />
      {children}
    </BackgroundImage>
  );
};

export default BrickBg;
