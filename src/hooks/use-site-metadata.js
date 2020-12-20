import { useStaticQuery, graphql } from "gatsby";

export const useSiteMetadata = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query SiteMetaData {
      site {
        siteMetadata {
          mapboxToken
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
