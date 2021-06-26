import React from "react"
import Icon from "../../images/icon2_on.png"

const WorkUs = () => {
  return (
    <section className="my-5 py-5 workus-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div>
              <h2 className="text-center">
                ¿Por qué trabajar con <strong>nosotros?</strong>
              </h2>
            </div>
            <div className="text-center my-5 px-sm-0">
              <small>
              Para brindar las mejores soluciones a nuestros clientes estudiamos, conceptualizamos y entendemos cada uno  de los diferentes <br/> modelos  de negocio en los cuales está sustentada su compañía,  con el fin de encontrar y dar solución a las verdaderas necesidades.
              </small>
            </div>
          </div>
        </div>
        <div className="row slider-vertical">
          <div className="col-12">
            <div className="container">
              <input type="radio" name="slider" id="item-1" checked />
              <input type="radio" name="slider" id="item-2" />
              <input type="radio" name="slider" id="item-3" />
              <div className="cards">
                <label className="card" for="item-1" id="song-1">
                  <div className="content-workus">
                    <div className="content-workus-icon strategy"></div>
                    <div className="content-workus-text">
                      <h4>Estrategia</h4>
                      <p>
                      Te ayudamos a entender tu negocio desde un punto de vista técnico y buscamos la mejor solución para tu necesidad.
                     </p>
                    </div>
                  </div>
                </label>
                <label className="card" for="item-2" id="song-2">
                  <div className="content-workus">
                    <div className="content-workus-icon service"></div>
                    <div className="content-workus-text">
                      <h4>Servicio al cliente</h4>
                      <p>
                      Tenemos un equipo encargado de llevar a cabo tus proyectos y estar pendiente de que todo salga en el tiempo establecido y en óptima calidad.
                     </p>
                    </div>
                  </div>
                </label>
                <label className="card" for="item-3" id="song-3">
                  <div className="content-workus">
                    <div className="content-workus-icon design"></div>
                    <div className="content-workus-text">
                      <h4>Nos encanta el diseño</h4>
                      <p>
                      Nos tomamos en serio nuestros trabajos y la calidad de nuestros desarrollos. 
                     </p>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkUs
