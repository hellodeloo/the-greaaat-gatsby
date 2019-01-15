const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const freelanceTemplate = path.resolve(`src/templates/freelance.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___slug] }
        limit: 100
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: `freelances/${node.frontmatter.slug}`,
        component: freelanceTemplate,
        context: {
          slug: node.frontmatter.slug
        },
      })
    })
  })
}
