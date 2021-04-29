import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"

const Footer = () => {

  const { logoNegative } = useStaticQuery(graphql`
    {
      logoNegative: file(relativePath: { eq: "logo-white.svg" }) {
        publicURL
      }
    }
  `)

  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-6 mt-5">
              <div>
                <img src={logoNegative.publicURL} alt="" width="210" />
              </div>
              <div className="my-4">
                <small className="phone">
                  Llamanos: <br />{" "}
                  <Link to="tel:+573213485157">+57 321 348 51 57</Link>
                </small>
              </div>
              <div className="social-networks mb-4">
                <ul>
                  <li>
                    <Link to="/">
                      <i className="fab fa-facebook"></i>
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
              <div>
                <small>
                  © 2021 - Cognitive
                  <br />
                  All Rigths Reserved.
                </small>
              </div>
            </div>
            <div className="col-12 col-md-3 mt-5">
              <div>
                <h6 className="mb-4">Servicios</h6>
                <p>Estrategía Digital</p>
                <p>Inteligencia Artificial deep learning</p>
                <p>Embudos Digitales y MVPs</p>
                <p>Innovación</p>
                <p>Seguimiento de datos</p>
                <p>Data Science</p>
              </div>
            </div>
            <div className="col-12 col-md-3 mt-5">
              <div>
                <h6 className="mb-4">Información</h6>
                <p>
                  Correo <br />
                  <span>santiago.alzate@cognityve.com</span>
                </p>
                <p>
                  Ciudad <br />
                  <span>Medellín - Colombia</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
