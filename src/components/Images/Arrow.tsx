/** @jsxImportSource theme-ui */

import { StaticImage } from "gatsby-plugin-image";
import { Box, ThemeUICSSObject } from "theme-ui";

interface ArrowProps {
  className?: string;
  sx?: ThemeUICSSObject;
}

const Arrow = ({ sx, className }: ArrowProps) => (
  <Box className={className} sx={sx}>
    <StaticImage alt="Arrow" placeholder="none" src="../../images/arrow.png" />
  </Box>
);

Arrow.defaultProps = {
  className: undefined,
};

export default Arrow;
