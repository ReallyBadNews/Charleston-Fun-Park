/** @jsxImportSource theme-ui */

import { StaticImage } from "gatsby-plugin-image";
import { FC } from "react";
import { SxProps } from "theme-ui";

interface ArrowProps {
  className?: string;
}

const Arrow: FC<ArrowProps & SxProps> = ({ sx, className }) => {
  return (
    <StaticImage
      src="../../images/arrow.png"
      placeholder="none"
      alt="Arrow"
      className={className}
      sx={sx}
    />
  );
};

export default Arrow;
