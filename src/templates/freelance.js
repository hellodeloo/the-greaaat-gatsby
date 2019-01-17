import React from "react"
import { graphql } from "gatsby"

import Freelance from '../components/Freelance'

export default function Template({ data: { markdownRemark } }) {
  const { frontmatter: f, html } = markdownRemark

  return <Freelance freelance={f} content={html} />
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(
      frontmatter: {
        slug: { eq: $slug }
      }
    ) {
      html
      frontmatter {
        title
        position
        city
        website
        facebook
        twitter
        linkedin
        dribble
        github
        viadeo
        behance
        picture
        slug
        seoTitle
        seoDescription
      }
    }
  }
`
