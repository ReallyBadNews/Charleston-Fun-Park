/** @jsx jsx */
import { useState } from "react";
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
import useSiteMetadata from "../../hooks/use-site-metadata";
import StyledLink from "../Link.styled";
import Arrow from "../Images/Arrow";

const Nav = () => {
  const {
    logo: {
      childImageSharp: { fluid: headerLogo },
    },
    bg: {
      childImageSharp: { fluid: woodTexture },
    },
    fun: {
      childImageSharp: { fluid: funLogo },
    },
  } = useStaticQuery(graphql`
    query NavQuery {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 261, maxHeight: 200) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      bg: file(relativePath: { eq: "woodTexture.png" }) {
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

  const { navLinks } = useSiteMetadata();

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
      fluid={woodTexture}
      sx={{
        backgroundColor: "white.light",
        borderTopWidth: "4",
        borderTopColor: "blue.light",
        borderTopStyle: "solid",
        borderBottomWidth: "4",
        borderBottomColor: "blue.light",
        borderBottomStyle: "solid",
        position: "relative",
      }}
      tag="div"
    >
      <Container px={["3", null, null, null, "0"]}>
        <Flex
          alignItems="center"
          className="nav"
          justifyContent="space-between"
          sx={{ height: "24" }}
        >
          <Inline>
            <Img
              alt="Charleston Fun Park"
              fluid={headerLogo}
              sx={{
                width: "261px",
                height: "200px",
                position: "relative",
                zIndex: "100",
                mt: "5",
              }}
            />
            <Img fluid={funLogo} sx={{ width: "176px", height: "76px" }} />
            <Arrow
              sx={{
                height: "60px",
                transform: "rotateZ(180deg)",
                width: "133px",
              }}
            />
          </Inline>
          <Inline as="nav" color="white.light" gap="5">
            {navLinks.slice(0, 3).map((link) => (
              <Inline key={link.name} gap="2">
                <FontAwesomeIcon
                  icon={menuIcons[link.name]}
                  sx={{ fontSize: "3", maxHeight: "5" }}
                />
                <StyledLink
                  key={link.name}
                  color="white.light"
                  fontSize="2"
                  fontWeight="bold"
                  letterSpacing="widest"
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
              sx={{
                cursor: "pointer",
                fontSize: "5",
                maxHeight: "8",
              }}
              fixedWidth
              onClick={burgerHandler}
            />
          </Inline>
        </Flex>
      </Container>
    </BackgroundImage>
  );
};

export default Nav;
