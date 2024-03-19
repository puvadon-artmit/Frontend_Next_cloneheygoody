"use client"
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from 'next/link'


export default function GoodyTalks() {
    const isMobile = useMediaQuery('(max-width:600px),(max-width:800px),(max-width:1200px)');

    return (
        <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          alignItems: 'start',
          textAlign: 'start',
          color: 'white',
          marginBottom : {xs: '20px', md: '10px'},
          marginLeft: { xs: '20px', md: '180px' }, 
          marginTop: { xs: '40px', md: '80px' } 
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '32px', md: '35px' },
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'start',
            color: 'black',
          }}
        >
          goodyTalks
          {!isMobile && (
             <Link href="/blogs">
            <Button
              variant="outlined"
              size="large"
              sx={{
                color: 'black',
                borderColor: 'black',
                fontSize: '18px',
                padding: '10px 15px', 
                marginLeft: { xs: '0px', md: '880px' }, 
                fontFamily: 'Kanit, sans-serif',
              }}
            >
              อ่านเพิ่มเติม
            </Button>
            </Link>
          )}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '16px', md: '18px' }, // ปรับ fontSize ตามขนาดหน้าจอ
            fontWeight: 'bold',
            marginTop: { xs: '10px', md: '20px' },
            color: '#888888',
            fontFamily: 'Kanit, sans-serif',
          }}
        >
          รวมเคล็ดลับเลือกซื้อประกันแบบมือโปร ดูแลรถ และเงินในกระเป๋า
        </Typography>
      </Box>
    )
}