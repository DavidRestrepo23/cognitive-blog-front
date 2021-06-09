import { Link } from "gatsby"
import React from "react"

const HomeHeader = () => {
  return (
    <>
      <header>
        <div className="container h-100">
          <div className="row align-items-center h-100">
            <div className="col-12 col-sm-6">
              <h1>
                <div>
                  <span>
                    Lorem Irsit <br /> ipsumdo
                  </span>
                </div>
                <div className="mt-4">
                  <strong>Adipiscing elit sed od tempor</strong>
                </div>
              </h1>
              <div className="mt-5">
                <Link className="btn btn-default primary" to="#">Lorem Ipsum <i className="fas fa-long-arrow-alt-right"></i></Link>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <img
                src="http://via.placeholder.com/800x600"
                width="100%"
                alt=""
              />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default HomeHeader
