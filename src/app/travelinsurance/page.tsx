"use client"
import React from 'react'
import CostomNevbar from '@/component/CustomNavbar'
import CustomFooter from '@/component/CustomFooter'
import Content_travel from './Content_travel'
import Link from 'next/link';
import '../../css/Font.css';
import '../../css/Checkinsurance.css';
import Card_questions from './Card_questions'
import Foreign_travel from './Foreign_travel'
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
        <Content_travel/>
        <Foreign_travel />
        <Card_questions />
        <CustomFooter/>
        </ThemeProvider>
    </div>
  )
}