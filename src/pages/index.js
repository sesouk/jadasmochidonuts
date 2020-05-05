import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
    <div>
      <h4>Available Flavors</h4>
      <ul>
        <li>Taro</li>
        <li>Green Tea</li>
        <li>Milk Tea</li>
        <li>Thai Tea</li>
        <li>Vietnamese Coffee (fan favorite)</li>
        <li>Pandan Coconut</li>
      </ul>
      <p>Assorted dozens will come with two of each flavor but we also allow you to customize your order and pick and choose which flavors you want!</p>
    </div>
    <div>
      <h4>Pricing</h4>
      <ul>
        <li>$17 for 1 dozen</li>
        <li>$15 per dozen when ordering 2 or more</li>
        <li>Curbside pickup is free</li>
        <li>Delivery fee of $2-$4 will apply depending on location</li>
      </ul>
    </div>
    <h4>Please use this form to place your order!</h4>
      <form className='order' name="order" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="order"/>
        <div className='order__holder'>
          <div className='order__holder--label'>Name</div>
          <input className='order__holder--input' type="text" name="name" required/>
        </div>
        <div>
          <div className='order__holder--label'>Phone #</div>
          <input className='order__holder--input' type="tel" name="phone" required/>
        </div>
        <div>
          <input className='order__holder--input' type="radio" name="delivery/pickup" value='delivery' required/>
            <span>Delivery</span>
          <input className='order__holder--input' type="radio" name="delivery/pickup" value='pickup' required/>
            <span for='pickup'>Pickup</span>
        </div>
        <div>
          <input className='order__holder--radio' type="radio" name="assorted/specific" value='assorted' required/>
            <span for='assorted'>Assorted</span>
          <input className='order__holder--radio' type="radio" name="assorted/specific" value='specific' required/>
            <span for='specific'>Specific</span>
        </div>
        <div>
          <div className='order__holder--label'>Quantity</div>
          <select className='order__holder--dropdown' name="quantity" required>
          <option value="1 dozen">1 dozen</option>
          <option value="2 dozens">2 dozen</option>
          <option value="3 dozens">3 dozen</option>
          <option value="4+ dozens">4+ dozens (specify amount below)</option>
          </select>
        </div>
        <div>
          <div className='order__holder--label'>Payment method</div>
          <select className='order__holder--dropdown' name="quantity" required>
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
