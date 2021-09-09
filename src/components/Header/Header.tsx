/** @jsxImportSource theme-ui */

import { FC } from "react";
import { Box } from "theme-ui";
import Topper from "./Topper";
import Nav from "./Nav";

const Header: FC = () => (
  <Box as="header" sx={{ position: "relative", zIndex: "10" }}>
    <Topper />
    <Nav />
  </Box>
);

export default Header;
