import React from "react";
import useInputs from "hooks/useInputs";
import css from "styles/cart.module.scss";
import Input from "components/element/input";
import Select from "components/element/select";
import Button from "components/element/button";
import Textarea from "components/element/textarea";

type EFORM = React.ChangeEvent<HTMLFormElement>;
const ContactForm = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    country: "",
    companyName: "",
    houseNumber: "",
    townCity: "",
    postcode: "",
    phone: "",
    email: "",
    orderNotes: "",
  };

  const { inputs, onChangeInputs } = useInputs(initialState);
  // GET INPUT VALUES IN REALTIME

  const onSubmit = React.useCallback(
    (e: EFORM) => {
      e.preventDefault();
      console.log(inputs);
    },
    [inputs]
  );
  return (
    <div className={css.item1}>
      <div className={css.billformbox}>
        <h3>Billing Details</h3>
        <form className={css.billform} onSubmit={onSubmit}>
          <ul>
            <li>
              <div className="row">
                <div className="col-md-6">
                  <Input
                    name="firstName"
                    type="text"
                    placeholder="Enter your first name"
                    label="First Name"
                    onChange={onChangeInputs}
                  />
                </div>
                <div className="col-md-6">
                  <Input
                    name="lastName"
                    type="text"
                    placeholder="Enter your last name"
                    label="Last Name"
                    onChange={onChangeInputs}
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="row">
                <div className="col-md-6">
                  {/* <label htmlFor="cname">Company Name (optional)</label>
                  <input type="text" id="cname" /> */}
                  <Input
                    onChange={onChangeInputs}
                    name="companyName"
                    type="text"
                    placeholder="Enter your company name"
                    label="Company Name (optional)"
                  />
                </div>
                <div className="col-md-6">
                  {/* <label htmlFor="country">Country / Region *</label>
                  <p className={css.countryname}>United Kingdom (UK)</p> */}
                  <Select
                    name="country"
                    label="Country / Region *"
                    onChange={onChangeInputs}
                    options={[
                      {
                        label: "Not Selected",
                        value: "",
                      },
                      {
                        label: "United Kingdom (UK)",
                        value: "UK",
                      },
                    ]}
                  />
                </div>
              </div>
            </li>

            <li>
              <div className="row">
                <div className="col-md-12">
                  {/* <label htmlFor="streetaddf">Street address *</label>
                  <input
                    type="text"
                    name=""
                    placeholder="House number and street name"
                  /> */}
                  <Input
                    type="text"
                    name="houseNumber"
                    placeholder="House number and street name"
                    label="Street address *"
                    onChange={onChangeInputs}
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="row">
                <Input
                  id="town"
                  type="text"
                  name="townCity"
                  label="Town / City *"
                  onChange={onChangeInputs}
                />
              </div>
            </li>
            <li>
              <div className="row">
                <div className="col-md-6">
                  <Input
                    type="text"
                    name="postcode"
                    id="country"
                    placeholder="Enter your postcode"
                    label="Postcode *"
                    onChange={onChangeInputs}
                  />
                </div>
                <div className="col-md-6">
                  <Input
                    type="number"
                    name="phone"
                    id="country"
                    label="Phone *"
                    onChange={onChangeInputs}
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="row">
                <div className="col-md-12">
                  <Input
                    name="email"
                    label="Email"
                    id="email"
                    type="email"
                    onChange={onChangeInputs}
                  />
                </div>
              </div>
            </li>

            <li>
              <div className="row">
                <div className="col-md-12">
                  {/* <label htmlFor="textare">order notes(optional)</label>
                  <textarea className={css.text_area} id="message" rows={4} /> */}
                  <Textarea
                    name="orderNotes"
                    onChange={onChangeInputs}
                    label="Order notes (optional)"
                    placeholder="Notes about your order, e.g. special notes for delivery."
                  />
                </div>
              </div>
            </li>
          </ul>
          {/* <button type="submit">Send</button> */}
          <Button type="submit">Send</Button>
        </form>
      </div>
    </div>
  );
};
export default ContactForm;
