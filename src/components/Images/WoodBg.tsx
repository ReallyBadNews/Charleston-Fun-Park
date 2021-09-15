/** @jsxImportSource theme-ui */

import { GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import { FC } from "react";
import { Box, SxProp } from "theme-ui";
import { ChildFluidObject } from "@/types/types";

type WoodBgProps = {
  overlayColor?: string;
  className?: string;
  id?: string;
};

interface Query {
  wood: ChildFluidObject;
}

const WoodBg: FC<WoodBgProps & SxProp> = ({
  children,
  className,
  id,
  overlayColor = "blue.light",
  sx,
}) => {
  const {
    wood: {
      childImageSharp: { gatsbyImageData },
    },
  } = useStaticQuery<Query>(graphql`
    query WoodQuery {
      wood: file(relativePath: { eq: "darkWood.jpg" }) {
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
        sx={{ gridArea: "1 / 1", bg: "blue.dark" }}
      />
      <Box
        sx={{
          gridArea: "1 / 1",
          bg: overlayColor,
          opacity: "0.75",
        }}
      />
      {children}
    </Box>
  );
};

WoodBg.defaultProps = {
  id: undefined,
  className: undefined,
  overlayColor: "blue.light",
};

export default WoodBg;
