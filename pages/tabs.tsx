import PerPageLayout from 'layout/perpage'
import React from 'react'
import Styles from "styles/product/page.module.scss";


// Description
// Reviews (258)
// Policy & Warranty
const TabsArray=[
    {
        name:'Description',
        value:'description',
    },
    {
        name:'Reviews',
        value:'reviews',
    },
    {
        name:'Policy & Warranty',
        value:'warranty',
    },
]

const Tabs = () => {


    const [tabsName, setTabsName] = React.useState('description')


    const TabsRender=React.useMemo(()=>{
switch (tabsName) {
    case 'description':
        return <Description/>
    case 'reviews':
        return <Reviews/>
    case 'warranty':
        return <PolicyWarranty/>
    default:
       return null 
}
    },[tabsName])


  return (
  <section className={Styles.descriptiontabs}>
         <div className='container'>
        <ul className={`${Styles["descriptionul"]}`}>
            {
                TabsArray.map((data,index)=>(

                    <li onClick={()=>setTabsName(data.value)} key={index} className={tabsName?'activeClass':'InactiveClass'}>
                        {data.name}
                    </li>
                ))
            }
        </ul>
        <div>
{TabsRender}
        </div>
    </div>
  </section>
  )
}

export default Tabs


Tabs.getLayout=PerPageLayout




const  Description=()=>{
return (
    <div className={Styles.desctab1}>
       <h3>Specifications:</h3>
       <ul>
        <li>Variety of colours available in many different fabrics</li>
        <li>Various drawer options available</li>
        <li>free castor wheel’s legs are included</li>
        <li>3 different Mattress options and 4 headboard options available</li>
        <li>Made in the UK
</li>
        <li></li>
        <li></li>
        <li></li>
       </ul>
    </div>
)
} 
const  Reviews=()=>{
return (
    <div>
        Reviews
    </div>
)
} 
const  PolicyWarranty=()=>{
return (
    <div>
        Policy & Warranty
    </div>
)
} 