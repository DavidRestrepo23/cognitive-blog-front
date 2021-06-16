import { Link } from "gatsby"
import React from "react"
import SocialNetworks from "../utils/SocialNetworks"

const Subcribe = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row subscribe">
          <div className="col-5">
            <h1>
              Agency de <br /> growth marketing
            </h1>
            <p className="my-5">
              Subscribe to our newsletter and get insights from the industry’s
              most relevant topics.
            </p>
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
                <button className="btn btn-primary">Subscríbite <i className="fas fa-chevron-right"></i> </button>
              </div>
            </form>
            <div>
              <SocialNetworks add_class="mt-5" />
            </div>
          </div>
          <div className="col-7 bg-subcribe">
            <img src="" width="100%" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Subcribe
