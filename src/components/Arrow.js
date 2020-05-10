/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Arrow = ({ height, transform, width }) => {
  const { arrow } = useStaticQuery(graphql`
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

  // Destructure image
  const {
    childImageSharp: { fluid },
  } = arrow;

  return <Img alt="Arrow" fluid={fluid} sx={{ height, width, transform }} />;
};

Arrow.propTypes = {
  height: PropTypes.string,
  transform: PropTypes.string,
  width: PropTypes.string,
};

Arrow.defaultProps = {
  height: null,
  transform: null,
  width: null,
};

export default Arrow;
