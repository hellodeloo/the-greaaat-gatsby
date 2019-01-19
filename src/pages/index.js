import React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'

export default () => (
  <Page bodyClass="home" title="Greaaat">
    <section>
      <div className="banner">
        <div className="wrapper">
          <div className="banner__text">
            <h1 className="banner__title"><span className="clr0-light">Greaaat</span><br/> Réseau de freelances</h1>
            <p className="banner__subtitle">Spécialisé dans les métiers du digital</p>
            <p>&nbsp;</p>
            <p><Link to="/freelances" className="btn">Accéder aux freelances</Link></p>
          </div>

          <a href="#content" className="next-slide">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" enableBackground="new 0 0 100 100">
              <path className="next-slide__arrow" stroke="#E7384A" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" fill="none" d="M62 24l-12 12-12-12"/>
            </svg>
          </a>
        </div>
      </div>

      <div id="content" className="wrapper">
        <div className="hero">
          <h2>Réseau de freelances en qui vous pouvez avoir confiance</h2>
          <p className="lead">Greaaat est un réseau de freelances qui aiment leur métier et qui n'ont que pour but de satisfaire leurs clients. Chaque membre du réseau peut travailler de façon indépendante ou répondre de manière collective afin de réaliser votre projet.</p>
        </div>

        <div className="txt-center mbl">
          <Link to="/le-reseau-de-freelances" className="btn">A propos du réseau</Link>
        </div>

        <ul className="list-reset skills">
          <li className="skills__item">
            <h3 className="title-small">
              <svg className="icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" enableBackground="new 0 0 32 32">
                <g stroke="#6F5B76" strokeWidth=".5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" fill="none">
                  <path d="M19.9 6.2h2.6M19.9 10.1h2.6M19.9 14.1h2.6M19.9 18h2.6M19.9 21.9h2.6M19.9 25.8h2.6"/>
                </g>
                <g stroke="#6F5B76" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" fill="none">
                  <path d="M4.3 24.8h7.8"/>
                  <path strokeWidth=".5" d="M4.3 22.9h7.8M8.2 9.4c0 1-.9 1.9-1.9 1.9s-1.9-.9-1.9-1.9M12.1 9.4c0 1-.9 1.9-2 1.9s-1.9-.9-1.9-1.9M6.2 11.3v11.6M10.1 11.3v11.6M6.2 5.7h3.9"/>
                </g>
                <g stroke="#6F5B76" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" fill="none">
                  <path d="M19.9 3h7.8v26h-7.8zM11.8 8.1c.1.3.3.5.3.8v17.8c0 1.3-1.2 2.3-2.6 2.3h-2.6c-1.4 0-2.6-1-2.6-2.3v-17.8c0-.3.1-.5.3-.8l3.6-5.1 3.6 5.1z"/>
                </g>
              </svg>
              Designer
            </h3>
            <p className="skills__legend">Ui designer, direction artistique, webdesign, design d'application mobile, charte graphique, logotype…</p>
          </li>

          <li className="skills__item">
            <h3 className="title-small">
              <svg className="icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" enableBackground="new 0 0 32 32">
                <g stroke="#6F5B76" strokeMiterlimit="10" fill="none">
                  <path d="M16 4h-1.2c-.6 0-1.2.5-1.2 1.2v1.5c0 .5-.3.9-.8 1.1l-.8.2c-.4.1-.9 0-1.2-.3l-1-1c-.5-.5-1.2-.5-1.6 0l-1.4 1.5c-.5.5-.5 1.2 0 1.6l1 1c.3.4.4.8.2 1.2l-.3.8c-.2.5-.6.8-1.1.8h-1.4c-.6 0-1.2.5-1.2 1.2v2.3c0 .6.5 1.2 1.2 1.2h1.5c.5 0 .9.3 1.1.8l.2.9c.1.4 0 .9-.3 1.2l-1 1c-.5.5-.5 1.2 0 1.6l1.5 1.5c.5.5 1.2.5 1.6 0l1-1c.3-.3.8-.4 1.2-.3l.8.3c.5.2.8.6.8 1.1v1.5c0 .6.5 1.2 1.2 1.2h2.4c.6 0 1.2-.5 1.2-1.2v-1.5c0-.5.3-.9.8-1.1l.8-.3c.4-.1.9 0 1.2.3l1 1c.5.5 1.2.5 1.6 0l1.5-1.5c.5-.5.5-1.2 0-1.6l-1-1c-.3-.3-.4-.8-.3-1.2l.3-.8c.2-.5.6-.8 1.1-.8h1.5c.6 0 1.2-.5 1.2-1.2v-2.3c0-.6-.5-1.2-1.2-1.2h-1.5c-.5 0-.9-.3-1.1-.8l-.3-.9c-.1-.4 0-.9.3-1.2l1-1c.5-.5.5-1.2 0-1.6l-1.5-1.5c-.5-.5-1.2-.5-1.6 0l-1 1c-.4.4-.8.5-1.2.3l-.8-.3c-.5-.2-.8-.6-.8-1.1v-1.4c0-.6-.5-1.2-1.2-1.2h-1.2z"/>
                  <circle cx="16" cy="16" r="3.7"/>
                </g>
              </svg>
              Développeur web
            </h3>
            <p className="skills__legend">Développeur Front-end / PHP / Ruby On Rails / Drupal / WordPress</p>
          </li>

          <li className="skills__item">
            <h3 className="title-small">
              <svg className="icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" enableBackground="new 0 0 32 32">
                <path stroke="#6F5B76" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M28 26h-24c-1.1 0-2-.9-2-2v-16c0-1.1.9-2 2-2h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2z" fill="none"/>
                <path stroke="#6F5B76" strokeWidth=".5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" fill="none" d="M2 11.4h28"/>
                <path d="M4.9 8.2c-.3 0-.5.2-.5.5s.2.5.5.5.5-.2.5-.5-.2-.5-.5-.5zM6.4 8.2c-.3 0-.5.2-.5.5s.2.5.5.5.5-.2.5-.5-.2-.5-.5-.5zM8 8.2c-.3 0-.5.2-.5.5s.2.5.5.5.5-.2.5-.5-.3-.5-.5-.5z"/>
                <g stroke="#6F5B76" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" fill="none">
                  <path d="M12.1 15.9l-2.2 2.8 2.2 2.9M19.9 21.6l2.2-2.9-2.2-2.8"/>
                </g>
                <path stroke="#6F5B76" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M13.3 21.1M17.6 15.4M13.3 21.1M17.1 15.4" fill="none"/>
              </svg>
              Intégrateur web
            </h3>
            <p className="skills__legend">HTML5, CSS3, jQuery, responsive web design, newsletter</p>
          </li>

          <li className="skills__item">
            <h3 className="title-small">
              <svg className="icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" enableBackground="new 0 0 32 32">
                <path stroke="#6F5B76" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M28 26h-24c-1.1 0-2-.9-2-2v-16c0-1.1.9-2 2-2h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2z" fill="none"/>
                <path stroke="#6F5B76" strokeWidth=".5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" fill="none" d="M2 11.4h28"/>
                <path fill="#6F5B76" d="M4.9 8.2c-.3 0-.5.2-.5.5s.2.5.5.5.5-.2.5-.5-.2-.5-.5-.5zM6.4 8.2c-.3 0-.5.2-.5.5s.2.5.5.5.5-.2.5-.5-.2-.5-.5-.5zM8 8.2c-.3 0-.5.2-.5.5s.2.5.5.5.5-.2.5-.5-.3-.5-.5-.5z"/>
                <path stroke="#6F5B76" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M13.3 21.1M17.6 15.4M13.3 21.1M17.1 15.4" fill="none"/>
                <path stroke="#6F5B76" strokeWidth=".5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" fill="none" d="M4.1 15.4h8.9v6.8h-8.9zM4.1 15.4l8.9 6.7M13 15.4l-8.9 6.7"/>
                <g stroke="#6F5B76" strokeWidth=".5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" fill="none">
                  <path d="M14.7 16.1h13.2M14.7 17.9h13.2M14.7 19.6h13.2M14.7 21.4h13.2"/>
                </g>
              </svg>
              UX/UI Designer
            </h3>
            <p className="skills__legend">Hiérarchisation de l'information, wireframing, gabarit fonctionnel, audit ergonomique</p>
          </li>

          <li className="skills__item">
            <h3 className="title-small">
              <svg className="icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" enableBackground="new 0 0 32 32">
                <path stroke="#6F5B76" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" fill="none" d="M16 17.7l-12-5 12-5 12 5zM7.7 14.2v5.7c0 1.3 3.7 4.4 8.3 4.4s8.3-3.1 8.3-4.4v-5.7"/>
                <g stroke="#6F5B76" strokeWidth=".5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" fill="none">
                  <path d="M26.8 13.1v4.2"/>
                  <circle cx="26.8" cy="17.8" r=".5"/>
                  <path d="M27.7 19.2l-.9-.9-.9.9z"/>
                </g>
              </svg>
              Formateur
            </h3>
            <p className="skills__legend">Formateur indépendant, html5/CSS3, jQuery, Responsive web design, WordPress, Ruby On Rails</p>
          </li>
        </ul>
      </div>
    </section>
  </Page>
)
