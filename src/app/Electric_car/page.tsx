"use client"
import React from 'react'
import Contact_electric from './Contact_electric'
import CustomNavbar from '@/component/CustomNavbar'
import '../../css/Font.css'
import '../../css/Checkinsurance.css'
import Electric_brand from './Electric_brand'
import { Provider } from 'react-redux'
import  store  from '../store/store';

export default function page() {
  return (
    <Provider store={store}>
    <div>
        <CustomNavbar/>
        <Contact_electric/>
        <Electric_brand/>
        
    </div>
    </Provider>
  )
}