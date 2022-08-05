import React from "react";
import styles from "styles/headboard.module.scss";
import Image from "next/image";
import NextSEO from "layout/nextseo";
import Header from "layout/header";
import axios from "axios";
import { useRouter } from "next/router";


const Divanbed = (props:any) => {
  const router = useRouter();

  return (
    <>
      <div>
        <NextSEO title={"DBZBEDS"} />

        <section className={styles.mydiv}>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <div className={styles.box2}>
                  <h1>Save upto 60% with Divan Beds</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui minima praesentium assumenda culpa, unde neque eius nulla. Neque, magni fuga. Quam quia consequatur ab nemo ut repellendus eius ratione at!</p>
                  <button>
                    shop now
                  </button>
                </div>
              </div>
              <div className="col-6">
                <img src="/image/image.webp" alt="image" />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.mydiv1}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1>
                  <strong>Quick Delivery -</strong> Shop our beds available within 2 weeks
                </h1>
              </div>
            </div>
          </div>
        </section>


        <section className={styles.mydiv2}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1>Shop By Size</h1>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.bedicon}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-2">
                <div className={styles.bedbox}>
                  <img src="/image/image-single-bed.svg" alt="img" />
                  <p className={styles.parap}>3'0 Single</p>
                </div>
              </div>
              <div className="col-2">
                <div className={styles.bedbox}>
                  <img src="/image/2.svg" alt="img" />
                  <p className={styles.parap}>4'0 Small Double </p>
                </div>
              </div>
              <div className="col-2">
                <div className={styles.bedbox}>
                  <img src="/image/3.svg" alt="img" />
                  <p className={styles.parap}>4'6 Double</p>
                </div>
              </div>
              <div className="col-2">
                <div className={styles.bedbox}>
                  <img src="/image/4.svg" alt="img" />
                  <p className={styles.parap}>5'0 King</p>
                </div>
              </div>
              <div className="col-2">
                <div className={styles.bedbox}>
                  <img src="/image/5.svg" alt="img" />
                  <p className={styles.parap}>6'0 Super King</p>
                </div>
              </div>
            </div>
          </div>
        </section>



        <section className={styles.mydiv4}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2>DBZBEDS.CO.UK</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti voluptatum illum rerum autem voluptate, soluta, inventore unde nulla numquam minima consequuntur explicabo incidunt facilis asperiores error quis necessitatibus repudiandae possimus temporibus ratione! Aperiam mollitia architecto sed. Consectetur numquam cupiditate praesentium, velit repudiandae accusantium totam corrupti, obcaecati nihil corporis doloremque recusandae.</p>
              </div>
            </div>
          </div>
        </section>


        <section className={styles.mydiv5}>
          <div className={` ${styles.krishnabox} container`}>
            <div className="row">
              <div className="col-6">
                <div className={styles.bedimage}>
                  <img src="/image/6.webp" alt="img" />
                </div>
              </div>
              <div className={` ${styles.krishnabox2} col-6`}>
                <h1>UK's Latest</h1>
                <p>Range of Divan Beds in Affordable Prices</p>
                <img src="/image/7.webp" alt="img" />
                <p>June 23rd -  July 6th</p>
                <button type="submit">SHOP NOW</button>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.mydiv6heading}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1>Shop By Color</h1>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.bedicon2}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-2">
                <div className={styles.bedbox}>
                  <img src="/image/8.svg" alt="img" />
                  <p className={styles.parap}>Grey Linen</p>
                </div>
              </div>
              <div className="col-2">
                <div className={styles.bedbox}>
                  <img src="/image/9.svg" alt="img" />
                  <p className={styles.parap}>Grey suede </p>
                </div>
              </div>
              <div className="col-2">
                <div className={styles.bedbox}>
                  <img src="/image/10.svg" alt="img" />
                  <p className={styles.parap}>Charcoal Chennile</p>
                </div>
              </div>
              <div className="col-2">
                <div className={styles.bedbox}>
                  <img src="/image/11.svg" alt="img" />
                  <p className={styles.parap}>Black Crushed Velvet</p>
                </div>
              </div>
              <div className="col-2">
                <div className={styles.bedbox}>
                  <img src="/image/12.svg" alt="img" />
                  <p className={styles.parap}>Pink</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className={styles.mydiv7}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-6">
                <h1>sleepmotion</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex rem qui nobis consequuntur tenetur error</p>
                <button>Shop now</button>
              </div>
              <div className="col-6">
                <img src="/image/13.webp" alt="img" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>



        <section className={styles.mydiv8}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2>our exclusive</h2>
                <h1>complete divan bed set range</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, quisquam, eos asperiores molestiae distinctio quod atque saepe odit culpa quidem id velit voluptates rem autem</p>
              </div>
            </div>
          </div>
        </section>


        <section className={styles.mydiv9}>
          <div className={` ${styles.innerbox} container`}>
            <div className="row">
              <div className="col-3">
                <select name="category" id="category">
                  <option value="Select">Beds</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="col-3">
                <select name="category" id="category">
                  <option value="Select">Color</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="col-3">
                <select name="category" id="category">
                  <option value="Select">Price</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="col-3">
              </div>
            </div>
          </div>
        </section>
      </div>


      <section className={styles.productsimages}>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className={styles.box1}>
                <img src="https://aspirestore.co.uk/49144-home_default/presley-fabric-ottoman-bed.jpg" alt="img" width={258} height="210" />
                <h2 className={styles.productname}>Presley Fabric Ottoman Bed</h2>
                <div className={styles.trustpilot}>
                  <img src="/image/trustpilot (1).png" alt="img" />
                </div>
                <p className={styles.price}>£600.00</p>
              </div>
            </div>
            <div className="col-3">
              <div className={styles.box1}>
                <img src="https://aspirestore.co.uk/49144-home_default/presley-fabric-ottoman-bed.jpg" alt="img" width={258} height="210" />
                <h2 className={styles.productname}>Presley Fabric Ottoman Bed</h2>
                <div className={styles.trustpilot}>
                  <img src="/image/trustpilot (1).png" alt="img" />
                </div>
                <p className={styles.price}>£600.00</p>
              </div>
            </div>
            <div className="col-3">
              <div className={styles.box1}>
                <img src="https://aspirestore.co.uk/49144-home_default/presley-fabric-ottoman-bed.jpg" alt="img" width={258} height="210" />
                <h2 className={styles.productname}>Presley Fabric Ottoman Bed</h2>
                <div className={styles.trustpilot}>
                  <img src="/image/trustpilot (1).png" alt="img" />
                </div>
                <p className={styles.price}>£600.00</p>
              </div>
            </div>
            <div className="col-3">
              <div className={styles.box1}>
                <img src="https://aspirestore.co.uk/49144-home_default/presley-fabric-ottoman-bed.jpg" alt="img" width={258} height="210" />
                <h2 className={styles.productname}>Presley Fabric Ottoman Bed</h2>
                <div className={styles.trustpilot}>
                  <img src="/image/trustpilot (1).png" alt="img" />
                </div>
                <p className={styles.price}>£600.00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.mydiv10}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>discover the benefits of shopping online at beddivans</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, voluptates tempore hic dolore vero libero, quisquam, harum eveniet quae nisi cupiditate. Quis odit est laudantium accusamus voluptatibus enim nam officia!
              </p>
              <button>
                more services
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* ------------------------------------------------second section---------------------------------------------------------------- */}
      <section className={styles.imgcontainer}>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className={styles.bigbed1}>
                <img src="/image/bed1.png" alt="img" /></div>
              <div className={styles.heading1}>
                <h1>There's No Place Like A Bed</h1>
                <p>Lord bless the person who invented beds! Choose from a wide variety to suit your needs and preferences.</p>
              </div>
            </div>
            <div className= "col-6">
            <div className="row">
                <div className="col-6">
                  <img src="/image/grey-linen-(1).png" alt="img" />
                  <h2>Kings size beds</h2>
                </div>
                <div className="col-6">
                  <img src="/image/bedimage3.png" alt="img" />
                  <h2>Single Beds</h2>
                </div>
                <div className="col-6">
                  <img src="/image/bedimage4.png" alt="img" />
                  <h2>Queen size beds</h2>
                </div>
                <div className="col-6">
                  <img src="/image/bedimage5.png" alt="img" />
                  <h2>Storage beds</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className={styles.imgcontainer2}>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="row">
                <div className="col-6 ">
                  <img src="/image/ORTHOPEDIC.png" alt="img" />
                  <h2>Orthopedic mattress</h2>
                </div>
                <div className="col-6">
                  <img src="/image/mattress2.png" alt="img" />
                  <h2>Tinsel top matrress</h2>
                </div>
                <div className="col-6">
                  <img src="/image/mattress3.png" alt="img" />
                  <h2>Memory foam mattress</h2>
                </div>
                <div className="col-6">
                  <img src="/image/PILLOW TOP.png" alt="img" />
                  <h2>Pillow top mattress</h2>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className={styles.bigbed2}>
                <img src="/image/bed2.png" alt="img" /></div>
              <div className={styles.heading2}>
                <h1>Secret To Good Sleep</h1>
                <p>Your mattress plays a major role iin one's sleep cycle. The right mattress will ensure you get a good night's sleep every night</p>
              </div>
            </div>
          </div>
