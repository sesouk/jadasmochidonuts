import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import jmd from '../images/jmd.png'
import ig from '../images/glyph-logo_May2016.png'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: ` #b1a6c8`,
      borderBottom: `solid #f8b4c0 2px`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `1.45rem`,
        display: 'grid',
        gridTemplateColumns: '.35fr 1fr' 
      }}
    >
      {/* <img src={jmd} alt="Jada's Mochi Donuts" style={{
        width: '300px',
        alignSelf: 'center'
      }}/> */}
      <p>Jada's Mochi Donuts</p>
      <ul style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr'
      }}>
        <li style={{listStyleType: 'none', justifySelf: 'center'}}><Link style={{color: 'black', textDecoration: 'none'}} to='/'>Home</Link></li>
        <li style={{listStyleType: 'none', justifySelf: 'center'}}><Link style={{color: 'black', textDecoration: 'none'}} to='/about'>About</Link></li>
        <li style={{listStyleType: 'none', justifySelf: 'center'}}><Link style={{color: 'black', textDecoration: 'none'}} to='/flavors'>Flavors</Link></li>
        <li style={{listStyleType: 'none', justifySelf: 'center'}}><Link style={{color: 'black', textDecoration: 'none'}} to='/order'>Ordering</Link></li>
        <li style={{listStyleType: 'none', justifySelf: 'center'}}><a href='https://www.instagram.com/jadasmochidonuts'><img style={{ width: `18.67px`}} src={ig} alt='Instagram' /></a></li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
