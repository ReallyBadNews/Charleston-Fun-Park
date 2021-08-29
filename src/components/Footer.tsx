/** @jsxImportSource theme-ui */

import { Box, Container, Text } from "theme-ui";
import { Flex, Stack } from "raam";
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
        <Stack gap="5">
          <Flex gap="5" justifyContent="center">
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
          </Flex>
          <Flex
            flexWrap="wrap"
            gap={["3", null, null, "5"]}
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
