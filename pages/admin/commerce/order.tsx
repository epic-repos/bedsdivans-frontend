import React from "react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Styles from "styles/ECommerce/order.module.scss";
// const [dropWDownload, dropWDownloadActive] = useState(false);

function Order() {
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
                    </div>{" "}
                    <span>All Product</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="order">
                  <a>
                    {" "}
                    <div className={Styles.ianimg}>
                      <Image
                        src="/icons/link.svg"
                        alt="link"
                        width={24}
                        height={24}
                      />
                    </div>{" "}
                    <span>Add Product</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="order">
                  <a>
                    {" "}
                    <div className={Styles.ianimg}>
                      <Image
                        src="/icons/link.svg"
                        alt="link"
                        width={24}
                        height={24}
                      />
                    </div>{" "}
                    <span>All Order</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="order">
                  <a>
                    {" "}
                    <div className={Styles.ianimg}>
                      <Image
                        src="/icons/link.svg"
                        alt="link"
                        width={24}
                        height={24}
                      />
                    </div>{" "}
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
              <div className={Styles.mainheading}>Orders </div>

              <div className={` ${Styles.tablebox} ${Styles.mt2}`}>
                <div className={Styles.tabletopheading}>
                  All Orders <span className={Styles.number}>442</span>
                </div>
                <div className={Styles.table}>
                  <table>
                    <thead>
                      <tr>
                        <th>ORDER</th>
                        <th>DATE</th>
                        <th>CUSTOMER</th>
                        <th>TOTAL</th>
                        <th>STATUS</th>
                        <th>ITEMS</th>
                        <th>LOCATION</th>
                        <th>PAYMENT TYPE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className={Styles.order}>
                            <Link href="#">
                              <a>#143567</a>
                            </Link>
                          </div>
                        </td>
                        <td>
                          <div className={Styles.date}>22/01/2021</div>
                        </td>
                        <td>
                          <div className={Styles.customername}>
                            Dominik Lamakani
                          </div>
                        </td>
                        <td>
                          <div className={Styles.price}>$129.00</div>
                        </td>
                        <td>
                          {" "}
                          <div
                            className={` ${Styles.ststus} ${Styles.approved} `}
                          >
                            Approved
                          </div>
                        </td>
                        <td>
                          <div className={Styles.itemsqty}>1</div>
                        </td>
                        <td>
                          <div className={Styles.location}>🇨🇳 Shanghai, CN</div>
                        </td>
                        <td>
                          <div className={Styles.paymenttype}>Subscription</div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className={Styles.order}>
                            <Link href="#">
                              <a>#143567</a>
                            </Link>
                          </div>
                        </td>
                        <td>
                          <div className={Styles.date}>22/01/2021</div>
                        </td>
                        <td>
                          <div className={Styles.customername}>
                            Dominik Lamakani
                          </div>
                        </td>
                        <td>
                          <div className={Styles.price}>$129.00</div>
                        </td>
                        <td>
                          {" "}
                          <div
                            className={` ${Styles.ststus} ${Styles.pending} `}
                          >
                            Pending
                          </div>
                        </td>
                        <td>
                          <div className={Styles.itemsqty}>1</div>
                        </td>
                        <td>
                          <div className={Styles.location}>🇨🇳 Shanghai, CN</div>
                        </td>
                        <td>
                          <div className={Styles.paymenttype}>Subscription</div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className={Styles.order}>
                            <Link href="#">
                              <a>#143567</a>
                            </Link>
                          </div>
                        </td>
                        <td>
                          <div className={Styles.date}>22/01/2021</div>
                        </td>
                        <td>
                          <div className={Styles.customername}>
                            Dominik Lamakani
                          </div>
                        </td>
                        <td>
                          <div className={Styles.price}>$129.00</div>
                        </td>
                        <td>
                          {" "}
                          <div
                            className={` ${Styles.ststus} ${Styles.refunded} `}
                          >
                            Refunded
                          </div>
                        </td>
                        <td>
                          <div className={Styles.itemsqty}>1</div>
                        </td>
                        <td>
                          <div className={Styles.location}>🇨🇳 Shanghai, CN</div>
                        </td>
                        <td>
                          <div className={Styles.paymenttype}>Subscription</div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className={Styles.order}>
                            <Link href="#">
                              <a>#143567</a>
                            </Link>
                          </div>
                        </td>
                        <td>
                          <div className={Styles.date}>22/01/2021</div>
                        </td>
                        <td>
                          <div className={Styles.customername}>
                            Dominik Lamakani
                          </div>
                        </td>
                        <td>
                          <div className={Styles.price}>$129.00</div>
                        </td>
                        <td>
                          {" "}
                          <div
                            className={` ${Styles.ststus} ${Styles.refunded} `}
                          >
                            Refunded
                          </div>
                        </td>
                        <td>
                          <div className={Styles.itemsqty}>1</div>
                        </td>
                        <td>
                          <div className={Styles.location}>🇨🇳 Shanghai, CN</div>
                        </td>
                        <td>
                          <div className={Styles.paymenttype}>Subscription</div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className={Styles.order}>
                            <Link href="#">
                              <a>#143567</a>
                            </Link>
                          </div>
                        </td>
                        <td>
                          <div className={Styles.date}>22/01/2021</div>
                        </td>
                        <td>
                          <div className={Styles.customername}>
                            Dominik Lamakani
                          </div>
                        </td>
                        <td>
                          <div className={Styles.price}>$129.00</div>
                        </td>
                        <td>
                          {" "}
                          <div
                            className={` ${Styles.ststus} ${Styles.refunded} `}
                          >
                            Refunded
                          </div>
                        </td>
                        <td>
                          <div className={Styles.itemsqty}>1</div>
                        </td>
                        <td>
                          <div className={Styles.location}>🇨🇳 Shanghai, CN</div>
                        </td>
                        <td>
                          <div className={Styles.paymenttype}>Subscription</div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className={Styles.order}>
                            <Link href="#">
                              <a>#143567</a>
                            </Link>
                          </div>
                        </td>
                        <td>
                          <div className={Styles.date}>22/01/2021</div>
                        </td>
                        <td>
                          <div className={Styles.customername}>
                            Dominik Lamakani
                          </div>
                        </td>
                        <td>
                          <div className={Styles.price}>$129.00</div>
                        </td>
                        <td>
                          {" "}
                          <div
                            className={` ${Styles.ststus} ${Styles.refunded} `}
                          >
                            Refunded
                          </div>
                        </td>
                        <td>
                          <div className={Styles.itemsqty}>1</div>
                        </td>
                        <td>
                          <div className={Styles.location}>🇨🇳 Shanghai, CN</div>
                        </td>
                        <td>
                          <div className={Styles.paymenttype}>Subscription</div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className={Styles.order}>
                            <Link href="#">
                              <a>#143567</a>
                            </Link>
                          </div>
                        </td>
                        <td>
                          <div className={Styles.date}>22/01/2021</div>
                        </td>
                        <td>
                          <div className={Styles.customername}>
                            Dominik Lamakani
                          </div>
                        </td>
                        <td>
                          <div className={Styles.price}>$129.00</div>
                        </td>
                        <td>
                          {" "}
                          <div
                            className={` ${Styles.ststus} ${Styles.refunded} `}
                          >
                            Refunded
                          </div>
                        </td>
                        <td>
                          <div className={Styles.itemsqty}>1</div>
                        </td>
                        <td>
                          <div className={Styles.location}>🇨🇳 Shanghai, CN</div>
                        </td>
                        <td>
                          <div className={Styles.paymenttype}>Subscription</div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className={Styles.order}>
                            <Link href="#">
                              <a>#143567</a>
                            </Link>
                          </div>
                        </td>
                        <td>
                          <div className={Styles.date}>22/01/2021</div>
                        </td>
                        <td>
                          <div className={Styles.customername}>
                            Dominik Lamakani
                          </div>
                        </td>
                        <td>
                          <div className={Styles.price}>$129.00</div>
                        </td>
                        <td>
                          {" "}
                          <div
                            className={` ${Styles.ststus} ${Styles.refunded} `}
                          >
                            Refunded
                          </div>
                        </td>
                        <td>
                          <div className={Styles.itemsqty}>1</div>
                        </td>
                        <td>
                          <div className={Styles.location}>🇨🇳 Shanghai, CN</div>
                        </td>
                        <td>
                          <div className={Styles.paymenttype}>Subscription</div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className={Styles.order}>
                            <Link href="#">
                              <a>#143567</a>
                            </Link>
                          </div>
                        </td>
                        <td>
                          <div className={Styles.date}>22/01/2021</div>
                        </td>
                        <td>
                          <div className={Styles.customername}>
                            Dominik Lamakani
                          </div>
                        </td>
                        <td>
                          <div className={Styles.price}>$129.00</div>
                        </td>
                        <td>
                          {" "}
                          <div
                            className={` ${Styles.ststus} ${Styles.refunded} `}
                          >
                            Refunded
                          </div>
                        </td>
                        <td>
                          <div className={Styles.itemsqty}>1</div>
                        </td>
                        <td>
                          <div className={Styles.location}>🇨🇳 Shanghai, CN</div>
                        </td>
                        <td>
                          <div className={Styles.paymenttype}>Subscription</div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className={Styles.order}>
                            <Link href="#">
                              <a>#143567</a>
                            </Link>
                          </div>
                        </td>
                        <td>
                          <div className={Styles.date}>22/01/2021</div>
                        </td>
                        <td>
                          <div className={Styles.customername}>
                            Dominik Lamakani
                          </div>
                        </td>
                        <td>
                          <div className={Styles.price}>$129.00</div>
                        </td>
                        <td>
                          {" "}
                          <div
                            className={` ${Styles.ststus} ${Styles.refunded} `}
                          >
                            Refunded
                          </div>
                        </td>
                        <td>
                          <div className={Styles.itemsqty}>1</div>
                        </td>
                        <td>
                          <div className={Styles.location}>🇨🇳 Shanghai, CN</div>
                        </td>
                        <td>
                          <div className={Styles.paymenttype}>Subscription</div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className={Styles.order}>
                            <Link href="#">
                              <a>#143567</a>
                            </Link>
                          </div>
                        </td>
                        <td>
                          <div className={Styles.date}>22/01/2021</div>
                        </td>
                        <td>
                          <div className={Styles.customername}>
                            Dominik Lamakani
                          </div>
                        </td>
                        <td>
                          <div className={Styles.price}>$129.00</div>
                        </td>
                        <td>
                          {" "}
                          <div
                            className={` ${Styles.ststus} ${Styles.refunded} `}
                          >
                            Refunded
                          </div>
                        </td>
                        <td>
                          <div className={Styles.itemsqty}>1</div>
                        </td>
                        <td>
                          <div className={Styles.location}>🇨🇳 Shanghai, CN</div>
                        </td>
                        <td>
                          <div className={Styles.paymenttype}>Subscription</div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className={Styles.order}>
                            <Link href="#">
                              <a>#143567</a>
                            </Link>
                          </div>
                        </td>
                        <td>
                          <div className={Styles.date}>22/01/2021</div>
                        </td>
                        <td>
                          <div className={Styles.customername}>
                            Dominik Lamakani
                          </div>
                        </td>
                        <td>
                          <div className={Styles.price}>$129.00</div>
                        </td>
                        <td>
                          {" "}
                          <div
                            className={` ${Styles.ststus} ${Styles.refunded} `}
                          >
                            Refunded
                          </div>
                        </td>
                        <td>
                          <div className={Styles.itemsqty}>1</div>
                        </td>
                        <td>
                          <div className={Styles.location}>🇨🇳 Shanghai, CN</div>
                        </td>
                        <td>
                          <div className={Styles.paymenttype}>Subscription</div>
                        </td>
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

export default Order;
