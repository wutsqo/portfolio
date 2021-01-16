import React from "react"
import { Col, Container, Form, Row } from "react-bootstrap"
import Layout from "../components/Layout"

const CuratedPage = () => {
  return (
    <Layout>
      <Container className="my-3">
        <Row>
          <Col className="text-center">
            <h2>Curated by Me</h2>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default CuratedPage
