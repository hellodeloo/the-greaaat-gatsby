import React from 'react'
import { Link } from 'gatsby'

import logo from '../assets/img/logo-greaaat.svg'

export default ({ current }) => (
  <header className="header" role="banner">
    <div className="wrapper">
      <a className="logo" href="/" rel="home">
        <img alt="Greaaat - Réseau de freelances" src={logo} width="124" height="35" />
      </a>

      <button id="btn-nav"><span className="btn-nav__inner"></span></button>

      <nav className="nav" role="navigation">
        <ul className="nav__list">
          <li className={`${current === 'le-reseau-de-freelances' ? 'is-active' : ''}`}>
            <Link to="/le-reseau-de-freelances">Le réseau</Link>
          </li>
          <li className={`${current === 'freelances' ? 'is-active' : ''}`}>
            <Link to="/freelances">Les freelances</Link>
          </li>
          <li>
            <a href="https://blog.greaaat.com/">Le blog</a>
          </li>
          <li className={`${current === 'contact' ? 'is-active' : ''}`}>
            <Link to="/contact">Nous contacter</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)
