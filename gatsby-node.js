const path = require("path");

// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//   if (stage === "build-html") {
//     actions.setWebpackConfig({
//       module: {
//         rules: [
//           {
//             test: /react-mapbox-gl/,
//             use: loaders.null(),
//           },
//         ],
//       },
//     });
//   }
// };

exports.createPages = async ({
  graphql,
  actions: { createPage },
  reporter,
}) => {
  const result = await graphql(`
    {
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

  // Destructre graphql query
  const {
    data: {
      allContentfulAttraction: { edges: attractions },
      allContentfulSectionPages: { edges: sections },
    },
    errors,
  } = result;

  if (errors) {
    reporter.panicOnBuild("🚨  ERROR: Loading 'createPages' query");
  }

  // Layout templates
  const attractionTemplate = path.resolve(
    "./src/templates/AttractionsLayout.js"
  );
  const sectionTemplate = path.resolve("./src/templates/SectionLayout.js");

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
