import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import donuts from '../images/donuts.jpg'
import donutsToGo from '../images/donutsToGo.jpg'
import donutsClose from '../images/donutsClose.jpg'
import assortedDonuts from '../images/assortedDonuts.jpg'
import logo from '../images/jadasMochiDonuts_V1.png'

const IndexPage = () => {
  const [slide, setSlide] = useState(1)

  const prev = () => {
    if (slide === 1) {
      setSlide(4)
    }
    else {
      setSlide(slide - 1)
    }
  }

  const next = () => {
    if (slide === 4) {
      setSlide(1)
    }
    else {
      setSlide(slide + 1)
    }
  }
  return (
    <Layout>
      <SEO title="Home" />
      <div className='landing'>
        <div className="welcome">
          <img className="welcome__img" src={logo} alt="Jada's Mochi Donuts Logo"/>
          <p className="welcome__text">Welcome to Jada’s Mochi Donuts! Our donuts are homemade and freshly made for every order. Treat yourself and your loved ones to a deliciously chewy treat <span role='img' aria-label='purple heart emoji'>💜</span></p>
        </div>
      <div className='slide'>
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
              <img src={donutsToGo} className='slideshow__slides--image' alt='Lots of donuts to go' />
            </div>
          </div>
          : null}
        {slide === 3
          ? <div className="slideshow">
            <div className="slideshow__slides slideshow__fade">
              <img src={assortedDonuts} className='slideshow__slides--image' alt='Assorted donuts' />
            </div>
          </div>
          : null}
        {slide === 4
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
