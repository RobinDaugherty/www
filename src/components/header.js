import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({
  title,
  githubHandle,
  twitterHandle,
  gravatarEmailHash,
}) => (
  <header className="site-header">
    <Link to="/" className="avatar">
      <img
        src={`https://www.gravatar.com/avatar/${gravatarEmailHash}?s=300`}
        className="avatar"
        alt="Drawing of Robin Daugherty"
      />
    </Link>

    <nav className="navbar navbar-default visible-xs" role="navigation">
      <div className="navbar-header">
        {githubHandle && (
          <a type="button" className="navbar-toggle nav-link" href={`https://github.com/${githubHandle}`}>
            <i className="fa fa-github"></i>
          </a>
        )}
        {twitterHandle && (
          <a type="button" className="navbar-toggle nav-link" href={`https://twitter.com/${twitterHandle}`}>
            <i className="fa fa-twitter"></i>
          </a>
        )}
        <Link className="navbar-brand" to="/">
          <img src={`https://www.gravatar.com/avatar/{gravatarEmailHash}?s=80`} alt='' className="img-circle" />
          {title}
        </Link>
      </div>

      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          <li className="active"><Link to="/">Home</Link></li>
        </ul>
      </div>
    </nav>

    <div className="btn-group hidden-xs" id="nav-menu">
      <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
        <i className="fa fa-bars"></i>
      </button>
      <ul className="dropdown-menu" role="menu">
        <li><Link to="/"><i className="fa fa-home"></i>Home</Link></li>
      </ul>
    </div>

  </header>
)
    // <!-- <div className="trigger">
    //   {% for page in site.pages %}
    //     {% if page.title %}
    //     <a className="page-link" href="{{ page.url | prepend: site.baseurl }}">{{ page.title }}</a>
    //     {% endif %}
    //   {% endfor %}
    // </div> -->

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
