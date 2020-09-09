import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from '../images/jadasMochiDonuts_V1.png'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `lightpink`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `1.45rem 1.0875rem`,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr' 
      }}
    >
      <img src={logo} alt="Jada's Mochi Donuts" style={{
        width: '65px'
      }}/>
      <ul style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr'
      }}>
        <li style={{listStyleType: 'none'}}><Link style={{color: 'black', textDecoration: 'none'}} to='/'>Home</Link></li>
        <li style={{listStyleType: 'none'}}><Link style={{color: 'black', textDecoration: 'none'}} to='/flavors'>Flavors</Link></li>
        <li style={{listStyleType: 'none'}}><Link style={{color: 'black', textDecoration: 'none'}} to='/order'>Ordering and Pricing</Link></li>
        <li style={{listStyleType: 'none'}}><Link style={{color: 'black', textDecoration: 'none'}} to='/about'>About</Link></li>
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
