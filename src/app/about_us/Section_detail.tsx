"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ACG from '../../image/ACG.png';
import Happy from '../../image/about/happy.svg';



export default function Section_detail() {
  return (
    <Grid container justifyContent="center" alignItems="center" textAlign="center">
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            color: '#08345c',
            height: '35vh',
            marginTop: '80px',
            marginBottom: '220px'
          }}
        >

          <Image
            src={Happy}
            alt="HeyGoody Logo"
            width={55}
            height={55}

            style={{ marginRight: '20px' }}
          />

          <Typography sx={{ fontWeight: 'bold', fontSize: '40px', marginTop: '20px' }}>เราอยากให้การซื้อประกันออนไลน์</Typography>
          <Typography sx={{ fontWeight: 'bold', fontSize: '40px', color: '#898886' }}>เป็นเรื่องเข้าใจง่าย</Typography>
          <Typography sx={{ fontWeight: 'bold', fontSize: '40px', color: 'black' }}>สำหรับเหล่า Autocorp อย่างคุณ</Typography>

          <Typography sx={{ fontSize: '20px', marginTop: '20px', color: 'black' }}>เราจึงอยากเป็นทางเลือกใหม่ให้คุณซื้อประกันได้ทุกที่ในราคาที่คุ้มค่า
            ไม่ต้องรอคนโทรหา อยากได้เมื่อไหร่ก็ซื้อได้ทันที ทั้งประกันรถยนต์ ประกันเดินทาง
            ประกันสุขภาพ ประกันอุบัติเหตุ มีคำถามแค่ทักมา เรายินดีช่วยเหลือ
            ตลอด 24 ชั่วโมงนะ :)</Typography>
        </Box>
      </Grid>
    </Grid>
  );
}