import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from '../images/jadasMochiDonuts_V1.png'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/flavors'>Flavors</Link></li>
        <li><Link to='/pricing'>Pricing</Link></li>
        <li><Link to='/order'>Ordering</Link></li>
        <li><Link to='/about'>About</Link></li>
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
