import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import blogStyles from "../styles/blog.module.scss"
import { Disqus } from "gatsby-plugin-disqus"
import ScrollTopArrow from "../components/scroll"
import SEO from "../components/seo"

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
      <ScrollTopArrow />
      <SEO title={props.data.markdownRemark.frontmatter.title} />
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
