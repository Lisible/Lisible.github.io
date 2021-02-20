import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Articles from "../components/articles"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Lisible" />
    <Articles />
  </Layout>
)

export default IndexPage
