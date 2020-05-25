/** @jsx jsx */
import { useState } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
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

  const breakpoints = useBreakpoint();

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
          <Inline gap={["2", null, "3"]}>
            <Link to="/">
              <Img
                alt="Charleston Fun Park"
                fluid={headerLogo}
                sx={{
                  width: ["113px", null, null, "172px", "261px"],
                  height: ["87px", null, null, "132px", "200px"],
                  position: "relative",
                  zIndex: "100",
                  mt: ["0", null, null, null, "5"],
                }}
              />
            </Link>
            <Img
              fluid={funLogo}
              sx={{
                width: ["73px", "132px", "130px", null, "176px"],
                height: ["32px", "57px", "56px", null, "76px"],
              }}
            />
            <Arrow
              sx={{
                width: ["57px", "120px", "124px", null, "133px"],
                height: ["26px", "54px", "56px", null, "60px"],
                transform: "rotateZ(180deg)",
              }}
            />
          </Inline>
          <Inline
            as="nav"
            color="white.light"
            gap={["3", null, null, null, "5"]}
          >
            {breakpoints.desktop &&
              navLinks.slice(0, 3).map((link) => (
                <Inline key={link.name} gap={["1", null, null, null, "2"]}>
                  <FontAwesomeIcon
                    icon={menuIcons[link.name]}
                    sx={{ fontSize: ["2", null, null, "5"], maxHeight: "5" }}
                  />
                  <StyledLink
                    key={link.name}
                    color="white.light"
                    fontSize={["1", null, null, null, "2"]}
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
