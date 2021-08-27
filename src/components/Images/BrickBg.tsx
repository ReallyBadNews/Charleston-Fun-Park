/** @jsxImportSource theme-ui */

import { StaticImage } from "gatsby-plugin-image";
import { FC } from "react";
import { Box, SxProp } from "theme-ui";

interface BrickBgProps {
  id?: string;
  className?: string;
}

const BrickBg: FC<BrickBgProps & SxProp> = ({
  children,
  id,
  sx,
  className,
}) => {
  return (
    <Box
      as="section"
      id={id}
      className={className}
      sx={{ display: "grid", position: "relative", ...sx }}
    >
      <StaticImage
        src="../../images/brickTexture.jpg"
        id={id}
        sx={{ position: "relative", bg: "black.dark" }}
        placeholder="blurred"
        alt=""
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

export default BrickBg;
