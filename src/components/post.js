import React from "react"

import Page from "./page"

const Post = ({
  children,
  date,
  tagline,
  title,
}) => (
  <Page
    title={title}
    tagline={tagline}
  >
    <article>
      <div className="col-sm-10">
        <span className="post-date">
          {/*% assign d = date | date: "%d" | plus:'0' %}
          {{ date | date: "%B" }} 
          {% case d %}
            {% when 1 or 21 or 31 %}{{ d }}st,
            {% when 2 or 22 %}{{ d }}nd,
            {% when 3 or 23 %}{{ d }}rd,
            {% else %}{{ d }}th,
          {% endcase %}
          {{ date | date: "%Y" }*/}
        </span>
        <div className="article_body">
          {children}
        </div>
      </div>
      <div className="col-sm-2 sidebar-2">
      </div>
    </article>
    <div className="clearfix"></div>
  </Page>
)

export default Post
