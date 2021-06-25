import { Link } from "gatsby"
import React from "react"
import logo from "../../images/Logo_Footer.png"

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
                  En Cognityve creemos en la tecnología como motor de crecimiento de la sociedad.
                  A través de nuestro trabajo queremos ayudar a crear una sociedad más justa e inclusiva, apoyando sectores que han sido aislados por diferentes razones.
                </small>
              </div>
              <div className="social-networks my-5">
                <div><h6>Social Media</h6></div>
                <ul>
                  <li>
                    <Link to="https://www.instagram.com/cognityve/" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.facebook.com/Cognityve-101379955017098" target="_blank">
                      <i className="fab fa-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.linkedin.com/company/cognityve/" target="_blank">
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-3 my-4 mt-sm-5">
              <h6 className="mb-4">Servicios</h6>
              <ul className="p-0 m-0 d-block">
                <li><Link to="/">Ciencia de datos</Link></li>
                <li><Link to="/">Desarrollo a la medida</Link></li>
                <li><Link to="/">Equipos a la medida</Link></li>
                <li><Link to="/">Transformación digital</Link></li>
              </ul>
            </div>
            <div className="col-12 col-md-2 my-4 mt-sm-5">
              <h6 className="mb-4">Acerca</h6>
              <ul className="p-0 m-0 d-block">
                <li><Link to="/">Nosotros</Link></li>
                <li><Link to="/">Preguntas frecuentes</Link></li>
                <li><Link to="/">Casos de éxito</Link></li>
              </ul>
            </div>
            <div className="col-12 col-md-4 my-4 mt-sm-5">
              <h6 className="mb-4">Suscríbete a nuestra newsletter y obtén información para aprender constantemente y conocer los diferentes proyectos en los que estamos trabajando.</h6>
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
