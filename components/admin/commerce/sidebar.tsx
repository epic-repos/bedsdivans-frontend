import React from "react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Styles from "styles/ECommerce/order.module.scss";
import LinkIcon from "icons/LinkIcon";

interface CommerceSidebarProps {}
const CommerceSidebar = (props: CommerceSidebarProps) => {
  return (
    <div className={Styles.sidebar}>
      <div className={Styles.brandlogo}>
        <h2>DBZ Beds</h2>
      </div>
      <div className={Styles.sidenav}>
        <ul className={Styles.nav}>
          <li className={Styles.active}>
            <Link href="/admin/commerce">
              <a>
                <div className={Styles.ianimg}>
                  <LinkIcon fill="red" />
                </div>
                <span>All Product</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/admin/commerce/addorder">
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
            <Link href="/admin/commerce/order">
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
  );
};

export default CommerceSidebar;
