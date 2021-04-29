import { Link } from "gatsby"
import React from "react"

const SectionInfo = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row w-100 h-100">
          <div className="col-12 col-md-4 d-flex align-items-center">
            <h1>
              Lorem ipsum <br /> dolor sit
            </h1>
          </div>
          <div className="col-12 col-md-4">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit rem
              eius recusandae, reiciendis repellendus veritatis cumque, quod
              libero distinctio nulla cupiditate quibusdam. Provident, ullam! Ex
              repellat recusandae tempora pariatur voluptate!
            </p>
            <p className="mt-4">
              <i className="fas fa-check"></i> Lorem, ipsum dolor
            </p>
            <p>
              <i className="fas fa-check"></i> Lorem, ipsum dolor
            </p>
            <p>
              <i className="fas fa-check"></i> Lorem, ipsum dolor
            </p>
          </div>
          <div className="col-12 col-md-4">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit rem
              eius recusandae, reiciendis repellendus veritatis cumque, quod
              libero distinctio
            </p>
            <Link className="btn btn-secondary mt-4" to="/">
              Saber más <i className="fas fa-chevron-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default SectionInfo
