/** @jsx jsx */
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { Box, jsx } from "theme-ui";

const WoodBg = ({ children, className, sx, overlayColor }) => {
  const {
    darkWood: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(graphql`
    query WoodQuery {
      darkWood: file(relativePath: { eq: "darkWood.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);

  return (
    <BackgroundImage className={className} fluid={fluid} sx={sx} Tag="section">
      <Box
        sx={{
          position: "absolute",
          zIndex: "-1",
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
          bg: overlayColor,
          opacity: "0.85",
        }}
      />
      {children}
    </BackgroundImage>
  );
};

WoodBg.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  overlayColor: PropTypes.string,
  sx: PropTypes.shape({}),
};

WoodBg.defaultProps = {
  className: "",
  overlayColor: "",
  sx: {},
};

export default WoodBg;
