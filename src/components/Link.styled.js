/** @jsxImportSource theme-ui */

import PropTypes from "prop-types";
import { Themed } from "theme-ui";
import { Link } from "gatsby";
import { Link as ScrollLink } from "react-scroll";

const StyledLink = ({
  children,
  color,
  duration,
  fontSize,
  hoverColor,
  href,
  letterSpacing,
  m,
  mb,
  mt,
  mx,
  my,
  onClick,
  p,
  pb,
  pt,
  px,
  py,
  to,
  scrollTo,
  title,
  fontWeight,
  textDecoration,
  textDecorationHover,
  textTransform,
}) => (
  <Themed.a
    as={(scrollTo && ScrollLink) || (to && Link) || "a"}
    duration={duration}
    href={href}
    rel={href && "noopener"}
    smooth={scrollTo && true}
    spy={scrollTo && true}
    sx={{
      cursor: "pointer",
      color,
      fontSize,
      fontWeight,
      letterSpacing,
      m,
      mb,
      mt,
      mx,
      my,
      p,
      pb,
      pt,
      px,
      py,
      textDecoration,
      textDecorationHover,
      textTransform,
      transition: "all 300ms ease-in-out",
      "&:hover": {
        color: `${hoverColor}`,
        textDecoration: textDecorationHover && "underline",
        textDecorationThickness: textDecorationHover && "0.125rem",
      },
    }}
    target={href && "_blank"}
    title={title}
    to={scrollTo || to}
    onClick={onClick}
  >
    {children}
  </Themed.a>
);

StyledLink.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  duration: PropTypes.number,
  fontSize: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  fontWeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  hoverColor: PropTypes.string,
  href: PropTypes.string,
  letterSpacing: PropTypes.string,
  m: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  mb: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  mt: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  mx: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  my: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  p: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  pb: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  pt: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  px: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  py: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  scrollTo: PropTypes.string,
  textDecoration: PropTypes.string,
  textDecorationHover: PropTypes.bool,
  textTransform: PropTypes.string,
  title: PropTypes.string,
  to: PropTypes.string,
  onClick: PropTypes.func,
};

StyledLink.defaultProps = {
  color: "",
  duration: 500,
  fontSize: "",
  fontWeight: "",
  hoverColor: "",
  href: null,
  letterSpacing: "",
  m: "",
  mb: "",
  mt: "",
  mx: "",
  my: "",
  p: "",
  pb: "",
  pt: "",
  px: "",
  py: "",
  scrollTo: null,
  textDecoration: "",
  textDecorationHover: false,
  textTransform: "",
  title: null,
  to: null,
  onClick: () => true,
};

export default StyledLink;
