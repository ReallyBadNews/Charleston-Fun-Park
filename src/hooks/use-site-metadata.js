import { useStaticQuery, graphql } from "gatsby";

const useSiteMetadata = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query SiteMetaData {
      site {
        siteMetadata {
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

export default useSiteMetadata;
