import React from "react"
import tenXthinking from "../../images/10x-thinking.png"
import atlasSeguridad from "../../images/atlas-seguridad.png"
import avionicStudio from "../../images/avionic-studio.png"
import gobernacionAntioquia from "../../images/gobernacion-antioquia.png"
import jepmobiliari from "../../images/jepmobiliari.png"
import kendalFloral from "../../images/kendal-floral.png"
import meego from "../../images/meego.png"

const OurParthers = () => {
  return (
    <section className="my-md-5 py-md-5 our-parthers">
      <div className="container">
        <div className="row mb-md-4">
          <div className="col-12">
            <h2 className="txt-right">
              Ellos confían en <strong>nosotros</strong>
            </h2>
          </div>
        </div>
        <div className="row mt-md-5">
          <div
            id="carouselCognityvePathers"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselCognityvePathers"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselCognityvePathers"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row items1">
                  <div className="col-6 col-sm-6 col-md-3 text-center">
                    <img
                      src={tenXthinking}
                      width="180"
                      className="carousel-item-img"
                      alt=""
                    />

                  </div>
                  <div className="col-6 col-sm-6 col-md-3 text-center">
                    <img
                      src={atlasSeguridad}
                      width="180"
                      className="carousel-item-img"
                      alt=""
                    />

                  </div>
                  <div className="col-6 col-sm-6 col-md-3 text-center">
                    <img
                      src={gobernacionAntioquia}
                      width="180"
                      className="carousel-item-img"
                      alt=""
                    />

                  </div>
                  <div className="col-6 col-sm-6 col-md-3 text-center">
                    <img
                      src={kendalFloral}
                      width="180"
                      className="carousel-item-img"
                      alt=""
                    />

                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row items1">
                  <div className="col-6 col-sm-6 col-md-3 text-center">
                    <img
                      src={avionicStudio}
                      width="180"
                      className="carousel-item-img"
                      alt=""
                    />
                  </div>
                  <div className="col-6 col-sm-6 col-md-3 text-center">
                    <img
                      src={jepmobiliari}
                      width="180"
                      className="carousel-item-img"
                      alt=""
                    />
                  </div>
                  <div className="col-6 col-sm-6 col-md-3 text-center">
                    <img
                      src={meego}
                      width="180"
                      className="carousel-item-img"
                      alt=""
                    />
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

export default OurParthers
