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
import { faPhone } from "@fortawesome/free-solid-svg-icons";
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

  const { phoneNumber, socialLinks } = useSiteMetadata();

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
        <Flex gap="5" justifyContent="flex-end">
          <Button as="a" href={phoneNumber.link} variant="mini">
            {phoneNumber.number}
            <FontAwesomeIcon
              icon={faPhone}
              sx={{ ml: "2", maxHeight: "0.875rem", maxWidth: "0.875rem" }}
              fixedWidth
            />
          </Button>
          <Inline gap="4">
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
          </Inline>
        </Flex>
      </Container>
    </BackgroundImage>
  );
};

export default Topper;
