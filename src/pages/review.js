import React, { useState, useEffect } from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"

const SomeSubPage = props => {
  const [snippets, setSnippets] = useState(0)
  useEffect(() => {
    fetch(
      `https://backend-keren.herokuapp.com/get/review?format=json&slug=` +
        props.id
    )
      .then(response => response.json())
      .then(resultData => {
        setSnippets(resultData)
      })
  }, [])
  return <div>{JSON.stringify(snippets)}</div>
}

const Review = () => {
  return (
    <Layout headerTitle={"reviews (under development)"}>
      <Router>
        <SomeSubPage path="/review/:id" />
      </Router>
    </Layout>
  )
}

export default Review
