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

  const popupScript = (path) => {
    if (path === `/birthday-parties/`) {
      return {
        src: `https://app.locbox.com/en-US/website_plugins/lb-85f3c60d6482c555173861510bee8a595f21a44b.js`,
        type: `text/javascript`,
      };
    }
    if (path === `/`) {
      return {
        src: `https://app.locbox.com/en-US/website_plugins/lb-d94e63d49902cb78c00d6a2c797926ec393e3997.js`,
        type: `text/javascript`,
      };
    }
    if (path === `/attractions/`) {
      return {
        src: `https://app.locbox.com/en-US/website_plugins/lb-cbdd44e1522ec9a5a23ae45cac178d988c65115e.js`,
        type: `text/javascript`,
      };
    }
    return {};
  };

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      link={canonical ? [{ rel: `canonical`, href: canonical }] : []}
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
          property: `og:url`,
          content: canonical,
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
      script={[popupScript(pathname)]}
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
