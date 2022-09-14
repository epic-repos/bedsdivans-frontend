import React from "react";
import Link from "next/link";
import Image from "next/image";
import Styles from "styles/commerce/order.module.scss";
import CommerceLayout from "components/admin/commerce/layout";
import DeleteIcon from "icons/delete";
import ViewIcon from "icons/view";
import EditIcon from "icons/edit";
// const [dropWDownload, dropWDownloadActive] = useState(false);

function Allproduct() {
  return (
    <CommerceLayout>
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
            <div className={Styles.mainheading}>Products list</div>

            <div className={` ${Styles.tablebox} ${Styles.mt2}`}>
              {/* <div className={Styles.tabletopheading}>Products list</div> */}

              <div className={Styles.subsubsubactionbtnlist}>
                <div className={Styles.findactionbtn}>
                  <div className={Styles.searchlistproduct}>
                    <div className={Styles.box}>
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

                  <div className={Styles.selectcategory}>
                    <select name="category" id="">
                      <option value="All category">All category</option>
                      <option value="All category">All category</option>
                      <option value="All category">All category</option>
                      <option value="All category">All category</option>
                      <option value="All category">All category</option>
                      <option value="All category">All category</option>
                      <option value="All category">All category</option>
                      <option value="All category">All category</option>
                      <option value="All category">All category</option>
                      <option value="All category">All category</option>
                    </select>
                  </div>
                  <div className={Styles.selectcategory}>
                    <select name="category" id="">
                      <option value="All category">Active</option>
                      <option value="All category">Archived</option>
                      <option value="All category">Disabled</option>
                    </select>
                  </div>
                </div>

                <div className={Styles.actionbtnlist}>
                  <a href="#" className={Styles.cpbtn}>
                    Create Product
                  </a>
                </div>
              </div>

              <div className={`${Styles.table} ${Styles.allproducttable} `}>
                <table>
                  <thead>
                    <tr>
                      <th>
                        <div className={Styles.topcheckbox}>
                          <div className={Styles.checkbox}>
                            <input type="checkbox" />
                          </div>

                          {/* <p>S.No</p> */}
                        </div>
                      </th>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Status</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className={Styles.checkbox}>
                          <input type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <div className={Styles.image}>
                          <Image
                            src="/image/productimage.jpg"
                            height={60}
                            width={60}
                            alt="Product Image"
                          />
                        </div>
                      </td>
                      <td>
                        <div className={Styles.productrname}>
                          <h6>Modern Armchair for home interiors</h6>
                        </div>
                      </td>
                      <td>
                        <div className={Styles.price}>$129.00</div>
                      </td>
                      <td>
                        <div
                          className={` ${Styles.ststus} ${Styles.approved} `}
                        >
                          Approved
                        </div>
                      </td>
                      <td>
                        <div className={Styles.date}>02.11.2020</div>
                      </td>

                      <td>
                        <div className={Styles.actionbtn}>
                          <ul className={Styles.actionbtnul}>
                            <li>
                              <a>
                                <DeleteIcon />
                              </a>
                            </li>
                            <li>
                              <a>
                                <ViewIcon />
                              </a>
                            </li>
                            <li>
                              <a>
                                <EditIcon />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className={Styles.checkbox}>
                          <input type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <div className={Styles.image}>
                          <Image
                            src="/image/productimage.jpg"
                            height={60}
                            width={60}
                            alt="Product Image"
                          />
                        </div>
                      </td>
                      <td>
                        <div className={Styles.productrname}>
                          <h6>Modern Armchair for home interiors</h6>
                        </div>
                      </td>
                      <td>
                        <div className={Styles.price}>$129.00</div>
                      </td>
                      <td>
                        <div
                          className={` ${Styles.ststus} ${Styles.approved} `}
                        >
                          Approved
                        </div>
                      </td>
                      <td>
                        <div className={Styles.date}>02.11.2020</div>
                      </td>

                      <td>
                        <div className={Styles.actionbtn}>
                          <ul className={Styles.actionbtnul}>
                            <li>
                              <a>
                                <DeleteIcon />
                              </a>
                            </li>
                            <li>
                              <a>
                                <ViewIcon />
                              </a>
                            </li>
                            <li>
                              <a>
                                <EditIcon />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className={Styles.checkbox}>
                          <input type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <div className={Styles.image}>
                          <Image
                            src="/image/productimage.jpg"
                            height={60}
                            width={60}
                            alt="Product Image"
                          />
                        </div>
                      </td>
                      <td>
                        <div className={Styles.productrname}>
                          <h6>Modern Armchair for home interiors</h6>
                        </div>
                      </td>
                      <td>
                        <div className={Styles.price}>$129.00</div>
                      </td>
                      <td>
                        <div
                          className={` ${Styles.ststus} ${Styles.approved} `}
                        >
                          Approved
                        </div>
                      </td>
                      <td>
                        <div className={Styles.date}>02.11.2020</div>
                      </td>

                      <td>
                        <div className={Styles.actionbtn}>
                          <ul className={Styles.actionbtnul}>
                            <li>
                              <a>
                                <DeleteIcon />
                              </a>
                            </li>
                            <li>
                              <a>
                                <ViewIcon />
                              </a>
                            </li>
                            <li>
                              <a>
                                <EditIcon />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className={Styles.checkbox}>
                          <input type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <div className={Styles.image}>
                          <Image
                            src="/image/productimage.jpg"
                            height={60}
                            width={60}
                            alt="Product Image"
                          />
                        </div>
                      </td>
                      <td>
                        <div className={Styles.productrname}>
                          <h6>Modern Armchair for home interiors</h6>
                        </div>
                      </td>
                      <td>
                        <div className={Styles.price}>$129.00</div>
                      </td>
                      <td>
                        <div
                          className={` ${Styles.ststus} ${Styles.approved} `}
                        >
                          Approved
                        </div>
                      </td>
                      <td>
                        <div className={Styles.date}>02.11.2020</div>
                      </td>

                      <td>
                        <div className={Styles.actionbtn}>
                          <ul className={Styles.actionbtnul}>
                            <li>
                              <a>
                                <DeleteIcon />
                              </a>
                            </li>
                            <li>
                              <a>
                                <ViewIcon />
                              </a>
                            </li>
                            <li>
                              <a>
                                <EditIcon />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className={Styles.checkbox}>
                          <input type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <div className={Styles.image}>
                          <Image
                            src="/image/productimage.jpg"
                            height={60}
                            width={60}
                            alt="Product Image"
                          />
                        </div>
                      </td>
                      <td>
                        <div className={Styles.productrname}>
                          <h6>Modern Armchair for home interiors</h6>
                        </div>
                      </td>
                      <td>
                        <div className={Styles.price}>$129.00</div>
                      </td>
                      <td>
                        <div
                          className={` ${Styles.ststus} ${Styles.approved} `}
                        >
                          Approved
                        </div>
                      </td>
                      <td>
                        <div className={Styles.date}>02.11.2020</div>
                      </td>

                      <td>
                        <div className={Styles.actionbtn}>
                          <ul className={Styles.actionbtnul}>
                            <li>
                              <a>
                                <DeleteIcon />
                              </a>
                            </li>
                            <li>
                              <a>
                                <ViewIcon />
                              </a>
                            </li>
                            <li>
                              <a>
                                <EditIcon />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className={Styles.checkbox}>
                          <input type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <div className={Styles.image}>
                          <Image
                            src="/image/productimage.jpg"
                            height={60}
                            width={60}
                            alt="Product Image"
                          />
                        </div>
                      </td>
                      <td>
                        <div className={Styles.productrname}>
                          <h6>Modern Armchair for home interiors</h6>
                        </div>
                      </td>
                      <td>
                        <div className={Styles.price}>$129.00</div>
                      </td>
                      <td>
                        <div
                          className={` ${Styles.ststus} ${Styles.approved} `}
                        >
                          Approved
                        </div>
                      </td>
                      <td>
                        <div className={Styles.date}>02.11.2020</div>
                      </td>

                      <td>
                        <div className={Styles.actionbtn}>
                          <ul className={Styles.actionbtnul}>
                            <li>
                              <a>
                                <DeleteIcon />
                              </a>
                            </li>
                            <li>
                              <a>
                                <ViewIcon />
                              </a>
                            </li>
                            <li>
                              <a>
                                <EditIcon />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className={Styles.checkbox}>
                          <input type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <div className={Styles.image}>
                          <Image
                            src="/image/productimage.jpg"
                            height={60}
                            width={60}
                            alt="Product Image"
                          />
                        </div>
                      </td>
                      <td>
                        <div className={Styles.productrname}>
                          <h6>Modern Armchair for home interiors</h6>
                        </div>
                      </td>
                      <td>
                        <div className={Styles.price}>$129.00</div>
                      </td>
                      <td>
                        <div
                          className={` ${Styles.ststus} ${Styles.approved} `}
                        >
                          Approved
                        </div>
                      </td>
                      <td>
                        <div className={Styles.date}>02.11.2020</div>
                      </td>

                      <td>
                        <div className={Styles.actionbtn}>
                          <ul className={Styles.actionbtnul}>
                            <li>
                              <a>
                                <DeleteIcon />
                              </a>
                            </li>
                            <li>
                              <a>
                                <ViewIcon />
                              </a>
                            </li>
                            <li>
                              <a>
                                <EditIcon />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className={Styles.checkbox}>
                          <input type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <div className={Styles.image}>
                          <Image
                            src="/image/productimage.jpg"
                            height={60}
                            width={60}
                            alt="Product Image"
                          />
                        </div>
                      </td>
                      <td>
                        <div className={Styles.productrname}>
                          <h6>Modern Armchair for home interiors</h6>
                        </div>
                      </td>
                      <td>
                        <div className={Styles.price}>$129.00</div>
                      </td>
                      <td>
                        <div
                          className={` ${Styles.ststus} ${Styles.approved} `}
                        >
                          Approved
                        </div>
                      </td>
                      <td>
                        <div className={Styles.date}>02.11.2020</div>
                      </td>

                      <td>
                        <div className={Styles.actionbtn}>
                          <ul className={Styles.actionbtnul}>
                            <li>
                              <a>
                                <DeleteIcon />
                              </a>
                            </li>
                            <li>
                              <a>
                                <ViewIcon />
                              </a>
                            </li>
                            <li>
                              <a>
                                <EditIcon />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className={Styles.checkbox}>
                          <input type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <div className={Styles.image}>
                          <Image
                            src="/image/productimage.jpg"
                            height={60}
                            width={60}
                            alt="Product Image"
                          />
                        </div>
                      </td>
                      <td>
                        <div className={Styles.productrname}>
                          <h6>Modern Armchair for home interiors</h6>
                        </div>
                      </td>
                      <td>
                        <div className={Styles.price}>$129.00</div>
                      </td>
                      <td>
                        <div
                          className={` ${Styles.ststus} ${Styles.approved} `}
                        >
                          Approved
                        </div>
                      </td>
                      <td>
                        <div className={Styles.date}>02.11.2020</div>
                      </td>

                      <td>
                        <div className={Styles.actionbtn}>
                          <ul className={Styles.actionbtnul}>
                            <li>
                              <a>
                                <DeleteIcon />
                              </a>
                            </li>
                            <li>
                              <a>
                                <ViewIcon />
                              </a>
                            </li>
                            <li>
                              <a>
                                <EditIcon />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className={Styles.checkbox}>
                          <input type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <div className={Styles.image}>
                          <Image
                            src="/image/productimage.jpg"
                            height={60}
                            width={60}
                            alt="Product Image"
                          />
                        </div>
                      </td>
                      <td>
                        <div className={Styles.productrname}>
                          <h6>Modern Armchair for home interiors</h6>
                        </div>
                      </td>
                      <td>
                        <div className={Styles.price}>$129.00</div>
                      </td>
                      <td>
                        <div
                          className={` ${Styles.ststus} ${Styles.approved} `}
                        >
                          Approved
                        </div>
                      </td>
                      <td>
                        <div className={Styles.date}>02.11.2020</div>
                      </td>

                      <td>
                        <div className={Styles.actionbtn}>
                          <ul className={Styles.actionbtnul}>
                            <li>
                              <a>
                                <DeleteIcon />
                              </a>
                            </li>
                            <li>
                              <a>
                                <ViewIcon />
                              </a>
                            </li>
                            <li>
                              <a>
                                <EditIcon />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className={Styles.checkbox}>
                          <input type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <div className={Styles.image}>
                          <Image
                            src="/image/productimage.jpg"
                            height={60}
                            width={60}
                            alt="Product Image"
                          />
                        </div>
                      </td>
                      <td>
                        <div className={Styles.productrname}>
                          <h6>Modern Armchair for home interiors</h6>
                        </div>
                      </td>
                      <td>
                        <div className={Styles.price}>$129.00</div>
                      </td>
                      <td>
                        <div
                          className={` ${Styles.ststus} ${Styles.approved} `}
                        >
                          Approved
                        </div>
                      </td>
                      <td>
                        <div className={Styles.date}>02.11.2020</div>
                      </td>

                      <td>
                        <div className={Styles.actionbtn}>
                          <ul className={Styles.actionbtnul}>
                            <li>
                              <a>
                                <DeleteIcon />
                              </a>
                            </li>
                            <li>
                              <a>
                                <ViewIcon />
                              </a>
                            </li>
                            <li>
                              <a>
                                <EditIcon />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className={Styles.checkbox}>
                          <input type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <div className={Styles.image}>
                          <Image
                            src="/image/productimage.jpg"
                            height={60}
                            width={60}
                            alt="Product Image"
                          />
                        </div>
                      </td>
                      <td>
                        <div className={Styles.productrname}>
                          <h6>Modern Armchair for home interiors</h6>
                        </div>
                      </td>
                      <td>
                        <div className={Styles.price}>$129.00</div>
                      </td>
                      <td>
                        <div
                          className={` ${Styles.ststus} ${Styles.approved} `}
                        >
                          Approved
                        </div>
                      </td>
                      <td>
                        <div className={Styles.date}>02.11.2020</div>
                      </td>

                      <td>
                        <div className={Styles.actionbtn}>
                          <ul className={Styles.actionbtnul}>
                            <li>
                              <a>
                                <DeleteIcon />
                              </a>
                            </li>
                            <li>
                              <a>
                                <ViewIcon />
                              </a>
                            </li>
                            <li>
                              <a>
                                <EditIcon />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className={Styles.checkbox}>
                          <input type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <div className={Styles.image}>
                          <Image
                            src="/image/productimage.jpg"
                            height={60}
                            width={60}
                            alt="Product Image"
                          />
                        </div>
                      </td>
                      <td>
                        <div className={Styles.productrname}>
                          <h6>Modern Armchair for home interiors</h6>
                        </div>
                      </td>
                      <td>
                        <div className={Styles.price}>$129.00</div>
                      </td>
                      <td>
                        <div
                          className={` ${Styles.ststus} ${Styles.approved} `}
                        >
                          Approved
                        </div>
                      </td>
                      <td>
                        <div className={Styles.date}>02.11.2020</div>
                      </td>

                      <td>
                        <div className={Styles.actionbtn}>
                          <ul className={Styles.actionbtnul}>
                            <li>
                              <a>
                                <DeleteIcon />
                              </a>
                            </li>
                            <li>
                              <a>
                                <ViewIcon />
                              </a>
                            </li>
                            <li>
                              <a>
                                <EditIcon />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className={Styles.checkbox}>
                          <input type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <div className={Styles.image}>
                          <Image
                            src="/image/productimage.jpg"
                            height={60}
                            width={60}
                            alt="Product Image"
                          />
                        </div>
                      </td>
                      <td>
                        <div className={Styles.productrname}>
                          <h6>Modern Armchair for home interiors</h6>
                        </div>
                      </td>
                      <td>
                        <div className={Styles.price}>$129.00</div>
                      </td>
                      <td>
                        <div
                          className={` ${Styles.ststus} ${Styles.approved} `}
                        >
                          Approved
                        </div>
                      </td>
                      <td>
                        <div className={Styles.date}>02.11.2020</div>
                      </td>

                      <td>
                        <div className={Styles.actionbtn}>
                          <ul className={Styles.actionbtnul}>
                            <li>
                              <a>
                                <DeleteIcon />
                              </a>
                            </li>
                            <li>
                              <a>
                                <ViewIcon />
                              </a>
                            </li>
                            <li>
                              <a>
                                <EditIcon />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className={Styles.checkbox}>
                          <input type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <div className={Styles.image}>
                          <Image
                            src="/image/productimage.jpg"
                            height={60}
                            width={60}
                            alt="Product Image"
                          />
                        </div>
                      </td>
                      <td>
                        <div className={Styles.productrname}>
                          <h6>Modern Armchair for home interiors</h6>
                        </div>
                      </td>
                      <td>
                        <div className={Styles.price}>$129.00</div>
                      </td>
                      <td>
                        <div
                          className={` ${Styles.ststus} ${Styles.approved} `}
                        >
                          Approved
                        </div>
                      </td>
                      <td>
                        <div className={Styles.date}>02.11.2020</div>
                      </td>

                      <td>
                        <div className={Styles.actionbtn}>
                          <ul className={Styles.actionbtnul}>
                            <li>
                              <a>
                                <DeleteIcon />
                              </a>
                            </li>
                            <li>
                              <a>
                                <ViewIcon />
                              </a>
                            </li>
                            <li>
                              <a>
                                <EditIcon />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className={Styles.checkbox}>
                          <input type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <div className={Styles.image}>
                          <Image
                            src="/image/productimage.jpg"
                            height={60}
                            width={60}
                            alt="Product Image"
                          />
                        </div>
                      </td>
                      <td>
                        <div className={Styles.productrname}>
                          <h6>Modern Armchair for home interiors</h6>
                        </div>
                      </td>
                      <td>
                        <div className={Styles.price}>$129.00</div>
                      </td>
                      <td>
                        <div
                          className={` ${Styles.ststus} ${Styles.approved} `}
                        >
                          Approved
                        </div>
                      </td>
                      <td>
                        <div className={Styles.date}>02.11.2020</div>
                      </td>

                      <td>
                        <div className={Styles.actionbtn}>
                          <ul className={Styles.actionbtnul}>
                            <li>
                              <a>
                                <DeleteIcon />
                              </a>
                            </li>
                            <li>
                              <a>
                                <ViewIcon />
                              </a>
                            </li>
                            <li>
                              <a>
                                <EditIcon />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className={Styles.checkbox}>
                          <input type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <div className={Styles.image}>
                          <Image
                            src="/image/productimage.jpg"
                            height={60}
                            width={60}
                            alt="Product Image"
                          />
                        </div>
                      </td>
                      <td>
                        <div className={Styles.productrname}>
                          <h6>Modern Armchair for home interiors</h6>
                        </div>
                      </td>
                      <td>
                        <div className={Styles.price}>$129.00</div>
                      </td>
                      <td>
                        <div
                          className={` ${Styles.ststus} ${Styles.approved} `}
                        >
                          Approved
                        </div>
                      </td>
                      <td>
                        <div className={Styles.date}>02.11.2020</div>
                      </td>

                      <td>
                        <div className={Styles.actionbtn}>
                          <ul className={Styles.actionbtnul}>
                            <li>
                              <a>
                                <DeleteIcon />
                              </a>
                            </li>
                            <li>
                              <a>
                                <ViewIcon />
                              </a>
                            </li>
                            <li>
                              <a>
                                <EditIcon />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className={Styles.checkbox}>
                          <input type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <div className={Styles.image}>
                          <Image
                            src="/image/productimage.jpg"
                            height={60}
                            width={60}
                            alt="Product Image"
                          />
                        </div>
                      </td>
                      <td>
                        <div className={Styles.productrname}>
                          <h6>Modern Armchair for home interiors</h6>
                        </div>
                      </td>
                      <td>
                        <div className={Styles.price}>$129.00</div>
                      </td>
                      <td>
                        <div
                          className={` ${Styles.ststus} ${Styles.approved} `}
                        >
                          Approved
                        </div>
                      </td>
                      <td>
                        <div className={Styles.date}>02.11.2020</div>
                      </td>

                      <td>
                        <div className={Styles.actionbtn}>
                          <ul className={Styles.actionbtnul}>
                            <li>
                              <a>
                                <DeleteIcon />
                              </a>
                            </li>
                            <li>
                              <a>
                                <ViewIcon />
                              </a>
                            </li>
                            <li>
                              <a>
                                <EditIcon />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
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

export default Allproduct;
