import { Link } from "gatsby"
import React from "react"
import imagePhone from "../../images/celular.png"

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
              <div className="social-networks mt-5">
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
            </div>
          </div>
          <div className="col-7 bg-subcribe">
            <img src={imagePhone} width="100%" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Subcribe
