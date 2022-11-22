import NextSEO from "layout/nextseo";
import styles from "styles/home.module.scss";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NextPageWithLayout } from "typings/layout";
import PerPageLayout from "layout/perpage";
import BottomTextContent from "components/home/text";
import FeatureSlider from "components/home/slider";
import Title from "components/title";
import TitleWIthBackground from "components/title/grey";
import ProductsGrid from "components/home/grid";
import QuickInfo from "components/home/info";
import HeroImageContainer from "components/home/hero";
import CategoryContainer from "components/home/category";
import { dehydrate, QueryClient } from "react-query";
import { useFetchAllBedsWithImage } from "network-requests/queries";
import GridWrapper from "components/grid-card";
import ProductCard from "components/grid-card/card";
import { BedWithImage } from "network-requests/types";
import { useRouter } from "next/router";
import RightIcon from "icons/rightarrow";

const Home: NextPageWithLayout = () => {
  const { data } = useFetchAllBedsWithImage();

  const router = useRouter();
  return (
    <React.Fragment>
      <NextSEO title={"DBZBeds | Home"} />
      <HeroImageContainer />
      <QuickInfo />
      <hr className={styles.banner_icons} />
      <section className={styles.section2}>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className={styles.section2image}>
                <img src="/image/hdbed.webp" alt="image" />
                <h3>Divan Beds</h3>
                <button>shop now</button>
              </div>
            </div>
            <div className="col-6">
              <div className={styles.section2image}>
                <img src="/image/mattress.webp" alt="image" />
                <h3>mattresses</h3>
                <button>shop now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section3}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={styles.section3content}>
                <h3>Best Selling Beds</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.bestsellingproduct}>
          <GridWrapper grid="4" gap="2rem">
            {data?.pages?.["0"]?.data?.slice(0,4).map((item: BedWithImage, index) => {
              return (
                <ProductCard
                  name={item?.name}
                  price={item?.price}
                  image={item?.image}
                  key={index}
                  coversControls
                  onClick={() =>
                    router.push({
                      pathname: `/products/${item._id}`,
                      query: {
                        size: item?.variants && item?.variants[0]?.size,
                      },
                    })
                  }
                />
              );
            })}
          </GridWrapper>
          <button>shop divan beds</button>
      </div>
      {/* <CategoryContainer /> */}
     <section className={styles.complementsection}>
            <div className="container">
               <div className="row">
                   <div className="col-8">
                    <div className={styles.complementcontent}>
                       <h3>Complement any interior with our stylish headboards</h3>
                    </div>
                   </div>
                   <div className="col-4">
                    <div className={styles.complementcontent1}>
                        <img src="/image/vector.webp" alt="img" />
                        <button>shop headboards</button>
                    </div>
                   </div>
               </div>
            </div>
     </section> 

    <section className={styles.dreambedsection}>
       <div className="container">
          <div className="row">
             <div className="col-5"> 
             <div className={styles.dreambedimage}>
                <img src="/image/shutter.webp" alt="image" />
             </div>
             </div>
             <div className="col-7"> 
             <div className={styles.dreambedcontent}>
                <h3>Find the bed of your dreams</h3>
                <p>You don’t have to spend a fortune to sleep on a super comfortable bed. Gone are the days when luxury and comfort meant emptying the bank account. Now, thanks to innovation and advances in technology, there are hundreds of cheap beds to choose from that both look and feel great. </p>
                <p>We are one of the UK’s largest manufacturers of cheap beds for sale online and suppliers of top brands. With an enormous selection of affordable beds, bed frames, headboards, and mattresses — to suit just about every style, purpose and taste you can think of. Including:</p>
                 <div className={styles.dreambedcontent1}>
                 <ul>
                  <li>
                    <p><RightIcon size={40} color='#222178'/>The UK’s largest selection of cheap divan beds</p>
                  </li>
                  <li>
                    <p><RightIcon size={40} color='#222178'/>Cheap small double and double beds with mattresses</p>
                  </li>
                  <li>
                    <p><RightIcon size={40} color='#222178'/>Cheap king size and super king size beds</p>
                  </li>
                </ul>
                 </div>
             </div>
             </div>
          </div> 
       </div>
    </section>
      <section className={styles.mattresssection}>
          <div className="container">
              <div className="row"> 
                  <div className="col-12">
                     <h3>Best Selling Mattresses</h3>
                  </div>
              </div>
          </div>
      </section>
      <div className={styles.bestsellingproduct}>
          <GridWrapper grid="4" gap="2rem">
            {data?.pages?.["0"]?.data?.slice(0,4).map((item: BedWithImage, index) => {
              return (
                <ProductCard
                  name={item?.name}
                  price={item?.price}
                  image={item?.image}
                  key={index}
                  coversControls
                  onClick={() =>
                    router.push({
                      pathname: `/products/${item._id}`,
                      query: {
                        size: item?.variants && item?.variants[0]?.size,
                      },
                    })
                  }
                />
              );
            })}
          </GridWrapper>
          <button>shop divan beds</button>
      </div>
      <section className={styles.onemattresssection}>
          <div className="container">
             <div className="row">
                <div className="col-6"> 
                <div className={styles.onemattressscontent}> 
                     <img src="/image/offer.webp" alt="image" />
                </div>
                </div>
                <div className="col-6"> 
                <div className={styles.onemattressscontent1}> 
                 <h3>We're your one-stop mattresses shop</h3>
                 <p>Mattress shopping shouldn’t have to be difficult or expensive. And sleep shouldn’t be complicated either. That’s why we’ve collected only the best and most comfortable affordable mattresses — available at very low prices.</p>
                 <p>Choose a mattress that you like and we’ll not only deliver it to you, but we’ll also take your old one away. Mattress shopping has never been easier or more convenient. Our mattresses are loved by our customers, and we’ve always got plenty of fantastic deals and sales on. So, from traditional spring, to memory foam or orthopaedic mattresses, make sure to view our range today. And if you can’t find what you’re looking for — just ask!</p>
                 <p>One of our expert team members will be happy to source the right one for you. Either way, you’re only a few clicks away from having a comfier, better night’s sleep.</p>
                </div>
                </div>
             </div>
          </div>
      </section>
      <section className={styles.mattresssection}>
          <div className="container">
              <div className="row"> 
                  <div className="col-12">
                     <h3>Sleigh Bed Set</h3>
                  </div>
              </div>
          </div>
      </section>
      <div className={styles.bestsellingproduct}>
          <GridWrapper grid="4" gap="2rem">
            {data?.pages?.["0"]?.data?.slice(0,4).map((item: BedWithImage, index) => {
              return (
                <ProductCard
                  name={item?.name}
                  price={item?.price}
                  image={item?.image}
                  key={index}
                  coversControls
                  onClick={() =>
                    router.push({
                      pathname: `/products/${item._id}`,
                      query: {
                        size: item?.variants && item?.variants[0]?.size,
                      },
                    })
                  }
                />
              );
            })}
          </GridWrapper>
          <button>shop divan beds</button>
      </div>
      <section className={styles.onemattresssection}>
          <div className="container">
             <div className="row">
                <div className="col-6"> 
                <div className={styles.onemattressscontent}> 
                     <img src="/image/shutterstock.webp" alt="image" />
                </div>
                </div>
                <div className="col-6"> 
                <div className={styles.onemattressscontent1}> 
                 <h3>Deals that don’t break the bank<br></br>— and we can deliver in as little as 2 days.</h3>
                 <p>Our award-winning delivery service means you won’t be waiting around for your new bed. We have one of the fastest dispatch times in the UK, and with our live order tracking system you’ll always know when to expect us.</p>
                 <p>Simply choose your bed and the type of mattress you want to go with it — and that’s it! We’ll have it delivered to you in no time.</p>
                 <p>Easily transform your bed or divan with our great collection of stylish bed headboards.We stock lots of headboards for beds in a variety of colours, designs and sizes. They’re great for coordinating with a new divan bed, and can really help to further bring out the aesthetic you’re going for.</p>
                </div>
                </div>
             </div>
          </div>
      </section>  
      <section className={styles.onemattresssection}>
          <div className="container">
             <div className="row">
                <div className="col-6"> 
                <div className={styles.thousandcontent1}> 
                 <h3>Deals that don’t break the bank<br></br>— and we can deliver in as little as 2 days.</h3>
                 <p>Our award-winning delivery service means you won’t be waiting around for your new bed. We have one of the fastest dispatch times in the UK, and with our live order tracking system you’ll always know when to expect us.</p>
                 <p>Simply choose your bed and the type of mattress you want to go with it — and that’s it! We’ll have it delivered to you in no time.</p>
                 <p>Easily transform your bed or divan with our great collection of stylish bed headboards.We stock lots of headboards for beds in a variety of colours, designs and sizes. They’re great for coordinating with a new divan bed, and can really help to further bring out the aesthetic you’re going for.</p>
                </div>
                </div>
                <div className="col-6"> 
                <div className={styles.thousandcontent}> 
                     <img src="/image/shutterstock1.webp" alt="image" />
                </div>
                </div>
             </div>
          </div>
      </section>  
      <section className={styles.bannerimage}>
          <div className="container"> 
             <div className="row">
               <div className="col-12">
               </div>
             </div>
          </div>
      </section>
      <section className={styles.lastsection}>
         <div className="container">
            <div className="row">
               <div className="col-4">
                <div className={styles.lastsectionimage}>
                   <img src="/image/image21.webp" alt="img" />
                </div>
               </div>
               <div className="col-8">
                <div className={styles.lastcontent}>
                   <h3>We manufacture all beds at our UK factory</h3>
                   <p>Check out our TrustPilot reviews, you won’t be disappointed. We are confident you’ll love your new bed and that our service will leave you more than satisfied. But if you aren’t happy, we’ll happily either exchange it or give you a refund within 30-days of purchase.</p>
                   <p>The team we have is dedicated to offering an unbeatable customer service. So if there’s anything you need or any questions you want answering — just give us a call or send us an email. A friendly member of our team will be happy to help.</p>
                </div>
               </div>
            </div>
         </div>
      </section>
    </React.Fragment>
  );
};

