"use client"
import React from 'react'
import CustomNavbar from '@/component/CustomNavbar'
import '../../../css/Font.css';
import '../../../css/Checkinsurance.css';
import Content_class1 from './Content_class1';
import { Provider } from 'react-redux'
import  store  from '../../store/store';
import Header_class1 from './Header_class1';
import Card_class1 from './Card_class1';
import CustomFooter from '@/component/CustomFooter';
import Compare_class1 from './Compare_class1';
import What_covered from './What_covered'
import Frequently_questions from '../Frequently_questions';
import Card_all from './Card_all'

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
    {/* <ThemeProvider theme={theme}> */}
    <div>
       <CustomNavbar/>
       <Content_class1/>
       <Header_class1/>
       <Card_class1/>
       <Compare_class1/>
       <What_covered/>
      
       <Frequently_questions/>

       <Card_all/>

       <CustomFooter/>

    </div>
    {/* </ThemeProvider> */}
    </Provider>
  )
}