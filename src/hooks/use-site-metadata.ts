import { useStaticQuery, graphql } from "gatsby";

type LinkType = {
  name: string;
  url: string;
};

type SiteMetadataType = {
  googleMapsToken: string;
  title: string;
  description: string;
  author: string;
  siteUrl: string;
  copyright: string;
  keywords: string[];
  phoneNumber: {
    number: string;
    link: string;
  };
  giftCardLink: string;
  navLinks: LinkType[];
  socialLinks: LinkType[];
};

type Query = {
  site: {
    siteMetadata: SiteMetadataType;
  };
};

export const useSiteMetadata = (): SiteMetadataType => {
  const {
    site: { siteMetadata },
  } = useStaticQuery<Query>(graphql`
    query SiteMetaData {
      site {
        siteMetadata {
          googleMapsToken
          title
          description
          author
          siteUrl
          copyright
          keywords
          phoneNumber {
            number
            link
          }
          giftCardLink
          navLinks {
            name
            url
          }
          socialLinks {
            name
            url
          }
        }
      }
    }
  `);
  return siteMetadata;
};
