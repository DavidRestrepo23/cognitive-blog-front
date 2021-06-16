import { Link } from "gatsby"
import React from "react"
import logo from "../../images/logo-white.svg"

const Footer = () => {

  return (
    <>
      <footer>
        <div className="container">
          <div className="row align-items-baseline">
            <div className="col-12 col-md-3 mt-5">
              <div>
                <img src={logo} alt="" width="230" />
              </div>
              <div className="my-4">
                <small className="phone">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, est laboriosam. Omnis fugit, enim vitae similique illum inventore error possimus harum quo nihil non molestias molestiae earum odio esse cupiditate.
                </small>
              </div>
              <div className="social-networks my-5">
                <div><h6>Social Media</h6></div>
                <ul>
                  <li>
                    <Link to="/">
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fab fa-youtube"></i>
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
            <div className="col-12 col-md-2 mt-5">
              <h6 className="mb-4">Servicios</h6>
              <ul className="p-0 m-0 d-block">
                <li><Link to="/">Erat volutpat</Link></li>
                <li><Link to="/">Sed diam</Link></li>
                <li><Link to="/">Dolor sit amet</Link></li>
              </ul>
            </div>
            <div className="col-12 col-md-2 mt-5">
              <h6 className="mb-4">Data Exchange</h6>
              <ul className="p-0 m-0 d-block">
                <li><Link to="/">Erat volutpat</Link></li>
                <li><Link to="/">Sed diam</Link></li>
                <li><Link to="/">Dolor sit amet</Link></li>
              </ul>
            </div>
            <div className="col-12 col-md-2 mt-5">
              <h6 className="mb-4">Acerca</h6>
              <ul className="p-0 m-0 d-block">
                <li><Link to="/">Erat volutpat</Link></li>
                <li><Link to="/">Sed diam</Link></li>
                <li><Link to="/">Dolor sit amet</Link></li>
              </ul>
            </div>
            <div className="col-12 col-md-3 mt-5">
              <h6 className="mb-4">Se el primero en saber acerca de la Cognityve cada día.</h6>
              <ul className="p-0 m-0 d-block">
                <li><div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Enter your email" aria-label="Enter your email" aria-describedby="basic-addon2" />
                  <span className="input-group-text" id="basic-addon2"><i className="fas fa-paper-plane"></i></span>
                </div></li>
                <li><Link to="/">Privacy - Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="text-center py-2">
            <small>Copyright © 2021 - 2024 Cognityve - All Rights Reserved</small>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
