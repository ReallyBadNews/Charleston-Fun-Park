require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
};

if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST;
}

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  );
}

module.exports = {
  siteMetadata: {
    title: "Charleston Fun Park",
    description:
      // eslint-disable-next-line max-len
      "Welcome to Charleston Fun Park! We are your locally owned and operated Family Entertainment Center in the Charleston area. We've got go-karts, putt-putt, an arcade, rock climbing, jumpland and more!",
    siteUrl: "https://charlestonfunpark.com/",
    copyright: `© ${new Date().getFullYear()} Charleston Fun Park. All Rights Reserved.`,
    phoneNumber: {
      number: "(843) 971-1223",
      link: "tel:843-971-1223",
    },
    socialLinks: [
      {
        name: "facebook",
        url: "https://facebook.com/",
      },
      {
        name: "twitter",
        url: "https://twitter.com/",
      },
      {
        name: "instagram",
        url: "https://instagram.com/",
      },
    ],
    navLinks: [
      {
        name: "Attractions",
        url: "/attractions/",
      },
      {
        name: "Birthdays & Events",
        url: "/birthdays-events/",
      },
      {
        name: "Park Info",
        url: "/park-info/",
      },
      {
        name: "Fun Cards",
        url: "/fun-cards/",
      },
      {
        name: "Specials",
        url: "/specials/",
      },
      {
        name: "Contact Us",
        url: "/contact",
      },
    ],
  },
  pathPrefix: "/charleston-fun-park",
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-plugin-mdx",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig,
    },
    "gatsby-plugin-theme-ui",
  ],
};
