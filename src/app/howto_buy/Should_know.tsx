"use client"
import { useState } from 'react';
import { Grid } from '@mui/material';
import { Typography, Snackbar } from '@mui/material';
import Image from 'next/image'
import { IconButton } from '@mui/material';
import Car from '../../image/how-to/car_crash.png'
import Linkedin from '../../image/how-to/codioful.jpg'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import { makeStyles } from '@mui/styles';


export default function Image_howto() {

    return (
        <div>
            <div className='flex justify-center mt-8'>
                <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg overflow-hidden my-4 relative">
                   
                    <div className="px-8 py-8 relative z-10 bg-gradient-to-r from-blue-800 to-blue-400">
                        <Typography className=' text-white font-bold text-2xl ' textAlign="center" >
                            goody tip          <br />
                            
                        </Typography>
                        <Typography className='text-lg text-white text-center'> เมื่อเกิดอุบัติเหตุ ต้องการสอบถามขั้นตอนเคลมหรือติดปัญหา ทักไลน์หาเราได้ทันที ผ่านไลน์เมนู "แจ้งเคลม"</Typography>
                        
                        
                        <Typography className='text-lg text-white text-center'>Link :  @hr.autocorp </Typography>
                    </div>
       
                </div>
            </div>

          
        </div>
    )
}