import Head from "next/head";
import React from "react";
import style from "../../styles/contact.module.scss";


export const Contact = () => {
  return (
    <div className={style.item}>
      <div className="container">
        <div className={style.row}>
          <div className={style.item1}>
            <div className={style.billformbox}>
              <h3>Billing Details</h3>

              <div className={style.billform}>
                <ul>
                  <li>
                    <div className="row">
                      <div className="col-md-6">
                        <label htmlFor="name">Name:</label>
                        <input name="tittle" id="name" type="text" required />
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="lname">Last Name</label>
                        <input id="lname" type="text" />
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="row">
                      <div className="col-md-6">
                        <label htmlFor="cname">Company Name (optional)</label>
                        <input type="text" id="cname" />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="country">Country / Region *</label>
                        <p className={style.countryname}>United Kingdom (UK)</p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="row">
                      <div className="col-md-12">
                        <label htmlFor="streetaddf">Street address *</label>
                        <input
                          type="text"
                          name=""
                          id="streetaddf"
                          placeholder="House number and street name"
                        />
                      </div>

                      <div className="col-md-12">
                        <input
                          type="text"
                          name=""
                          id="streetadds"
                          placeholder="Apartment,suite,unit,etc. (Optional) "
                        />
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="row">
                      <div className="col-md-6">
                        <label htmlFor="town">Town / City *</label>
                        <input type="text" name="" id="town" />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="country">County (optional)</label>
                        <input type="text" name="" id="country" />
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="row">
                      <div className="col-md-6">
                        <label htmlFor="postcode">Postcode *</label>
                        <input type="text" name="" id="postcode" />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="phone">Phone *</label>
                        <input type="tel" id="phone" />
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="row">
                      <div className="col-md-12">
                        <label htmlFor="email">Email:</label>
                        <input id="email" type="email" />
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="row">
                      <div className="col-md-12">
                        <label htmlFor="textare">order notes(optional)</label>
                        <textarea
                          className={style.text_area}
                          id="message"
                          rows={4}
                        />
                      </div>
                    </div>
                  </li>
                </ul>
                <button type="submit">Send</button>
              </div>
            </div>
          </div>

          <div className={style.button}>
             <div className={style.item2}>
         <p>Your Cart is Empty</p>
         <div className={style.shopping_page}><a href="">Continue Shopping</a></div>
        </div> 

            <div >
              <p className={style.bagitem}>My Bag <strong className={style.colorchange}>1</strong> item (s)</p>
              <div className={style.check}>
                <h4>$219.99 </h4>
                <ul className="checkout-ul">
                  <li>
                    {" "}
                    <span>Bed Size = </span>
                  </li>
                  <li>
                    {" "}
                    <span>Bed Color = </span>
                  </li>
                  <li>
                    <span>Storage = </span>
                  </li>
                  <li>
                    <span>Storage-Price = </span>
                  </li>
                  <li>
                    <span>Headboard = </span>
                  </li>
                  <li>
                    <span>Headboard-Price = </span>
                  </li>
                  <li>
                    <span>Feet = </span>
                  </li>
                  <li>
                    <span>Feet-Price = </span>
                  </li>
                  <li>
                    <span>Mattressess = </span>
                  </li>
                  <li>
                    <span>Mattressess-Price = </span>
                  </li>
                </ul>

                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>

               
                <div className={style.CartItems_buttons}>                 
                <button type="submit" className={style.removebutton}>Remove</button>                
                <button type="submit">Buy Now</button>
                </div>
               
              </div>
              
            </div>

            <div className={style.checkform}>
              <div>
                <div>
                  <p>Price Summary </p>
                  <div className={style.price}>
                    
                    <p>Total MRP (Incl.of taxes) </p>
                    <p>£55.00</p>
                  </div>
                  <div className={style.price}>
                    <p>Delivery Fee </p>
                    <p>FREE</p>
                  </div>
                  <div className={style.price}>
                  <p>Bag Discount </p>
                        <p>£ 1024</p>
                  </div>

                  <div className={style.price}>
                  <p>Subtotal </p>
                  <p>£55.00</p>

                  </div>

                  <div className={style.checkord}>
                    You are saving £ 3090 on this order</div>
                <div className={style.Cart_finalCheckout}>
                    <div className={style.Cart_price}>
                    <p>Total</p>
                    <p>£55.00</p>
                    </div>
                    <div>
                    <button className={style.checkpro} type="submit">Proceed To Checkout</button>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
