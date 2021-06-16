import React from "react"
import retailImage from '../../images/retail.png'
import gobiernoImage from '../../images/gobierno.png'
import tecnologiaImage from '../../images/tecnologia.png'
import manoFacturaImage from '../../images/mano_factura.png'
import logisticaImage from '../../images/logistica.png'


const Industries = () => {
  return (
    <section className="mt-5 pt-5 industries-section">
      <div className="container mt-5 pt-5 ">
        <div className="row mt-5 pt-5">
          <div className="col-12 col-md-6">
            <div>
              <h2 className="txt-left">
                Algunas de nuestras <strong>industrias</strong>
              </h2>
            </div>
            <div className="my-4">
              <small>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptate rerum doloremque dolorum molestias dolor similique
                voluptatum reiciendis.
              </small>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-5 pt-5 industries">
          <div className="col-6 col-sm-3 col-md-2 pb-5 induestrie-item induestrie-item-1 pl-0 text-center">
            <div className="retail-img"></div>
            <div className="my-3">
              <small>RETAIL</small>
            </div>
          </div>
          <div className="col-6 col-sm-3 col-md-2 pb-5 induestrie-item induestrie-item-2 pl-0 text-center">
            <div className="gobierno-img"></div>
            <div className="mt-3">
              <small>GOBIERNO</small>
            </div>
          </div>
          <div className="col-6 col-sm-3 col-md-2 pb-5 induestrie-item induestrie-item-3 pl-0 text-center">
            <div className="tecnologia-img"></div>
            <div className="mt-3">
              <small>TECNOLOGÍA - STARTUPS</small>
            </div>
          </div>
          <div className="col-6 col-sm-3 col-md-2 pb-5 induestrie-item induestrie-item-4 pl-0 text-center">
            <div className="mano_factura-img"></div>
            <div className="mt-3">
              <small>MANOFACTURA</small>
            </div>
          </div>
          <div className="col-6 col-sm-3 col-md-2 pb-5 induestrie-item pl-0 induestrie-item-5 text-center">
            <div className="logistica-img"></div>
            <div className="mt-3">
              <small>LOGÍSTICA</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Industries
