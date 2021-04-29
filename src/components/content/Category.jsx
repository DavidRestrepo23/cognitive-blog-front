import { graphql } from "gatsby"
import React from "react"
import Layout from "../Layout"

export const query = graphql`
  query($category: String!) {
    allStrapiPosts(
      filter: { categories: { elemMatch: { name: { eq: $category } } } }
    ) {
      nodes {
        id
        title
      }
    }
  }
`

const Category = ({ data }) => {
  console.log(data)

  return (
    <Layout>
      <h1>test</h1>
    </Layout>
  )
}

export default Category
