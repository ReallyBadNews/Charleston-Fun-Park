/** @jsx jsx */
import { useState } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image";
import { Container, jsx } from "theme-ui";
import { Flex, Inline } from "raam";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faFlagCheckered,
  faBirthdayCake,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import StyledLink from "../Link.styled";
import Arrow from "../Arrow";

const Nav = ({ navLinks }) => {
  const { logo, bg, fun } = useStaticQuery(graphql`
    query NavQuery {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 200, maxHeight: 153) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      bg: file(relativePath: { eq: "headerBg.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      fun: file(relativePath: { eq: "funSign.png" }) {
        childImageSharp {
          fluid(maxWidth: 176, maxHeight: 76) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  // Destructure the images
  const {
    childImageSharp: { fluid: headerLogo },
  } = logo;
  const {
    childImageSharp: { fluid: headerBg },
  } = bg;
  const {
    childImageSharp: { fluid: funLogo },
  } = fun;

  const [menuOpenState, setMenuOpenState] = useState(false);

  const burgerHandler = () => {
    setMenuOpenState(!menuOpenState);
  };

  const menuIcons = {
    Attractions: faFlagCheckered,
    "Birthdays & Events": faBirthdayCake,
    "Park Info": faInfoCircle,
  };

  return (
    <BackgroundImage
      fluid={headerBg}
      sx={{
        backgroundColor: "white.light",
        px: ["3", null, null, null, "0"],
        borderTopWidth: "4",
        borderTopColor: "blue.light",
        borderTopStyle: "solid",
      }}
      tag="div"
    >
      <Container>
        <Flex
          alignItems="center"
          className="nav"
          justifyContent="space-between"
          sx={{ height: "24" }}
        >
          <Img
            alt="Charleston Fun Park"
            fluid={headerLogo}
            sx={{
              width: "200px",
              height: "153px",
              position: "relative",
              zIndex: "100",
            }}
          />
          <Inline>
            <Img fluid={funLogo} sx={{ width: "176px", height: "76px" }} />
            <Arrow height="60px" transform="rotateZ(180deg)" width="133px" />
          </Inline>
          <Inline as="nav" gap="5">
            {navLinks.map((link) => (
              <Inline key={link.name} gap="2">
                <FontAwesomeIcon
                  icon={menuIcons[link.name]}
                  sx={{ fontSize: "3", maxHeight: "5" }}
                />
                <StyledLink
                  key={link.name}
                  color="black.dark"
                  fontSize="2"
                  fontWeight="bold"
                  letterSpacing="wide"
                  textDecoration="none"
                  textTransform="uppercase"
                  to={link.url}
                >
                  {link.name}
                </StyledLink>
              </Inline>
            ))}
            <FontAwesomeIcon
              icon={menuOpenState ? faTimes : faBars}
              sx={{ cursor: "pointer", fontSize: "8", maxHeight: "8" }}
              fixedWidth
              onClick={burgerHandler}
            />
          </Inline>
        </Flex>
      </Container>
    </BackgroundImage>
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
