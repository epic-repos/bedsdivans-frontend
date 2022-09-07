import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "styles/commerce/order.module.scss";
import CommerceLayout from "components/admin/commerce/layout";

function AllOrderPage() {
  return (
    <CommerceLayout>
      <div className={styles.rightsidebar}>
        <div className={styles.topheaderdashboard}>
          <div className={styles.leftside}>
            <div className={styles.topsearch}>
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
          <div className={styles.rightside}>
            <div className={styles.dropdownaction}>
              <div className={styles.userimagewithtext}>
                <div className={styles.image}>
                  <Image
                    src="/icons/user-line.svg"
                    alt="search"
                    width={24}
                    height={24}
                  />
                </div>
                <div className={styles.text}>Acme Inc.</div>
              </div>
            </div>
          </div>
        </div>
        <main className={styles.main}>
          <div className={styles.containerbox}>
            <div className={styles.mainheading}>Orders </div>

            <div className={` ${styles.tablebox} ${styles.mt2}`}>
              <div className={styles.tabletopheading}>
                All Orders <span className={styles.number}>442</span>
              </div>

              <div className={styles.subsubsubactionbtnlist}>
                <div className={styles.actionbtnlist}>
                  <ul>
                    <li>
                      <Link href="#">
                        <a>
                          All <span>(39,091)</span>{" "}
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>
                          Pending payments <span>(16)</span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>
                          On hold <span>(3)</span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>
                          Completed <span>(26,484)</span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>
                          Cancelled <span>(256)</span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>
                          Refunded <span>(830)</span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>
                          Failed <span>(4,161) </span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>
                          Delivered <span>(7,341)</span>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className={styles.searchlistproduct}>
                  <div className={styles.box}>
                    <input type="text" placeholder="Search Order" />
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
              </div>

              <div className={styles.table}>
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
                    {/* @ts-ignore */}
                    {[...Array(10).keys()].map((_, i) => (
                      <OrderListItem key={i} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </CommerceLayout>
  );
}

export default AllOrderPage;

interface OrderListItemProps {
  order?: string;
  date?: string;
  customer?: string;
  total?: string;
  status?: string;
  items?: string | number;
  location?: string;
  paymentType?: string;
}

const OrderListItem = ({
  date,
  items,
  total,
  order,
  status,
  location,
  customer,
  paymentType,
}: OrderListItemProps) => {
  return (
    <tr>
      <td>
        <div className={styles.order}>
          <Link href="/admin/commerce/singleorder">
            <a>#143567</a>
          </Link>
        </div>
      </td>
      <td>
        <div className={styles.date}>22/01/2021</div>
      </td>
      <td>
        <div className={styles.customername}>Dominik Lamakani</div>
      </td>
      <td>
        <div className={styles.price}>$129.00</div>
      </td>
      <td>
        <div className={` ${styles.status} ${styles.approved} `}>Approved</div>
      </td>
      <td>
        <div className={styles.itemsqty}>1</div>
      </td>
      <td>
        <div className={styles.location}>🇨🇳 Shanghai, CN</div>
      </td>
      <td>
        <div className={styles.paymenttype}>Subscription</div>
      </td>
    </tr>
  );
};

{
  /* <ul className="dropnav">
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
                </ul> */
}
