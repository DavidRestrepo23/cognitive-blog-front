import React from "react"
import talentWeb1 from "../../images/santiago_web.png"
import talentWeb2 from "../../images/kelly_web.png"
import talentWeb3 from "../../images/lina_web.png"
import talentWeb4 from "../../images/lorena_web.png"
import talentWeb5 from "../../images/paula_web.png"


const Talent = () => {
  return (
    <section className="my-5 py-5 talent-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5">
            <div>
              <div>
                <h2 className="txt-left">
                 Mayor <strong>activo</strong>
                </h2>
              </div>
              <div className="mt-4">
                <small>
                  Somos una empresa multidisciplinaria apasionada por la tecnología y los datos. Creemos en la tecnología como motor de transformación de la sociedad, generando procesos eficientes en las empresas y optimizando sus operaciones.
                </small>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5 pt-5 justify-content-center talent">
          <div className="col-12 col-md-4 talent text-center my-5 mb-md-5">
            <div className="talent-box">
              <div>
                <img src={talentWeb1} alt="" />
              </div>
              <div className="talent-box-info">
                <div className="mt-5 mb-4">
                  <small>Santiago Alzate Jaramillo</small>
                </div>
                <div>
                  <h4>Director de marketing</h4>
                </div>
                <div></div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 talent text-center my-5 mb-md-5">
            <div className="talent-box">
              <div>
                <img src={talentWeb3} alt="" />
              </div>
              <div className="talent-box-info">
                <div className="mt-5 mb-4">
                  <small>Lina Anaya</small>
                </div>
                <div>
                  <h4>Dirección de RRHH</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 talent text-center my-5 mb-md-5">
            <div className="talent-box">
              <div>
                <img src={talentWeb4} alt="" />
              </div>
              <div className="talent-box-info">
                <div className="mt-5 mb-4">
                  <small>Lorena Torres</small>
                </div>
                <div>
                  <h4>Desarrollo de negocios B2B</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 talent text-center my-5 mb-md-5">
            <div className="talent-box">
              <div>
                <img src={talentWeb2} alt="" />
              </div>
              <div className="talent-box-info">
                <div className="mt-5 mb-4">
                  <small>Kelly Marín</small>
                </div>
                <div>
                  <h4>Comunicaciones </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 talent text-center my-5 mb-md-5">
            <div className="talent-box">
              <div>
                <img src={talentWeb5} alt="" />
              </div>
              <div className="talent-box-info">
                <div className="mt-5 mb-4">
                  <small>Paula Guapacha</small>
                </div>
                <div>
                  <h4>Comunicaciones</h4>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Talent
