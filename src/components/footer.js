import { Container } from "react-bootstrap"
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Emoji from "./emoji"

function MyFooter() {
  const author = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <Container className="text-center py-5">
      <small className="text-center">
        ©2021 {author.site.siteMetadata.author} <br />
      </small>
    </Container>
  )
}

export default MyFooter
