import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Layout from "../components/layout"

const ReviewsPage = () => {
  return (
    <Layout headerTitle="reviews">
      <Container className="py-0">
        <Row>
          <Col>
            <p className="text-center">Books | Movies</p>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default ReviewsPage
