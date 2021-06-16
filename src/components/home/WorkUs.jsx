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
            <div className="text-center mt-4">
              <small>
                Ut wisi enim ad minim veniam, quis nostrud exercitation
                ullamcorper <br /> suscipit lobortis nisl ut aliquip ex ea commodo
                consequat.
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
                      <h4>Lorem Ipsum dolerd 1</h4>
                      <p>
                      Ut wisi enim ad minim veniam, quis nostrud exercitation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                     </p>
                    </div>
                  </div>
                </label>
                <label className="card" for="item-2" id="song-2">
                  <div className="content-workus">
                    <div><img src={Icon} width="60px" alt="" /></div>
                    <div className="content-workus-text">
                      <h4>Lorem Ipsum dolerd 2</h4>
                      <p>
                      Ut wisi enim ad minim veniam, quis nostrud exercitation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                     </p>
                    </div>
                  </div>
                </label>
                <label className="card" for="item-3" id="song-3">
                  <div className="content-workus">
                    <div><img src={Icon} width="60px" alt="" /></div>
                    <div className="content-workus-text">
                      <h4>Lorem Ipsum dolerd 3</h4>
                      <p>
                      Ut wisi enim ad minim veniam, quis nostrud exercitation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
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
