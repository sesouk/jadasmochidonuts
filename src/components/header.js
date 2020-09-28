import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import jmd from '../images/jmd.png'
import ig from '../images/ig.png'
import fb from '../images/fb.png'

const Header = ({ siteTitle }) => {
  const [dropdown, setDropdown] = useState(false)

  const toggle = () => setDropdown(!dropdown)

  useEffect(() => {
    if (dropdown) {
      document.getElementById('dropdown').style.display = 'grid'
    } else {
      document.getElementById('dropdown').style.display = 'none'
    }
  })

  return (
    <header className='header'>
      <div className='navbar'>
        <Link className='navbar__img--holder' to='/'><img className='navbar__img' src={jmd} alt="Jada's Mochi Donuts" /></Link>
        <ul className='navbar__linkHolder'>
          <li className='navbar__links'><Link style={{ color: 'black', textDecoration: 'none' }} to='/'>Home</Link></li>
          <li className='navbar__links'><Link style={{ color: 'black', textDecoration: 'none' }} to='/about'>About</Link></li>
          <li className='navbar__links'><Link style={{ color: 'black', textDecoration: 'none' }} to='/flavors'>Flavors</Link></li>
          <li className='navbar__links'><Link style={{ color: 'black', textDecoration: 'none' }} to='/order'>Ordering</Link></li>
          <li className='navbar__links'><a href='https://www.instagram.com/jadasmochidonuts'><img style={{ width: `22.67px` }} src={ig} alt="Click for Jada's Mochi Donuts' Instagram Page" /></a></li>
          <li className='navbar__links'><a href='https://www.facebook.com/jadasmochidonuts/'><img style={{ width: `22.67px` }} src={fb} alt="Click for Jada's Mochi Donuts' Facebook Page" /></a></li>
        </ul>
        <button className={'navbar__more' + (dropdown ? ' change' : '')} onClick={() => { toggle() }}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </button>
        <div className='navbar__mobileHolder' id='dropdown'>
          <div className='navbar__links'><Link style={{ color: 'black', textDecoration: 'none' }} to='/'>Home</Link></div>
          <div className='navbar__links'><Link style={{ color: 'black', textDecoration: 'none' }} to='/about'>About</Link></div>
          <div className='navbar__links'><Link style={{ color: 'black', textDecoration: 'none' }} to='/flavors'>Flavors</Link></div>
          <div className='navbar__links'><Link style={{ color: 'black', textDecoration: 'none' }} to='/order'>Ordering</Link></div>
          <div className='navbar__links'><a href='https://www.instagram.com/jadasmochidonuts'><img style={{ width: `22.67px` }} src={ig} alt="Click for Jada's Mochi Donuts' Instagram Account" /></a></div>
          <div className='navbar__links'><a href='https://www.facebook.com/jadasmochidonuts/'><img style={{ width: `22.67px` }} src={fb} alt="Click for Jada's Mochi Donuts' Instagram Account" /></a></div>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
