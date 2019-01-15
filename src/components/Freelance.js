import React from 'react'
import { withPrefix } from 'gatsby'

import Page from './Page'
import NavFreelance from './NavFreelance'

export default ({ freelance, content }) => (
  <Page bodyClass="single-freelances">
    <NavFreelance />

    <div className="wrapper">
      <div className="disp-t mbl single-freelance__head">
        <div className="disp-tc v-middle">
          <img
            width="250"
            height="250"
            src={withPrefix(`freelances/${freelance.picture}`)}
            className="circle wp-post-image"
            alt={freelance.title}
          />
        </div>

        <div className="disp-tc v-middle">
          <h1 className="mbn">{freelance.title}</h1>
          <h2 className="freelance__prestation mbn">{freelance.position}</h2>
          <h3 className="freelance__city freelance__city--big mtm">
            <svg className="icon-location" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 16" enableBackground="new 0 0 12 16">
              <g stroke="#705C76" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" fill="none">
                <circle cx="6" cy="5.7" r="1.4"/>
                <path d="M10.9 5.8c0-2.8-2.2-5-4.9-5s-4.9 2.2-4.9 5c0 3.6 4.9 9.4 4.9 9.4s4.9-5.8 4.9-9.4z" />
              </g>
            </svg>
            {freelance.city}
          </h3>

          <p className="mbn mtl">
            <a href={freelance.website} target="_blank" rel="external noopener noreferrer" className="btn mtn">Voir le site web</a>
          </p>
        </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: content }} />

      <FreelanceSocialLinks {...freelance} />
    </div>
  </Page>
)

