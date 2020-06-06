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

const breakpoints = {
  mobile: "(min-width: 475px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1024px)",
  wide: "(min-width: 1280px)",
};

module.exports = {
  siteMetadata: {
    title: "Charleston Fun Park in Mt. Pleasant, SC | Amusement Park",
    description:
      // eslint-disable-next-line max-len
      "Welcome to Charleston Fun Park! We are your locally owned and operated Family Entertainment Center in the Charleston area. We've got go-karts, putt-putt, an arcade, rock climbing, jumpland and more!",
    author: `Charleston Fun Park`,
    siteUrl: "https://charlestonfunpark.com/",
    copyright: `© ${new Date().getFullYear()} Charleston Fun Park. All Rights Reserved.`,
    keywords: [
      `Fun Park`,
      `Amusement Park`,
      `Go Karts`,
      `Putt-Putt`,
      `Mini Golf`,
    ],
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
        name: "Home",
        url: "/",
      },
      {
        name: "Attractions",
        url: "/attractions/",
      },
      {
        name: "Birthdays & Events",
        url: "/birthdays-and-events/",
      },
      {
        name: "Park Info",
        url: "/park-info/",
      },
      {
        name: "Specials",
        url: "/specials/",
      },
      {
        name: "Fun Cards",
        url: "/fun-cards/",
      },
    ],
  },
  pathPrefix: "/charleston-fun-park",
  plugins: [
    "gatsby-plugin-mdx",
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-theme-ui",
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-breakpoints",
      options: {
        queries: breakpoints,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve("./src/templates/MainLayout.js"),
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig,
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Charleston Fun Park",
        short_name: "Fun Park",
        icon: "src/images/logo.png",
        start_url: "/",
        background_color: "#003A59",
        theme_color: "#1DCDF2",
        display: "standalone",
      },
    },
  ],
};
