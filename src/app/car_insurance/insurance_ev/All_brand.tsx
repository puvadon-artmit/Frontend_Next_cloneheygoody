"use client"
import { useState } from 'react';
import { Grid } from '@mui/material';
import { Typography, Snackbar } from '@mui/material';
import Image from 'next/image'
import { IconButton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';

import ev1 from '../../../image/background/icon_ev/ev_1.png'
import ev2 from '../../../image/background/icon_ev/ev_2.png'
import ev3 from '../../../image/background/icon_ev/ev_3.png'
import ev4 from '../../../image/background/icon_ev/ev_4.png'
import ev5 from '../../../image/background/icon_ev/ev_5.png'
import ev6 from '../../../image/background/icon_ev/ev_6.png'
import ev7 from '../../../image/background/icon_ev/ev_7.png'
import ev8 from '../../../image/background/icon_ev/ev_8.png'

import {
    createTheme,
    ThemeProvider,
} from '@mui/material';

const theme = createTheme({
    typography: {
        fontFamily: 'Kanit, sans-serif',
    },
});

export default function All_brand() {

    return (
        <ThemeProvider theme={theme}>
            <div>
                <Container maxWidth="xl" sx={{ backgroundColor: '#434343' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5}>
                            <div className='flex justify-center mt-8'>
                                <Typography component={'div'}>
                                    <div className='text-4xl font-bold text-white'>ประกันรถยนต์ไฟฟ้า</div>
                                    <div className='text-4xl font-bold mt-4 text-blue-600'>สำหรับแบรนด์ชั้นนำ</div>
                                </Typography>
                            </div>
                        </Grid>

                        <Grid item xs={12} md={7} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Image src={ev1} width={130} height={130} alt="Picture of the author" />
                            <Image src={ev2} width={130} height={130} alt="Picture of the author" />
                            <Image src={ev3} width={130} height={130} alt="Picture of the author" />
                            <Image src={ev4} width={130} height={130} alt="Picture of the author" />
                            <Image src={ev5} width={130} height={130} alt="Picture of the author" />
                            <Image src={ev6} width={130} height={130} alt="Picture of the author" />
                            <Image src={ev7} width={130} height={130} alt="Picture of the author" />
                            <Image src={ev8} width={130} height={130} alt="Picture of the author" />
                        </Grid>


                    </Grid>
                </Container>
            </div>
        </ThemeProvider>
    )
}