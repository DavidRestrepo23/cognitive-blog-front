import { Link } from "gatsby"
import React from "react"
import logo from '../../images/cognityve-logo-02.png'
import logoWhite from "../../images/logo-white.svg"

const NavigationHome = () => {

  return (
    <>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-0 navigation-home d-flex align-items-end">
            <img src={logo} alt="Cognitive logo" className="logo-img d-none d-md-block" width="286" />
            <img src={logoWhite} alt="Cognitive logo" className="logo-img d-block d-md-none" width="250" />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end mt-5"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    Carreras
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    Nosotros
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link contact-link" aria-current="page" to="https://api.whatsapp.com/send?phone=573213485157&text=Hola!%20Me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20los%20servicios%20de%20Cognityve.%20Muchas%20gracias%20%F0%9F%98%80" target="_blank">
                    Contáctanos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" target="_blank" to="https://www.instagram.com/cognityve/">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" target="_blank" to="https://www.facebook.com/Cognityve-101379955017098">
                    <i className="fab fa-facebook"></i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" target="_blank" to="https://www.linkedin.com/company/cognityve/">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </li>
              </ul>
            </div>
         
        </nav>
      </div>
    </>
  )
}

export default NavigationHome
