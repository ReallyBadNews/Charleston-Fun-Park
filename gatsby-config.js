const path = require("path");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  environment: process.env.NODE_ENV,
  host: ["development", "dev"].includes(process.env.NODE_ENV)
    ? "preview.contentful.com"
    : "cdn.contentful.com",
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

const googleMapsToken = process.env.GOOGLE_MAPS_TOKEN;

const breakpoints = {
  mobile: "(min-width: 475px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1024px)",
  wide: "(min-width: 1280px)",
};

module.exports = {
  siteMetadata: {
    googleMapsToken,
    title: "Charleston Fun Park in Mt. Pleasant, SC | Amusement Park",
    description:
      // eslint-disable-next-line max-len
      "Welcome to Charleston Fun Park! We are your locally owned and operated Family Entertainment Center in the Charleston area. We've got go-karts, putt-putt, an arcade, rock climbing, jumpland and more!",
    author: "Charleston Fun Park",
    siteUrl: "https://charlestonfunpark.com",
    copyright: `© ${new Date().getFullYear()} Charleston Fun Park. All Rights Reserved.`,
    keywords: [
      "Fun Park",
      "Amusement Park",
      "Go Karts",
      "Putt-Putt",
      "Mini Golf",
    ],
    phoneNumber: {
      number: "(843) 971-1223",
      link: "tel:843-971-1223",
    },
    giftCardLink: "https://charlestonfunpark.centeredgeonline.com/retail",
    socialLinks: [
      {
        name: "facebook",
        url: "https://www.facebook.com/charlestonfunpark/",
      },
      {
        name: "twitter",
        url: "https://twitter.com/charleston_fun/",
      },
      {
        name: "instagram",
        url: "https://www.instagram.com/charlestonfunpark/",
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
        name: "Birthday Parties",
        url: "/birthday-parties/",
      },
      {
        name: "Park Info",
        url: "/park-info/",
      },
      {
        name: "Group Events",
        url: "/group-events/",
      },
      {
        name: "Specials",
        url: "/specials/",
      },
      {
        name: "Gift Cards",
        url: "/gift-cards/",
      },
      {
        name: "Food & Drink",
        url: "/food-and-drink-menu/",
      },
      {
        name: "Employment",
        url: "/employment/",
      },
    ],
  },
  pathPrefix: "/charleston-fun-park",
  flags: {
    FAST_DEV: true,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-fontawesome-css",
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        "@/src": path.join(__dirname, "src"),
        "@/components": path.join(__dirname, "src/components"),
        "@/hooks": path.join(__dirname, "src/hooks"),
        "@/templates": path.join(__dirname, "src/templates"),
        "@/images": path.join(__dirname, "src/images"),
        "@/types": path.join(__dirname, "src/types"),
        "@/lib": path.join(__dirname, "src/lib"),
        "@/static": path.join(__dirname, "static"),
      },
    },
    {
      resolve: "gatsby-source-formium",
      options: {
        projectId: process.env.GATSBY_FORMIUM_PROJECTID,
        accessToken: process.env.FORMIUM_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images-contentful",
            options: {
              maxWidth: 1232,
              backgroundColor: "#71D0E2",
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-breakpoints",
      options: {
        queries: breakpoints,
      },
    },
    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve("./src/templates/MainLayout.tsx"),
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
      resolve: "gatsby-plugin-contentful-optional-fields",
      options: {
        optionalFields: {
          ContentfulBirthdaysEventsPage: {
            heading: "String",
            birthdayPackage1Title: "String",
            birthdayPackage2Title: "String",
            birthdayPackage3Title: "String",
            birthdayPackage4Title: "String",
            birthdayPackage5Title: "String",
          },
        },
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
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-169401521-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: false,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Defers execution of google analytics script after page load
        defer: true,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "charlestonfunpark.com",
      },
    },
    {
      resolve: "gatsby-plugin-facebook-pixel",
      options: {
        pixelId: "201365304406137",
      },
    },
    {
      resolve: "gatsby-plugin-typescript",
      options: {
        isTSX: true, // defaults to false
        jsxPragma: "jsx", // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
  ],
};
