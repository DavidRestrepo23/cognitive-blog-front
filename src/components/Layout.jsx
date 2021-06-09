import React from "react"
import Footer from "./content/Footer"
import Head from "./header/Head"
import Navigation from "./header/Navigation"

const Layout = ({ children, titlePage }) => {
  return (
    <>
      <Head titlePage={titlePage} />
      {/* <Navigation /> */}
      {children}
      <Footer />
    </>
  )
}

export default Layout
