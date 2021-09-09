/** @jsxImportSource theme-ui */

import { StaticImage } from "gatsby-plugin-image";
import { FC } from "react";
import { Box, SxProp } from "theme-ui";

interface ArrowProps {
  className?: string;
}

const Arrow: FC<ArrowProps & SxProp> = ({ sx, className }) => (
  <Box className={className} sx={sx}>
    <StaticImage alt="Arrow" placeholder="none" src="../../images/arrow.png" />
  </Box>
);

Arrow.defaultProps = {
  className: undefined,
};

export default Arrow;
