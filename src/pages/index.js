import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import donuts from '../images/donuts.jpeg'
import donutsClose from '../images/donutsClose.jpeg'
import donutsPacked from '../images/donutsPacked.jpeg'

const IndexPage = () => {
const [ slide, setSlide ] = useState(1)

const prev = () => {
  if( slide === 1 ) {
    setSlide( 3 )
  }
  else {
    setSlide( slide - 1 )
  }
}

const next = () => {
  if( slide === 3 ) {
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
        <li className='body__info--list--items'>Vietnamese Coffee (fan favorite)</li>
        <li className='body__info--list--items'>Pandan Coconut</li>
      </ul>
      <p className='body__info--details'>Assorted dozens will come with two of each flavor but we also allow you to customize your order and pick and choose which flavors you want!</p>
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
              <img src={donutsPacked} className='slideshow__slides--image' alt='Donuts to go' />
            </div>
          </div>
          : null}
        {slide === 3
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
        <li className='body__info--list--items'>Delivery fee of $2 may apply depending on location</li>
      </ul>
    </div>
    <h4 className='body__info--title'>Please use this form to place your order!</h4>
      <form className='order' name="order" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="order"/>
        <div className='order__holder'>
          <div className='order__holder--label'>Name:</div>
          <input className='order__holder--input' type="text" name="name" required/>
        </div>
        <div>
          <div className='order__holder--label'>Phone #:</div>
          <input className='order__holder--input' type="tel" name="phone" required/>
        </div>
        <div className='order__holder--radioHold'> 
          <input className='order__holder--radio' type="radio" name="delivery/pickup" value='delivery' required/>
            <span className='order__holder--span'>Delivery</span>
          <input className='order__holder--radio' type="radio" name="delivery/pickup" value='pickup' required/>
            <span className='order__holder--span'>Pickup</span>
        </div>
        <div className='order__holder--radioHold'>
          <input className='order__holder--radio' type="radio" name="assorted/specific" value='assorted' required/>
            <span className='order__holder--span'>Assorted</span>
          <input className='order__holder--radio' type="radio" name="assorted/specific" value='specific' required/>
            <span className='order__holder--span'>Specific</span>
        </div>
        <div>
          <div className='order__holder--label'>Quantity:</div>
          <select className='order__holder--dropdown' name="quantity" required>
          <option value="1 dozen">1 dozen</option>
          <option value="2 dozens">2 dozen</option>
          <option value="3 dozens">3 dozen</option>
          <option value="4+ dozens">4+ dozens (specify amount below)</option>
          </select>
        </div>
        <div>
          <div className='order__holder--label'>Payment Method:</div>
          <select className='order__holder--dropdown' name="quantity" required>
          <option value="cash">Cash</option>
          <option value="venmo">Venmo</option>
          <option value="zelle">Zelle</option>
          <option value="apple pay">Apple Pay</option>
          </select>
        </div>
        <div>
          <div className='order__holder--label'>Additional info or flavor choices:</div>
          <textarea className="order__holder--addInfo" type="text" name="details" />
        </div>
        <div className="order__btnHldr">
          <button type="submit" className="order__btnHldr--btn">Place order</button>
        </div>
       </form>
       </div> 
  </Layout>
  )
}


export default IndexPage
