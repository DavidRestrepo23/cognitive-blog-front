import React from "react"

const Industries = () => {
  return (
    <section className="mt-md-5 pt-md-5 industries-section">
      <div className="container mt-md-5 pt-md-5 ">
        <div className="row mt-md-5 pt-md-5">
          <div className="col-12 col-md-6">
            <div>
              <h2 className="txt-left">
              Algunas de las <strong>industrias</strong> donde <br/> hemos <strong>creado valor</strong> para nuestros cliente
              </h2>
            </div>
            <div className="my-4">
              <small>
              Entendemos las necesidades que presentan los diferentes modelos de negocios digitales y como desde la ciencia de datos aportamos a la creación de valor en las diferentes industrias. 
              </small>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-md-5 pt-md-5 industries">
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
              <small>MANUFACTURA</small>
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
