/** @jsx jsx */

import { FC } from "react";
import { Box, jsx } from "theme-ui";
import Topper from "./Topper";
import Nav from "./Nav";

const Header: FC = () => (
  <Box as="header" sx={{ position: "relative", zIndex: "1" }}>
    <Topper />
    <Nav />
  </Box>
);

export default Header;
