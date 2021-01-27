import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import { Col, Row } from "react-bootstrap"
import Header from "./header"
import Loading from "./loading"
import MyNavbar from "./navbar"
import { Router } from "@reach/router"
import layoutStyles from "../styles/layout.module.scss"
import SEO from "./seo"

const ReviewsPage = props => {
  return (
    <Router>
      <ReviewsList path="reviews/" />
      <ReviewItem path="reviews/:slug" />
    </Router>
  )
}

const ReviewCard = props => {
  return (
    <div className={[layoutStyles.reviewCard, "m-2 p-0 text-center"].join(" ")}>
      <img
        src={props.props.cover_url}
        className={layoutStyles.reviewImage}
        alt={props.props.title + "cover"}
      />
      <p className={layoutStyles.reviewTitle}>{props.props.title}</p>
    </div>
  )
}

const ReviewsList = props => {
  const [snippets, setSnippets] = useState(0)
  useEffect(() => {
    fetch(`https://backend-keren.herokuapp.com/?format=json`)
      .then(response => response.json())
      .then(resultData => {
        setSnippets(resultData)
      })
  }, [])
  return (
    <div>
      <SEO title="Reviews" />
      <div className={layoutStyles.header}>
        <MyNavbar />
        <div className={layoutStyles.container} style={{ minHeight: "auto" }}>
          <Header data={{ headerTitle: "reviews (under development)" }} />
        </div>
      </div>
      <div className="container mt-2">
        <Row>
          <Col>
            <div className="d-flex justify-content-center flex-row flex-wrap">
              {snippets ? (
                snippets.results.map(edge => {
                  return (
                    <Link to={"/reviews/" + edge.slug}>
                      <ReviewCard props={edge} />
                    </Link>
                  )
                })
              ) : (
                <Loading />
              )}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

const ReviewItem = props => {
  const [snippets, setSnippets] = useState(0)
  useEffect(() => {
    fetch(
      `https://backend-keren.herokuapp.com/get/review?format=json&slug=` +
        props.slug
    )
      .then(response => response.json())
      .then(resultData => {
        setSnippets(resultData)
      })
  }, [])
  return (
    <div>
      <div className={layoutStyles.header}>
        <MyNavbar />
        <div className={layoutStyles.container} style={{ minHeight: "auto" }}>
          {snippets ? (
            <Header data={{ headerTitle: "Review " + snippets.title }} />
          ) : (
            <Header data={{ headerTitle: "reviews (under development)" }} />
          )}
        </div>
      </div>
      <div className={layoutStyles.container}>
        {snippets ? (
          <div>
            <Row>
              <Col>
                <img
                  src={snippets.cover_url}
                  alt={snippets.title}
                  width="200"
                />{" "}
              </Col>
              <Col>
                <Link to="/reviews/">back</Link> <br />
                <p>Category: {snippets.category}</p>
                <p>
                  {snippets.tags ? (
                    <p>
                      Tags:{" "}
                      {snippets.tags.map(item => {
                        return <span>{item} </span>
                      })}
                    </p>
                  ) : null}
                </p>
                <p>Personal rating: {snippets.stars}</p>
              </Col>
            </Row>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  )
}

export default ReviewsPage
