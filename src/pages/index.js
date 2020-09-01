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
       </div> 
  </Layout>
  )
}


export default IndexPage
