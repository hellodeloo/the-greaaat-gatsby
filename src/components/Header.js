import React, { Component } from 'react'
import { Link } from 'gatsby'

import logo from '../assets/img/logo-greaaat.svg'

export default class Header extends Component {
  state = {
    showMenu: false
  }

  render () {
    const { current } = this.props
    const { showMenu } = this.state

    return (
      <header className="header" role="banner">
        <div className="wrapper">
          <a className="logo" href="/" rel="home">
            <img alt="Greaaat - Réseau de freelances" src={logo} width="124" height="35" />
          </a>

          <button
            id="btn-nav"
            className={showMenu ? 'btn-nav--active' : ''}
            onClick={() => this.setState({ showMenu: !showMenu })}
          >
            <span className="btn-nav__inner"></span>
          </button>

          <nav className={`nav ${showMenu ? 'nav__displayed' : ''}`} role="navigation">
            <ul className="nav__list">
              <li className={getClasses(current, 'le-reseau-de-freelances')}>
                <Link to="/le-reseau-de-freelances">Le réseau</Link>
              </li>
              <li className={getClasses(current, 'freelances')}>
                <Link to="/freelances">Les freelances</Link>
              </li>
              <li>
                <a href="https://blog.greaaat.com/">Le blog</a>
              </li>
              <li className={getClasses(current, 'contact')}>
                <Link to="/contact">Nous contacter</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

const getClasses = (current, slug) => {
  let classes = ''

  if (current === slug) {
    classes += ' is-active'
  }

  return classes
}
