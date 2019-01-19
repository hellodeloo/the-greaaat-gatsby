import React from 'react'
import { StaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

export default ({ bodyClass, title, description, children, subFooter = true }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title,
            description
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          bodyAttributes={{ class: bodyClass }}
        >
          <title>{`${title}${data.site.siteMetadata.title}`}</title>

          <meta name="description" content={description || data.site.siteMetadata.description} />
        </Helmet>

        <Header current={bodyClass} />

        <Main>
          {children}
        </Main>

        <Footer subFooter={subFooter} />
      </>
    )}
  />
)
