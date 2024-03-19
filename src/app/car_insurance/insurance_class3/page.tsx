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
import Header_class3 from './Header_class3';
import Compare_class3 from './Compare_class3';
import Card_class3 from './Card_class3';
import What_covered3 from './What_covered3';
import Card_all3 from './Card_all3';

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
       <CustomNavbar/>
       <Header_class3/>
       <Compare_class3/>
       <What_covered3/>
       <Card_class3/>
       <Frequently_questions/>
       <Card_all3/>
      
       <CustomFooter/>
   
    </div>
    
    </Provider>
  )
}