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
          copyright
          keywords
          phoneNumber {
            number
            link
          }
          funCardLink
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
