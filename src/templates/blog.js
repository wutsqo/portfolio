import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Head from "../components/head"
import blogStyles from "./blog.module.scss"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        author
      }
      html
      timeToRead
    }
  }
`

const Blog = props => {
  return (
    <Layout
      frontmatter={props.data.markdownRemark.frontmatter}
      timeToRead={props.data.markdownRemark.timeToRead}
    >
      <Head title={props.data.markdownRemark.frontmatter.title} />
      <div
        className={blogStyles.content}
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      ></div>
    </Layout>
  )
}

export default Blog
