import PerPageLayout from "layout/perpage";
import React from "react";
import styles from "styles/contact-us/contactus.module.scss";
import Link from "next/link";
const ContactUs = () => {
  return (
    <>
      <section className={styles.contactusmap}>
        <div className={`${styles.mwfull} container`}>
          <div className="row">
            <div className="col-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5404230563995!2d-0.12174238443061594!3d51.50330061882435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2sin!4v1669616901872!5m2!1sen!2sin" width="600" height="450"    loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.contactussection}>
        <div className='container'>
          <div className='row'>
            <div className={`${styles.mwfull} col-6`}>
              <div className={styles.contactus1}>
                <h3>PHONE:</h3>
                <Link href="#">
                  <a>01902 405535</a>
                </Link>
              </div>
              <div className={styles.contactus1}>
                <h3>ADDRESS</h3>
                <p>
                  Unit 8a Stag Industrial Estate<br></br>Oxford Street<br></br>
                  Bilston<br></br>WV14 7HZ
                </p>
              </div>
              <div className={styles.contactus2}>
                <h3>CONTACT US ON</h3>
                <Link href="#">
                  <a>info@bedsdivans.co.uk</a>
                </Link>
                <p>
                  Please contact us on the above email for issues with items,
                  returns,<br></br>exchanges, and payments.
                </p>
              </div>
              <div className={styles.contactus3}>
                <h3>Working Hours</h3>
                <p>Mon-Fri 9AM – 5PM</p>
              </div>
            </div>
            <div className={`${styles.mwfull} col-6`}>
              <div className={styles.contactform}>
                <h2>INFORMATION ABOUT US</h2>
                <h3>CONTACT US FOR ANY QUESTIONS</h3>
              </div>
              <div className={styles.contactform1}>
               <form action="">
               <label htmlFor="form-field-name">Your Name</label>
                <input type="text" />
                <label htmlFor="form-field-name">Your Email</label>
                <input type="email" />
                <label htmlFor="form-field-name">Phone Number</label>
                <input type="number" />
                <label htmlFor="form-field-name">Company</label>
                <input type="text" />
                <label htmlFor="form-field-name">Your Message</label>
              <textarea name="form_fields[message]" id="form-field-message" rows="4"></textarea>
              <button>ASK A QUESTION</button>
               </form>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;

ContactUs.getLayout = PerPageLayout;
