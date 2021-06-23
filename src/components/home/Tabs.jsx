import { Link } from "gatsby"
import React from "react"
import phoneImage from "../../images/phone.png";

const Tabs = () => {
  return (
    <>
      <section className="mb-md-5 pb-md-5 py-5 mt-5 section-tabs">
        <div className="container py-5 mt-5">
          <div className="row">
            <div className="col-12">
              <h2 className="txt-left">
                Acerca cómo <strong>Cognitive</strong> <br /> ayuda a tu
                crecimiento
              </h2>
            </div>
          </div>
          <div className="row mt-5 tabs-section">
            <div className="col-12">
              <ul
                className="nav nav-tabs justify-content-center"
                id="myTab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    Ciencia de datos
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Soluciones a la medida
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#contact"
                    type="button"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    Transformación digital
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="other-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#other"
                    type="button"
                    role="tab"
                    aria-controls="other"
                    aria-selected="false"
                  >
                    Equipos a la medida
                  </button>
                </li>
              </ul>
              <div className="tab-content py-5 py-md-0 px-sm-5" id="myTabContent">
                <div
                  className="tab-pane px-4 px-md-5 fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row content-tabs align-items-center">
                    <div className="col-12 col-md-6">
                      <div>
                        <h4>Ciencia de datos</h4>
                      </div>
                      <div className="my-4">
                        <h2>
                          Creamos proyectos en ciencia de datos según las necesidades de cada cliente.
                          ¿No sabes por dónde empezar? Nosotros te ayudamos a estructurar y a entender cuál debería ser ese punto de partida de tu proyecto.
                        </h2>
                      </div>
                      <div>
                        <ul className="px-3">
                          <li>Analisis modelos de negocio</li>
                          <li>Gobierno del Dato</li>
                          <li>Fuentes de Datos</li>
                          <li>Limpieza de Datos</li>
                          <li>Creacion de Datalakes</li>
                          <li>Entre otros</li>
                        </ul>
                      </div>
                      <hr className="my-5" />
                      <div className="mt-5">
                        <Link className="btn btn-default" to="#">
                          Obten Asesoría
                          <i className="fas fa-long-arrow-alt-right"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 text-center p-md-5">
                      <div className="content-image-phone">
                        <div>
                          <img className="px-md-5 pt-5 pt-md-0" src={phoneImage} alt="" />
                        </div>
                        <div className="circle"></div>
                      </div>

                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane px-4 px-md-5 fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="row content-tabs align-items-center">
                    <div className="col-12 col-md-6">
                      <div>
                        <h4>Soluciones a la medida para empresas</h4>
                      </div>
                      <div className="my-4">
                        <h2>
                          Estructuramos y diseñamos aplicaciones de software personalizadas con soluciones tecnológicas innovadoras y únicas. Además, con metodologías ágiles, establecemos soluciones para ayudar a que tu negocio y tus procesos sean óptimos.
                        </h2>
                      </div>
                      <div>
                        <ul className="px-3">
                          <li>ERPs</li>
                          <li>Apps </li>
                          <li>Ecommerce</li>
                          <li>Aplicativos Web</li>
                          <li>Arquitectura </li>
                          <li>Ciberseguridad</li>
                        </ul>
                      </div>
                      <hr className="my-5" />
                      <div className="mt-5">
                        <Link className="btn btn-default" to="#">
                          Contáctanos
                          <i className="fas fa-long-arrow-alt-right"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 text-center p-md-5">
                      <div className="content-image-phone">
                        <div>
                          <img className="px-md-5 pt-5 pt-md-0" src={phoneImage} alt="" />
                        </div>
                        <div className="circle"></div>
                      </div>

                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane px-4 px-md-5 fade"
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <div className="row content-tabs align-items-center">
                    <div className="col-12 col-md-6">
                      <div>
                        <h4>Transformación digital</h4>
                      </div>
                      <div className="my-4">
                        <h2>

                          Te ayudamos a entender cuales son los retos en transformación digital de tu compañía. Te acompañamos en la creación de procesos, arquitectura y cultura con un enfoque digital de nueva generación.
                        </h2>
                      </div>
                      <div>
                        <ul className="px-3">
                          <li>Liderazgo del proyecto</li>
                          <li>Road map</li>
                          <li>Gestion del cambio</li>
                          <li>Marketing Digital</li>
                          <li>Búsqueda de perfiles</li>
                        </ul>
                      </div>
                      <hr className="my-5" />
                      <div className="mt-5">
                        <Link className="btn btn-default" to="#">
                          Contáctanos
                          <i className="fas fa-long-arrow-alt-right"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 text-center p-md-5">
                      <div className="content-image-phone">
                        <div>
                          <img className="px-md-5 pt-5 pt-md-0" src={phoneImage} alt="" />
                        </div>
                        <div className="circle"></div>
                      </div>

                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane px-4 px-md-5 fade"
                  id="other"
                  role="tabpanel"
                  aria-labelledby="other-tab"
                >
                  <div className="row content-tabs align-items-center">
                    <div className="col-12 col-md-6">
                      <div>
                        <h4>Equipos a la medida</h4>
                      </div>
                      <div className="my-4">
                        <h2>
                        Te acompanamos en la busqueda de talento para tus equipos in house. Somos expertos en la busqueda de desarrolladores, cientificos de datos y talentos en tecnologia. Déjanos hacer el trabajo por ti.
                        </h2>
                      </div>
                      <hr className="my-5" />
                      <div className="mt-5">
                        <Link className="btn btn-default" to="#">
                          Contáctanos
                          <i className="fas fa-long-arrow-alt-right"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 text-center p-md-5">
                      <div className="content-image-phone">
                        <div>
                          <img className="px-md-5 pt-5 pt-md-0" src={phoneImage} alt="" />
                        </div>
                        <div className="circle"></div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Tabs
