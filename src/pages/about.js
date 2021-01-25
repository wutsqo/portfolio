import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Head from "../components/head"
import Layout from "../components/layout"
import ScrollTopArrow from "../components/scroll"

const AboutPage = () => {
  return (
    <Layout headerTitle="about">
      <ScrollTopArrow />
      <Head title="About" />
      <Container className="my-3">
        <Row>
          <Col style={{ fontSize: "large" }}>
            <div data-sal="slide-up">
              <h4>call me wutsqo.</h4>
              <p>
                i am 19 years old. i love to read, watch, and code. a passionate
                and quick learner who is aiming to be a fullstack web developer
                in the near future.
              </p>
              <br />
            </div>
            <div data-sal="slide-up">
              <h4>education</h4>
              <p>
                computer science - universitas indonesia <br />
                graduation: 2024 (expected)
                {/** 
              <details>
                <summary>relevant courseworks</summary>
                <p>
                  <li>Discrete Mathematics</li>
                  <li>Linear Algebra</li>
                  <li>Calculus</li>
                  <li>Object-Oriented Programming</li>
                  <li>Data Structures and Algorithms</li>
                  <li>Web Design and Programming</li>
                  <li>Databases</li>
                  <li>Advanced Programming</li>
                </p>
              </details>
              */}
              </p>
              <br />
            </div>
            <div data-sal="slide-up">
              <h4>i speak</h4>
              <p>
                bahasa indonesia (native) <br />
                bahaso minang (native) <br />
                english (fluent) <br />
                japanese (absolute beginner) <br />
              </p>
              <br />
            </div>
            <div data-sal="slide-up">
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
            </div>
            <div data-sal="slide-up">
              <h4>favorite artist</h4>
              <p>aimer, yorushika, yoasobi, twice</p>
              <br />
            </div>
            <div data-sal="slide-up">
              <h4>favorite video games</h4>
              <p>valorant</p>
              <br />
            </div>
            <div data-sal="slide-up">
              <h4>reachable via</h4>
              <p>
                email: mail [at] wutsqo [dot] me
                <br />
                line messenger: wutsqoo
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default AboutPage
