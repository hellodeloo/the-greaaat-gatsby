import React from 'react'
import { Link } from 'gatsby'

export default () => (
  <>
    <div className="sub-footer txt-center">
      <div className="wrapper">
        <div className="hero">
          <p className="h2-like">Vous avez des questions ?</p>
          <p className="mbn">Besoin d'un freelance, de plus d'informations sur le collectif.<br/>N'hésitez pas, nous serons ravis de vous répondre.</p>
        </div>

        <Link to="/contact" className="btn">Contactez-nous</Link>
      </div>
    </div>

    <footer className="footer wrapper" role="contentinfo">
      <div className="disp-t">
        <div className="disp-tc">
          <small className="copyright">&copy;&nbsp;{(new Date()).getFullYear()} Copyright Greaaat &#8211; Réseau de freelances</small>
        </div>

        <div className="disp-tc txt-right">
          <ul className="list-inline mbn">
            <li>
              <a href="https://www.facebook.com/pages/Greaaat/165518043589439" rel="external">
                <svg className="icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" enableBackground="new 0 0 32 32"><path fill="#947D9E" d="M29.3 1h-26.6c-1 0-1.7.7-1.7 1.7v26.7c0 .9.7 1.6 1.7 1.6h14.3v-11.6h-3.9v-4.5h3.9v-3.3c0-3.9 2.4-6 5.8-6 1.7 0 3.1.1 3.5.2v4h-2.4c-1.9 0-2.2.9-2.2 2.2v2.9h4.5l-.6 4.5h-3.9v11.6h7.6c.9 0 1.7-.7 1.7-1.7v-26.6c0-1-.7-1.7-1.7-1.7z"/></svg>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/greaaat" rel="external">
                <svg className="icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" enableBackground="new 0 0 32 32"><path fill="#947D9E" d="M31 6.7c-1.1.5-2.3.8-3.5 1 1.3-.8 2.2-2 2.7-3.4-1.2.7-2.5 1.2-3.9 1.5-1.1-1.2-2.7-1.9-4.5-1.9-3.4 0-6.2 2.8-6.2 6.2 0 .5.1 1 .2 1.4-5.1-.3-9.7-2.7-12.7-6.4-.5.7-.8 1.8-.8 2.9 0 2.1 1.1 4 2.7 5.1-1 0-2-.3-2.8-.8v.1c0 3 2.1 5.5 4.9 6-.5.1-1.1.2-1.6.2-.4 0-.8 0-1.2-.1.8 2.4 3.1 4.2 5.7 4.3-2.1 1.7-4.8 2.6-7.6 2.6-.5 0-1 0-1.5-.1 2.7 1.7 6 2.8 9.4 2.8 11.3 0 17.5-9.4 17.5-17.5v-.8c1.3-.8 2.4-1.9 3.2-3.1z"/></svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </>
)
