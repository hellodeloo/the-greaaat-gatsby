import React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'

export default () => (
  <Page bodyClass='contact'>
    <section className="banner">
      <div className="banner__text">
        <p className="banner__subtitle mtl">Succès !</p>
        <h1 className="banner__title">Message envoyé</h1>
        <p className="mtl">
          <Link to="/" className="btn">Retour à la page d'accueil</Link>
        </p>
      </div>
    </section>
  </Page>
)
