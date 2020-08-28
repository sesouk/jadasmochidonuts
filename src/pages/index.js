import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import donuts from '../images/donuts.jpg'
import donutsFancy from '../images/donutsFancy.png'
import donutsToGo from '../images/donutsToGo.jpg'
import donutsClose from '../images/donutsClose.jpg'
import donutsPacked from '../images/donutsPacked.jpg'

const IndexPage = () => {
const [ slide, setSlide ] = useState(1)

const prev = () => {
  if( slide === 1 ) {
    setSlide( 5 )
  }
  else {
    setSlide( slide - 1 )
  }
}

const next = () => {
  if( slide === 5 ) {
    setSlide( 1 )
  }
  else{
    setSlide( slide + 1 )
  }
}
return (
  <Layout>
    <SEO title="Home" />
    <div className='body'>
    <div className='body__info'>
      <h4 className='body__info--title'>Available Flavors</h4>
      <ul className='body__info--list'>
        <li className='body__info--list--items'>Taro</li>
        <li className='body__info--list--items'>Green Tea</li>
        <li className='body__info--list--items'>Brown Sugar Milk Tea</li>
        <li className='body__info--list--items'>Thai Tea</li>
        <li className='body__info--list--items'>Vietnamese Coffee <small>(fan favorite)</small></li>
        <li className='body__info--list--items'>Pandan Coconut</li>
        <li className='body__info--list--items'>Mango</li>
        <li className='body__info--list--items'>Reese's Chocolate <small>*contains nuts*</small></li>
        <li className='body__info--list--items'>White Chocolate Almond <small>*contains nuts*</small></li>
        <li className='body__info--list--items'>Oreo</li>
        <li className='body__info--list--items'>Fruity Pebble's</li>
        <li className='body__info--list--items'>Cinnamon Toast Crunch</li>
      </ul>
      <p className='body__info--details'>Assorted dozens will come with 6 flavors, two of each flavor of your choice. We also allow you to customize your order to pick and choose if you want more of a certain flavor!</p>
        {slide === 1
          ? <div className="slideshow">
            <div className="slideshow__slides slideshow__fade">
              <img src={donuts} className='slideshow__slides--image' alt='Donuts on a Tray' />
            </div>
          </div>
          : null}
        {slide === 2
          ? <div className="slideshow">
            <div className="slideshow__slides slideshow__fade">
              <img src={donutsFancy} className='slideshow__slides--image' alt='Donuts on a plate' />
            </div>
          </div>
          : null}
        {slide === 3
          ? <div className="slideshow">
            <div className="slideshow__slides slideshow__fade">
              <img src={donutsToGo} className='slideshow__slides--image' alt='Lots of donuts to go' />
            </div>
          </div>
          : null}
        {slide === 4
          ? <div className="slideshow">
            <div className="slideshow__slides slideshow__fade">
              <img src={donutsPacked} className='slideshow__slides--image' alt='Donuts to go' />
            </div>
          </div>
          : null}
        {slide === 5
          ? <div className="slideshow">
            <div className="slideshow__slides slideshow__fade">
              <img src={donutsClose} className='slideshow__slides--image' alt='Donuts to go' />
            </div>
          </div>
          : null}
      <div className='btn'>
      <button className="btn__prev" onClick={prev}>&#10094;</button>
      <button className="btn__next" onClick={next}>&#10095;</button>
      </div>
    </div>
    <div className='body__info'>
      <h4 className='body__info--title'>Pricing</h4>
      <ul className='body__info--list'>
        <li className='body__info--list--items'>$17 for 1 dozen</li>
        <li className='body__info--list--items'>$15 per dozen when ordering 2 or more</li>
        <li className='body__info--list--items'>Curbside pickup is free</li>
        <li className='body__info--list--items'>Delivery fee of $2 - $8 will apply depending on location</li>
      </ul>
    </div>
       </div> 
  </Layout>
  )
}


export default IndexPage
