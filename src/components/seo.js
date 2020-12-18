import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import useSiteMetadata from "../hooks/use-site-metadata";
import OgImage from "../../static/images/og_image.jpg";
import TwImage from "../../static/images/tw_card.jpg";

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
    if (path === "/") {
      return {
        src:
          "https://app.locbox.com/en-US/website_plugins/lb-d83ac581fec805cd1757fd1904f2b324551caf5e.js",
        type: "text/javascript",
      };
    }
    if (path === "/birthday-parties/") {
      return {
        src:
          "https://app.locbox.com/en-US/website_plugins/lb-85f3c60d6482c555173861510bee8a595f21a44b.js",
        type: "text/javascript",
      };
    }
    if (path === "/attractions/") {
      return {
        src:
          "https://app.locbox.com/en-US/website_plugins/lb-cbdd44e1522ec9a5a23ae45cac178d988c65115e.js",
        type: "text/javascript",
      };
    }
    if (path === "/attractions/mini-golf") {
      return {
        src:
          "https://app.locbox.com/en-US/website_plugins/lb-149f8b64b30410698e6533c697340dac0a95fe75.js",
        type: "text/javascript",
      };
    }
    return {};
  };
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      link={canonical ? [{ rel: "canonical", href: canonical }] : []}
      meta={[
        {
          name: "description",
          content: metaDescription,
        },
        {
          name: "keywords",
          content: keywords,
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:description",
          content: metaDescription,
        },
        {
          property: "og:image",
          content: `${siteUrl}${OgImage}`,
        },
        {
          property: "og:url",
          content: canonical,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          name: "twitter:image",
          content: `${siteUrl}${TwImage}`,
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:creator",
          content: author,
        },
        {
          name: "twitter:title",
          content: title,
        },
        {
          name: "twitter:description",
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
  lang: "en",
  keywords: [],
  description: "",
};

SEO.propTypes = {
  pathname: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  lang: PropTypes.string,
};

export default SEO;