<<<<<<< HEAD
=======
      </div>
</section>


<section className={styles.mydiv9}>
       <div className={` ${styles.innerbox} container`}>
          <div className="row">
             <div className="col-3">
             <select name="category" id="category">
           <option value="Select">Beds</option>
          <option value="1">1</option>
             <option value="2">2</option>
            <option value="3">3</option>
  </select>
             </div>
             <div className="col-3">
             <select name="category" id="category">
           <option value="Select">Color</option>
          <option value="1">1</option>
             <option value="2">2</option>
            <option value="3">3</option>
  </select>
             </div>
             <div className="col-3">
             <select name="category" id="category">
           <option value="Select">Price</option>
          <option value="1">1</option>
             <option value="2">2</option>
            <option value="3">3</option>
  </select>
             </div>
             <div className="col-3">
             </div>
          </div>
       </div>
</section>
 </div>


 <section className={styles.productsimages}>
    <div className="container">
        <div className="row">
         {
           props.response.map((item: { images: { url: string | undefined; }[]; product_name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; price: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) =>{
              
              return(
                <div className="col-3">
                <div className={styles.box1}>
                <img src={item.images[0].url}/>
                      <h2 className={styles.productname}>{item.product_name}</h2>
                      <div className={styles.trustpilot}>
                        <img src="/image/trustpilot (1).png" alt="img" />
                      </div>
                      <p className={styles.price}>{item.price} </p>
                  </div>
                </div>
              
              );
          })
      }
  
            <div className="col-3">
            <div className={styles.box1}>
            <img src="https://aspirestore.co.uk/49144-home_default/presley-fabric-ottoman-bed.jpg" alt="img" width={258} height="210"  />
                  <h2 className={styles.productname}>Presley Fabric Ottoman Bed</h2>
                  <div className={styles.trustpilot}>
                    <img src="/image/trustpilot (1).png" alt="img" />
                  </div>
                  <p className={styles.price}>£600.00</p>
              </div>
            </div>
            <div className="col-3">
            <div className={styles.box1}>
            <img src="https://aspirestore.co.uk/49144-home_default/presley-fabric-ottoman-bed.jpg" alt="img" width={258} height="210"  />
                  <h2 className={styles.productname}>Presley Fabric Ottoman Bed</h2>
                  <div className={styles.trustpilot}>
                    <img src="/image/trustpilot (1).png" alt="img" />
                  </div>
                  <p className={styles.price}>£600.00</p>
              </div>
            </div>
            <div className="col-3">
            <div className={styles.box1}>
            <img src="https://aspirestore.co.uk/49144-home_default/presley-fabric-ottoman-bed.jpg" alt="img" width={258} height="210"  />
                  <h2 className={styles.productname}>Presley Fabric Ottoman Bed</h2>
                  <div className={styles.trustpilot}>
                    <img src="/image/trustpilot (1).png" alt="img" />
                  </div>
                  <p className={styles.price}>£600.00</p>
              </div>
            </div>
>>>>>>> 8469badbf5085a2d7085b80aee4c7f3a511e40c3
        </div>
      </section>

      {/* ---------------product images------------ */}

      <section className={styles.productsimages}>
        <div className="container">
          <div className={styles.mainh2}>
        <h2>Best-seller of the season</h2>
        </div>
                  <div className="row">
            <div className="col-3">
              <div className={styles.box1}>
                <img src="https://aspirestore.co.uk/49144-home_default/presley-fabric-ottoman-bed.jpg" alt="img" width={258} height="210" />
                <h2 className={styles.productname}>Presley Fabric Ottoman Bed</h2>
                <div className={styles.trustpilot}>
                  <img src="/image/trustpilot (1).png" alt="img" />
                </div>
                <p className={styles.price}>£600.00<del>£800.00</del><span>10%off</span></p>
              </div>
            </div>
            <div className="col-3">
              <div className={styles.box1}>
                <img src="https://aspirestore.co.uk/49144-home_default/presley-fabric-ottoman-bed.jpg" alt="img" width={258} height="210" />
                <h2 className={styles.productname}>Presley Fabric Ottoman Bed</h2>
                <div className={styles.trustpilot}>
                  <img src="/image/trustpilot (1).png" alt="img" />
                </div>
                <p className={styles.price}>£600.00<del>£800.00</del><span>10%off</span></p>
              </div>
            </div>
            <div className="col-3">
              <div className={styles.box1}>
                <img src="https://aspirestore.co.uk/49144-home_default/presley-fabric-ottoman-bed.jpg" alt="img" width={258} height="210" />
                <h2 className={styles.productname}>Presley Fabric Ottoman Bed</h2>
                <div className={styles.trustpilot}>
                  <img src="/image/trustpilot (1).png" alt="img" />
                </div>
                <p className={styles.price}>£600.00<del>£800.00</del><span>10%off</span></p>
              </div>
            </div>
            <div className="col-3">
              <div className={styles.box1}>
                <img src="https://aspirestore.co.uk/49144-home_default/presley-fabric-ottoman-bed.jpg" alt="img" width={258} height="210" />
                <h2 className={styles.productname}>Presley Fabric Ottoman Bed</h2>
                <div className={styles.trustpilot}>
                  <img src="/image/trustpilot (1).png" alt="img" />
                </div>
                <p className={styles.price}>£600.00<del>£800.00</del><span>10%off</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------review section-------------------*/}

      <section className={styles.reviews}>
        <div className="container">
          <div className="row">
            <h2>Their words, our pride</h2>
            <p>DBZ words of our happy customers</p>
          </div>
          <div className="row"></div>
        </div>
      </section>


      {/* ------------text css------------------------- */}

      <section className={styles.text}>
        <div className="container">
          <div className="row">
            <h2>Buy Bed Online At Best Price in India </h2>
            <p>Your home is a personal sanctuary, and your bed is your ultimate relaxation place to lie down and rest after a hard days toil.
               It is one of the most essential and inevitable requirements of any human being because the quality of sleep that you get depends largely on how comfortable and cosy your bed is.</p><p> But, you do not spend on a bed now and then. It is an investment that gives you returns for a long period in the form of relaxation and rejuvenation of your body every time you retire on it for a relaxed nights sleep. It forms an integral part of your everyday living.
                Hence, you need to be extremely cautious and vigilant before buying a bed for yourself.</p><p> Various underlying factors govern your choice of bed in every aspect, be it the material, size or even the quality of a simple bed design that you invest in. With a plethora of options available on multiple online sites these days, choosing the right bed as per your requirement and specification may seem a difficult task. Here is a quick guide to answer all your queries about buying a designer bed for a restful and comfortable sleep.
                </p>
               <h2>Things to Consider Before Buying a Bed</h2>
               <p>You want your bed to be just perfect, something that gives you optimum satisfaction and takes complete care of your relaxed mornings by imparting good sleep quality to you every night. It involves a good amount of investment too. Hence, you need to be precautious about various things before finalising a bed design for your room.</p>
              <h2>The Purpose</h2>
              <p>What bed you choose depends largely on what purpose you want to put it to. For example, a single bed design would solve your purpose if you live alone.
                 Again, if you have two kids or twins, then a bunker bed or a folding bed would also care for the need and save a lot of space in the kids bedroom.</p>  
              <h2>Space Availability</h2>
              <p>If you have a small house or smaller rooms and like to be organised, you should choose beds with storage spaces. Box-bed designs, pull-out drawers installed within double beds, or even single beds, and hydraulic bed units can save a lot of space and provide extra storage facilities for you to store your essentials and keep your room neat and organised at all times.</p>    
              <h2>Size of Bedframe</h2>
              <p>Your bed frame design should not be too large or too small as per the space availability in your master bedroom. Also, it should coincide with your sleep comforts. If you want a wider space, then a king-size bed is what you need. But if you love to sleep in a composed posture, then a queen size bed is sufficient.</p>
              <h2>Quality of Material</h2>
              <p>You want a bed that has a longer lifespan. This would depend upon the quality of the material that you choose. For example, a wooden bed design promises better longevity, good durability and sturdiness to stay.</p>
              <h2>Pay Attention to Style</h2>
              <p>Your bed design should synchronise with the existing decor theme of your room. Also, your bed reflects your personality and personal choice; hence it should be an aesthetically appealing and comfortable bed at the same time.</p>
              <h2>Budget</h2>
              <p>A lot depends upon how much you want to spend on a bed.
                  Your purchasing decision would be highly affected by the budget that you set aside for it.</p>  
              <h2>Types of Beds and Their Utility</h2>
              <p>Depending on usage, there are different varieties of beds that you can select from.</p>
              <div className={styles.nospace}>
              <h2>Single Beds</h2>
              <p>These are perfect for bachelors and students.</p><p> A single bed comes with storage spaces as well.</p><p> Also known as twin beds, they are 75 long and 39 wide.</p>
              <h2>Double Beds</h2>
              <p>Also known as full-sized beds, their size is 85 X 54.</p><p>The double bed design is most convenient for college students, hotels, and loft beds.</p><p> They can be made with storage space to keep extra bedding or other essentials.</p>
              <h2>Queen Size Bed</h2>
              <p>The ideal size of these beds is 80x60.</p><p> These beds are used by couples, teens, and young adults.</p><p> The size is perfect for a guest room, hotel room and bachelors room.</p>
              <h2>King Size Bed</h2>
              <p>A king-size bed comes with dimensions of 80 X 76.</p><p>It is a perfect size for married couples with a small kid.</p><p>King bed size can have huge storage spaces to stalk things neatly and properly.</p><p> Explore Varieties in Bed Designs and Styles</p>
              <h2>Poster Beds</h2>
              <p>These beds have four columns that add charisma and beauty to your master bedroom design. It makes you sleep in royalty, like a king.
                   They are mostly made of wood which adds durability and longevity to them. They come with storage spaces too.</p>
              </div>
              <h2>Foldable or Trundle Beds</h2>
              <p>These beds can be folded and put to other functionalities during the daytime. It can be pulled out like a secret chamber at night and add an appealing look to the overall space.</p>
              <h2>Bunk Beds</h2>
              <p>Space constraints can be dealt with in the best manner by using bunk beds to accommodate two adults in a single bed space room. Two single beds are placed, one on top of the other where two children or two adults can sleep comfortably.</p>
              <h2>Upholstered Beds</h2>
              <p>These beds come with a luxurious fabric covering over their wooden parts and provide added comfort when resting or watching TV or simply taking a backrest to relax your body without dozing off to sleep. They add an extra element of appeal and aesthetics to the overall interiors of the room.</p>
              <h2>Different Materials Used for Making Designer Beds Wood</h2>
              <p>A wide range of wooden bed designs makes beds of all sizes and varieties. This includes particleboard, Sheesham wood beds, teak, acacia, mango, rubber, solid, and engineered wood. Wooden beds can be designed most traditionally or framed in a contemporary design, too, as per the specification and liking of the user.</p>
              <h2>Fabric</h2>
              <p>Leather and fabric are used to create upholstered beds, a true combination of comfort and style. These beds are best for a more contemporary and modern look.</p>
              <h2>Where to Shop for Designer Beds?</h2>
              <p>If you are planning to buy a bed for yourself, you can easily get the best deals, designs and varieties on Pepperfry right from the comforts of your home. Pepperfry is a one-stop destination with the widest and latest collection of various beds, in every material, design, and style, for you to choose from. From wooden to metal and upholstered beds, single, double, and bunk beds, storage, foldable to trundle beds,
                  Pepperfry has everything you can think of when it comes to the different categories and styles of designer beds.</p>
              <h2>What makes dbz a preferred choice for furniture lovers all across the country is that:</h2>
              <p>It has the widest and latest collection that boasts of traditional, contemporary and modern furniture, all under one roof. It offers the most competitive and affordable prices but does not compromise on its quality and commitment. With a single click on your smart devices, you can select the best available choice of beds without having to hop around from one shop to another physically.</p>
              <h2>Special discounts and offers make shopping a tempting deal for every buyer.</h2>
              <p>Cash on delivery, easy return options, and warranty on its products make Pepperfry the star of the show amongst furniture portals in India. There are special offers during festivities, and sales on different furniture range from time to time, proving extremely valuable and worth the spend. Pepperfry offers free delivery to most of the pin codes in India and multiple payment options, along with no-cost EMI too. Apart from furniture, you can even shop for other related accessories like mattresses, pillows, bedsheets, lights, decor items, etc., all under one umbrella, on Pepperfry. This eases the pains of hunting for related items on multiple websites and portals.
                    With such a sea of advantages, Pepperfry is undoubtedly the best bet when you have to buy a bed, or any other piece of furniture, for your dream house. Also, with the spread of the pandemic, the safety and convenience of online shopping for all your necessities is like a saviour, and Pepperfry is an add on to the list.</p> 
              <h2>Frequently Asked Questions (FAQs)</h2>
              <div className={styles.nospace2}>
              <h3>What Is A Queen Size Bed?</h3>
               <p>A bed that is smaller than a king-size but larger than a double bed is a queen-size bed. Queen size beds are ideal for comfortable sleeping of two people.</p>
              <h3>Which Wood Is Best For Bed?</h3>
              <p>Any hardwood such as birch, cherry, ebony, mahogany, maple, teak, oak, and rosewood is best for making beds.</p>
              <h3>What Is The Normal Size Of A Double Bed?</h3>
              <p>The normal size of a double bed is around 54 x 74 inches (137 x 187 cm).</p>
              <h3>What Is The Difference Between A Double Bed And A Queen Size Bed?</h3>
              <p>A queen-size bed is 6 inches wider than a double bed and is ideal for a family of two. A double bed is spacious enough for a single person; however, it can be a little shorter and more uncomfortable for two people.</p>
              <h3>Which is the best material for a bed?</h3>
              <p>Beds made of hardwood like maple, ebony, cherry, mahogany, oak and rosewood are good for making beds</p> 
              </div>         
          </div>
        </div>
      </section>
    </>
  );
};
export default Divanbed;


export async function getServerSideProps(context:any) {
  const { req } = context;
  const size = req?.__NEXT_INIT_QUERY?.size;
  let sizes = "";

    
  size ? (sizes = size) : (sizes = "2FT 6");
  const data = await axios.post(
    `${process.env.BASE_URL}/api/headboard/getbeds`,
  );
    const response = data.data.data;
    return {
      props: { response }, // will be passed to the page component as props
    };
  }
