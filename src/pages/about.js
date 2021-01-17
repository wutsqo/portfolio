import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout headerTitle="about">
      <Container className="my-3">
        <Row>
          <Col>
            <h4>call me wutsqo.</h4>
            <p>
              i am 19 years old. i love to read, watch, and code. aiming to be a
              fullstack web developer in the near future
            </p>
            <br />
            <h4>education</h4>
            <p>
              <li>SMAN 1 Sumatera Barat</li>
              <li>Computer Science - Universitas Indonesia</li>
            </p>
            <br />
            <h4>i speak</h4>
            <p>
              <li>native: bahasa indonesia, minang</li>
              <li>fluent: english</li>
              <li>beginner: japanese</li>
            </p>
            <br />
            <h4>tech stacks</h4>
            <p>
              <li>language: python, java, html, css, javascript</li>
              <li>framework: django, bootstrap, reactjs, gatsby</li>
              <li>tools: git, figma, inkscape</li>
            </p>
            <br />
            <h4>Projects</h4>
            <p>coming soon</p>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default AboutPage
