/** @jsx jsx */
import { Box, jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";

const SectionDivider = () => {
  const {
    darkWood: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(graphql`
    query SectionDividerQuery {
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
    <BackgroundImage fluid={fluid} sx={{ height: "12", position: "relative" }}>
      <Box
        sx={{
          backgroundBlendMode: "screen",
          position: "absolute",
          zIndex: "-1",
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
          bg: "green.light",
          opacity: "0.85",
        }}
      />
    </BackgroundImage>
  );
};

export default SectionDivider;
