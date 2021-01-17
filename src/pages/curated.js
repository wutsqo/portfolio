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
    <Layout>
      <Container className="my-3">
        <Row>
          <Col>
            <h2 className="text-center">Curated by Me</h2>
            <p>under construction</p>
            <ol>
              {data.allMarkdownRemark.edges.map(edge => {
                return (
                  <li>
                    <Link to={`/blog/${edge.node.fields.slug}`}>
                      <h3>{edge.node.frontmatter.title}</h3>
                    </Link>
                    <p>{edge.node.frontmatter.date}</p>
                  </li>
                )
              })}
            </ol>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default CuratedPage
