"use client"
import React from 'react'
import Nevbarwhite from '@/component/Nevbarwhite'
import '../../css/Font.css';
import '../../css/Checkinsurance.css';
import Content_plan from './Content_plan';
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
        <Nevbarwhite/>
        <Content_plan/>
    </ThemeProvider>
    </div>
  )
}