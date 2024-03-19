"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ACG from '../../image/ACG.png';
import useMediaQuery from '@mui/material/useMediaQuery';


export default function Content_about() {
  const isMobile = useMediaQuery('(max-width:600px)');
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
            ...(isMobile ? {} : { marginTop: '80px' }),
            ...(!isMobile ? {} : { marginTop: '20px' }),
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography sx={{fontSize : '40px'}}>Hi We're</Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '36px', md: '60px' },
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                color: '#00345c',
              }}
            >
              <Image
                src={ACG}
                alt="HeyGoody Logo"
                width={55}
                height={55}
                className="rounded-full"
                style={{ marginRight: '20px' }}
              />
              Autocorp <span style={{ color: '#888888', marginLeft: '8px' }}>holding</span>
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: '20px',
                fontWeight: 'bold',
                marginTop: '20px',
                color: '#888888',
                fontFamily: 'Kanit, sans-serif',
              }}
            >
              ออโต้คอร์ป โบรกเกอร์ประกันออนไลน์ที่ “เข้าใจ” ไม่โทร(ขาย) ซื้อเองได้ <br />
               สงสัยอะไรทักเราได้ 24 ชม. #ตอบแชทเร็วมาก
            </Typography>
          </motion.div>
        </Box>
      </Grid>
    </Grid>
  );
}