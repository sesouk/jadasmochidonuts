/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from './header'
import "./styles/layout.scss"

const Layout = ({ children }) => {
  return (
    <>
    <Header/>
      <div
        style={{
          margin: `2rem auto`,
          marginTop: `0`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
          backgroundColor: `#F3F5F2`
        }}
      >
        <div style={{textAlign: 'center', paddingBottom: '2rem', paddingTop: '1rem'}}>Try our new Salted Caramel flavor and checkout our updated ordering guidlines before you order! :)</div>
        {/* <img className='logo' src={logo} alt="Jada's Mochi Donuts Logo"/> */}
        <main>{children}</main>
        <footer style={{ fontSize: '8pt', marginTop: `1.5rem`,  position: `relative`, opacity: '0.5' }}>
          © {new Date().getFullYear()}, Built By
          {` `}
          <a style={{ color: 'black', textDecoration: 'none' }} href="https://sesouk.com">Kevin Sesouk Tran</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
