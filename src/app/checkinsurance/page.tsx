"use client"
import React from 'react'
import CustomNavbar from '@/component/CustomNavbar'
import Contentcheck from './contentcheck'
import '../../css/Font.css'
import '../../css/Checkinsurance.css'
import Carbrand from './Carbrand'
// import CarInsurance from './Car_insurance'
import { Provider } from 'react-redux'
import  store  from '../store/store';

export default function page() {
  return (
    <Provider store={store}>
    <div>
        <CustomNavbar/>
        <Contentcheck/>
        <Carbrand/>
        {/* <CarInsurance/> */}
    </div>
    </Provider>
  )
}