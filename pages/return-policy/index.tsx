import PerPageLayout from "layout/perpage";
import React from "react";
import styles from "styles/return-policy/returnpolicy.module.scss";
import Link from "next/link";
const ReturnPolicy = () => {
  return (
    <>
      <section className={styles.returnpolicysection}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Return Policy</h1>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.returnpolicysection1}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p>
                DUE TO COVID-19 WE CANNOT ACCEPT ANY RETURNS OF ITEMS BEING
                OPENED OR USED.
              </p>
              <p>
                Our policy lasts 30 days. If 30 days have gone by since your
                purchase, unfortunately, we can’t offer you a refund or
                exchange.
              </p>
              <p>
                Any cancellations after 48 hours will incur a £30:00
                cancellation fee due to the item being made.
              </p>
              <p>
                Please note if any items are no longer wanted within 30 days,
                and a change of mind occurs, you must return the item to us at
                your own cost, Or pay a collection fee of £62 to us directly and
                we can arrange for collection with one of our drivers – please
                ensure you clearly mark your name, order number, and full
                address, so that we can process your return for you. Please
                ensure you use a tracking service so we can safely receive your
                returned item.
              </p>
              <p>
                Any returns must be approved by DBZKHAN LTD (bedsDivans) before
                any return is made.
              </p>
              <p>
                To be eligible for a return, your item must be unused and in the
                same condition that you received it. It must also be in the
                original packaging. So, you must make sure that the base bag is
                kept in good condition.
              </p>
              <p>
                To complete your return, we require a receipt or proof of
                purchase. This could be through a form of email or invoice.
              </p>
              <p>
                Our sales teams are always here to help you with any enquirers
                many thanks BedsDivans
              </p>
              <p>
                Please do not send your purchase back to the manufacturer before
                a booking is made this will speed up the process and allow us to
                rectify the issue.
              </p>
              <h3>Refunds (if applicable) </h3>
              <p>Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.</p>
              <p>If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.</p>
              <h3>Late or missing refunds (if applicable)</h3>
              <p>If you haven’t received a refund yet, first check your bank account again.</p>
              <p>Then contact your credit card company, it may take some time before your refund is officially posted.</p>
              <p>Next contact your bank. There is often some processing time before a refund is posted.</p>
              <p>If you’ve done all of this and you still have not received your refund yet, please contact us on the email link provided on our website.</p>
               <h3>Exchanges (if applicable) </h3>
               <p>We only replace items if they are defective or damaged.  If you need to exchange it for the same item, send us an email or call the office to arrange the collection.</p>
               <p>You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ReturnPolicy;

ReturnPolicy.getLayout = PerPageLayout;
