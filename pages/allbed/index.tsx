import React from "react";
import style from "../../styles/allbed/allbed.module.scss";

const NewProductPage = () => {
  return (
    <div>
      <section className={style.mydiv}>
        <div>
          <h1>Save upto 48% with All Beds</h1>
          <p>
            We’re one of the UK’s leading manufacturers of cheap divan beds,
            offering a rich selection of products in a variety of style.
          </p>
          <button type="submit">SHOP NOW</button>
        </div>
      </section>
      <section className={style.del}>
        <h3>
          <strong>Quick Delivery -</strong>
          Shop our beds available within 2 weeks
        </h3>
      </section>
      <section className={style.mydiv1}>
        <h2>Shop By Size</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <img src="assets\images\small.svg" alt="Small" />
              <p>Single </p>
            </div>

            <div className="col-md-2">
              <img src="assets\images\smalldouble.svg" alt="Smalldouble" />
              <p>Small Double </p>
            </div>

            <div className="col-md-2">
              <img src="assets\images\double.svg" alt="Double" />
              <p>Double</p>
            </div>

            <div className="col-md-2">
              <img src="assets\images\king.svg" alt="King" />
              <p>King</p>
            </div>

            <div className="col-md-2">
              <img src="assets\images\superking.svg" alt="Superking" />
              <p>Super King</p>
            </div>

            <div className={style.mydiv3}>
              <h3>BedsDivans.co.uk</h3>
              <div>
                <p>
                  We’re one of the UK’s leading manufacturers of
                  <strong className={style.col}>cheap divan beds</strong>,
                  offering a rich selection of products in a variety of style.
                  At BedsDivans, we are committed to improving comfort and sleep
                  quality without compromising style. We believe shopping for a
                  bed, mattress, or set of{" "}
                  <strong className={style.col}>rattan furniture</strong> for
                  your garden should be an enjoyable experience all the way
                  through.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={style.sleighbed}>
        <div className="container">
          <div className="row">
            <div className={style.picture}>
              <div className="col-6 text-center">
                <div className={style.box1}>
                  <h1>Sleigh Bed Exclusive Offers</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam
                  </p>
                  <button className={style.buttonnow} type="submit">
                    SHOP NOW
                  </button>
                </div>
              </div>

              <div className="col-6 text-center">
                <div className={style.allbedbed}>
                  <img src="/assets/images/allbedbed.webp" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className={style.mydiv6heading}>
     <div className="container">
          <div className="row">
             <div className="col-12">
                 <h1>Shop By Color</h1>
             </div>
          </div>
     </div>
</section>

<section className={style.bedicon}>
   <div className="container">
       <div className="row justify-content-center">
            <div className="col-2">
              <div className={style.bedbox}>
              <img src="/image/8.svg" alt="img" />
              <p className={style.parap}>Grey Linen</p>
              </div>
            </div>
            <div className="col-2">
            <div className={style.bedbox}>
              <img src="/image/9.svg" alt="img" />
              <p className={style.parap}>Grey suede </p>
              </div>
            </div>
            <div className="col-2">
            <div className={style.bedbox}>
              <img src="/image/10.svg" alt="img" />
              <p className={style.parap}>Charcoal Chennile</p>
              </div>
            </div>
            <div className="col-2">
            <div className={style.bedbox}>
              <img src="/image/11.svg" alt="img" />
              <p className={style.parap}>Black Crushed Velvet</p>
              </div>
            </div>
            <div className="col-2">
            <div className={style.bedbox}>
              <img src="/image/12.svg" alt="img" />
              <p className={style.parap}>Pink</p>
              </div>
            </div>
       </div>
   </div>
 </section>

      {/* <section className={style.shopcolor}>
        <h2>Shop By Color</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <img src="assets\images\IrishBlue.svg" alt="IrishBlue" />
              <p>Irish Blue </p>
            </div>

            <div className="col-md-2">
              <img src="assets\images\Brown.svg" alt="Brown" />
              <p>Brown </p>
            </div>

            <div className="col-md-2">
              <img src="assets\images\Grey.svg" alt="Grey" />
              <p>Grey </p>
            </div>

            <div className="col-md-2">
              <img src="assets\images\Blue.svg" alt="Blue" />
              <p>Blue</p>
            </div>

            <div className="col-md-2">
              <img src="assets\images\Pink.svg" alt="Pink" />
              <p>Pink</p>
            </div>
          </div>
        </div>
      </section> */}




      <section className={style.sofabed}>
        <div className="container">
          <div className="row">
              <div className="col-6">
                <div className={style.box2}>
                  <h1>SWAN Sleigh Bed</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  </p>
                  <button className={style.sofabutton} type="submit">
                    SHOP NOW
                  </button>
                </div>
              </div>

              <div className="col-6">
                <div className={style.allbedbedbed}>
                  <img src="/assets/images/redbed.webp" alt="img" />
                </div>
              </div>
            </div>
        </div>
      </section>
    </div>
  );
};
export default NewProductPage;
