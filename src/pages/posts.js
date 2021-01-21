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
            timeToRead
          }
        }
      }
    }
  `)
  /*
  const [state, setState] = useState({
    filteredPosts: [],
    query: "",
  })

  const handleInputChange = event => {
    const query = event.target.value
    const filteredPosts = data.allMarkdownRemark.edges.filter(post => {
      const { description, title, tags } = post.node.frontmatter
      return (
        description.toLowerCase().includes(query.toLowerCase()) ||
        title.toLowerCase().includes(query.toLowerCase()) ||
        (tags && tags.join("").toLowerCase().includes(query.toLowerCase()))
      )
    })
    setState({
      query,
      filteredPosts,
    })
  }*/

  return (
    <Layout headerTitle="curated by me">
      <Head title="Curated" />

      <Container>
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
          <Col>
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
