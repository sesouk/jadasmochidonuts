import React, { useState } from "react"
import { Link } from "gatsby"

import ig from '../images/glyph-logo_May2016.png'
import Layout from "../components/layout"
import SEO from "../components/seo"

const Flavors = () => {
  const [ flavors ] = useState([
    {flavor: 'Taro', img: ig, extra: ''},
    {flavor: 'Green Tea', img: ig, extra: ''},
    {flavor: 'Brown Sugar Milk Tea', img: ig, extra: ''},
    {flavor: 'Thai Tea', img: ig, extra: ''},
    {flavor: 'Vietnamese Coffee', img: ig, extra: '(fan favorite)'},
    {flavor: 'Pandan Coconut', img: ig, extra: ''},
    {flavor: 'Mango', img: ig, extra: ''},
    {flavor: "Reese's Chocolate", img: ig, extra: '*contains nuts*'},
    {flavor: 'White Chocolate Almond', img: ig, extra: '*contains nuts*'},
    {flavor: 'Oreo', img: ig, extra: ''},
    {flavor: "Fruity Pebble's", img: ig, extra: ''},
    {flavor: 'Cinnamon Toast Crunch', img: ig, extra: ''}
  ])
const flavorsMap = flavors.map(e => {
  return( <div key={e.flavor}>
    <h4>{e.flavor}</h4>
    {e.extra != '' ? <small>{e.extra}</small> : null}
  </div>)
})
  return (
    <Layout>
      <SEO title="Page two" />
      <>
        {flavorsMap}
      </>
    </Layout>
  )
}
export default Flavors
