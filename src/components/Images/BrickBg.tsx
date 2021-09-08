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
}) => (
  <Box
    as="section"
    className={className}
    id={id}
    sx={{ display: "grid", position: "relative", ...sx }}
  >
    <StaticImage
      alt=""
      placeholder="blurred"
      src="../../images/brickTexture.jpg"
      sx={{ position: "relative", bg: "black.dark" }}
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

BrickBg.defaultProps = {
  id: undefined,
  className: undefined,
};

export default BrickBg;
