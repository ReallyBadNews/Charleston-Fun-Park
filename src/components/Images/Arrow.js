/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Arrow = ({ sx, className }) => {
  const {
    arrow: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(graphql`
    query ArrowQuery {
      arrow: file(relativePath: { eq: "arrow.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);

  return <Img alt="Arrow" className={className} fluid={fluid} sx={sx} />;
};

Arrow.propTypes = {
  className: PropTypes.string,
  sx: PropTypes.shape({}),
};

Arrow.defaultProps = {
  className: ``,
  sx: {},
};

export default Arrow;
