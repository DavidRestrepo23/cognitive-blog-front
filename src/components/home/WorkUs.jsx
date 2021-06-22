import React from "react"
import Icon from "../../images/icon2_on.png"

const WorkUs = () => {
  return (
    <section className="my-5 py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div>
              <h2 className="text-center">
                ¿Por qué trabajar con <strong>Nosotros?</strong>
              </h2>
            </div>
            <div className="text-center my-5">
              <small>
              Nuestro enfoque hacia los soluciones es enfocado a cada uno de los  diferentes modelos de negocio  de nuestros clientes.  <br/>Entender,  estudiar e iterar con nuestras soluciones es nuestro enfoque para mejorar cada uno
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
                    <div><img src={Icon} width="60px" alt="" /></div>
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
                    <div><img src={Icon} width="60px" alt="" /></div>
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
                    <div><img src={Icon} width="60px" alt="" /></div>
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
