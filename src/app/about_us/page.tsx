"use client"
import React from 'react'
import CustomNavbar from '@/component/CustomNavbar'
import '../../css/Font.css';
import '../../css/Checkinsurance.css';
import { Provider } from 'react-redux'
import  store  from '../store/store';
import Content_about from './Content_about';
import Isr_story from './Isr_story';
import Section_detail from './Section_detail';
import Team_isr from './Team_isr';
import Card_about from './Card_about';
import What_about from './What_about';

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
    <ThemeProvider theme={theme}>
    <div>
       <CustomNavbar/>
       <Content_about/>
       <Isr_story/>
       <Section_detail/>
       
       <Team_isr/>
       <Card_about/>
       <What_about/>
      
       <CustomFooter/>
    </div>
    </ThemeProvider>
    </Provider>
  )
}