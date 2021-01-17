import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"

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
      <Container className="my-3">
        <Row>
          <Col>
            {data.allMarkdownRemark.edges.map(edge => {
              return (
                <div>
                  <Link to={`/blog/${edge.node.fields.slug}`}>
                    <h3>{edge.node.frontmatter.title}</h3>
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