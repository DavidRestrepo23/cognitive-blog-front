import { Link } from "gatsby"
import React from "react"
import phoneImage from "../../images/phone.png";

const Tabs = () => {
  return (
    <>
      <section className="my-5 py-5 section-tabs">
        <div className="container">
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
                    Uit wisi enim
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
                    Quis nostrud
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
                    Sed diam
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
                    Suscipit
                  </button>
                </li>
              </ul>
              <div className="tab-content px-5" id="myTabContent">
                <div
                  className="tab-pane p-3 px-md-5 fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row content-tabs align-items-center">
                    <div className="col-12 col-md-6">
                      <div>
                        <h4>Ut wisi enim</h4>
                      </div>
                      <div className="my-4">
                        <h2>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit, sed diam
                        </h2>
                      </div>
                      <div>
                        <p>
                          Ut wisi enim ad minim veniam, quis nostrud
                          exercitation ullamcorper suscipit lobortis nisl ut
                          aliquip ex ea commodo consequat.
                        </p>
                      </div>
                      <div className="mt-5">
                        <Link className="btn btn-default" to="#">
                          Lorem Ipsum{" "}
                          <i className="fas fa-long-arrow-alt-right"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 text-center p-md-5">
                      <div className="content-image-phone">
                        <div>
                          <img className="px-md-5 pt-5 pt-md-0" src={phoneImage}  alt="" />
                        </div>
                        <div className="circle"></div>
                      </div>
                      
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane px-5 fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
                  rem velit nulla, dolores natus nemo adipisci porro nobis iure
                  minus error amet sequi dolorem est voluptatem quo, id sed
                  perspiciatis!
                </div>
                <div
                  className="tab-pane px-5 fade"
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
                  rem velit nulla, dolores natus nemo adipisci porro nobis iure
                  minus error amet sequi dolorem est voluptatem quo, id sed
                  perspiciatis!
                </div>
                <div
                  className="tab-pane px-5 fade"
                  id="other"
                  role="tabpanel"
                  aria-labelledby="other-tab"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
                  rem velit nulla, dolores natus nemo adipisci porro nobis iure
                  minus error amet sequi dolorem est voluptatem quo, id sed
                  perspiciatis!
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
