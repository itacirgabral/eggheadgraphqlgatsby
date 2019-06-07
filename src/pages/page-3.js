
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Terceira página" />
    <h1>Seja bem vindo!</h1>
    <Link to="/">voltar</Link>
  </Layout>
)

export default SecondPage
