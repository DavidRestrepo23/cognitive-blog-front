import { Link } from "gatsby"
import React from "react"
import NavigationHome from '../header/NavigationHome'
import tabletImg from "../../images/tablet.png"

const HomeHeader = () => {
  return (
    <>
      <header>
        <NavigationHome />
        <div className="container h-100">
          <div className="row align-items-center mt-5 pt-3">
            <div className="col-12 col-sm-12 col-md-6">
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
            <div className="col-12 col-sm-12 col-md-6">
              <img
                src={tabletImg}
                className="img-tablet-header"
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
