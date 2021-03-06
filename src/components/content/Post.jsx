import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../Layout"
import LastsPosts from "./LastsPosts"
import ReactMarkdown from "react-markdown"
import SocialNetworks from "../utils/SocialNetworks"
import urlSlug from "url-slug"

export const query = graphql`
  query($id: String!) {
    allStrapiPosts(filter: { id: { eq: $id } }) {
      nodes {
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

const Post = ({ data }) => {
  const post = data.allStrapiPosts.nodes[0]
  return (
    <Layout>
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-9 mt-5">
              <h1>{post.title}</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="subcribe-post">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-12 col-md-8 text-right p-0">
              <img src={post.image.sharp.fluid.srcWebp} alt={post.title} />
            </div>
            <div className="col-12 col-md-4 subcribe-box">
              <h2 className="mt-3">Comparte</h2>
              <div className="divider mb-2"></div>
              <SocialNetworks />
              <div>
                <h3 className="my-4">Subscribe to our Newsletter</h3>
                <form>
                  <div>
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Tu correo"
                      aria-label=".form-control-lg example"
                    />
                  </div>
                  <div className="mt-4">
                    <button className="btn btn-primary">
                      Subscr??bite <i className="fas fa-chevron-right"></i>{" "}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mt-5 post-content">
          <div className="row mb-5">
            <div className="col-12 col-md-8">
              <div className="header-post d-flex justify-content-between align-items-center">
                <div className="profile d-flex align-items-center">
                  <div>
                    <img src="http://via.placeholder.com/80" alt="" />
                  </div>
                  <div className="ml-3">
                    <p className="mb-0">
                      by {`${post.user.firstname} ${post.user.lastname}`}
                    </p>
                    <small>{post.createdAt}</small>
                  </div>
                </div>
                <div>
                  <ul className="category m-0 p-0">
                    {post.categories.length > 0 &&
                      post.categories.map((category, index) => (
                        <li key={index}>
                          <Link
                            to={`/category/${urlSlug(category.name)}`}
                            key={index}
                          >
                            {category.name}
                          </Link>
                          <span className="last-span"> ??? </span>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
              <div className="mt-5">
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </div>
              <div>
                <ul className="post-tags m-0 p-0">
                  {post.tags.length > 0 &&
                    post.tags.map(tags => (
                      <li>
                        {tags.name}
                        <span className="last-span"> ??? </span>
                      </li>
                    ))}
                </ul>
              </div>
              <div className="header-post d-flex justify-content-between align-items-center mt-5">
                <div className="profile d-flex align-items-center">
                  <div>
                    <img src="http://via.placeholder.com/80" alt="" />
                  </div>
                  <div className="ml-3">
                    <p className="mb-0">
                      by {`${post.user.firstname} ${post.user.lastname}`}
                    </p>
                    <small>{post.createdAt}</small>
                  </div>
                </div>

                <div>
                  <SocialNetworks />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <LastsPosts seePost={true} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Post
