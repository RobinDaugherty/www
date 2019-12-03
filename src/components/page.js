import React from "react"

import Layout from "../components/layout"

const Page = ({
  children,
  tagline,
  title,
}) => (
  <Layout>
    <div className="page-header">
      <h1>
        {title}
        {tagline && (<small>{tagline}</small>)}
      </h1>
    </div>

    {children}
  </Layout>
)

export default Page
