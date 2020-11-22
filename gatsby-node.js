const _ = require("lodash");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const docs = result.data.allMarkdownRemark.edges;

    // Posts and Pages
    docs.forEach((doc) => {
      const { id } = doc.node;
      createPage({
        path: doc.node.fields.slug,
        tags: doc.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(doc.node.frontmatter.templateKey)}.js`
        ),
        context: {
          id,
        },
      });
    });

    // Tags
    let tags = [];
    docs.forEach((doc) => {
      if (_.get(doc, `node.frontmatter.tags`)) {
        tags = tags.concat(doc.node.frontmatter.tags);
      }
    });
    tags = _.uniq(tags);

    tags.forEach((tag) => {
      const tagPath = `/blog/tags/${_.kebabCase(tag)}/`;
      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tag-page.js`),
        context: {
          tag,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
