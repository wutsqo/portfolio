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
              i am 19 years old. i love to read, watch, and code. a passionate
              and quick learner who is aiming to be a fullstack web developer in
              the near future.
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
            <p>aimer, yorushika, yoasobi, twice</p>
            <br />
            <h4>favorite video games</h4>
            <p>valorant</p>
            <br />
            <h4>reachable via</h4>
            <p>
              email: mail [at] wutsqo [dot] me
              <br />
              line messenger: wutsqoo
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default AboutPage
