import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import upArrow from '../images/upArrow.svg'
import downArrow from '../images/downArrow.svg'

const Order = () => {
  const [drawer, setDrawer] = useState(false)

  const toggle = () => setDrawer(!drawer)

  const handleKeyDown = (e) => {
    if (e.keyCode === 220) {
      toggle()
    }
  }
  return (
  <Layout>
    <SEO title="Page two" />
    <div className='body'>
      <div className='body__info'>
        <div className='price' role='button' tabIndex={0} onClick={() => {toggle()}} onKeyDown={(e) => handleKeyDown(e)}>
          <h4 className='price__title'>Pricing & Ordering</h4>
          {drawer ? <p className='price__arrow'><img src={downArrow} alt='down arrow'/></p> :
          <p className='price__arrow'><img src={upArrow} alt='up arrow'/></p> }
        </div>
        {!drawer ? <ul className='body__info--list'>
          <li className='body__info--list--items'>$22 per dozen <strong>(6 flavors max per dozen)</strong></li>
          <li className='body__info--list--items'>$30 per holiday box <strong>(pre-selected flavors)</strong></li>
          {/* <li className='body__info--list--items'>$18 per dozen when ordering 2 or more</li> */}
          <li className='body__info--list--items'>Curbside pickup is free (Southeast Aurora)</li>
          <li className='body__info--list--items'>Delivery fee of $4 - $8 will apply depending on location <strong>with a max 10 mile radius delivery distance from SE Aurora</strong></li>
        </ul> : null }
      </div>
      <div className="orderContainer">
      <h4 className='body__info--title orderContainer__title'>Please use this form to place your order!</h4>
      <form className='order orderContainer__form' name="order" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="order" />
        <div className='order__holder'>
          <div className='order__holder--label'>Name:</div>
          <input className='order__holder--input' type="text" name="name" required />
        </div>
        <div>
          <div className='order__holder--label'>Phone #:</div>
          <input className='order__holder--input' type="tel" name="phone" required />
        </div>
        <div>
          <div className='order__holder--label'>New customer?</div>
          <div className='order__holder--label'>How'd you hear about us?</div>
          <input className='order__holder--input' type="text" name="hearAboutUs" />
        </div>
        <div className='order__holder--radioHold'>
          <input className='order__holder--radio' type="radio" name="delivery/pickup" value='delivery' required />
          <span className='order__holder--span'>Delivery</span>
          <input className='order__holder--radio' type="radio" name="delivery/pickup" value='pickup' required />
          <span className='order__holder--span'>Pickup</span>
        </div>
        <div>
          <div className='order__holder--label'>Quantity:</div>
          <select className='order__holder--dropdown' name="quantity" required>
            <option value="1 dozen">1 dozen</option>
            <option value="2 dozen">2 dozen</option>
            <option value="3 dozen">3 dozen</option>
            <option value="4+ dozen">4+ dozen (specify amount below)</option>
            <option value="1 box">1 holiday box</option>
            <option value="2 boxes">2 holiday boxes</option>
            <option value="3 boxes">3 holiday boxes</option>
            <option value="4+ boxes">4+ holiday boxes (specify amount below)</option>
          </select>
        </div>
        <div>
          <div className='order__holder--label'>Payment Method:</div>
          <select className='order__holder--dropdown' name="payment" required>
            <option value="cash">Cash</option>
            <option value="venmo">Venmo</option>
            <option value="zelle">Zelle</option>
            <option value="apple pay">Apple Pay</option>
          </select>
        </div>
        <div>
          <div className='order__holder--label'>Address for delivery,</div>
          <div className='order__holder--label'>flavor choices (6 max per dozen),</div>
          <div className='order__holder--label'>any other additional info:</div>
          <textarea className="order__holder--addInfo" type="text" name="details" />
        </div>
        <div className="order__btnHldr">
          <button type="submit" className="order__btnHldr--btn">Place order</button>
        </div>
        <small className='body__info--details'>*Note orders will be ready in 24-48 hours</small>
      </form>
      </div>
    </div>
  </Layout>
)}

export default Order
