import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import useSiteMetadata from "../hooks/use-site-metadata";
// import OGImage from "../../static/images/tbas_og.jpg";
// import TWImage from "../../static/images/twitter_image.jpg";

const SEO = ({ description, lang, keywords, title, pathname }) => {
  const {
    author,
    title: siteTitle,
    description: siteDescription,
    siteUrl,
  } = useSiteMetadata();

  const metaDescription = description || siteDescription;

  const canonical = pathname && `${siteUrl}${pathname}`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      link={canonical ? [{ rel: "canonical", href: canonical }] : []}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: keywords,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          // content: `${site.siteMetadata.siteUrl}${OGImage}`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:image`,
          // content: `${site.siteMetadata.siteUrl}${TWImage}`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]}
      title={title}
      titleTemplate={`%s | ${siteTitle}`}
    />
  );
};

SEO.defaultProps = {
  lang: `en`,
  keywords: [],
  description: ``,
};

SEO.propTypes = {
  pathname: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  lang: PropTypes.string,
};

export default SEO;
