/** @jsxImportSource theme-ui */

import { StaticImage } from "gatsby-plugin-image";
import { FC } from "react";
import { SxProp } from "theme-ui";

interface ArrowProps {
  className?: string;
}

const Arrow: FC<ArrowProps & SxProp> = ({ sx, className }) => (
  <StaticImage
    alt="Arrow"
    className={className}
    placeholder="none"
    src="../../images/arrow.png"
    sx={sx}
  />
);

Arrow.defaultProps = {
  className: undefined,
};

export default Arrow;
