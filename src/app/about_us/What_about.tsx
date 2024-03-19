"use client"
import { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { createTheme, ThemeProvider } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import Smail1 from '../../image/about/smail1.svg';
import Smail2 from '../../image/about/smail2.svg';
import Item1 from '../../image/about/shield.png';

const theme = createTheme({
    typography: {
        fontFamily: 'Kanit, sans-serif',
    },
});

export default function What_about() {
    const isMobile = useMediaQuery('(max-width:600px),(max-width:800px),(max-width:1000px)');

    return (
        <ThemeProvider theme={theme}>
            <div className='flex justify-center mt-20'>
                <div className="max-w-5xl w-full bg-white shadow-lg rounded-lg overflow-hidden my-4 relative">
                    <div className="px-8 py-8 relative z-10 bg-gradient-to-r from-blue-600 to-green-500">
                        <Image style={{ position: 'absolute', top: '1px', left: '1px', zIndex: '2' }} src={Smail1} alt="HeyGoody Logo" width={180} height={180} />
                        <Image style={{ position: 'absolute', top: '80px', left: '880px', zIndex: '2' }} src={Smail2} alt="HeyGoody Logo" width={160} height={160} />
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={8}>
                                <Typography className='text-4xl text-white text-center'>ซื้อก่อนคุ้ม(ครอง)ก่อน</Typography>
                                <Typography className='text-xl text-white text-center mt-4'>หาประกันที่ใช่ ตรงไลฟ์สไตล์เหล่า goody ได้แล้ววันนี้ <br />
                                    มีปัญหา ปรึกษาเราออนไลน์ได้ตลอด 24 ชั่วโมง!</Typography>

                                <div className="flex items-center justify-center mt-8 ml-16">
                                    <Typography className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-2.5rem px-5 py-5 text-center me-2 mb-2">
                                        เช็คราคาเบี้ยประกันรถยนต์ <ArrowForwardIcon />
                                    </Typography>
                                </div>
                            </Grid>

                            <Grid item xs={12} md={4}>
                                {!isMobile && (
                                    <Image src={Item1} alt="HeyGoody Logo" width={220} height={220} />
                                )}
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    )
}