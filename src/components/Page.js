import React from 'react'
import { Helmet } from 'react-helmet'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

export default ({ bodyClass, children, subFooter = true }) => (
  <>
    <Helmet
      bodyAttributes={{ class: bodyClass }}
    />

    <Header current={bodyClass} />

    <Main>
      {children}
    </Main>

    <Footer subFooter={subFooter} />
  </>
)
