import React from "react";
import css from "styles/cart.module.scss";

const ContactForm = () => {
  return (
    <div className={css.item1}>
      <div className={css.billformbox}>
        <h3>Billing Details</h3>
        <div className={css.billform}>
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
                  <p className={css.countryname}>United Kingdom (UK)</p>
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
                  <textarea className={css.text_area} id="message" rows={4} />
                </div>
              </div>
            </li>
          </ul>
          <button type="submit">Send</button>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
