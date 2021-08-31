/** @jsxImportSource theme-ui */

import { StaticImage } from "gatsby-plugin-image";
import { FC } from "react";
import { Box, SxProp } from "theme-ui";

type WoodBgProps = {
  overlayColor?: string;
  className?: string;
};

const WoodBg: FC<WoodBgProps & SxProp> = ({
  children,
  className,
  overlayColor = "blue.light",
  sx,
}) => {
  return (
    <Box
      as="section"
      className={className}
      sx={{ display: "grid", position: "relative", ...sx }}
    >
      <StaticImage
        src="../../images/darkWood.jpg"
        sx={{ position: "relative", gridArea: "1 / 1", bg: "blue.dark" }}
        placeholder="blurred"
        alt=""
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

export default WoodBg;
