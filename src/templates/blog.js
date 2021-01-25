import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Head from "../components/head"
import blogStyles from "../styles/blog.module.scss"
import { Disqus } from "gatsby-plugin-disqus"

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
      <div className="mt-5">
        <hr />
        <Disqus />
      </div>
    </Layout>
  )
}

export default Blog
