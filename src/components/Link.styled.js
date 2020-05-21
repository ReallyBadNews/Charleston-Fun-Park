/* eslint-disable react/jsx-pascal-case */
/** @jsx jsx */
import PropTypes from "prop-types";
import { jsx, Styled } from "theme-ui";
import { Link } from "gatsby";

const StyledLink = ({
  children,
  color,
  fontFamily,
  fontSize,
  fontWeight,
  hoverColor,
  href,
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
  to,
  title,
  textDecoration,
  textDecorationHover,
  textTransform,
}) => (
  <Styled.a
    as={to ? Link : `a`}
    href={href}
    rel={href ? `noopener` : null}
    sx={{
      color,
      fontFamily,
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
        textDecoration: textDecorationHover ? "underline" : null,
        textDecorationThickness: textDecorationHover ? "0.125rem" : null,
      },
    }}
    target={href ? `_blank` : null}
    title={title}
    to={to}
  >
    {children}
  </Styled.a>
);

StyledLink.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  fontWeight: PropTypes.string,
  hoverColor: PropTypes.string,
  href: PropTypes.string,
  letterSpacing: PropTypes.string,
  m: PropTypes.string,
  mb: PropTypes.string,
  mt: PropTypes.string,
  mx: PropTypes.string,
  my: PropTypes.string,
  p: PropTypes.string,
  pb: PropTypes.string,
  pt: PropTypes.string,
  px: PropTypes.string,
  py: PropTypes.string,
  textDecoration: PropTypes.string,
  textDecorationHover: PropTypes.bool,
  textTransform: PropTypes.string,
  title: PropTypes.string,
  to: PropTypes.string,
};

StyledLink.defaultProps = {
  color: "",
  fontFamily: "body",
  fontSize: "",
  fontWeight: "",
  hoverColor: "",
  href: "",
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
  textDecoration: "none",
  textDecorationHover: false,
  textTransform: "",
  title: null,
  to: "",
};

export default StyledLink;
