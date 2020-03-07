const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require('path');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

// exports.createPages = async tools => {
//   await createPagesFromMarkdown(tools);
// };

const createPagesFromMarkdown = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const templates = {
    DocTemplate: path.resolve(`src/templates/DocTemplate.js`),
  };

  const result = await graphql(`
    {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/src/pages/" } }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              template
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: templates[node.frontmatter.template || 'DocTemplate'],
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    });
  });
};
