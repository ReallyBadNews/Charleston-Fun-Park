/** @jsx jsx */
import PropTypes from "prop-types";
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
import StyledLink from "../Link.styled";

const Topper = ({ data }) => {
  const { image } = useStaticQuery(graphql`
    query TopperQuery {
      image: file(relativePath: { eq: "grassBg.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);

  // Destructure image
  const {
    childImageSharp: { fluid },
  } = image;

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
      px={["3", null, null, null, "0"]}
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
          opacity: "0.75",
        }}
      />
      <Container py="1" sx={{ position: "relative", zIndex: "100" }}>
        <Flex gap="5" justifyContent="flex-end">
          <Button as="a" href={data.phoneNumber.link} variant="mini">
            {data.phoneNumber.number}
            <FontAwesomeIcon
              icon={faPhone}
              sx={{ ml: "2", maxHeight: "0.875rem", maxWidth: "0.875rem" }}
              fixedWidth
            />
          </Button>
          <Inline gap="4">
            {data.socialLinks.map((link) => (
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

Topper.propTypes = {
  data: PropTypes.shape({
    navLinks: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        url: PropTypes.string,
      })
    ),
    phoneNumber: PropTypes.shape({
      link: PropTypes.string,
      number: PropTypes.string,
    }),
    socialLinks: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        url: PropTypes.string,
      })
    ),
  }).isRequired,
};

export default Topper;
