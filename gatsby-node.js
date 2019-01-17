const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const freelanceTemplate = path.resolve(`src/templates/freelance.js`)
  const prestationTemplate = path.resolve(`src/templates/prestation.js`)

  const freelances = await graphql(`
    {
      allMarkdownRemark(
        sort: {
          order: ASC,
          fields: [frontmatter___slug]},
          filter: {
            fileAbsolutePath: {
              regex: "/(freelances)/.*\.md$/"
            }
          }
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
  `)
  freelances.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `freelances/${node.frontmatter.slug}`,
      component: freelanceTemplate,
      context: {
        slug: node.frontmatter.slug
      }
    })
  })

  const prestations = await graphql(`
    {
      allMarkdownRemark(
        sort: {
          order: ASC,
          fields: [frontmatter___slug]},
          filter: {
            fileAbsolutePath: {
              regex: "/(prestations)/.*\.md$/"
            }
          }
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
  `)
  prestations.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `prestation/${node.frontmatter.slug}`,
      component: prestationTemplate,
      context: {
        slug: node.frontmatter.slug
      }
    })
  })
}
