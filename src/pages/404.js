import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Head from "../components/head"

const NotFound = () => {
  return (
    <Layout headerTitle="Page Not Found">
      <Head title="Ugh, Not Found" />
      <p className="text-center" data-sal="slide-up">
        <h1 className="display-1 mb-5">404</h1>
        <Link to="/">
          {" "}
          <u> head home</u>
        </Link>
      </p>
    </Layout>
  )
}

export default NotFound
