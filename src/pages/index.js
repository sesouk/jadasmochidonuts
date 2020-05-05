import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
    <h3>Please use this form to place your order!</h3>
      <form className='order' name="order" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="order"/>
        <div className='order__holder'>
          <div className='order__holder--label'>Name</div>
          <input className='order__holder--input' type="text" name="name" required/>
        </div>
        <div>
          <div className='order__holder--label'>order #</div>
          <input className='order__holder--input' type="tel" name="phone" required/>
        </div>
        <div>
          <input className='order__holder--input' type="radio" name="delivery/pickup" value='delivery' required/>
            <label for='delivery'>Delivery</label>
          <input className='order__holder--input' type="radio" name="delivery/pickup" value='pickup' required/>
            <label for='pickup'>Pickup</label>
        </div>
        <div>
          <input className='order__holder--input' type="radio" name="assorted/specific" value='assorted' required/>
            <label for='assorted'>Assorted</label>
          <input className='order__holder--input' type="radio" name="assorted/specific" value='specific' required/>
            <label for='specific'>Specific</label>
        </div>
        <div>
          <div className='order__holder--label'>Quantity</div>
          <select className='order__holder--input' name="quantity" required>
          <option value="1 dozen">1 dozen</option>
          <option value="2 dozens">2 dozens</option>
          <option value="3 dozens">3 dozens</option>
          <option value="4+ dozens">4+ dozens (specify amount below)</option>
          </select>
        </div>
        <div>
          <div className='order__holder--label'>Payment method</div>
          <select className='order__holder--input' name="quantity" required>
          <option value="cash">Cash</option>
          <option value="venmo">Venmo</option>
          <option value="zelle">Zelle</option>
          <option value="apple pay">Apple Pay</option>
          </select>
        </div>
        <div>
          <div className='order__holder--label'>Please place any additional info or flavor choices here</div>
          <textarea className="order__holder--addInfo" type="text" name="details" />
        </div>
        <div className="order__btnHldr">
          <button type="submit" className="order__btnHldr--btn">Place order</button>
        </div>
       </form>
       </div> 
  </Layout>
)

export default IndexPage
