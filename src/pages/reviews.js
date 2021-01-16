import React from "react"
import { Col, Container, Form, Row } from "react-bootstrap"
import Layout from "../components/Layout"

const ReviewsPage = () => {
  return (
    <Layout>
      <Container className="my-3">
        <Row>
          <Col className="text-center">
            <h2>Reviews by Me</h2>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default ReviewsPage
