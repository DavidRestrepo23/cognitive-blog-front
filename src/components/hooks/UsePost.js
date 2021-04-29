import { useStaticQuery, graphql } from "gatsby"

const usePostHook = () => {
  const postsQuery = useStaticQuery(graphql`
    query myquery {
      posts: allStrapiPosts {
        edges {
          node {
            id
            title
            content
            createdAt(formatString: "MMM DD/YYYY")
            updatedAt(formatString: "MMM DD/YYYY")
            slug
            summary
            published_at
            meta_tags
            meta_title
            image {
              sharp: childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            tags {
              name
              id
              slug
            }
            categories {
              id
              name
              slug
            }
            user {
              firstname
              id
              lastname
            }
          }
        }
      }
    }
  `)

  const posts = []

  postsQuery.posts.edges.map(post => {
    posts.push(post.node)
  })

  return posts
}

export default usePostHook
