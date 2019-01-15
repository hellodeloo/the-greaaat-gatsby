import React from 'react'
import { Link } from 'gatsby'

export default () => (
  <ul className="nav-freelance">
    <li className="cat-item"><Link to="/prestation/admin-sys">Admin Sys</Link></li>
    <li className="cat-item"><Link to="/prestation/designer">Designer</Link></li>
    <li className="cat-item"><Link to="/prestation/developpeur">Développeur</Link></li>
    <li className="cat-item"><Link to="/prestation/formateur">Formateur</Link></li>
    <li className="cat-item"><Link to="/prestation/integrateur-web">Intégrateur web</Link></li>
    <li className="cat-item"><Link to="/prestation/seo">SEO</Link></li>
    <li className="cat-item"><Link to="/prestation/webmarketing">Webmarketing</Link></li>
  </ul>
)
