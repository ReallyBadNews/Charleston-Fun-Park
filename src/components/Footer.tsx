/** @jsxImportSource theme-ui */

import {
  faFacebook,
  faInstagram,
  faTwitter,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Flex, Stack } from "raam";
import { Box, Container, Text } from "theme-ui";
import { useSiteMetadata } from "@/hooks/use-site-metadata";
import { Link } from "@/components/Link";

const Footer = () => {
  const { copyright, navLinks, socialLinks } = useSiteMetadata();

  const socialIcons: Record<string, IconDefinition> = {
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
        <Stack gap="5">
          <Flex gap="5" justifyContent="center">
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
          </Flex>
          <Flex
            flexWrap="wrap"
            gap={["3", null, null, "5"]}
            justifyContent="center"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                sx={{
                  color: "white.light",
                  fontFamily: "body",
                  fontSize: ["2", null, "3"],
                  fontWeight: "bold",
                  letterSpacing: "wide",
                  textDecoration: "none",
                }}
                to={link.url}
              >
                {link.name}
              </Link>
            ))}
          </Flex>
          <Text as="p" sx={{ textAlign: "center" }} variant="body.normal">
            {copyright}
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
