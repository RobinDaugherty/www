/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Footer from "./footer"
import Header from "./header"
import Sidebar from "./sidebar"
import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          name
          email
          github
          twitter
          pinterest
          linkedin
          stackoverflowCv
          bio
          gravatarEmailHash
        }
      }
    }
  `)

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
      />

      <div className="col-sm-3 sidebar hidden-xs">
        <Sidebar
          name={data.site.name}
          email={data.site.email}
          gravatarEmailHash={data.site.gravatarEmailHash}
          githubHandle={data.site.githubHandle}
          twitterHandle={data.site.twitterHandle}
          pinterest={data.site.pinterest}
          linkedin={data.site.linkedin}
          stackoverflowCv={data.site.stackoverflowCv}
          bio={data.site.bio}
        />
      </div>

      <div className="col-sm-9 col-sm-offset-3">
        {children}

        <Footer />
      </div>

      <script type="text/javascript" src="/assets/resources/jquery/jquery.min.js"></script>
      <script type="text/javascript" src="/assets/resources/bootstrap/js/bootstrap.min.js"></script>
      <script type="text/javascript" src="/assets/js/app.js"></script>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
