import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import postsStyles from "../styles/posts.module.scss"
import ScrollTopArrow from "../components/scroll"
import SEO from "../components/seo"

const CuratedPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            excerpt
            fields {
              slug
            }
            timeToRead
          }
        }
      }
    }
  `)

  return (
    <Layout headerTitle="posts">
      <SEO title="Posts" />

      <Container>
        <ScrollTopArrow />
        {/*
        <Row>
          <Col>
            <input
              type="text"
              aria-label="Search"
              placeholder="Search posts"
              value={state.query}
              onChange={handleInputChange}
            />
          </Col>
        </Row>
      */}
        <Row>
          <Col data-sal="slide-up">
            {data.allMarkdownRemark.edges.map(edge => {
              return (
                <div className={postsStyles.post}>
                  <Link to={`/${edge.node.fields.slug}`}>
                    <h4>{edge.node.frontmatter.title}</h4>
                  </Link>
                  <p>
                    <i>{edge.node.frontmatter.date}</i> &nbsp; • &nbsp;{" "}
                    {edge.node.timeToRead} mins read
                  </p>
                </div>
              )
            })}
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default CuratedPage
