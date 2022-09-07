import React from "react";
import Link from "next/link";
import Image from "next/image";
import Styles from "styles/ECommerce/order.module.scss";
// const [dropWDownload, dropWDownloadActive] = useState(false);

function Singleorder() {
  return (
    <div className={Styles.mainouterbox}>
      <div className={Styles.rightleftbox}>
        <div className={Styles.sidebar}>
          <div className={Styles.brandlogo}>
            <h2>DBZ Beds</h2>
          </div>
          <div className={Styles.sidenav}>
            <ul className={Styles.nav}>
              <li className={Styles.active}>
                <Link href="order">
                  <a>
                    <div className={Styles.ianimg}>
                      <Image
                        src="/icons/link.svg"
                        alt="link"
                        width={24}
                        height={24}
                      />
                    </div>
                    <span>All Product</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="order">
                  <a>
                    <div className={Styles.ianimg}>
                      <Image
                        src="/icons/link.svg"
                        alt="link"
                        width={24}
                        height={24}
                      />
                    </div>
                    <span>Add Product</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="order">
                  <a>
                    <div className={Styles.ianimg}>
                      <Image
                        src="/icons/link.svg"
                        alt="link"
                        width={24}
                        height={24}
                      />
                    </div>
                    <span>All Order</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="order">
                  <a>
                    <div className={Styles.ianimg}>
                      <Image
                        src="/icons/link.svg"
                        alt="link"
                        width={24}
                        height={24}
                      />
                    </div>
                    <span>Invoice</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={Styles.rightsidebar}>
          <div className={Styles.topheaderdashboard}>
            <div className={Styles.leftside}>
              <div className={Styles.topsearch}>
                <input type="text" placeholder="Type Hare...." />
                <button>
                  <Image
                    src="/icons/search-line.svg"
                    alt="search"
                    width={24}
                    height={24}
                  />
                </button>
              </div>
            </div>
            <div className={Styles.rightside}>
              <div className={Styles.dropdownaction}>
                <div className={Styles.userimagewithtext}>
                  <div className={Styles.image}>
                    <Image
                      src="/icons/user-line.svg"
                      alt="search"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className={Styles.text}>Acme Inc.</div>
                </div>
                {/* <ul className="dropnav">
                  <li>
                    <Link href="#">
                      <a>
                        <span>Settings</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>
                        <span>Sign Out</span>
                      </a>
                    </Link>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
          <main className={Styles.main}>
            <div className={Styles.containerbox}>
              <div className={Styles.mainheading}>Orders No #143567 </div>

              <div className={Styles.singleorderpage}>
                <div className={Styles.actionbtn}>
                  <ul>
                    <li>
                      <Link href="#">
                        <a>Print Invoice</a>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className={Styles.orderdetails}>
                  <div className={Styles.col}>
                    <div className={Styles.box}>
                      <div className={Styles.wdheading}>Order Info</div>
                      <ul>
                        <li>
                          ID : <span>OR-325548</span>
                        </li>
                        <li>
                          Date Time : <span> 01 Jan 2021 06:32</span>
                        </li>
                        <li>
                          Payment Method : <span>Credit Card</span>
                        </li>
                        <li>
                          Invoice : <span>IN-302240</span>
                        </li>
                        <li>
                          Status : <span>Completed</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className={Styles.col}>
                    <div className={Styles.box}>
                      <div className={Styles.wdheading}>Customer Details</div>
                      <div className={Styles.swdheading}>Billing</div>
                      <div className={Styles.Billingbox}>
                        <p>Laszlo Papp 325 Martin way London SW20 9BT</p>

                        <ul>
                          <li>
                            {" "}
                            <span>Email address:</span> 325martinway@gmail.com
                          </li>
                          <li>
                            <span>Phone:</span> 07592160865
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className={Styles.col}>
                    <div className={Styles.box}>
                      <div
                        className={` ${Styles.wdheading}  ${Styles.texttrp}`}
                      >
                        Customer Details{" "}
                      </div>
                      <div className={Styles.swdheading}>Shipping</div>
                      <div className={Styles.Billingbox}>
                        <p>Laszlo Papp 325 Martin way London SW20 9BT</p>

                        <ul>
                          <li>
                            {" "}
                            <span>Email address:</span> 325martinway@gmail.com
                          </li>
                          <li>
                            <span>Phone:</span> 07592160865
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={Styles.productdetailslist}>
                  <table>
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Value</th>
                        <th>Cost</th>
                        <th>Qty</th>
                        <th>Total</th>
                      </tr>
                    </thead>

                    <tbody className={Styles.woocmproduct}>
                      <tr>
                        <td>
                          <div className={Styles.productimage}>
                            <div className={Styles.image}>
                              <Image
                                src="/orderimage/platform.jpg"
                                height={100}
                                width={100}
                                alt="productimage"
                              />
                            </div>
                            <div className={Styles.text}>
                              Platform Top Divan Bed Base FREE UK DELIVERY
                            </div>
                          </div>
                        </td>
                        <td></td>
                        <td>£0.00</td>
                        <td>1 (1*1)</td>
                        <td>£0.00</td>
                      </tr>

                      <tr>
                        <td>Choose Colour</td>
                        <td>Grey Linen</td>
                        <td>£99.00</td>
                        <td>1 (1*1)</td>
                        <td>£99.00</td>
                      </tr>
                      <tr>
                        <td>Select Your Size</td>
                        <td>4FT 6 - Double - £179</td>
                        <td>£100.00</td>
                        <td>1 (1*1)</td>
                        <td>£100.00</td>
                      </tr>

                      <tr>
                        <td>Storage</td>
                        <td>No Storage</td>
                        <td>£100.00</td>
                        <td>1 (1*1)</td>
                        <td>£100.00</td>
                      </tr>

                      <tr>
                        <td>Select Your Feet</td>
                        <td>Chrome Gliders - £20</td>
                        <td>£20.00</td>
                        <td>1 (1*1)</td>
                        <td>£20.00</td>
                      </tr>

                      <tr>
                        <td>Select Your Headboard</td>
                        <td>No HeadBoard</td>
                        <td>£20.00</td>
                        <td>1 (1*1)</td>
                        <td>£20.00</td>
                      </tr>

                      <tr>
                        <td>Select Your Mattress</td>
                        <td>No Mattress</td>
                        <td>£20.00</td>
                        <td>1 (1*1)</td>
                        <td>£20.00</td>
                      </tr>

                      <tr>
                        <td>
                          <div className={Styles.productimage}>
                            <div className={Styles.image}>
                              <Image
                                src="/orderimage/platform.jpg"
                                height={100}
                                width={100}
                                alt="productimage"
                              />
                            </div>
                            <div className={Styles.text}>
                              Platform Top Divan Bed Base FREE UK DELIVERY
                            </div>
                          </div>
                        </td>
                        <td></td>
                        <td>£0.00</td>
                        <td>1 (1*1)</td>
                        <td>£0.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Singleorder;
