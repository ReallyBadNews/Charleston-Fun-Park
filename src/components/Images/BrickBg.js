/** @jsx jsx */
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { Box, jsx } from "theme-ui";

const BrickBg = ({ children, id }) => {
  const {
    brickTexture: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(graphql`
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

  return (
    <BackgroundImage
      fluid={fluid}
      id={id}
      sx={{ position: `relative`, bg: `black.dark` }}
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
          bg: `blue.xdark`,
          opacity: `0.75`,
        }}
      />
      {children}
    </BackgroundImage>
  );
};

BrickBg.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
};

BrickBg.defaultProps = {
  id: null,
};

export default BrickBg;
