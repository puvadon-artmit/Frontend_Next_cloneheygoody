"use client"
import React from 'react'
import CustomNavbar from '@/component/CustomNavbar'
import '../../../css/Font.css';
import '../../../css/Checkinsurance.css';
import Link from 'next/link';
import { Provider } from 'react-redux'
import  store  from '../../store/store';
import Header_class2 from './Header_class2';
import Compare_class2 from './Compare_class2';
import What_covered2 from './What_covered2';
import Card_class2 from './Card_class2';
import Frequently_questions from '../Frequently_questions';
import Card_all2 from './Card_all2';
import CustomFooter from '@/component/CustomFooter';

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
       <Header_class2/>
       <Compare_class2/>
   
       <What_covered2/>
       <Card_class2/>
       <Frequently_questions/>
       <Card_all2/>
       <CustomFooter/>
   
    </div>
    
    </Provider>
  )
}