import PerPageLayout from 'layout/perpage'
import React from 'react'
import Link from 'next/link'
import styles from 'styles/policy-warranty/policywarranty.module.scss'
const PolicyWarranty = () => {
  return (
    <>
    <section className={styles.mainsection}>
       <div className='container'>
          <div className='row'>
              <div className='col-12'>
                <h1>Policy & Warranty</h1>
              </div>
          </div>
       </div>
    </section>
     <section className={styles.policywarranty}>
            <div className='container'>
                <div className='row'>
                  <div className='col-12'>
                    <h3>Delivery Information</h3>
                    <p>Once you have successfully placed your order, you’ll receive an order confirmation by email with a follow-up call from the sales team within 2-3 days to confirm your order and delivery date. Please ensure you leave a correct contact number for our sales team to contact you, if we fail to reach you on a contact number you’ve provided, your order will be placed on hold until we hear from you. We only to deliver to UK Mainland.</p>
                    <p>Standard Free Delivery is within 3-5 working days within 120 miles of our postcode WV14 7HZ, any orders placed outside this postcode will take slightly longer.  Areas covered within 2-5 working days are London, East Midlands, West Midlands, South Wales, Manchester, Yorkshire, and surrounding postcodes.</p>
                    <p>Orders will only be dispatched once the order has been confirmed with the customer and the delivery date / approximate time has been given.</p>
                    <p><strong>Safe Delivery</strong> All orders are delivered to the front of the building via our free standard kerbside delivery. If you live in a flat, it will be delivered to the communal entrance of the building. Couriers may deliver to the hallway at their own discretion.</p>
                    <p>Please note if a 3rd party courier is used to deliver your goods and any damages occur whilst on your property, you must inform us of this on the day the goods have been delivered so we can make a note of this on your order, and also provide you with contact details of the couriers for you to make a direct claim to them.</p>
                    <p>if your items are delivered by couriers DBZKHAN LTD (BedsDivans) takes no responsibility for any damages or issues occurred at the time of delivery.</p>
                    <p><strong>Missed Delivery</strong> All customers are contacted regarding the delivery date/ time frame.  Once the delivery is confirmed and booked in, the driver will contact you prior to delivery and if the delivery is missed, you are liable for the courier charge for the following booking.</p>
                    <p><strong>Delivery Professionals</strong> Our friendly delivery drivers adhere to strict health and safety standards, to ensure your order is delivered in an efficient and professional manner. This ensures minimum damage that can be caused by mainstream couriers due to changing hands too many times.</p>
                    <p><strong>Refusal of Delivery</strong> If you refuse to accept a delivery on the day without approval from us, a charge of £62 will be liable to be paid. The amount will be debited from any refunds due paid by card or any other means.</p>
                    <h3>Warranty</h3>
                    <p><strong>Garden Furniture</strong> The colour of wooden furniture is affected eventually by UV rays and is not covered by our guarantee. Therefore, you the customer are responsible to maintain and treat the equipment.</p>
                    <p>Please note that shaking (small cracks) in wood outdoor furniture is normal and is not a structural fault.</p>
                    <p>All other products e.g., Cushions are guaranteed for 2 years against any structural fault. This excludes colour change.</p>
                    <p>All our guarantees do not cover any of our garden products used in a contract environment (non-domestic), i.e., in hotels, bars, hostelries, inns, taverns, restaurants, holiday lets, rented accommodation, campsites etc.</p>
                    <p>After 28 days from purchase, it is the responsibility (this includes both cost and effort) of the customer to return and collect any goods to the address below in the event of a guarantee claim. In the event of any claim, the customer must provide proof of purchase in the form of the original sales invoice or the payment method.</p>
                    <p>Bed Divans Unit 7, Stag Industrial Estate, Bilston, WV14 7HZ.</p>
                    <p>Our guarantees are only applicable to private individuals who purchased goods for domestic use. Where the goods are used other than for domestic purposes, including without limitation, communal use and/or commercial use, our guarantees will not apply. Our guarantees shall not apply to persons acquiring goods second hand or at auction.</p>
                    <p>Our 2-year structural guarantee does not cover the normal wear and tear of furniture or any damages that arise due to misuse, negligence, or incorrect assembly.</p>
                    <p><strong>Beds / Mattresses</strong> You will receive a full 1 Year Exchange Guarantee with a full bed set (like for like).</p>
                    <p>Bed bases or mattresses purchased separately come with a 30-day exchange warranty.</p>
                    <h3>Refunds, Returns and Exchanges</h3>
                    <p><strong>Changing your order</strong> You can make any changes within 48 hours of placing your order, such as colour, bed size and quantity.</p>
                    <p><strong>Cancelling your order</strong> if you wish to cancel your order please either call or email us and we can get this done for you.</p>
                    <p>To complete your return, we require proof of purchase. This could be an order confirmation or invoice.  Refunds take 5-7 working days to the original method of payment, depending on your bank.</p>
                    <h3>Returns after delivery</h3>
                    <p>You can return your order within 14 days after delivery.</p>
                    <p>Items can be returned at your own cost or we can arrange for collection with one of our drivers.  The collection is subject to a courier charge of £62 if the item is unused, in its original condition and in its original packaging.</p>
                    <p>Please ensure you use a tracking service if you are returning items at your own cost so we can safely receive your returned item. The item must clearly contain your name, order number and full address so that we can process your return.</p>
                    <p>All returns must be approved by DBZKHAN LTD before any return is processed. Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. You will then receive an email notifying you of the approval or rejection of your refund.</p>
                    <p><strong>What if my item doesn’t fit?</strong> It is your responsibility to make sure you carefully check the measurements before placing your order. If the item has been delivered and does not fit, you are liable for returning the item back or arranging collection subject to a courier charge of £62 in its original condition and in its original packaging, for a refund to be processed.</p>
                    <p><strong>Faulty products</strong> Our products are handled with care and usually arrive in good condition. If your item is faulty this must be reported within 24-48 hours of receiving your delivery.</p>
                    <p>Reported faults will result in a dispute claim which require photographic evidence for our friendly after sales team to resolve the issue.</p>
                    <h3>Refunds</h3>
                    <p>If your return is approved, a refund will be processed, and a credit will automatically be applied to your original method of payment within 5-7 working days depending on your bank.</p>
                    <p>We want you to be satisfied with your purchase. If you aren’t, we’d like to help. Please contact us on info@bedDivans.co.uk or via our live chat service.</p>
                    <h3>Exchanges</h3>
                    <p>If for any reason you are not satisfied with your bed purchase in regard to manufacturing purposes, then we are more than happy to offer an exchange.</p>
                    <h3>Klarna Payment Privacy Policy</h3>
                    <p>If you wish to use Klarna’s payment methods to pay for your goods, then your personal data will be passed on to Klarna. This is for Klarna to assess your individual eligibility and criteria subject to a credit check. This process enables Klarna to establish what would be a suitable payment method to suit your individual needs. Therefore, please be aware, this is all subject to your personal data transferred to Klarna in line with Klarna’s own privacy notice.</p>
                  </div>
                </div>
            </div>
     </section>
    </>
  )
}

export default PolicyWarranty

PolicyWarranty.getLayout=PerPageLayout