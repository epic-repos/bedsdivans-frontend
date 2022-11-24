import React, { useEffect } from "react";
import useInputs from "hooks/useInputs";
import css from "styles/cart.module.scss";
import Input from "components/element/input";
import Select from "components/element/select";
import Textarea from "components/element/textarea";

type EFORM = React.ChangeEvent<HTMLFormElement>;

interface FormProps {
  onChange: (data: any) => void;
}
const ContactForm = ({ onChange }: FormProps) => {
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

  useEffect(() => {
    onChange(inputs);
  }, [inputs, onChange]);

  return (
    <div className={css.item1}>
      <div className={css.billformbox}>
        <h3>Billing Details</h3>
        <form className={css.billform}>
          <ul>
            <li>
              <div className="row">
                <div className="col-md-6">
                  <Input
                    name="firstName"
                    type="text"
                    placeholder="Enter your first name"
                    label="First Name*"
                    onChange={onChangeInputs}
                  />
                </div>
                <div className="col-md-6">
                  <Input
                    name="lastName"
                    type="text"
                    placeholder="Enter your last name"
                    label="Last Name*"
                    onChange={onChangeInputs}
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="row">
                <div className="col-md-12">
                  <Input
                    onChange={onChangeInputs}
                    name="companyName"
                    type="text"
                    placeholder="Enter your company name"
                    label="Company Name (optional)"
                  />
                </div>
                <div className="col-md-6">
                   <p className={css.countryinput}>
                   Country/Region *
                   </p>
                   <h3 className={css.countryinput1}>
                   United Kingdom (UK)
                   </h3>
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
                    <Input
                    type="text"
                    name="houseNumber"
                    placeholder="Apartment, suite, unit, etc. (optional)"
                    label=""
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
                <Input
                  id="town"
                  type="text"
                  name="country"
                  label="Country (optional)"
                  onChange={onChangeInputs}
                />
              </div>
            </li>
            <li>
              <div className="row">
                <div className="col-md-12">
                  <Input
                    type="text"
                    name="postcode"
                    id="country"
                    placeholder="Enter your postcode"
                    label="Postcode *"
                    onChange={onChangeInputs}
                  />
                </div>
                <div className="col-md-12">
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
                    label="Email address *"
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
          {/* <Button type="submit">Send</Button> */}
        </form>
      </div>
    </div>
  );
};
export default ContactForm;
