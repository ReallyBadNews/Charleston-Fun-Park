/** @jsx jsx */
import StyledLink from "@/components/Link.styled";
import { useSiteMetadata } from "@/hooks/use-site-metadata";
import { ChildFluidObject } from "@/types/types";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCartPlus,
  faGolfBall,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { Flex, Inline } from "raam";
import { Box, Button, Container, jsx } from "theme-ui";

interface Query {
  grassBg: ChildFluidObject;
}

const Topper = (): JSX.Element => {
  const {
    grassBg: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery<Query>(graphql`
    query TopperQuery {
      grassBg: file(relativePath: { eq: "grassBg.png" }) {
        childImageSharp {
          fluid(maxWidth: 2048, maxHeight: 43) {
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
      className="topper"
      fluid={fluid}
      sx={{
        backgroundColor: "green.dark",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
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
        sx={{ position: "relative", zIndex: "100" }}
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
                href="/fun-putt-open"
                sx={{ color: "inherit", textDecoration: "none" }}
              >
                <FontAwesomeIcon icon={faGolfBall} sx={{ mr: "2" }} />
                Fun Putt Open
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
    </BackgroundImage>
  );
};

export default Topper;
