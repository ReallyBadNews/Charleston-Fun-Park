/** @jsxImportSource theme-ui */

import Arrow from "@/components/Images/Arrow";
import { Link } from "@/components/Link";
import { useSiteMetadata } from "@/hooks/use-site-metadata";
import {
  IconDefinition,
  faBars,
  faBirthdayCake,
  faFlagCheckered,
  faInfoCircle,
  faTent,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link as GatsbyLink } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Flex, Inline, Stack } from "raam";
import { useState } from "react";
import { Box, Container } from "theme-ui";

const Nav = () => {
  const { navLinks } = useSiteMetadata();
  const [menuOpen, setMenuOpenState] = useState(false);

  const menuIcons: Record<string, IconDefinition> = {
    Attractions: faFlagCheckered,
    "Summer Camp": faTent,
    "Birthday Parties": faBirthdayCake,
    "Park Info": faInfoCircle,
  };

  return (
    <div sx={{ display: "grid" }}>
      <StaticImage
        alt=""
        className="woodTexture"
        src="../../images/woodTexture.png"
        sx={{
          gridArea: "1 / 1",
          backgroundColor: "blue.dark",
          borderTopWidth: "4",
          borderTopColor: "blue.light",
          borderTopStyle: "solid",
          borderBottomWidth: "4",
          borderBottomColor: "blue.light",
          borderBottomStyle: "solid",
          position: "relative",
          height: "24",
        }}
      />
      <Container sx={{ position: "relative", gridArea: "1 / 1" }}>
        <Flex
          alignItems="center"
          className="nav"
          justifyContent="space-between"
          sx={{ height: "24" }}
        >
          <Inline gap={["1", null, "3"]}>
            <GatsbyLink to="/">
              <StaticImage
                alt="Charleston Fun Park"
                placeholder="none"
                src="../../images/cfp-logo.png"
                sx={{
                  width: ["96px", null, "172px", "261px"],
                  height: ["61px", null, "109px", "165px"],
                  position: "relative",
                  zIndex: "100",
                  filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.15))",
                  // mt: ["0", null, null, null, "-16px"],
                }}
              />
            </GatsbyLink>
            <StaticImage
              alt="FUN Sign"
              placeholder="none"
              src="../../images/funSign.png"
              sx={{
                width: ["91px", "132px", "130px", null, "176px"],
                height: ["40px", "57px", "56px", null, "76px"],
              }}
            />
            <Arrow
              sx={{
                width: ["66px", "120px", "124px", null, "133px"],
                height: ["30px", "54px", "56px", null, "60px"],
                transform: "rotateZ(180deg)",
              }}
            />
          </Inline>
          <Inline
            as="nav"
            color="white.light"
            gap={["3", null, null, null, "5"]}
          >
            {navLinks.slice(1, 4).map((link) => (
              <Inline
                key={link.name}
                gap={["1", null, null, null, "2"]}
                sx={{ display: ["none", null, null, "flex"] }}
              >
                <FontAwesomeIcon
                  icon={menuIcons[link.name]}
                  sx={{ fontSize: ["2", null, null, "3"] }}
                />
                <Link
                  key={link.name}
                  sx={{
                    color: "white.light",
                    fontSize: ["1", null, null, null, "2"],
                    fontWeight: "bold",
                    letterSpacing: "wide",
                    textTransform: "uppercase",
                  }}
                  to={link.url}
                  onClick={
                    menuOpen ? () => setMenuOpenState(!menuOpen) : undefined
                  }
                >
                  {link.name}
                </Link>
              </Inline>
            ))}
            <FontAwesomeIcon
              icon={menuOpen ? faTimes : faBars}
              sx={{ cursor: "pointer", fontSize: "5" }}
              fixedWidth
              onClick={() => setMenuOpenState(!menuOpen)}
            />
          </Inline>
        </Flex>
        {menuOpen && (
          <Box
            as="nav"
            sx={{
              position: "absolute",
              right: ["3", null, null, null, "0"],
              top: "80px",
              backgroundColor: "white.light",
              padding: 4,
              borderRadius: "lg",
              boxShadow: "default",
              textAlign: "right",
            }}
          >
            <Stack gap="3">
              {/* {navLinks.slice(!breakpoints.desktop ? 0 : 4).map((link) => ( */}
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  sx={{
                    color: "black.dark",
                    fontSize: "2",
                    fontWeight: "bold",
                    letterSpacing: "widest",
                    textTransform: "uppercase",
                  }}
                  to={link.url}
                  onClick={
                    menuOpen ? () => setMenuOpenState(!menuOpen) : undefined
                  }
                >
                  {link.name}
                </Link>
              ))}
            </Stack>
          </Box>
        )}
      </Container>
    </div>
  );
};

export default Nav;
