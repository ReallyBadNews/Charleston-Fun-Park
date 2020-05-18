/** @jsx jsx */
import { Box, Container, Text, jsx } from "theme-ui";
import { Flex, Stack } from "raam";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import StyledLink from "./Link.styled";
import useSiteMetadata from "../hooks/use-site-metadata";

const Footer = () => {
  const { copyright, navLinks, socialLinks } = useSiteMetadata();

  const socialIcons = {
    facebook: faFacebook,
    twitter: faTwitter,
    instagram: faInstagram,
  };

  return (
    <Box as="footer" bg="black.dark" color="white.light" py="7">
      <Container>
        <Stack gap="5">
          <Flex gap="5" justifyContent="center">
            {navLinks.map((link) => (
              <StyledLink
                key={link.name}
                color="white.light"
                fontFamily="heading"
                fontSize="3"
                fontWeight="bold"
                letterSpacing="wide"
                textDecoration="none"
                to={link.url}
              >
                {link.name}
              </StyledLink>
            ))}
          </Flex>
          <Flex gap="5" justifyContent="center">
            {socialLinks.map((link) => (
              <StyledLink
                key={link.name}
                color="white.light"
                fontSize="3"
                href={link.url}
              >
                <FontAwesomeIcon
                  icon={socialIcons[link.name]}
                  sx={{ maxHeight: "5" }}
                />
              </StyledLink>
            ))}
          </Flex>
          <Text sx={{ textAlign: "center" }} variant="body.normal">
            {copyright}
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
