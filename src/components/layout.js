/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import logo from '../images/jadasMochiDonuts_V1.png'

import Header from "./header"
import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <div
        style={{
          margin: `2rem auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <img style={{
            display: `block`,
            margin: `0 auto 1.45rem auto`,
            width: `75%`
        }} src={logo} alt="Jada's Mochi Donuts Logo"/>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built By
          {` `}
          <a href="https://sesouk.com">Kevin Sesouk Tran</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
