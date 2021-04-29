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

  const categoriesResult = await graphql(`
    query MyQuery {
      allStrapiCategories {
        nodes {
          name
          id
        }
      }
    }
  `)

  if (results.error) {
    reporter.panic("Error", results.errors)
  }

  if (categoriesResult.error) {
    reporter.panic("Error", categoriesResult.errors)
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

  const categories = categoriesResult.data.allStrapiCategories.nodes

  categories.forEach(category => {
    actions.createPage({
      path: `/category/${urlSlug(category.name)}`,
      component: require.resolve("./src/components/content/Category.jsx"),
      context: {
        category: category.name,
      },
    })
  })
}
