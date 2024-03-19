"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ACG from '../../image/ACG.png';
import useMediaQuery from '@mui/material/useMediaQuery';
import Item1 from '../../image/about/item1.svg';
import Item2 from '../../image/about/item2.gif';
import Item3 from '../../image/about/item3.gif';
import Call from '../../image/about/call.png';

import Chat1 from '../../image/about/chat1.png';
import Chat2 from '../../image/about/chat2.png';

export default function Isr_story() {

    const isMobile = useMediaQuery('(max-width:600px), (max-width:800px), (max-width:1000px)');

    return (
        <Grid container justifyContent="center" alignItems="center" textAlign="center" sx={{ marginTop: '100px' }}>
            <Grid item xs={12} md={4}>
            {!isMobile && (
                <Image src={Item2} alt="HeyGoody Logo" width={420} height={420} />
                )}
                </Grid>

            <Grid item xs={12} md={4}>
                <div className='flex justify-center'>
                    <div className='relative'>
                        <Image src={Item1} alt="HeyGoody Logo" width={380} height={380} />
                        <Image className='absolute top-0 left-8 right-0 bottom-4 flex flex-col justify-center items-center' src={Call} alt="HeyGoody Logo" width={70} height={70} />
                        <div className='absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center'>
                            <Typography sx={{ fontSize: '35px' }}>ISR start,</Typography>
                            <Typography sx={{ fontSize: '35px', color: '#08345c' }}>ISR story</Typography>
                            <Typography className='font-bold mt-4'>เพราะเราเข้าใจปัญหาของคนอยากซื้อ<br /> ประกัน ที่ต้องเปรียบเทียบหลาย ๆ <br /> เว็บไซต์ด้วยตัวเอง</Typography>
                            <Typography className='mt-4'>พอสนใจก็ต้องมากรอกข้อมูล <br />รอเจ้าหน้าที่ติดต่อกลับ บางทีโดนโทรขายรัว ๆ <br />ซื้อแล้วมีเรื่องเคลมประกันก็ตามเรื่องยาก <br />สวนทางกับไลฟ์สไตล์ปัจจุบันที่ไม่ค่อยมีเวลา <br />ไม่อยากคุยกับคนเยอะ ว่างก็ทำ<br /> ไม่ว่างก็เอาไว้ก่อน เน้นความรวดเร็ว ซื้อง่าย<br /> จบง่าย เปรียบเทียบประกันได้ว่าคุ้มจริงมั้ย <br />และติดต่อได้ทันทีเวลามีปัญหา</Typography>
                        </div>

                        <div>
                        <Image  className='absolute right-4 top-18   bottom-4 flex flex-col justify-end items-end' src={Chat1} alt="HeyGoody Logo" width={60} height={60} />
                        {/* <Image className='absolute top-18  right-8 bottom-4 flex flex-col justify-end items-end' src={Chat2} alt="HeyGoody Logo" width={70} height={70} /> */}
                        </div>
                    </div>
                </div>
            </Grid>

            <Grid item xs={12} md={4}>
                <div className='flex justify-end'>
                {!isMobile && (
                    <Image src={Item3} alt="HeyGoody Logo" width={420} height={420} />
                    )}
                </div>
            </Grid>
        </Grid>
    );
}