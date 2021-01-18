import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import postsStyles from "./posts.module.scss"
import Head from "../components/head"

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
          }
        }
      }
    }
  `)

  return (
    <Layout headerTitle="curated by me">
      <Head title="Curated" />
      <Container className="my-3">
        <Row>
          <Col>
            {data.allMarkdownRemark.edges.map(edge => {
              return (
                <div className={postsStyles.post}>
                  <Link to={`/blog/${edge.node.fields.slug}`}>
                    <h4>{edge.node.frontmatter.title}</h4>
                  </Link>
                  <p>{edge.node.frontmatter.date}</p>
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
