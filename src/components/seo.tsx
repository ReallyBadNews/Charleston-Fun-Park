import { FC } from "react";
import { Helmet } from "react-helmet";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import OgImage from "../../static/images/og_image.jpg";
import TwImage from "../../static/images/tw_card.jpg";

interface SeoProps {
  description: string;
  lang?: string;
  keywords?: string[];
  title: string;
  pathname: string;
}

const SEO: FC<SeoProps> = ({
  description,
  lang,
  keywords,
  title,
  pathname,
}) => {
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
          name: "description",
          content: metaDescription,
        },
        {
          name: "keywords",
          content: keywords?.join(", "),
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
      title={title}
      titleTemplate={`%s | ${siteTitle}`}
    >
      <script
        src="https://js.adsrvr.org/up_loader.1.1.0.js"
        type="text/javascript"
      />
      {/* <script type="text/javascript">
        {`
          ttd_dom_ready( function() {
            if (typeof TTDUniversalPixelApi === 'function') {
              var universalPixelApi = new TTDUniversalPixelApi();
              universalPixelApi.init("l7kvmjg", ["tf6ilo9"], "https://insight.adsrvr.org/track/up");
            }
          });
        `}
      </script> */}
    </Helmet>
  );
};

SEO.defaultProps = {
  lang: "en",
  keywords: [
    "Fun Park",
    "Amusement Park",
    "Go Karts",
    "Putt-Putt",
    "Mini Golf",
  ],
};

export default SEO;
