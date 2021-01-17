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
        Copyright ©2021 {author.site.siteMetadata.author} <br />
        Handcrafted with <Emoji label="Love" symbol="❤️" /> using React JS and
        Gatsby
      </small>
    </Container>
  )
}

export default MyFooter
