const path = require("path");

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
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  // Layout template
  const attractionsTemplate = path.resolve(
    "./src/templates/AttractionsLayout.js"
  );

  // Create blog post pages.
  const posts = result.data.allContentfulAttraction.edges;

  posts.forEach(({ node }) => {
    createPage({
      path: `/attractions/${node.slug}/`,
      component: attractionsTemplate,
      context: {
        id: node.id,
      },
    });
  });
};
