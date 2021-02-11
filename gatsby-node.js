/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const postTemplate = path.resolve(`src/templates/postTemplate.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: ".*\\\\.md$/"}}
      ) {
        edges {
          node {
            fileAbsolutePath
            parent {
              ... on File {
                name
              }
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query: ${result.errors.join()}`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/article/${node.parent.name}`,
      component: postTemplate,
      context: {
        fileAbsolutePath: node.fileAbsolutePath,
      },
    })
  })
}
