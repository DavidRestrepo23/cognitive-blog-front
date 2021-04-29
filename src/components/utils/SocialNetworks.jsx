import { Link } from "gatsby"
import React from "react"

const SocialNetworks = (props) => {
  return (
    <div className={`social-networks ${props.add_class}`}>
      <ul>
        <li>
          <Link to="/">
            <i className="fab fa-facebook-f"></i>
          </Link>
        </li>
        <li>
          <Link to="/">
            <i className="fab fa-instagram"></i>
          </Link>
        </li>
        <li>
          <Link to="/">
            <i className="fab fa-twitter"></i>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default SocialNetworks
