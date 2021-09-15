import { FC, useEffect } from "react";
import { Helmet } from "react-helmet";
import OgImage from "../../static/images/og_image.jpg";
import TwImage from "../../static/images/tw_card.jpg";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import fontFiles from "@/static/fonts";

interface SeoProps {
  description: string;
  lang?: string;
  keywords?: string[];
  title: string;
  pathname: string;
}

declare global {
  interface Window {
    ttd_dom_ready: (e: any) => void;
    TTDUniversalPixelApi: any;
  }
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

  useEffect(() => {
    if (
      typeof window === "object" &&
      typeof window.ttd_dom_ready === "function"
    ) {
      window.ttd_dom_ready(() => {
        if (typeof window.TTDUniversalPixelApi === "function") {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
          const universalPixelApi = new window.TTDUniversalPixelApi();
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
          universalPixelApi.init(
            "l7kvmjg",
            ["tf6ilo9"],
            "https://insight.adsrvr.org/track/up"
          );
        }
      });
    }
    return undefined;
  }, []);

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
          content: `${siteUrl}${OgImage as string}`,
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
          content: `${siteUrl}${TwImage as string}`,
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
        defer
      />
      <link
        as="font"
        crossOrigin="anonymous"
        href={fontFiles.PlayfairDisplayBlack as string}
        rel="preload"
        type="font/woff2"
      />
      <link
        as="font"
        crossOrigin="anonymous"
        href={fontFiles.NeonTubes as string}
        rel="preload"
        type="font/woff2"
      />
      <link
        as="font"
        crossOrigin="anonymous"
        href={fontFiles.GreycliffRegular as string}
        rel="preload"
        type="font/woff2"
      />
      <link
        as="font"
        crossOrigin="anonymous"
        href={fontFiles.GreycliffMedium as string}
        rel="preload"
        type="font/woff2"
      />
      <link
        as="font"
        crossOrigin="anonymous"
        href={fontFiles.GreycliffBold as string}
        rel="preload"
        type="font/woff2"
      />
      <link
        as="font"
        crossOrigin="anonymous"
        href={fontFiles.GreycliffHeavy as string}
        rel="preload"
        type="font/woff2"
      />
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
