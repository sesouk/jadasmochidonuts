/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import logo from '../images/jadasMochiDonuts_V1.png'
import ig from '../images/glyph-logo_May2016.png'
import Header from './header'
import "./styles/layout.scss"

const Layout = ({ children }) => {
  return (
    <>
    <Header/>
    <a href='https://www.instagram.com/jadasmochidonuts'><img style={{ width: `29px`, marginTop: `.5rem`, marginLeft: `.5rem` }} src={ig} alt='Instagram' /></a>
      <div
        style={{
          margin: `2rem auto`,
          marginTop: `0`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        {/* <div style={{textAlign: 'center', paddingBottom: '2rem', color: 'red'}}>Hi! We will not be taking orders from July 9th-12th. Please get your orders in before, and thank you for your continued support :)</div> */}
        <img className='logo' src={logo} alt="Jada's Mochi Donuts Logo"/>
        <main>{children}</main>
        <footer style={{ fontSize: '8pt', marginTop: `1.5rem`,  position: `relative` }}>
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
