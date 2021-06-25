import { Link } from "gatsby"
import React from "react"
import NavigationHome from '../header/NavigationHome'
import tabletImg from "../../images/tablet.png"

const HomeHeader = () => {
  return (
    <>
      <header>
        <NavigationHome />
        <div className="container h-100">
          <div className="row align-items-center mt-5 pt-3">
            <div className="col-12 col-sm-12 col-md-6">
              <h1>
                <div>
                  <h1><strong>Generando valor a través de la Ciencia de Datos</strong></h1>
                </div>
                <div className="mt-4">
                  <h2>Desarrollo a la medida y datos para crecer tu negocio</h2>
                </div>
              </h1>
              <div className="mt-5">
                <Link className="btn btn-default primary" to="#">Asesoría gratis <i className="fas fa-long-arrow-alt-right"></i></Link>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6">
              <img
                src={tabletImg}
                className="img-tablet-header"
                alt=""
              />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default HomeHeader
