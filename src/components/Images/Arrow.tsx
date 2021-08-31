/** @jsxImportSource theme-ui */

import { StaticImage } from "gatsby-plugin-image";
import { FC } from "react";
import { SxProp } from "theme-ui";

interface ArrowProps {
  className?: string;
}

const Arrow: FC<ArrowProps & SxProp> = ({ sx, className }) => {
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
