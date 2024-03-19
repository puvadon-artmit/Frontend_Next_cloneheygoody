"use client"
import React from 'react'
import CustomNavbar from '@/component/CustomNavbar'
import '../../css/Font.css';
import '../../css/Checkinsurance.css';
import { Provider } from 'react-redux'
import  store  from '../store/store';
import Content_blogs from './content_blogs';
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
       <Content_blogs/>
       <CustomFooter/>
    </div>
    </ThemeProvider>
    </Provider>
  )
}