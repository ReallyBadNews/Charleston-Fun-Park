/** @jsxImportSource theme-ui */

import StyledLink from "@/components/Link.styled";
import { useSiteMetadata } from "@/hooks/use-site-metadata";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCartPlus,
  faPhone,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StaticImage } from "gatsby-plugin-image";
import { Flex, Inline } from "raam";
import { Box, Button, Container } from "theme-ui";

const Topper = (): JSX.Element => {
  const { giftCardLink, phoneNumber, socialLinks } = useSiteMetadata();

  const socialIcons = {
    facebook: faFacebook,
    twitter: faTwitter,
    instagram: faInstagram,
  };

  return (
    <div sx={{ display: "grid", position: "relative" }}>
      <StaticImage
        className="topper"
        layout="fullWidth"
        src="../../images/grass.jpg"
        placeholder="none"
        alt=""
        sx={{
          gridArea: "1 / 1",
          position: "absolute !important",
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
        }}
      />
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
        px={["3", null, null, null, "0"]}
        sx={{ gridArea: "1 / 1", position: "relative", zIndex: "100" }}
      >
        <Flex
          gap="5"
          py="1"
          justifyContent={["space-between", null, "flex-end"]}
        >
          <Inline gap="3">
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
                sx={{ color: "inherit", textDecoration: "none" }}
                rel="noreferrer"
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
          </Inline>
          <Inline alignItems="center" gap="4" sx={{ height: "full" }}>
            {socialLinks.map((link) => (
              <StyledLink
                key={link.name}
                color="white.light"
                fontSize="4"
                href={link.url}
                title={link.name}
              >
                <FontAwesomeIcon icon={socialIcons[link.name]} />
              </StyledLink>
            ))}
          </Inline>
        </Flex>
      </Container>
    </div>
  );
};

export default Topper;
