const urlSlug = require("url-slug")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const results = await graphql(`
    query {
      allStrapiPosts {
        nodes {
          id
          title
        }
      }
    }
  `)

  if (results.error) {
    reporter.panic("Error", results.errors)
  }

  const posts = results.data.allStrapiPosts.nodes

  posts.forEach(post => {
    actions.createPage({
      path: urlSlug(post.title),
      component: require.resolve("./src/components/content/Post.jsx"),
      context: {
        id: post.id,
      },
    })
  })
}
