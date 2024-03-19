import React from 'react'
import Contentcontact from './contentcontact'
import CustomNavbar from '@/component/CustomNavbar'
import '../../css/Font.css'
import CustomFooter from '@/component/CustomFooter'
import Contactdata from './contactdata'
export default function page() {

  return (
    <div>
         <CustomNavbar/>
        <Contentcontact/>
        <CustomFooter/>
        {/* <Contactdata/> */}
       
    </div>
  )
}