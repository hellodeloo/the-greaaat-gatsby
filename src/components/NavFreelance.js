import React from 'react'
import { Link } from 'gatsby'

export default ({ current }) => (
  <ul className="nav-freelance">
    <li className={getClasses(current, 'admin-sys-devops')}>
      <Link to="/prestation/admin-sys-devops">Admin Sys &amp; DevOps</Link>
    </li>
    <li className={getClasses(current, 'designers-creatifs')}>
      <Link to="/prestation/designers-creatifs">Designers &amp; Creatifs</Link>
    </li>
    <li className={getClasses(current, 'developpeurs')}>
      <Link to="/prestation/developpeurs">Développeurs</Link>
    </li>
    <li className={getClasses(current, 'experts-marketing')}>
      <Link to="/prestation/experts-marketing">Expert marketing</Link>
    </li>
    <li className={getClasses(current, 'formateurs')}>
      <Link to="/prestation/formateurs">Formateurs</Link>
    </li>
  </ul>
)

const getClasses = (current, slug) => {
  let classes = 'cat-item'

  if (current === slug) {
    classes += ' current-cat'
  }

  return classes
}
