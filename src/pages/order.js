import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import upArrow from '../images/upArrow.svg'
import downArrow from '../images/downArrow.svg'

const Order = () => {
  const [drawer, setDrawer] = useState(true)

  const toggle = () => setDrawer(!drawer)
  return (
  <Layout>
    <SEO title="Page two" />
    <div className='body'>
      <div className='body__info'>
        <div className='price' onClick={() => {toggle()}}>
          <h4 className='price__title'>Pricing</h4>
          {drawer ? <p className='price__arrow'><img src={downArrow} alt='down arrow'/></p> :
          <p className='price__arrow'><img src={upArrow} alt='up arrow'/></p> }
        </div>
        {!drawer ? <ul className='body__info--list'>
          <li className='body__info--list--items'>$17 for 1 dozen</li>
          <li className='body__info--list--items'>$15 per dozen when ordering 2 or more</li>
          <li className='body__info--list--items'>Curbside pickup is free</li>
          <li className='body__info--list--items'>Delivery fee of $2 - $8 will apply depending on location</li>
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
            <option value="2 dozens">2 dozen</option>
            <option value="3 dozens">3 dozen</option>
            <option value="4+ dozens">4+ dozen (specify amount below)</option>
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
          <div className='order__holder--label'>Address for delivery, flavor choices,</div>
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
