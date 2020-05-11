/** @jsx jsx */
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { Box, jsx } from "theme-ui";

const BrickBg = ({ children }) => {
  const { brickTexture } = useStaticQuery(graphql`
    query BrickQuery {
      brickTexture: file(relativePath: { eq: "brickTexture.jpg" }) {
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
  } = brickTexture;

  return (
    <BackgroundImage
      bg="black.dark"
      fluid={fluid}
      sx={{ position: "relative", bg: "black.dark" }}
      Tag="section"
    >
      <Box
        sx={{
          position: "absolute",
          zIndex: "-1",
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
          bg: "black.dark",
          opacity: "0.75",
        }}
      />
      {children}
    </BackgroundImage>
  );
};

BrickBg.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BrickBg;
