import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Layout from "../components/layout"
import ScrollTopArrow from "../components/scroll"
import SEO from "../components/seo"

const AboutPage = () => {
  return (
    <Layout headerTitle="about">
      <ScrollTopArrow />
      <SEO title="About" />
      <Container className="my-3">
        <Row>
          <Col style={{ fontSize: "large" }}>
            <ul>
              <li data-sal="slide-up">
                <h4>call me wutsqo.</h4>
                <p>i am 19 years old. i love to read, watch, and code.</p>
                <br />
              </li>
              <li data-sal="slide-up">
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
              </li>
              {/* <li data-sal="slide-up">
                <h4>i speak</h4>
                <p>
                  bahasa indonesia (native) <br />
                  bahaso minang (native) <br />
                  english (fluent) <br />
                  japanese (absolute beginner) <br />
                </p>
                <br />
              </li> */}
              <li data-sal="slide-up">
                <h4>experiences</h4>
                <p>web engineer @ ristek fasilkom ui (2021-present)</p>
                <br />
              </li>
              <li data-sal="slide-up">
                <h4>tech stacks</h4>
                <p>
                  languages: <br />
                  python, java, html, css, javascript
                </p>
                <p>
                  technologies: <br /> django, reactjs, gatsby, tailwindcss,
                  git, figma
                </p>
                <br />
              </li>
              <li data-sal="slide-up">
                <h4>favorite artist</h4>
                <p>End of the World (Sekai No Owari)</p>
                <br />
              </li>
              <li data-sal="slide-up">
                <h4>favorite video games</h4>
                <p>VALORANT</p>
                <br />
              </li>
              <li data-sal="slide-up">
                <h4>reachable via</h4>
                <p>
                  email: wutsqo [at] ristek.cs.ui.ac.id
                  <br />
                  line messenger: wutsqoo
                  <br />
                  discord: kafka#2008
                </p>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default AboutPage
