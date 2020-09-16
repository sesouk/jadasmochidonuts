import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import jmd from '../images/jmd.png'
import ig from '../images/glyph-logo_May2016.png'

const Header = ({ siteTitle }) => (
  <header className='header'>
    <div className='navbar'>
      <img className='navbar__img' src={jmd} alt="Jada's Mochi Donuts"/>
      <ul className='navbar__linkHolder'>
        <li className='navbar__links'><Link style={{color: 'black', textDecoration: 'none'}} to='/'>Home</Link></li>
        <li className='navbar__links'><Link style={{color: 'black', textDecoration: 'none'}} to='/about'>About</Link></li>
        <li className='navbar__links'><Link style={{color: 'black', textDecoration: 'none'}} to='/flavors'>Flavors</Link></li>
        <li className='navbar__links'><Link style={{color: 'black', textDecoration: 'none'}} to='/order'>Ordering</Link></li>
        <li className='navbar__links'><a href='https://www.instagram.com/jadasmochidonuts'><img style={{ width: `18.67px`}} src={ig} alt="Click for Jada's Mochi Donuts' Instagram Account" /></a></li>
      </ul>
      <div className='navbar__more' >Click Here</div>
      <div className='navbar__mobileHolder'>
        <div className='navbar__links'><Link style={{color: 'black', textDecoration: 'none'}} to='/'>Home</Link></div>
        <div className='navbar__links'><Link style={{color: 'black', textDecoration: 'none'}} to='/about'>About</Link></div>
        <div className='navbar__links'><Link style={{color: 'black', textDecoration: 'none'}} to='/flavors'>Flavors</Link></div>
        <div className='navbar__links'><Link style={{color: 'black', textDecoration: 'none'}} to='/order'>Ordering</Link></div>
        <div className='navbar__links'><a href='https://www.instagram.com/jadasmochidonuts'><img style={{ width: `18.67px`}} src={ig} alt="Click for Jada's Mochi Donuts' Instagram Account" /></a></div>
      </div>
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
