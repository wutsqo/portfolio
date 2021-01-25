import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Head from "../components/head"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout headerTitle="about">
      <Head title="About" />
      <Container className="my-3">
        <Row>
          <Col style={{ fontSize: "large" }}>
            <h4>call me wutsqo.</h4>
            <p>
              i am 19 years old. i love to read, watch, and code. i like playing
              valorant as well. aiming to be a fullstack web developer in the
              near future.
            </p>
            <br />
            <h4>education</h4>
            <p>
              <p>computer science - universitas indonesia</p>
            </p>
            <br />
            <h4>i speak</h4>
            <p>
              bahasa indonesia (native) <br />
              bahaso minang (native) <br />
              english (fluent) <br />
              japanese (absolute beginner) <br />
            </p>
            <br />
            <h4>tech stacks</h4>
            <p>
              languages: <br />
              python, java, html, css, javascript
            </p>
            <p>
              technologies: <br /> django, reactjs, gatsby, tailwindcss, git,
              figma, firebase
            </p>
            <br />
            <h4>favorite artist</h4>
            <p>yorushika, yoasobi, twice</p>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default AboutPage
