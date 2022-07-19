import NextSEO from "layout/nextseo";
import Image from "next/image";
import React from "react";
import styles from "styles/NewProductPage.module.scss";
import { Tab, Tabs, Row, Col, Nav, Button } from "react-bootstrap";
import ScaleIcon from "icons/scale";

const NewProductPage = () => {

  const [tabs, setTabs] = React.useState('BedSize')


  const RenderTabsArray = [
    {
      title: 'BedSize',
      component: BedSize,
    },
    {
      title: 'Color',
      component: BedColor,
    },
    {
      title: 'HeadBoard',
      component: BedHeadBoard,
    },
    {
      title: 'Storage',
      component: BedStorage,
    },
    {
      title: 'Feet',
      component: BedFeet,
    },
    {
      title: 'Mattress',
      component: BedMattress,
    },
  ]

  const RenderTabs = () => {
    switch (tabs) {
      case 'BedSize':
        return <BedSize />
      case 'Color':
        return <BedColor />
      case 'HeadBoard':
        return <BedHeadBoard />
      case 'Storage':
        return <BedStorage />
      case 'Feet':
        return <BedFeet />
      case 'Mattress':
        return <BedMattress />
      default:
        return null
    }
  }


  const onTabSelect = React.useCallback((value: string) => {
    setTabs(value)
  }, [tabs])
  return <div>
    <NextSEO title={"Dbz beds "} />
    {/* Gufran  */}
    <div >
      <Image src="/images/bed.png" layout="fill" height={700} className={styles.imagestyle} />
      <div className={styles.container}>
        <div className={styles.left}>
          {
            RenderTabsArray.map((data, index) => (
              <TabButton key={index} onClick={() => onTabSelect(data.title)} title={data.title}
              
              isactive={data.title===tabs}
              />
            ))
          }
        </div>
        <div className={styles.right} >
          <RenderTabs />
        </div>
      </div>
    </div>
  </div>;
};
export default NewProductPage;




const ContentHeader = () => {
  return (
    <div className={styles.header} >
      <div className={styles.headertitle}>
        <h1>Bed size</h1>
      
      </div>
      <div>
        <Button className={styles.btn}>Next</Button>
      </div>
   
    </div>
   
  )
}

const BedSize = () => {
  return (
    <React.Fragment>
      <ContentHeader />
      <div>
       <ul className={styles.texture}>
        <li>
         
        <Image src="/images/bed1.jpg" width={100} height={56} alt=""  />
        <span className={styles.name}> 3ft single
        <span className={styles.price}> £400.00</span>
        </span>


         
        </li>
        <li>
         
         <Image src="/images/bed1.jpg" width={100} height={56} alt=""  />
         <span className={styles.name}> 3ft single
         <span className={styles.price}> £400.00</span>
         </span>
 
 
          
         </li>
         <li>
         
         <Image src="/images/bed1.jpg" width={100} height={56} alt=""  />
         <span className={styles.name}> 3ft single
         <span className={styles.price}> £400.00</span>
         </span>
 
 
          
         </li>
         <li>
         
         <Image src="/images/bed1.jpg" width={100} height={56} alt=""  />
         <span className={styles.name}> 3ft single
         <span className={styles.price}> £400.00</span>
         </span>
 
 
          
         </li>
         <li>
         
         <Image src="/images/bed1.jpg" width={100} height={56} alt=""  />
         <span className={styles.name}> 3ft single
         <span className={styles.price}> £400.00</span>
         </span>
 
 
          
         </li>


       </ul>
      </div>
    </React.Fragment>
  )
}
const BedColor = () => {
  return (
    <React.Fragment>
      <ContentHeader />
      <div className={styles.color} >
      <div className={styles.heading} >
        <span>plush velvet</span>
        </div>
        <div className={styles.colorimage} >
        <ul className={styles.texture2}>
        <li>
         
        <Image src="/images/berry.jpg" width={70} height={70} alt="" className={styles.imagestyle2} />
        <span className={styles.name}> 3ft single </span>  
        </li>
        <li>
         
         <Image src="/images/berry.jpg" width={70} height={70} alt="" className={styles.imagestyle2} />
         <span className={styles.name}> 3ft single </span>
        </li>
        <li>
         
         <Image src="/images/berry.jpg" width={70} height={70} alt="" className={styles.imagestyle2} />
         <span className={styles.name}> 3ft single </span>
        </li>
        <li>
         
         <Image src="/images/berry.jpg" width={70} height={70} alt="" className={styles.imagestyle2} />
         <span className={styles.name}> 3ft single </span>
        </li>
        <li>
         
         <Image src="/images/berry.jpg" width={70} height={70} alt="" className={styles.imagestyle2} />
         <span className={styles.name}> 3ft single </span>
        </li>
         
        </ul>
       
        </div>


        
      </div>
    </React.Fragment>
  )
}
const BedHeadBoard = () => {
  return (
    <React.Fragment>
      <ContentHeader />
      <div>
       <ul className={styles.texture}>
        <li>
         
        <Image src="/images/bed1.jpg" width={100} height={56} alt=""  />
        <span className={styles.name}> 3ft single
        <span className={styles.price}> £400.00</span>
        </span>


         
        </li>
        <li>
         
         <Image src="/images/bed1.jpg" width={100} height={56} alt=""  />
         <span className={styles.name}> 3ft single
         <span className={styles.price}> £400.00</span>
         </span>
 
 
          
         </li>
         <li>
         
         <Image src="/images/bed1.jpg" width={100} height={56} alt=""  />
         <span className={styles.name}> 3ft single
         <span className={styles.price}> £400.00</span>
         </span>
 
 
          
         </li>
         <li>
         
         <Image src="/images/bed1.jpg" width={100} height={56} alt=""  />
         <span className={styles.name}> 3ft single
         <span className={styles.price}> £400.00</span>
         </span>
 
 
          
         </li>
         <li>
         
         <Image src="/images/bed1.jpg" width={100} height={56} alt=""  />
         <span className={styles.name}> 3ft single
         <span className={styles.price}> £400.00</span>
         </span>
 
 
          
         </li>


       </ul>
      </div>
    </React.Fragment>
  )
}
const BedStorage = () => {
  return (
    <React.Fragment>
      <ContentHeader />
      <div>
       <ul className={styles.texture}>
        <li>
         
        <Image src="/images/bed1.jpg" width={100} height={56} alt=""  />
        <span className={styles.name}>Front lift</span>


         
        </li>
        </ul>
        </div>
    </React.Fragment>
  )
}
const BedFeet = () => {
  return (
    <React.Fragment>
      <ContentHeader />
      <div className={styles.summary}>
        <h3>How its looking?</h3>
   
      </div>
    </React.Fragment>
  )
}
const BedMattress = () => {
  return (
    <React.Fragment>
      <ContentHeader />
      <div>
        Mattress
      </div>
    </React.Fragment>
  )
}


interface TabButtonProps extends React.ComponentPropsWithoutRef<'div'> {
  isactive?:boolean;
}
const TabButton = (props: TabButtonProps) => {

  const styleActive={
    background:props.isactive?'#fff':'#0e3f70'
  }
  return (
    <div style={styleActive} className={styles.imageicon} {...props}>
      <ScaleIcon />
      <span>{props.title}</span>
    </div>
  )
}