export default Home;

Home.getLayout = PerPageLayout;

export const getServerSideProps = async (context: any) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    ["beds-image"],
    async () =>
      await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/beds/get-all-beds-with-base-image`,
        {
          credentials: "same-origin",
          headers: {
            Cookie: context.req.headers.cookie,
          },
        }
      ).then((res) => {
        const response = res.json() as any;
        if (response.success === false) {
          return {
            redirect: {
              permanent: false,
              destination: "/",
            },
          };
        } else {
          return response;
        }
      })
  );
  return { props: { dehydratedState: dehydrate(queryClient) } };
};

const gridImages = {
  listOne: [
    {
      heading: "Kings size beds",
      image: "/images/x.png",
    },
    {
      heading: "Single Beds",
      image: "/images/c.png",
    },
    {
      heading: "Queen size beds",
      image: "/images/o.png",
    },
    {
      heading: "Storage beds",
      image: "/images/v.png",
    },
  ],
  listTwo: [
    {
      heading: "Orthopedic mattress",
      image: "/images/b.png",
    },
    {
      heading: "Tinsel top matrress",
      image: "/images/m.png",
    },
    {
      heading: "Memory foam mattress",
      image: "/images/n.png",
    },
    {
      heading: "Pillow top mattress",
      image: "/images/g.png",
    },
  ],
};
