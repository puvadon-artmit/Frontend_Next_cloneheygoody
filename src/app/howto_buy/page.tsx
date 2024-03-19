"use client"
import React from 'react'
import CostomNevbar from '@/component/CustomNavbar'
import CustomFooter from '@/component/CustomFooter'
import Content_howto from './Content_howto'
import Link from 'next/link';
import '../../css/Font.css';
import '../../css/Checkinsurance.css';
import { Provider } from 'react-redux'
import  store  from '../store/store';

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
      <ThemeProvider theme={theme}>
        <CostomNevbar/>
        <Content_howto/>
        <CustomFooter/>
        </ThemeProvider>
    </div>
    </Provider>
  )
}