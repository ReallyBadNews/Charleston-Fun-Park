/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Arrow = ({ height, transform, width }) => {
  const {
    arrow: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(graphql`
    query ArrowQuery {
      arrow: file(relativePath: { eq: "arrow.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  return <Img alt="Arrow" fluid={fluid} sx={{ height, width, transform }} />;
};

Arrow.propTypes = {
  height: PropTypes.string,
  transform: PropTypes.string,
  width: PropTypes.oneOf(
    PropTypes.string,
    PropTypes.arrayOf([PropTypes.string])
  ),
};

Arrow.defaultProps = {
  height: null,
  transform: null,
  width: null,
};

export default Arrow;
