const path = require("path");

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-mapbox-gl/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allContentfulAttraction {
        edges {
          node {
            id
            title
            slug
          }
        }
      }
      allContentfulSectionPages {
        edges {
          node {
            id
            title
            slug
            description {
              description
            }
            content {
              childMdx {
                body
              }
            }
          }
        }
      }
      allContentfulBirthdaysEventsPage {
        edges {
          node {
            id
            title
            slug
            description {
              description
            }
            birthdayPackage1Title
            birthdayPackage1Price
            birthdayPackage1Content {
              childMdx {
                body
              }
            }
            birthdayPackage1Media {
              title
              description
              fluid {
                sizes
              }
            }
            birthdayPackage2Title
            birthdayPackage2Price
            birthdayPackage2Content {
              childMdx {
                body
              }
            }
            birthdayPackage3Title
            birthdayPackage3Price
            birthdayPackage3Content {
              childMdx {
                body
              }
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  // Layout templates
  const attractionTemplate = path.resolve(
    "./src/templates/AttractionsLayout.js"
  );
  const sectionTemplate = path.resolve("./src/templates/SectionLayout.js");
  const bDayTemplate = path.resolve("./src/templates/BirthdaysEventsLayout.js");

  // Create blog post pages.
  const attractions = result.data.allContentfulAttraction.edges;
  const sections = result.data.allContentfulSectionPages.edges;
  const bDays = result.data.allContentfulBirthdaysEventsPage.edges;

  attractions.forEach(({ node }) => {
    createPage({
      path: `/attractions/${node.slug}/`,
      component: attractionTemplate,
      context: {
        id: node.id,
      },
    });
  });

  sections.forEach(({ node }) => {
    createPage({
      path: `${node.slug}/`,
      component: sectionTemplate,
      context: {
        id: node.id,
      },
    });
  });

  bDays.forEach(({ node }) => {
    createPage({
      path: `${node.slug}/`,
      component: bDayTemplate,
      context: {
        id: node.id,
      },
    });
  });
};
