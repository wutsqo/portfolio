import React from "react"
import { Col, Container, Form, Row } from "react-bootstrap"
import Layout from "../components/Layout"

const AboutPage = () => {
  return (
    <Layout>
      <Container className="my-3">
        <Row>
          <Col className="text-center">
            <h2>About Me</h2>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default AboutPage
