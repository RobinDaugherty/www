import React from "react"
import { Link, graphql } from "gatsby"

import Page from "../components/page"
import SEO from "../components/seo"

const IndexPage = ({
  data,
}) => {
  const posts = data.allMarkdownRemark.edges.map((edge) => (
    {
      id: edge.node.id,
      title: edge.node.frontmatter.title,
      date: edge.node.frontmatter.date,
      year: edge.node.frontmatter.year,
      path: `/${edge.node.parent.name}`,
    }
  )).sort((a, b) => a.date > b.date);

  return (
    <Page title="About">
      <SEO title="Home" />

      <p>When I was 10 years old, I was given an old, broken, computer, <a href="http://www.thepcmuseum.net/details.php?RECORD_KEY%28museum%29=id&amp;id(museum)=753">some sort of Xerox terminal</a> that ran CP/M.
      I took it apart and put it back together, and when I was done it was working again.
      </p>
      <p>Thus began my career in "computers".
      </p>
      <p>I learned <a href="http://en.wikipedia.org/wiki/Turbo_Basic">Borland Turbo Basic</a> and began writing simple DOS applications that required the user to enter their password.
      This led me to write a library to do windowing and essentially widgets in text mode for DOS.
      The library included text inputs, checkboxes, radio buttons, pulldowns, menus, and buttons.
      </p>
      <p>Turbo Basic had the ability to include blocks of assembly, so I got a copy of <a href="http://www.amazon.com/Assembly-Language-Primer-Personal-Computer/dp/0136619010">Peter Norton's Assembly Language Book</a>.
      My library functions used BIOS calls for keyboard input and screen output, which sped things up considerably.
      I rewrote this library a number of times, usually because I made a mistake, lost my backup and had to start over.
      </p>
      <p>I stumbled across a Microsoft Press book on QuickC (I think it was called "Learn QuickC") and ended up rewriting my library using Microsoft QuickC.
      One notable application that I completed in C was a low-level floppy disk editor.
      </p>
      <p>In 1996 I started playing with Linux.
      I used <a href="http://www.linuxfromscratch.org">Linux From Scratch</a> to learn everything I could about how the operating system works.
      I migrated from pure C on DOS, to C++ on Windows and Linux, to PHP.  
      </p>
      <p>In 1997 I began working for <a href="http://www.ovf.com">Ohio Valley Flooring</a>, a company that distributes flooring products.
      At first I supported and helped train users, many of whom were long-time salespeople with no computer experience.
      </p>
      <p>While doing support I began to help with other systems, such as the telephone and voicemail system.
      In my spare time I wrote software for an automated attendant, so that customers calling the company would have the option of entering an extension instead of going directly to the call center.
      I presented my solution, and management decided to give it a try.
      After it was implemented, the number of calls that went directly to the call center were reduced by about a third, while the overall call volume grew each month.
      </p>
      <p>My responsibilities grew to include telecommunications, and various other odd tasks that came about.
      </p>
      <p>I worked on many diverse projects, from designing a telecommunications network for the company's many locations to helping to troubleshoot the software on a programmable logic controller for a flooring cutting machine.
      I designed the data and telephone networking for new offices, gathered bids for service, ordered parts, and did the final installation.
      </p>
      <p>Here's <a href="/2008-03-23-one-weird-telecomm-project">one example of a telecommunications-related project</a> on which I worked.
      </p>
      <p>In 2004, I designed a network to link 6 locations together with VPNs to connect voice calls and data traffic.  I learned to configure Cisco routers and Mitel IP telephone systems, how to set up Quality of Service to make sure the voice calls wouldn't be affected by data traffic on the same connection.
      I configured and installed the equipment for this network at each location, and cut over service one at a time.
      (This also meant I had to design a way to gradually move service to the new network without downtime.)
      </p>
      <p>In 2005 I decided to pursue a job doing only software development, and I went to work for a company that uses Macs.
      I became a Mac user permanently after using it as my development platform for a few months.
      </p>
      <p>In 2006 I joined the team running the Motorola Developer Network, a.k.a <a href="http://web.archive.org/web/20061212132428/http://developer.motorola.com/">MOTODEV</a>.
      I was a senior engineer on the Developer Programs team, responsible for the software and hardware that runs the website and related systems.
      </p>
      <p>In 2008 I moved back to Cincinnati, Ohio and worked remotely for Motorola.</p>

      <h2>Posts</h2>
      <ul className="post-list">
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={post.path}>{post.year}: {post.title}</Link>
          </li>
        ))}
      </ul>
    </Page>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date
            year: date(formatString: "YYYY")
          }
          parent {
            ... on File {
              name
            }
          }
        }
      }
    }
  }
`
