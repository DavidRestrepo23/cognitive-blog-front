import React from "react"
import AllPosts from "../components/content/AllPosts"
import LastPost from "../components/content/LastPost"
import LastsPosts from "../components/content/LastsPosts"
import SectionInfo from "../components/content/SectionInfo"
import Subcribe from "../components/content/Subcribe"
import Layout from "../components/Layout"

const Index = () => {
  return (
    <Layout>
      <section>
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 col-md-6">
              <LastPost />
            </div>
            <div className="col-12 col-md-6">
              <LastsPosts />
            </div>
          </div>
        </div>
      </section>
      <div className="divider my-5"></div>
      <section>
        <AllPosts />
      </section>
      <section>
        <Subcribe />
      </section>
      <div className="divider my-5"></div>
      <section className="section-info d-flex">
        <SectionInfo />
      </section>
    </Layout>
  )
}

export default Index