const FreelanceSocialLinks = ({ facebook, twitter, linkedin, dribble, github, viadeo, behance }) => {
  if (facebook === 'xxx' && twitter === 'xxx' && linkedin === 'xxx' && dribble === 'xxx' && github === 'xxx' && viadeo === 'xxx' && behance === 'xxx') {
    return <br />
  }

  return (
    <ul className="list-inline social-list">
      <li>Retrouvez-moi aussi sur :</li>
      { facebook !== 'xxx' &&
        <li>
          <a href={facebook} target="_blank" rel="external noopener noreferrer" className="facebook">
            <svg className="icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" enableBackground="new 0 0 32 32">
              <path fill="#947D9E" d="M29.3 1h-26.6c-1 0-1.7.7-1.7 1.7v26.7c0 .9.7 1.6 1.7 1.6h14.3v-11.6h-3.9v-4.5h3.9v-3.3c0-3.9 2.4-6 5.8-6 1.7 0 3.1.1 3.5.2v4h-2.4c-1.9 0-2.2.9-2.2 2.2v2.9h4.5l-.6 4.5h-3.9v11.6h7.6c.9 0 1.7-.7 1.7-1.7v-26.6c0-1-.7-1.7-1.7-1.7z"/>
            </svg>
          </a>
        </li>
      }

      { twitter !== 'xxx' &&
        <li>
          <a href={twitter} target="_blank" rel="external noopener noreferrer" className="twitter">
            <svg className="icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" enableBackground="new 0 0 32 32">
              <path fill="#947D9E" d="M31 6.7c-1.1.5-2.3.8-3.5 1 1.3-.8 2.2-2 2.7-3.4-1.2.7-2.5 1.2-3.9 1.5-1.1-1.2-2.7-1.9-4.5-1.9-3.4 0-6.2 2.8-6.2 6.2 0 .5.1 1 .2 1.4-5.1-.3-9.7-2.7-12.7-6.4-.5.7-.8 1.8-.8 2.9 0 2.1 1.1 4 2.7 5.1-1 0-2-.3-2.8-.8v.1c0 3 2.1 5.5 4.9 6-.5.1-1.1.2-1.6.2-.4 0-.8 0-1.2-.1.8 2.4 3.1 4.2 5.7 4.3-2.1 1.7-4.8 2.6-7.6 2.6-.5 0-1 0-1.5-.1 2.7 1.7 6 2.8 9.4 2.8 11.3 0 17.5-9.4 17.5-17.5v-.8c1.3-.8 2.4-1.9 3.2-3.1z"/>
            </svg>
          </a>
        </li>
      }

      { linkedin !== 'xxx' &&
        <li>
          <a href={linkedin} target="_blank" rel="external noopener noreferrer" className="linkedin">
            <svg className="icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" enableBackground="new 0 0 32 32">
              <path fill="#947D9E" d="M28.8.9h-25.6c-1.2 0-2.2 1-2.2 2.2v25.9c0 1.2 1 2.2 2.2 2.2h25.6c1.2 0 2.2-1 2.2-2.2v-25.9c0-1.2-1-2.2-2.2-2.2zm-18.7 25.3h-4.5v-13.7h4.5v13.7zm-2.3-15.5c-1.6 0-2.5-1-2.5-2.4 0-1.3 1-2.3 2.6-2.3 1.5 0 2.5 1 2.5 2.4 0 1.2-1 2.3-2.6 2.3zm18.6 15.5h-4.5v-7.3c0-1.8-.7-3.1-2.3-3.1-1.3 0-2 .8-2.3 1.7-.1.3-.1.7-.1 1.1v7.6h-4.5s.1-12.4 0-13.6h4.5v1.9c.6-.9 1.7-2.3 4.1-2.3 3 0 5.2 1.9 5.2 6.1v7.9z"/>
            </svg>
          </a>
        </li>
      }

      { dribble !== 'xxx' &&
        <li>
          <a href={dribble} target="_blank" rel="external  noopener noreferrer" className="dribbble">
            <svg className="icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" enableBackground="new 0 0 32 32">
              <path fill="#947D9E" d="M16 1c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15zm9.9 6.9c1.8 2.2 2.9 5 2.9 8-.2 0-4.5-1-8.9-.4-.1-.2-.2-.4-.3-.7-.3-.6-.6-1.2-.9-1.9 5.1-2 7.2-5 7.2-5zm-9.9-4.7c3.2 0 6.2 1.2 8.5 3.2 0 0-1.9 2.8-6.7 4.6-2.2-4-4.6-7.2-4.8-7.5.9-.2 2-.3 3-.3zm-3.1.4zm-2.4.8c.2.2 2.5 3.4 4.8 7.4-6.2 1.6-11.5 1.6-11.8 1.6.8-4 3.5-7.3 7-9zm-7.3 11.6v-.4c.2 0 6.6.1 13.2-1.8.4.7.7 1.4 1 2.2-.2 0-.3.1-.5.2-6.9 2.1-10.4 8.4-10.4 8.4-2.1-2.3-3.3-5.3-3.3-8.6zm12.8 12.8c-3 0-5.7-1-7.9-2.7s-.1-.1-.3-.2l.3.2c0-.1 2.5-5.4 10.1-8h.1c1.8 4.7 2.5 8.6 2.7 9.7-1.5.6-3.2 1-5 1zm7.2-2.2c-.1-.8-.8-4.5-2.5-9.2 4.1-.7 7.7.5 8 .6-.6 3.6-2.7 6.7-5.5 8.6zM12.9 3.6zM8.1 26.1l-.3-.2c.2.1.3.2.3.2z"></path>
            </svg>
          </a>
        </li>
      }

      { github !== 'xxx' &&
        <li>
          <a href={github} target="_blank" rel="external noopener noreferrer" className="github">
            <svg className="icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" enableBackground="new 0 0 32 32">
              <path fillRule="evenodd" clipRule="evenodd" fill="#947D9E" d="M16 1.4c-8.3 0-15 6.7-15 15 0 6.6 4.3 12.2 10.3 14.2.8.1 1-.3 1-.7v-2.6c-4.2.9-5.1-2-5.1-2-.7-1.7-1.7-2.2-1.7-2.2-1.4-.9.1-.9.1-.9 1.5.1 2.3 1.5 2.3 1.5 1.3 2.3 3.5 1.6 4.4 1.2.1-1 .5-1.6 1-2-3.3-.4-6.8-1.7-6.8-7.4 0-1.6.6-3 1.5-4-.2-.4-.7-1.9.1-4 0 0 1.3-.4 4.1 1.5 1.2-.3 2.5-.5 3.8-.5 1.3 0 2.6.2 3.8.5 2.9-1.9 4.1-1.5 4.1-1.5.8 2.1.3 3.6.1 4 1 1 1.5 2.4 1.5 4 0 5.8-3.5 7-6.8 7.4.5.5 1 1.4 1 2.8v4.1c0 .4.3.9 1 .7 6-2 10.2-7.6 10.2-14.2.1-8.2-6.6-14.9-14.9-14.9z"/>
            </svg>
          </a>
        </li>
      }

      { viadeo !== 'xxx' &&
        <li>
          <a href={viadeo} target="_blank" rel="external noopener noreferrer" className="viadeo">
            <svg className="icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" enableBackground="new 0 0 32 32">
              <path fill="#947D9E" d="M14.9 1c2.5 4.2 3.9 7.9 4.2 8.8-.7-6.4-4.2-8.8-4.2-8.8zM27.4 1.7c-1.3 2.7-3.6 3.2-3.6 3.2-2.3.6-3.2 1.5-3.2 1.5-2.4 2.4-.5 5.2-.5 5.2 5.1-1.2 6.9-5.3 6.9-5.3-.2 2.8-6.3 6.1-6.3 6.1 2 2 3.9 1.7 5.2 1 1.7-1 2.5-3.2 2.5-3.2 1.6-4.8-1-8.5-1-8.5zM21 17c.4 1 .6 2.1.6 3.3 0 1.5-.4 2.9-1.1 4.2-.7 1.3-1.7 2.3-2.9 3-1.2.7-2.5 1-3.9 1 0 0 9.9-6.3 5.4-18.4 0 0 0-.1-.1-.2 0 .7 1 15.5-6.8 18.5-.9-.2-1.8-.5-2.6-.9-1.2-.7-2.2-1.7-2.9-3-.7-1.3-1.1-2.7-1.1-4.2 0-2.3.8-4.3 2.3-5.9 1.6-1.6 3.4-2.4 5.6-2.4 1 0 2 .2 2.9.6.1-.9.4-1.8.8-2.5-1.1-.4-2.3-.6-3.7-.6-3.1 0-5.7 1.2-7.8 3.5-1.9 2.1-2.8 4.6-2.8 7.4 0 2.9 1 5.4 3 7.5 2 2.1 4.5 3.2 7.6 3.2 3.1 0 5.6-1.1 7.6-3.2 2-2.2 3-4.7 3-7.5 0-1.5-.3-3-.8-4.3-.8.4-1.6.7-2.3.9zm-7.3 11.5z"></path>
            </svg>
          </a>
        </li>
      }

      { behance !== 'xxx' &&
        <li>
          <a href={behance} target="_blank" rel="external noopener noreferrer" className="behance">
            <svg className="icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" enableBackground="new 0 0 32 32">
              <path fill="#947D9E" d="M9.4 21.9c.4 0 .8 0 1.1-.1.4-.1.7-.2 1-.4.3-.2.5-.4.7-.7.2-.3.2-.7.2-1.2 0-1-.3-1.6-.8-2-.5-.4-1.2-.6-2.1-.6h-4.4v5.1h4.3zm-.2-7.8c.7 0 1.3-.2 1.8-.5s.7-.9.7-1.7c0-.4-.1-.8-.2-1.1-.2-.3-.4-.5-.6-.6-.3-.2-.6-.3-.9-.3-.3-.1-.7-.1-1-.1h-3.9v4.3h4.1zm.5-7.5c.9 0 1.7.1 2.4.2.7.2 1.4.4 1.9.8.5.3.9.8 1.2 1.4.3.6.4 1.3.4 2.2 0 .9-.2 1.7-.6 2.3-.4.6-1.1 1.1-1.9 1.5 1.1.3 2 .9 2.5 1.7.6.8.8 1.8.8 3 0 .9-.2 1.7-.5 2.4-.4.7-.9 1.2-1.5 1.7-.6.4-1.3.8-2.1 1-.8.2-1.6.3-2.4.3h-8.9v-18.5h8.7zM26.5 14.8c-.4-.5-1.2-.7-2.1-.7-.6 0-1.1.1-1.5.3-.4.2-.7.4-.9.7-.2.3-.4.6-.5.9l-.2.9h6c-.1-.9-.4-1.6-.8-2.1m-4.3 7c.6.5 1.3.8 2.4.8.7 0 1.4-.2 1.9-.6.5-.4.9-.8 1-1.2h3.2c-.5 1.6-1.3 2.8-2.4 3.4-1.1.7-2.4 1-3.9 1-1.1 0-2-.2-2.9-.5-.8-.3-1.6-.8-2.2-1.4-.6-.6-1-1.4-1.4-2.2-.3-.9-.5-1.8-.5-2.8 0-1 .2-1.9.5-2.8.3-.9.8-1.6 1.4-2.2.6-.6 1.3-1.1 2.2-1.5.8-.4 1.8-.5 2.8-.5 1.1 0 2.1.2 3 .7.8.4 1.5 1 2.1 1.8.5.7.9 1.6 1.2 2.5.2.9.3 1.9.3 3h-9.6c0 1 .4 2 .9 2.5"></path><path fill="#947D9E" d="M20.6 7.8h7.5v1.8h-7.5z"></path>
            </svg>
          </a>
        </li>
      }
    </ul>
  )
}
