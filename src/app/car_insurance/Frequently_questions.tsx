"use client"
import { useState } from 'react';
import { Grid } from '@mui/material';
import { Typography, Snackbar } from '@mui/material';
import Image from 'next/image'
import { IconButton } from '@mui/material';
import Car from '../../image/how-to/car_crash.png'
import Linkedin from '../../image/how-to/codioful.jpg'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from 'next/link'
import { makeStyles } from '@mui/styles';

import {
    createTheme,
    ThemeProvider,
} from '@mui/material';

const theme = createTheme({
    typography: {
        fontFamily: 'Kanit, sans-serif',
    },
});

export default function Frequently_questions() {

    return (
        <ThemeProvider theme={theme}>
            <div>
                <div className='flex justify-center mt-20'>
               
                    <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg overflow-hidden my-4 relative">

                        <div className="px-8 py-8 relative z-10 bg-gradient-to-r from-blue-800 to-blue-600">

                            <Typography className='text-4xl text-white text-center'> คำถามที่พบบ่อย</Typography>

                            <div className='flex justify-center mt-6'>
                            <Link href="/questions">
                                <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2">
                                    <Typography>
                                        ดูเพิ่มเติม
                                    </Typography>
                                </button>
                                </Link>
                            </div>
                        </div>

                    </div>
                    

                </div>
            </div>
        </ThemeProvider>
    )
}