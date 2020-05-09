/** @jsx jsx */
import PropTypes from "prop-types";
import { jsx, Styled } from "theme-ui";
import { Link } from "gatsby";

const StyledLink = ({
  children,
  color,
  fontSize,
  hover,
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
  fontWeight,
  textDecoration,
  textTransform,
}) => (
  <Styled.a
    as={to ? Link : `a`}
    href={href}
    rel={href ? `noopener` : null}
    sx={{
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
      textTransform,
      transition: "all 300ms ease-in-out",
      "&:hover": { color: `${hover}` },
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
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  hover: PropTypes.string,
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
  textTransform: PropTypes.string,
  title: PropTypes.string,
  to: PropTypes.string,
};

StyledLink.defaultProps = {
  color: "",
  fontSize: "",
  fontWeight: "",
  hover: "",
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
  textDecoration: "",
  textTransform: "",
  title: null,
  to: "",
};

export default StyledLink;
