import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Sidebar = ({
  bio,
  githubHandle,
  linkedin,
  pinterest,
  stackoverflowCv,
  twitterHandle,
  gravatarEmailHash,
}) => (
  <>
    <header className="sidebar-header" role="banner">
      <Link to="/" className="avatar">
        <img
          src={`https://www.gravatar.com/avatar/${gravatarEmailHash}?s=300`}
          className="avatar"
          alt="Drawing of Robin Daugherty"
        />
      </Link>
    </header>

    {bio && (
      <div id="bio" className="text-center">
        {bio}
      </div>
    )}

    <div id="contact-list" className="text-center">
      <ul className="list-unstyled list-inline">
        {githubHandle && (
          <li>
            <a className="btn btn-default btn-sm" href="https://github.com/{githubHandle}">
              <i className="fa fa-github-alt fa-lg"></i>
            </a>
          </li>
        )}
        {stackoverflowCv && (
          <li>
            <a className="btn btn-default btn-sm" href="https://stackoverflow.com/cv/{stackoverflowCv}">
              <i className="fa fa-stack-overflow fa-lg"></i>
            </a>
          </li>
        )}
        {twitterHandle && (
          <li>
            <a className="btn btn-default btn-sm" href="https://twitter.com/{twitterHandle}">
              <i className="fa fa-twitter fa-lg"></i>
            </a>
          </li>
        )}
      </ul>
      <ul id="contact-list-secondary" className="list-unstyled list-inline">
        {linkedin && (
          <li>
            <a className="btn btn-default btn-sm" href="https://linkedin.com/in/{linkedin}">
              <i className="fa fa-linkedin fa-lg"></i>
            </a>
          </li>
        )}
        {pinterest && (
          <li>
            <a className="btn btn-default btn-sm" href="https://pinterest.com/{pinterest}">
              <i className="fa fa-pinterest fa-lg"></i>
            </a>
          </li>
        )}
      </ul>
    </div>
  </>
);

Sidebar.propTypes = {
  bio: PropTypes.string,
  githubHandle: PropTypes.string,
  linkedin: PropTypes.string,
  pinterest: PropTypes.string,
  stackoverflowCv: PropTypes.string,
  twitterHandle: PropTypes.string,
};

export default Sidebar;
