import { Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithubSquare,
  faStackOverflow,
  faTwitterSquare,
  faPinterestSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          githubHandle
          twitterHandle
          pinterestUsername
          linkedin
          stackoverflowCv
          bio
          gravatarEmailHash
        }
      }
    }
  `);
  const {
    title,
    bio,
    email,
    githubHandle,
    twitterHandle,
    pinterestUsername,
    linkedin,
    stackoverflowCv,
    gravatarEmailHash,
  } = data.site.siteMetadata;

  return (
    <header className="site-header">
      <Link to="/" className="avatar">
        <img
          src={`https://www.gravatar.com/avatar/${gravatarEmailHash}?s=300`}
          className="avatar"
          alt="Robin Daugherty"
        />
      </Link>

      <div className="things">
        <div className="title">
          <span className='name'>Robin Daugherty</span>
          <span className='tagline'>Software Engineer and Systems Architect</span>
        </div>

        <ul className="contact-methods">
          {githubHandle && (
            <li className='github'>
              <a href={`https://github.com/${githubHandle}`}>
                <FontAwesomeIcon icon={faGithubSquare} alt='GitHub' />
              </a>
            </li>
          )}
          {stackoverflowCv && (
            <li className='stackoverflow'>
              <a href={`https://stackoverflow.com/cv/${stackoverflowCv}`}>
                <FontAwesomeIcon icon={faStackOverflow} alt='StackOverflow' />
              </a>
            </li>
          )}
          {twitterHandle && (
            <li className='twitter'>
              <a href={`https://twitter.com/${twitterHandle}`}>
                <FontAwesomeIcon icon={faTwitterSquare} alt='Twitter' />
              </a>
            </li>
          )}
          {linkedin && (
            <li className='linkedin'>
              <a href={`https://linkedin.com/in/${linkedin}`}>
                <FontAwesomeIcon icon={faLinkedin} alt='LinkedIn' />
              </a>
            </li>
          )}
          {pinterestUsername && (
            <li className='pinterest'>
              <a href={`https://pinterest.com/${pinterestUsername}`}>
                <FontAwesomeIcon icon={faPinterestSquare} alt='Pinterest' />
              </a>
            </li>
          )}
        </ul>
      </div>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string,
}

Header.defaultProps = {
  title: ``,
}

export default Header
