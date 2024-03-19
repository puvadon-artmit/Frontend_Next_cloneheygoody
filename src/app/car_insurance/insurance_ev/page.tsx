"use client"
import React from 'react'
import CustomNavbar from '@/component/CustomNavbar'
import '../../../css/Font.css';
import '../../../css/Checkinsurance.css';
import Link from 'next/link';
import { Provider } from 'react-redux'
import  store  from '../../store/store';
import Frequently_questions from '../Frequently_questions';
import CustomFooter from '@/component/CustomFooter';
import Header_Ev from './Header_Ev';
import Electric_insurance from './Electric_insurance';
import What_coveredev from './What_coveredev';
import All_brand from './All_brand';
import Card_allev from './Card_allev';


import {
    createTheme,
    ThemeProvider,
} from '@mui/material';

const theme = createTheme({
    typography: {
        fontFamily: 'Kanit, sans-serif',
    },
});

export default function page() {
  return (
    <Provider store={store}>
    
    <div>
       {/* <CustomNavbar/> */}
       <Header_Ev/>
       <Electric_insurance/>
       
       <What_coveredev/>
      
       <All_brand/>
       <Frequently_questions/>
       <Card_allev/>
       <CustomFooter/>
   
    </div>
    
    </Provider>
  )
}