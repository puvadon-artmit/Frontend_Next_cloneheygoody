"use client"
import React from 'react'
import CostomNevbar from '@/component/CustomNavbar'
import CustomFooter from '@/component/CustomFooter'
import Content from './Content'
import Link from 'next/link';
import '../../css/Font.css';
import '../../css/Checkinsurance.css';

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
    <div>
      <ThemeProvider theme={theme}>
        <CostomNevbar/>
        <Content/>
       
        <CustomFooter/>
        </ThemeProvider>
    </div>
  )
}