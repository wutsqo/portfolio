import React, { useState, useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import Header from "../components/header"
import layoutStyles from "../components/layout.module.scss"
import MyNavbar from "../components/navbar"

const ReviewsPage = props => {
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
      <div className={layoutStyles.header}>
        <MyNavbar />
        <div className={layoutStyles.container} style={{ minHeight: "auto" }}>
          <Header data={{ headerTitle: "reviews (under development)" }} />
        </div>
      </div>
      <div className="container-fluid mt-3">
        <Row>
          <Col>
            <div className="d-flex justify-content-center flex-row flex-wrap">
              {snippets ? (
                snippets.results.map(edge => {
                  return <ReviewCard props={edge} />
                })
              ) : (
                <div className="text-center">
                  <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

const ReviewCard = props => {
  return (
    <div
      className={[layoutStyles.reviewCard, "m-2 p-0 shadow text-center"].join(
        " "
      )}
    >
      <img
        src={props.props.cover_url}
        className={layoutStyles.reviewImage}
        alt={props.props.title + "cover"}
      />
      <p className={layoutStyles.reviewTitle}>{props.props.title}</p>
    </div>
  )
}

export default ReviewsPage
