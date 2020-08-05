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

  // Create blog post pages.
  const attractions = result.data.allContentfulAttraction.edges;
  const sections = result.data.allContentfulSectionPages.edges;

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
};
