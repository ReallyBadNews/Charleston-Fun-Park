/** @jsx jsx */
import { Box, jsx } from "theme-ui";
import Topper from "./Topper";
import Nav from "./Nav";

const Header = () => (
  <Box as="header" sx={{ position: `relative`, zIndex: `1` }}>
    <Topper />
    <Nav />
  </Box>
);
export default Header;
