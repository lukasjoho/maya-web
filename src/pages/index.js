import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "bootstrap/dist/css/bootstrap.min.css"
import Banner from "../components/banner"
import Howitworks from "../components/howitworks"
import Testimonials from "../components/testimonials"
import Womenright from "../components/womenright"
import Try from "../components/try"
import Yourbody from "../components/yourbody"
import Offer from "../components/offer"
import Modelknown from "../components/modelknown"

const IndexPage = () => (
  <Layout>
    <SEO title="Maya | Your birth control pills"
         description="Affordable and discreet access to birth control has never been easier."/>
    <Banner/>
    <Howitworks/>
    <Yourbody/>
  
    <Testimonials/>
    
    <Offer/>
    <Womenright/>
    <Modelknown/>
    <Try/>
  </Layout>
)

export default IndexPage
