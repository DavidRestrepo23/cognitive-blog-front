import React from "react"
import urlSlug from "url-slug"
import { Link } from "gatsby"
import usePostHook from "../hooks/UsePost"

const LastPost = () => {
  const posts = usePostHook()
  const post = posts.slice(-1)[0]

  return (
    <>
      <div className="card-cgt">
        <div>
          <Link to={`/${urlSlug(post.title)}`}>
            <img
              className="card-img-top"
              src={post.image.sharp.fluid.srcWebp}
              alt={post.name}
            />
          </Link>
        </div>
        <div className="card-content-cgt mt-2">
          <Link to={`/category/${urlSlug(post.categories[0].name)}`}>
            <small>
              {post.categories.length > 0 && post.categories[0].name}
            </small>
          </Link>
          <h2 className="my-2">
            <Link to={`/${urlSlug(post.title)}`}>{post.title}</Link>
          </h2>
          <span>
            By {`${post.user.firstname} ${post.user.lastname}`},{" "}
            {post.createdAt}
          </span>
        </div>
      </div>
    </>
  )
}

export default LastPost
