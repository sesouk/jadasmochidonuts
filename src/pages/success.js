import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Success = () => (
  <Layout>
    <SEO title="Page two" />
    <div style={{ textAlign: `center` }}>

    <h1>Your order has been placed successfully!</h1>
    <p>Awesome we've received your request and will contact you soon for payment and address for delivery (if applicable). Please allow 24-48 hours for your donuts to be ready. Thank you for the support!</p>
    <Link style={{ color: `black`, textDecoration: `none` }} to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default Success
