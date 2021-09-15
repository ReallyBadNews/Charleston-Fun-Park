/** @jsxImportSource theme-ui */

import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { FC } from "react";
import { Box, SxProp } from "theme-ui";
import { ChildFluidObject } from "@/types/types";

interface BrickBgProps extends SxProp {
  id?: string;
  className?: string;
}

interface Query {
  brick: ChildFluidObject;
}

const BrickBg: FC<BrickBgProps> = ({ children, id, sx, className }) => {
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
