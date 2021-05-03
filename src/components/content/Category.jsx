import { graphql } from "gatsby"
import React from "react"
import Layout from "../Layout"
import AllPosts from "./AllPosts"

export const query = graphql`
  query($category: String!) {
    allStrapiPosts(
      filter: { categories: { elemMatch: { name: { eq: $category } } } }
    ) {
      nodes {
        id
        title
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
`

const Category = ({ data }) => {
  const posts = data.allStrapiPosts.nodes
  const nameCategory = window.location.pathname.replace("/category/", "")

  return (
    <Layout>
      <div className="container category-page mt-4">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center">{nameCategory}</h1>
          </div>
        </div>
      </div>
      <div className="divider mt-4"></div>
      <section>
        <AllPosts posts={posts} showTitle={false} />
      </section>
    </Layout>
  )
}

export default Category
