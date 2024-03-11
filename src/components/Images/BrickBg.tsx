/** @jsxImportSource theme-ui */

import { ChildFluidObject } from "@/types/types";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { ReactNode } from "react";
import { Box, SxProp } from "theme-ui";

interface BrickBgProps {
  children?: ReactNode;
  id?: string;
  className?: string;
  sx?: SxProp["sx"];
}

interface Query {
  brick: ChildFluidObject;
}

const BrickBg = ({ children, id, sx, className }: BrickBgProps) => {
  const {
    brick: {
      childImageSharp: { gatsbyImageData },
    },
  } = useStaticQuery<Query>(graphql`
    query BrickQuery {
      brick: file(relativePath: { eq: "brickTexture.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: DOMINANT_COLOR, layout: FULL_WIDTH)
        }
      }
    }
  `);
  return (
    <Box
      as="section"
      className={className}
      id={id}
      sx={{ display: "grid", position: "relative", ...sx }}
    >
      <GatsbyImage
        alt=""
        image={gatsbyImageData}
        sx={{ gridArea: "1 / 1", bg: "black.dark" }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
          bg: "blue.xdark",
          opacity: "0.75",
        }}
      />
      {children}
    </Box>
  );
};

BrickBg.defaultProps = {
  id: undefined,
  className: undefined,
};

export default BrickBg;
