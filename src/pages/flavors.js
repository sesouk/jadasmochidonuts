import React, { useState } from "react"

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
import whiteChoc from '../images/whiteChoc.jpg'
import taro from '../images/taro.jpg'
import Layout from "../components/layout"
import SEO from "../components/seo"

const Flavors = () => {
  const [ flavors ] = useState([
    {flavor: 'Taro', img: taro, extra: ''},
    {flavor: 'Vietnamese Coffee', img: vietCoffee, extra: '(fan favorite)'},
    {flavor: 'Green Tea', img: greenTea, extra: ''},
    {flavor: 'Brown Sugar Milk Tea', img: brownSugar, extra: ''},
    {flavor: 'Oreo', img: oreo, extra: '(fan favorite)'},
    {flavor: 'Thai Tea', img: thaiTea, extra: ''},
    {flavor: 'Pandan Coconut', img: pandanCoco, extra: ''},
    {flavor: 'White Chocolate Almond', img: whiteChoc, extra: '*contains nuts*'},
    {flavor: 'Mango', img: mango, extra: ''},
    {flavor: "Fruity Pebble's", img: fruity, extra: ''},
    {flavor: "Reese's Chocolate", img: reeses, extra: '*contains nuts*'},
    {flavor: 'Cinnamon Toast Crunch', img: cinna, extra: ''}
  ])
const flavorsMap = flavors.map(e => {
  return( <div className='flavors'key={e.flavor}>
    <p className='flavors__name'>{e.flavor}</p>
    <img className='flavors__image' src={e.img} alt={`${e.name} close up`}/>
    {e.extra !== '' ? <div className='flavors__name'><small>{e.extra}</small></div> : null}
  </div>)
})
  return (
    <Layout>
      <SEO title="Page two" />
      <div className='flavors-container'>
        {flavorsMap}
      </div>
    </Layout>
  )
}
export default Flavors
