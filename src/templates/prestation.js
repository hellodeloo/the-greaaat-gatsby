import React from "react"
import { graphql, withPrefix, Link } from 'gatsby'

import Page from '../components/Page'
import NavFreelance from '../components/NavFreelance'

export default function Template({ data: { markdownRemark } }) {
  const { frontmatter, html } = markdownRemark
  const freelances = [];

  return (
    <Page bodyClass='freelances'>

      <NavFreelance current={frontmatter.slug} />

      <div className="wrapper">
        <div className="pod-head">
          <h1 className="pod-head__title">{frontmatter.title}</h1>

          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>

      <div className="freelance-box">
          <div className="wrapper">
            { freelances.map(({ node: { frontmatter: f }}) => (
              <article className="freelance" key={f.slug}>
                <Link to={`/freelances/${f.slug}`} className="freelance__link media" title={f.title}>
                  <div className="freelance__thumb-box">
                    <img
                      width="140"
                      height="140"
                      src={withPrefix(`freelances/${f.picture}`)}
                      className="circle freelance__thumb wp-post-image"
                      alt={f.title}
                    />
                  </div>
                  <div className="freelance__text">
                    <h2 className="h3-like freelance__title">{f.title}</h2>
                    <h3 className="freelance__prestation">{f.position}</h3>
                    <p className="freelance__city mbn">
                      <svg className="icon-location" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 16" enableBackground="new 0 0 12 16">
                        <g stroke="#705C76" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" fill="none">
                          <circle cx="6" cy="5.7" r="1.4"/>
                          <path d="M10.9 5.8c0-2.8-2.2-5-4.9-5s-4.9 2.2-4.9 5c0 3.6 4.9 9.4 4.9 9.4s4.9-5.8 4.9-9.4z"/>
                        </g>
                      </svg>

                      {f.city}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>

    </Page>
  )
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
        slug
      }
    }
  }
`
