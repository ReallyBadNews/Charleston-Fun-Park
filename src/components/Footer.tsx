/** @jsx jsx */

import { Box, Container, Text, jsx } from "theme-ui";
import { Stack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import StyledLink from "@/components/Link.styled";
import { useSiteMetadata } from "@/hooks/use-site-metadata";

const Footer = (): JSX.Element => {
  const { copyright, navLinks, socialLinks } = useSiteMetadata();

  const socialIcons = {
    facebook: faFacebook,
    twitter: faTwitter,
    instagram: faInstagram,
  };

  return (
    <Box
      as="footer"
      bg="black.dark"
      color="white.light"
      px={["3", null, null, null, "0"]}
      py="7"
    >
      <Container>
        <Stack spacing="6">
          <Stack
            spacing={["6", null, "8"]}
            direction="row"
            justifyContent="center"
          >
            {socialLinks.map((link) => (
              <StyledLink
                key={link.name}
                color="white.light"
                fontSize="4"
                hoverColor="blue.light"
                href={link.url}
                title={link.name}
              >
                <FontAwesomeIcon icon={socialIcons[link.name]} />
              </StyledLink>
            ))}
          </Stack>
          <Stack
            direction="row"
            flexWrap="wrap"
            spacing={["6", null, null, "8"]}
            justifyContent="center"
          >
            {navLinks.map((link) => (
              <StyledLink
                key={link.name}
                color="white.light"
                fontFamily="heading"
                fontSize={["2", null, "3"]}
                fontWeight="bold"
                hoverColor="blue.light"
                letterSpacing="wide"
                textDecoration="none"
                to={link.url}
              >
                {link.name}
              </StyledLink>
            ))}
          </Stack>
          <Text sx={{ textAlign: "center" }} variant="body.normal">
            {copyright}
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
