/** @jsx jsx */
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { Container, Box, Button, jsx } from "theme-ui";
import { Stack, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
import { useSiteMetadata } from "@/hooks/use-site-metadata";
import StyledLink from "@/components/Link.styled";
import { ChildFluidObject } from "@/src/types";

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
        <Stack
          py="1"
          direction="row"
          spacing="8"
          alignItems="center"
          justifyContent={["space-between", null, "flex-end"]}
        >
          <Stack direction="row" spacing="4">
            <Button as="div" variant="green">
              <Link
                as="a"
                href={phoneNumber.url}
                sx={{ color: "inherit", textDecoration: "none" }}
              >
                <FontAwesomeIcon icon={faPhone} sx={{ mr: "2" }} />
                {phoneNumber.name}
              </Link>
            </Button>
            <Button as="div" variant="cta">
              <Link
                href={giftCardLink}
                sx={{ color: "inherit", textDecoration: "none" }}
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faCartPlus} sx={{ mr: "2" }} />
                Gift Cards
              </Link>
            </Button>
            <Button as="div" variant="white">
              <Link
                href="/group-events"
                sx={{ color: "inherit", textDecoration: "none" }}
              >
                <FontAwesomeIcon icon={faUsers} sx={{ mr: "2" }} />
                Group Events
              </Link>
            </Button>
          </Stack>
          <Stack direction="row" alignItems="center" spacing="6" height="6">
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
          </Stack>
        </Stack>
      </Container>
    </BackgroundImage>
  );
};

export default Topper;
