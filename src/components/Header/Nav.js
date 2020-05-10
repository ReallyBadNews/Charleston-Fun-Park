/** @jsx jsx */
import { useState } from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import { Box, Container, jsx } from "theme-ui";
import { Flex, Inline } from "raam";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import StyledLink from "../Link.styled";

const Nav = ({ navLinks }) => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(graphql`
    query LogoQuery {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 200, maxHeight: 153) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);

  const [menuOpenState, setMenuOpenState] = useState(false);

  const burgerHandler = () => {
    setMenuOpenState(!menuOpenState);
  };

  return (
    <Box bg="base.dark" px={["3", null, null, null, "0"]}>
      <Container>
        <Flex
          alignItems="center"
          className="nav"
          justifyContent="space-between"
          sx={{ height: "24" }}
        >
          <Img
            alt="Charleston Fun Park"
            fluid={fluid}
            sx={{ width: "200px", height: "153px" }}
          />
          <Inline gap="5">
            {navLinks.map((link) => (
              <StyledLink
                key={link.name}
                color="black"
                fontSize="2"
                fontWeight="bold"
                href={link.url}
                letterSpacing="wide"
                textDecoration="none"
                textTransform="uppercase"
              >
                {link.name}
              </StyledLink>
            ))}
            <FontAwesomeIcon
              icon={menuOpenState ? faTimes : faBars}
              sx={{ cursor: "pointer", fontSize: "5" }}
              fixedWidth
              onClick={burgerHandler}
            />
          </Inline>
        </Flex>
      </Container>
    </Box>
  );
};

Nav.propTypes = {
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
    })
  ).isRequired,
};

export default Nav;
