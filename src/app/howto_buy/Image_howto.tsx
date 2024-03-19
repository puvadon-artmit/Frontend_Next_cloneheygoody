"use client"
import { useState } from 'react';
import { Grid } from '@mui/material';
import { Typography, Snackbar } from '@mui/material';
import Image from 'next/image'
import useMediaQuery from '@mui/material/useMediaQuery';
import Car from '../../image/how-to/car_crash.png'
import Employee from '../../image/how-to/employee.jpg'


import { makeStyles } from '@mui/styles';


export default function Image_howto() {
    const isMobile = useMediaQuery('(max-width:600px)');
    return (
<div>
{!isMobile && (
        <Grid container spacing={0} sx={{ marginTop: '60px' }}>
            {/* -----------------------------  card1 ------------------------------------------------------------------- */}
            <Grid item xs={12} md={6}>

                <div className='flex justify-center mt-8'>
                    <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden my-4 relative">
                        <Image
                            src={Employee}
                            width={500}
                            height={500}
                            alt="Picture of the author"
                            className="absolute top-0 left-0 w-full h-full object-cover z-0" />
                        <div className="px-8 py-8 relative z-10 mt-8">
                            <Typography className='flex justify-center font-bold text-4xl text-slate-50 bg-gradient-to-r from-blue-800 to-blue-400' textAlign="center">
                                การเคลมประกัน
                            </Typography>
                        </div>

                    </div>
                </div>

            </Grid>
            {/* -----------------------------  card2 ------------------------------------------------------------------- */}

            <Grid item xs={12} md={6}>
                <div className='flex justify-center'>
                    <Image src={Car} alt="HeyGoody Logo" width={400} height={400} />
                </div>
            </Grid>
            
        </Grid>
        )}

{isMobile && (
        <Grid container spacing={0} >
            {/* -----------------------------  card1 ------------------------------------------------------------------- */}
            <Grid item xs={12} md={6}>

                <div className='flex justify-center mt-8'>
                    <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden my-4 relative">
                        <Image
                            src={Employee}
                            width={500}
                            height={500}
                            alt="Picture of the author"
                            className="absolute top-0 left-0 w-full h-full object-cover z-0" />
                        <div className="px-8 py-8 relative z-10 mt-8">
                            <Typography className='flex justify-center font-bold text-4xl text-slate-50 bg-gradient-to-r from-blue-800 to-blue-400' textAlign="center">
                                การเคลมประกัน
                            </Typography>
                        </div>

                    </div>
                </div>

            </Grid>
            {/* -----------------------------  card2 ------------------------------------------------------------------- */}

            <Grid item xs={12} md={6}>
                <div className='flex justify-center'>
                    <Image src={Car} alt="HeyGoody Logo" width={400} height={400} />
                </div>
            </Grid>
            
        </Grid>
        )}
        </div>
        
    )
}