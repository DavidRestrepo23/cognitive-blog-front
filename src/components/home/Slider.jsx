import { Link } from "gatsby"
import React from "react"

const Slider = () => {
  return (
    <section className="slider-section my-5 pt-5 my-md-0 pt-md-0">
      <div className="container">
        <div className="row slider-title">
          <div className="col-12 slider-text-right">
            <h2 className="txt-right">
              Nuestros casos de{" "}
              <strong>
                éxito <br className="d-none d-sm-block" /> en Cognityve
              </strong>
            </h2>
            <div className="my-4">
              <small>
                Conoce las historias de las marcas nacionales e internacionles <br /> a las que hemos ayudado con éxito en sus proyectos
              </small>
            </div>
          </div>
        </div>
        <div className="row my-5 py-5">
          <div className="col-md-12">
            <div
              id="carouselCognityve"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselCognityve"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselCognityve"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselCognityve"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselCognityve"
                  data-bs-slide-to="3"
                  aria-label="Slide 4"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselCognityve"
                  data-bs-slide-to="4"
                  aria-label="Slide 5"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 text-center">
                      <img
                        src="https://via.placeholder.com/500x300"

                        className="carousel-item-img"
                        alt=""
                      />
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 mt-4">
                      <h4>
                        Trabajamos en la creación y la formación de su equipo BIBA (Business Intelligence y Business Analytics).
                      </h4>
                      <div className="d-flex align-items-baseline px-3">
                        <div>
                          <i className="fas fa-quote-left"></i>
                        </div>
                        <div>
                          <p className="text-quote mr-4 mt-4">
                            Buscamos el mejor talento, realizamos acompañamiento en su primer proyecto, les enseñamos tecnologías y metodologías para que ejecutarán proyectos de datos basados en los clientes de la empresa.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <Link to="/"> LOREM IPSUM DOLOREM A MET <i className="fas fa-long-arrow-alt-right"></i></Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 text-center">
                      <img
                        src="https://via.placeholder.com/500x300"
                        className="carousel-item-img"

                        alt=""
                      />
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 mt-4">
                      <h4>
                        Los acompañamos en la creación de un nuevo modelo de negocio digital con dos servicios: Acompañamiento seguro y Automonitoreo.
                      </h4>
                      <div className="d-flex align-items-baseline px-3">
                        <div>
                          <i className="fas fa-quote-left"></i>
                        </div>
                        <div>
                          <p className="text-quote mr-4 mt-4">
                            Realizamos todo el branding de la marca, desarrollamos a la medida los activos digitales e hicimos estrategias de comercialización SEM en Google - Facebook - Instagram.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <Link to="/"> LOREM IPSUM DOLOREM A MET <i className="fas fa-long-arrow-alt-right"></i></Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 text-center">
                      <img
                        src="https://via.placeholder.com/500x300"
                        className="carousel-item-img"

                        alt=""
                      />
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 mt-4">
                      <h4>
                        Desarrollamos un ecommerce e integraciones con diferentes market places en EEUU.
                      </h4>
                      <div className="d-flex align-items-baseline px-3">
                        <div>
                          <i className="fas fa-quote-left"></i>
                        </div>
                        <div>
                          <p className="text-quote mr-4 mt-4">
                            Realizamos los algoritmos de integración y de encriptación para conectar la 4 marcas de este proyecto con plataformas que les permitieran conectarse con clientes actuales y futuros.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <Link to="/"> LOREM IPSUM DOLOREM A MET <i className="fas fa-long-arrow-alt-right"></i></Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 text-center">
                      <img
                        src="https://via.placeholder.com/500x300"
                        className="carousel-item-img"

                        alt=""
                      />
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 mt-4">

                      <div className="d-flex align-items-baseline px-3">
                        <div>
                          <i className="fas fa-quote-left"></i>
                        </div>
                        <div>
                          <p className="text-quote mr-4 mt-4">
                            Hicimos el desarrollo de un aplicativo web que permitiera conectar y registrar las personas del consejo rector para que pudieran votar, ser elegidos y seleccionar las comisiones que regirán el plan de trabajo departamental los próximos 20 años.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <Link to="/"> LOREM IPSUM DOLOREM A MET <i className="fas fa-long-arrow-alt-right"></i></Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 text-center">
                      <img
                        src="https://via.placeholder.com/500x300"
                        className="carousel-item-img"

                        alt=""
                      />
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 mt-4">
                      <h4>Para su proyecto de asesoría con Innpulsa, acompañamos alrededor de 15 empresas en consultorías de innovación y modelos de transformación digital. Algunas fueron:</h4>
                      <div className="d-flex align-items-baseline px-3">
                        <div>
                          <p className="text-quote mr-4 mt-4">
                            <ul className="p-0">
                              <li>Nutresa</li>
                              <li>Ecopetrol - ODL </li>
                              <li>Cámara de Comercio de Bogotá</li>
                              <li>Coltabaco</li>
                            </ul>
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <Link to="/"> LOREM IPSUM DOLOREM A MET <i className="fas fa-long-arrow-alt-right"></i></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Slider
