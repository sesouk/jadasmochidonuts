import React, { useState } from "react"
import { Link } from "gatsby"

import brownSugar from '../images/brownSugarMilkTea.jpg'
import cinna from '../images/cinnaToastCrunch.jpg'
import fruity from '../images/fruityPebbles.jpg'
import greenTea from '../images/greenTea.jpg'
import mango from '../images/mango.jpg'
import oreo from '../images/oreo.jpg'
import reeses from '../images/reesesChoco.jpg'
import thaiTea from '../images/thaiTea.jpg'
import vietCoffee from '../images/vietCoffee.jpg'
import pandanCoco from '../images/pandanCoco.jpg'
import taro from '../images/taro.jpg'
import ig from '../images/glyph-logo_May2016.png'
import Layout from "../components/layout"
import SEO from "../components/seo"

const Flavors = () => {
  const [ flavors ] = useState([
    {flavor: 'Taro', img: taro, extra: ''},
    {flavor: 'Green Tea', img: greenTea, extra: ''},
    {flavor: 'Brown Sugar Milk Tea', img: brownSugar, extra: ''},
    {flavor: 'Thai Tea', img: thaiTea, extra: ''},
    {flavor: 'Vietnamese Coffee', img: vietCoffee, extra: '(fan favorite)'},
    {flavor: 'Pandan Coconut', img: pandanCoco, extra: ''},
    {flavor: 'Mango', img: mango, extra: ''},
    {flavor: "Reese's Chocolate", img: reeses, extra: '*contains nuts*'},
    {flavor: 'White Chocolate Almond', img: ig, extra: '*contains nuts*'},
    {flavor: 'Oreo', img: oreo, extra: ''},
    {flavor: "Fruity Pebble's", img: fruity, extra: ''},
    {flavor: 'Cinnamon Toast Crunch', img: cinna, extra: ''}
  ])
const flavorsMap = flavors.map(e => {
  return( <div className='flavors' style={{width: '300px', textAlign: 'center'}} key={e.flavor}>
    <p className='flavors__name'>{e.flavor}</p>
    <img className='flavors__image' src={e.img} alt={`${e.name} close up`}/>
    {e.extra != '' ? <div><small>{e.extra}</small></div> : null}
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
