require(`dotenv`).config({
  path: `.env.${process.env.NODE_ENV}`,
});

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  environment: process.env.NODE_ENV,
  host:
    process.env.NODE_ENV === `development`
      ? `preview.contentful.com`
      : `cdn.contentful.com`,
};

if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST;
}

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
    `Contentful spaceId and the access token need to be provided.`
  );
}

const breakpoints = {
  mobile: `(min-width: 475px)`,
  tablet: `(min-width: 768px)`,
  desktop: `(min-width: 1024px)`,
  wide: `(min-width: 1280px)`,
};

module.exports = {
  siteMetadata: {
    title: `Charleston Fun Park in Mt. Pleasant, SC | Amusement Park`,
    description:
      // eslint-disable-next-line max-len
      `Welcome to Charleston Fun Park! We are your locally owned and operated Family Entertainment Center in the Charleston area. We've got go-karts, putt-putt, an arcade, rock climbing, jumpland and more!`,
    author: `Charleston Fun Park`,
    siteUrl: `https://charlestonfunpark.com/`,
    copyright: `© ${new Date().getFullYear()} Charleston Fun Park. All Rights Reserved.`,
    keywords: [
      `Fun Park`,
      `Amusement Park`,
      `Go Karts`,
      `Putt-Putt`,
      `Mini Golf`,
    ],
    phoneNumber: {
      number: `(843) 971-1223`,
      link: `tel:843-971-1223`,
    },
    giftCardLink: `http://blackbeardscove.pfestore.com/retail/GiftCards/Default.aspx`,
    socialLinks: [
      {
        name: `facebook`,
        url: `https://www.facebook.com/charlestonfunpark/`,
      },
      {
        name: `twitter`,
        url: `https://twitter.com/charleston_fun/`,
      },
      {
        name: `instagram`,
        url: `https://www.instagram.com/charlestonfunpark/`,
      },
    ],
    navLinks: [
      {
        name: `Home`,
        url: `/`,
      },
      {
        name: `Attractions`,
        url: `/attractions/`,
      },
      {
        name: `Birthday Parties`,
        url: `/birthday-parties/`,
      },
      {
        name: `Park Info`,
        url: `/park-info/`,
      },
      {
        name: `Group Events`,
        url: `/group-events/`,
      },
      {
        name: `Specials`,
        url: `/specials/`,
      },
      {
        name: `Gift Cards`,
        url: `/gift-cards/`,
      },
      {
        name: `Food & Drink`,
        url: `/food-and-drink-menu/`,
      },
      {
        name: `Employment`,
        url: `/employment/`,
      },
    ],
  },
  pathPrefix: `/charleston-fun-park`,
  plugins: [
    `gatsby-plugin-mdx`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-theme-ui`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-breakpoints`,
      options: {
        queries: breakpoints,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/templates/MainLayout.js`),
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Charleston Fun Park`,
        short_name: `Fun Park`,
        icon: `src/images/logo.png`,
        start_url: `/`,
        background_color: `#003A59`,
        theme_color: `#1DCDF2`,
        display: `standalone`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-32324655-5",
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
  ],
};
