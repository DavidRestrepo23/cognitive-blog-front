import React from "react"
import useImagesHook from "../components/hooks/UseImages"
import Layout from "../components/Layout"
import HeaderHome from "../components/home/Header"
import OurParthers from "../components/home/OurParthers"
import Tabs from "../components/home/Tabs"
import Industries from "../components/home/Industries"
import Slider from "../components/home/Slider"
import Talent from "../components/home/Talent"
import WorkUs from "../components/home/WorkUs"

const Home = () => {
  const logo = useImagesHook()

  return (
    <>
      <Layout titlePage="Home">
        <HeaderHome />
        <OurParthers />
        <Tabs />
        <Industries />
        <Slider />
        <Talent />
        <WorkUs />

        {/* <OurParthers />
        <Tabs />
        <Industries />
        <Slider />
        <Talent />
        <WorkUs /> */}
      </Layout>
    </>
  )
}

export default Home
