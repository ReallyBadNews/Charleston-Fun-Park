/** @jsx jsx */
import { useState } from "react";
import PropTypes from "prop-types";
import { jsx } from "theme-ui";
import { Flex, Inline } from "raam";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import StyledLink from "../Link.styled";
import logo from "../../images/logo.png";

const Nav = ({ navLinks }) => {
  const [menuOpenState, setMenuOpenState] = useState(false);

  const burgerHandler = () => {
    setMenuOpenState(!menuOpenState);
  };

  return (
    <Flex
      alignItems="center"
      bg="base.dark"
      className="nav"
      justifyContent="space-between"
      px={["3", null, null, null, "0"]}
      py="2"
      sx={{ height: "24" }}
    >
      <img alt="Charleston Fun Park" height="153" src={logo} width="200" />
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
