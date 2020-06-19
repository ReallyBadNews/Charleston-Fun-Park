/** @jsx jsx */
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { Container, Box, Button, jsx } from "theme-ui";
import { Flex, Inline } from "raam";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCartPlus, faPhone } from "@fortawesome/free-solid-svg-icons";
import useSiteMetadata from "../../hooks/use-site-metadata";
import StyledLink from "../Link.styled";

const Topper = () => {
  const {
    grassBg: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(graphql`
    query TopperQuery {
      grassBg: file(relativePath: { eq: "grassBg.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);

  const { giftCardLink, phoneNumber, socialLinks } = useSiteMetadata();

  const socialIcons = {
    facebook: faFacebook,
    twitter: faTwitter,
    instagram: faInstagram,
  };

  return (
    <BackgroundImage
      bg="green.dark"
      className="topper"
      fluid={fluid}
      sx={{
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          zIndex: "-1",
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
        py="1"
        sx={{ position: "relative", zIndex: "100" }}
      >
        <Flex gap="5" justifyContent={["space-between", null, "flex-end"]}>
          <Inline gap="3">
            <Button as="a" href={giftCardLink} target="_blank" variant="cta">
              <FontAwesomeIcon
                icon={faCartPlus}
                sx={{ mr: "2", maxHeight: "4", maxWidth: "4" }}
                fixedWidth
              />
              Gift Cards
            </Button>
            <Button as="a" href={phoneNumber.link} variant="white">
              {phoneNumber.number}
              <FontAwesomeIcon
                icon={faPhone}
                sx={{ ml: "2", maxHeight: "0.875rem", maxWidth: "0.875rem" }}
                fixedWidth
              />
            </Button>
          </Inline>
          <Inline alignItems="center" gap="4" sx={{ height: "full" }}>
            {socialLinks.map((link) => (
              <StyledLink
                key={link.name}
                color="white.light"
                fontSize="4"
                href={link.url}
              >
                <FontAwesomeIcon
                  icon={socialIcons[link.name]}
                  sx={{ maxHeight: "6" }}
                />
              </StyledLink>
            ))}
          </Inline>
        </Flex>
      </Container>
    </BackgroundImage>
  );
};

export default Topper;
