"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ACG from '../../image/ACG.png';
import Team from '../../image/about/team1.png';

import Container from '@mui/material/Container';

export default function Team_isr() {
    return (
        <Grid container  sx={{backgroundColor : '#0e5fa8'}}>
             
            <Grid item xs={12} md={5}>
            <Container maxWidth="xs" sx={{marginTop : '60px'}}>
            <Typography sx={{ fontWeight: 'bold', fontSize: '50px',color : 'white'}}>ISR team</Typography>
            <Typography sx={{ marginTop: '10px',color : 'white',fontSize : '18px' }}>ISR เกิดจากคนเพียงไม่กี่คน จนรวมทีมเป็น Avengers ที่มีนักคิด นักเขียน นักสร้าง นักวางแผน นักออกแบบ นักวิเคราะห์ นักเรียน(รู้) นักรัก(ลูกค้า) และนักร้อง(คาราโอเกะ) เราอยากลองทำอะไรใหม่ ๆ ให้สะเทือนวงการประกัน และมีความเชื่อว่า เมื่อไหร่ที่ทุกพลังรวมกันย่อมสร้างคลื่นแห่งความเปลี่ยนแปลงที่ใหญ่เกินตัวได้เสมอ</Typography>
            </Container>
            </Grid>
           

            <Grid item xs={12} md={7}>
                 <Image
                        src={Team}
                        alt="HeyGoody Logo"
                        width={855}
                        height={855}

                        style={{ marginRight: '20px',marginTop : '60px' }}
                    />
            </Grid>
        </Grid>
    );
}