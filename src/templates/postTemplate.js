import React from "react"
import { graphql } from "gatsby"

import Page from "../components/page"
import SEO from "../components/seo"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { title, displayDate } = frontmatter
  const path = `/${markdownRemark.parent.name}`

  return (
    <Page title={title}>
      <SEO title={title} />

      <article>
        <div class="post-date">{displayDate}</div>
        <div
          className="article-body"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <a className="u-url" href={path} hidden>self</a>
      </article>
    </Page>
  )
}

// Date format uses momentjs: https://momentjs.com/docs/#/displaying/format/
export const pageQuery = graphql`
  query($fileAbsolutePath: String!) {
    markdownRemark(fileAbsolutePath: { eq: $fileAbsolutePath }) {
      html
      frontmatter {
        displayDate: date(formatString: "D MMM YYYY")
        date: date(formatString: "YYYY-MM-DD")
        title
      }
      parent {
        ... on File {
          name
        }
      }
    }
  }
`
