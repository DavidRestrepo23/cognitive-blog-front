import React from "react"
import { Link } from "gatsby"
import urlSlug from "url-slug"
import usePostHook from "../hooks/UsePost"

const LastsPosts = props => {
  const posts = usePostHook()
  const lastsPosts = posts.slice(-3)

  return (
    <>
      <div className="last-posts">
        <h4 className="mb-4">Últimos blogs</h4>
        <div className="mb-3 boxs">
          {lastsPosts.map((post, index) => (
            <div className={`d-flex mb-3 ${props.seePost && 'align-items-center'}`} key={index}>
              <div>
                <Link to="/">
                  <img
                    className={`card-img-top ${props.seePost && "img-in-post"}`}
                    src={post.image.sharp.fluid.srcWebp}
                    alt={post.name}
                  />
                </Link>
              </div>
              <div className="ml-3 last-posts-items">
                <div className="mt-3">
                  <Link to="/" className="mb-3">
                    <small>
                      {post.categories.length > 0 && post.categories[0].name}
                    </small>
                  </Link>
                  <h5 className="my-0">
                    <Link className={`${props.seePost && "h5-in-post"}`} to={`/${urlSlug(post.title)}`}>{post.title}</Link>
                  </h5>
                  <div>
                    <small className={`${props.seePost && "d-flex justify-content-between"}`}>
                      <div>
                        By {`${post.user.firstname} ${post.user.lastname}`}
                      </div>
                      <div>{post.createdAt}</div>
                    </small>
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

export default LastsPosts
