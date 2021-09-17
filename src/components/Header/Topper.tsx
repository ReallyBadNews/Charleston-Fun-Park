/** @jsxImportSource theme-ui */

import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCartPlus,
  faPhone,
  faUsers,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StaticImage } from "gatsby-plugin-image";
import { Flex, Inline } from "raam";
import { Box, Button, Container } from "theme-ui";
import { useSiteMetadata } from "@/hooks/use-site-metadata";
import { Link } from "@/components/Link";

const Topper = () => {
  const { giftCardLink, phoneNumber, socialLinks } = useSiteMetadata();

  const socialIcons: Record<string, IconDefinition> = {
    facebook: faFacebook,
    twitter: faTwitter,
    instagram: faInstagram,
  };

  return (
    <div sx={{ display: "grid", position: "relative" }}>
      <div
        sx={{
          gridArea: "1 / 1",
          position: "absolute",
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
          overflow: "hidden",
        }}
      >
        <StaticImage
          alt=""
          className="topper"
          layout="fullWidth"
          placeholder="none"
          src="../../images/grass.jpg"
        />
      </div>
      <Box
        sx={{
          gridArea: "1 / 1",
          zIndex: 1,
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
          bg: "green.dark",
          opacity: "0.5",
        }}
      />
      <Container
        sx={{ gridArea: "1 / 1", position: "relative", zIndex: "100", pr: "0" }}
      >
        <Flex
          gap="5"
          justifyContent={["space-between", null, "flex-end"]}
          py="1"
        >
          <Box
            className="topperWrapper"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "& > * + *": { ml: "1rem !important" },
            }}
          >
            <Button as="div" variant="green">
              <a
                href={phoneNumber.link}
                sx={{ color: "inherit", textDecoration: "none" }}
              >
                <FontAwesomeIcon icon={faPhone} sx={{ mr: "2" }} />
                {phoneNumber.number}
              </a>
            </Button>
            <Button as="div" variant="cta">
              <a
                href={giftCardLink}
                rel="noreferrer"
                sx={{ color: "inherit", textDecoration: "none" }}
                target="_blank"
              >
                <FontAwesomeIcon icon={faCartPlus} sx={{ mr: "2" }} />
                Gift Cards
              </a>
            </Button>
            <Button as="div" variant="white">
              <a
                href="/group-events"
                sx={{ color: "inherit", textDecoration: "none" }}
              >
                <FontAwesomeIcon icon={faUsers} sx={{ mr: "2" }} />
                Group Events
              </a>
            </Button>
          </Box>
          <Inline alignItems="center" gap="4" sx={{ height: "full", mr: "3" }}>
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                sx={{ color: "white.light", fontSize: "4" }}
                title={link.name}
                to={link.url}
              >
                <FontAwesomeIcon icon={socialIcons[link.name]} />
              </Link>
            ))}
          </Inline>
        </Flex>
      </Container>
    </div>
  );
};

export default Topper;
