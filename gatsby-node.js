/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

async function createDashboardGalleryNodeFields({
  node,
  actions,
  loadNodeContent,
  getNode,
}) {
  const { createNodeField } = actions
  if (node.internal.type === "File" && node.extension === "json") {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: "slug",
      value: "/gallery" + slug,
    })
    const content = await loadNodeContent(node)
    let def
    try {
      def = JSON.parse(content)
    } catch {
      def = {}
    }
    const title = def.title || ""
    const desc = def.description || ""

    createNodeField({
      node,
      name: "definition",
      value: JSON.stringify(def),
    })
    createNodeField({
      node,
      name: "title",
      value: title,
    })
    createNodeField({
      node,
      name: "desc",
      value: desc,
    })
  }
}

async function createDashboardPages({ graphql, actions }) {
  const { createPage } = actions
  const results = await graphql(`
    query {
      allFile(filter: { extension: { eq: "json" } }) {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `)
  results.data.allFile.nodes.forEach(node => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/gallery/templates/dashboard.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}
// You can delete this file if you're not using it
exports.onCreateNode = createDashboardGalleryNodeFields
exports.createPages = async options => {
  await createDashboardPages(options)
}
