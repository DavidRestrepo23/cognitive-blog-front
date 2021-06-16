import { Link } from "gatsby"
import React from "react"

const Slider = () => {
  return (
    <section className="slider-section">
      <div className="container">
        <div className="row slider-title">
          <div className="col-12 slider-text-right">
            <h2 className="txt-right">
              Nuestros casos de{" "}
              <strong>
                éxito <br /> en Cognityve
              </strong>
            </h2>
            <div className="my-4">
              <small>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit
                <br />
                Voluptate rerum doloremque dolorum molestias dolor similique
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
                        Feugiat pretium nib ipsum consequa vida tru quisque non
                        tellus orci ac strud ctor tellus mauris Feugiat pretium
                        nib ipsum conseq?
                      </h4>
                      <div className="d-flex align-items-baseline px-3">
                        <div>
                          <i className="fas fa-quote-left"></i>
                        </div>
                        <div>
                          <p className="text-quote mr-4 mt-4">
                            Feugiat pretium nib ipsum consequa vida trum quisque
                            non tellus orci ac strud ctor tellus mauris Feugiat
                            pretium nib ipsum consequa vida trum Feugiat pretium
                            nib ipsum consequa vida trum quisque non tell
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
                        ASDASD pretium nib ipsum consequa vida tru quisque non
                        tellus orci ac strud ctor tellus mauris Feugiat pretium
                        nib ipsum conseq?
                      </h4>
                      <div className="d-flex align-items-baseline px-3">
                        <div>
                          <i className="fas fa-quote-left"></i>
                        </div>
                        <div>
                          <p className="text-quote mr-4 mt-4">
                            Feugiat pretium nib ipsum consequa vida trum quisque
                            non tellus orci ac strud ctor tellus mauris Feugiat
                            pretium nib ipsum consequa vida trum Feugiat pretium
                            nib ipsum consequa vida trum quisque non tell
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
