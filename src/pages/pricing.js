import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Success = () => (
  <Layout>
    <SEO title="Page two" />
    <div className='body__info'>
      <h4 className='body__info--title'>Pricing</h4>
      <ul className='body__info--list'>
        <li className='body__info--list--items'>$17 for 1 dozen</li>
        <li className='body__info--list--items'>$15 per dozen when ordering 2 or more</li>
        <li className='body__info--list--items'>Curbside pickup is free</li>
        <li className='body__info--list--items'>Delivery fee of $2 - $8 will apply depending on location</li>
      </ul>
    </div>
  </Layout>
)

export default Success
