/** @jsx jsx */
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { Box, jsx } from "theme-ui";

const WoodBg = ({ children, overlayColor }) => {
  const {
    darkWood: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(graphql`
    query WoodQuery {
      darkWood: file(relativePath: { eq: "darkWood.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <BackgroundImage
      fluid={fluid}
      sx={{
        backgroundRepeat: `repeat`,
        backgroundSize: `auto`,
        backgroundPosition: `top center`,
      }}
      Tag="section"
    >
      <Box
        sx={{
          position: `absolute`,
          zIndex: `-1`,
          top: `0`,
          right: `0`,
          bottom: `0`,
          left: `0`,
          bg: overlayColor,
          opacity: `0.85`,
        }}
      />
      {children}
    </BackgroundImage>
  );
};

WoodBg.propTypes = {
  children: PropTypes.node.isRequired,
  overlayColor: PropTypes.string,
};

WoodBg.defaultProps = {
  overlayColor: `blue.light`,
};

export default WoodBg;
