import { Link } from "gatsby"
import urlSlug from "url-slug"
import React from "react"

const AllPosts = props => {
  return (
    <>
      <div className="container justify-content-center">
        <div className="row content-all-posts">
          <div className="col-12 mb-5">
            {props.showTitle && <h1>Explora Nuestro Contenido</h1>}
          </div>
          {props.posts.map((post, index) => (
            <div
              className="col-12 col-md-4 d-flex justify-content-center mb-5"
              key={index}
            >
              <div className="card">
                <img
                  className="card-img-top"
                  src={post.image.sharp.fluid.srcWebp}
                  alt={post.name}
                />
                <div className="card-body">
                  <div className="card-cgt">
                    <div className="card-content-cgt mt-2">
                      <Link
                        to={`/category/${urlSlug(post.categories[0].name)}`}
                      >
                        <small>
                          {post.categories.length > 0 &&
                            post.categories[0].name}
                        </small>
                      </Link>
                      <h5 className="my-2">
                        <Link to={`/${urlSlug(post.title)}`}>{post.title}</Link>
                      </h5>
                      <small className="card-content-footer">
                        By {`${post.user.firstname} ${post.user.lastname}`},{" "}
                        {post.createdAt}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default AllPosts
