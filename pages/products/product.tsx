import React from "react";
import styles from "styles/product.module.scss";
import Image from "next/image";
import NextSEO from "layout/nextseo";
import Header from "layout/header";

const Divanbed = () => {
  return (
  <>

<section className={styles.div1}>
    <div className="container">
        <div className="row">
            <div className="col-6">
                <div className={styles.main}>
                <div className={styles.smallimg}>
              <ul>
                <li>
                    <img src="/image/bed1(small).jpg" alt="img"/>
                </li>
                <li>
                    <img src="/image/bed2(small).jpg" alt="img"/>
                </li>
              </ul>
              </div>
              <div className={styles.bigimg}>
                  <img src="/image/bed(big).jpg" alt="img"/>
              </div>
            </div>
            <div className={styles.dimension}>
                <ul>
                    <li>
                        <button>Bed Dimensions</button>
                        <div className="drop1">
                        <label for="size">Bed Size:</label>
                            <select name="bed" id="size">
                              <option value="1">Single 3ft</option>
                              <option value="2">Small Double 4ft</option>
                              <option value="3">Double 4ft6</option>
                              <option value="4">King size 5ft</option>
                              <option value="5">Super King 6ft</option>
                            </select>
                        </div>
                    </li>
                    <li>
                        <button>Storage Dimensions</button>
                    </li>
                </ul>
            </div>
            </div>
            <div className="col-6">
                  <div className={styles.bodycontent}>
                      <h1>Sinatra Fabric Ottoman Bed 3ft Single Eire Linen - Grey</h1>
                      <ul>
                        <li> <img src="/image/star.png" alt="img" /></li>
                        <li>4.8(15)</li>
                      </ul>
                      <p>Sinatra Fabric Ottoman Bed with a stylishly designed, upholstered headboard.</p>
                      <p>Aspire's Sinatra storage bed features ample storage space. The Ottoman bed frame is available in various fabrics, colours and standard bed sizes.</p>
                      <h2>£600.00</h2>
                      <ul className={styles.klarnaimage}>
                        <li> <img src="/image/klarna.png" alt="img" /></li>
                        <li>Make 3 payments of £200.00. No fees. Learn more</li>
                      </ul>
                      <h3>Bed Size</h3>
                      <div className={styles.bedsizeaccordion}>
                           <ul>
                            <li>3ft single</li>
                            <li><img src="/image/plusicon.png" alt="img" /></li>
                           </ul>
                      </div>
                      <h3>Colour</h3>
                      <div className={styles.bedsizeaccordion}>
                           <ul>
                            <li>Eire Linen - Grey</li>
                            <li><img src="/image/plusicon.png" alt="img" /></li>
                           </ul>
                      </div>
                      <div className={styles.quamtitydiv}>
                         <ul>
                            <li>Qty</li>
                            <li className={styles.box1}>1</li>
                            <li className={styles.box2}><button>
                                Add to Basket</button></li>
                         </ul>
                      </div>
                      <div className={styles.arrowdiv}>
                        <ul>
                            <li>
                                <img src="/image/arrow.svg" alt="img" />
                                <p>Hassle Free Returns</p>
                            </li>
                            <li>
                                <img src="/image/lock.svg" alt="img" />
                                <p>100% Secure</p>
                            </li>
                            <li>
                                <img src="/image/cross.svg" alt="img" />
                                <p>0% Finance</p>
                            </li>
                        </ul>
                      </div>
                  </div>
            </div>
        </div>
    </div>
</section>
  
  </>
  );    
};
export default Divanbed;