/** @jsx jsx */
import { useStaticQuery, graphql } from "gatsby";
import { Box, jsx } from "theme-ui";
import Topper from "./Topper";
import Nav from "./Nav";

const Header = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query headerQuery {
      site {
        siteMetadata {
          phoneNumber {
            number
            link
          }
          navLinks {
            name
            url
          }
          socialLinks {
            name
            url
          }
        }
      }
    }
  `);

  return (
    <Box as="header" sx={{ position: "relative", zIndex: "1" }}>
      <Topper data={siteMetadata} />
      <Nav navLinks={siteMetadata.navLinks} />
    </Box>
  );
};
export default Header;
