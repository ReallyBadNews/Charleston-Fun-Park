/** @jsx jsx */

import { FC } from "react";
import { jsx, SxProps } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { ChildFluidObject } from "@/src/types";

interface Query {
  arrow: ChildFluidObject;
}

interface ArrowProps {
  className?: string;
}

const Arrow: FC<ArrowProps & SxProps> = ({ sx, className }) => {
  const {
    arrow: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery<Query>(graphql`
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

export default Arrow;
