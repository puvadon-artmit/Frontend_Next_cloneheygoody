"use client"
import { useState } from 'react';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import { Typography, Snackbar } from '@mui/material';
import Image from 'next/image'
import ki01 from '../../image/travelinsurance/ki01.png'
import ki02 from '../../image/travelinsurance/ki02.png'
import visa01 from '../../image/travelinsurance/visa01.png'
import visa02 from '../../image/travelinsurance/visa02.png'
import aia01 from '../../image/travelinsurance/aia01.png'
import aia02 from '../../image/travelinsurance/aia02.png'
import travelin from '../../image/travelinsurance/travel.png'

export default function Card_travel() {
  const handleScrollToPosition = () => {

    const windowHeight = window.innerHeight;
    const offset = -60;

    const targetPosition = windowHeight - offset;

    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
  };
  return (
    <Container maxWidth="lg">
      <Grid container spacing={0} sx={{ marginTop: '20px' }}>
        {/* -----------------------------  card1 ------------------------------------------------------------------- */}
        <Grid item xs={12} md={4}>
          <div className="max-w-xs mx-auto overflow-hidden rounded-lg shadow-lg flex">
            <div className="flex-1">
              <div className="px-4 py-2 bg-gradient-to-r from-white to-fuchsia-100" style={{ display: 'flex', alignItems: 'center' }}>
                <Typography sx={{ fontSize: { xs: '20px', md: '18px', marginRight: '40px' }, color: 'black', fontWeight: 'bold' }}>
                  ตัวจริงเรื่องญี่ปุ่น ไม่ต้องสำรองจ่าย 
                </Typography>
                <div style={{ position: 'relative' }}>
                  <Image src={ki01} width={150} height={150} alt="Picture" style={{ marginLeft: '10px' }} />
                  <div style={{ position: 'absolute', top: '25px', left: '25px', zIndex: '1' }}>
                    <div style={{ backgroundColor: 'white', padding: '3px', borderRadius: '8px', width: '50px', height: '50px' }}>
                      <Image src={ki02} width={100} height={100} alt="Picture" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 py-2 bg-white">
                <Typography sx={{ fontSize: { xs: '18px', md: '18px' }, color: 'black', textAlign: 'center' }}>
                  เริ่มต้น <span style={{ fontSize: '26px', fontWeight: 'bold' }}>180</span> บาท
                </Typography>
              </div>
              <div className="flex justify-center px-4 py-2 bg-white">
                <button type="button" onClick={handleScrollToPosition} className="text-black bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 ">ดูรายละเอียด</button>
                <button type="button" className="text-white bg-blue-900 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">ซื้อเลย</button>
              </div>
            </div>
          </div>

        </Grid>
        {/* -----------------------------  card2 ------------------------------------------------------------------- */}

        <Grid item xs={12} md={4}>
          <div className="max-w-xs mx-auto overflow-hidden rounded-lg shadow-lg flex">
            <div className="flex-1">
              <div className="px-4 py-2 bg-gradient-to-r from-white to-teal-100" style={{ display: 'flex', alignItems: 'center' }}>
                <Typography sx={{ fontSize: { xs: '20px', md: '18px', marginRight: '40px' }, color: 'black', fontWeight: 'bold' }}>
                  ครบเครื่องเรื่องวีซ่า ไม่ผ่านคืนเงิน
                </Typography>
                <div style={{ position: 'relative' }}>
                  <Image src={visa02} width={150} height={150} alt="Picture" style={{ marginRight: '10px' }} />
                  <div style={{ position: 'absolute', top: '25px', left: '25px', zIndex: '1' }}>
                    <div style={{ backgroundColor: 'white', padding: '3px', borderRadius: '8px', width: '50px', height: '50px' }}>
                      <Image src={visa01} width={100} height={100} alt="Picture" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 py-2 bg-white">
                <Typography sx={{ fontSize: { xs: '18px', md: '18px' }, color: 'black', textAlign: 'center' }}>
                  เริ่มต้น <span style={{ fontSize: '26px', fontWeight: 'bold' }}>173</span> บาท
                </Typography>
              </div>
              <div className="flex justify-center px-4 py-2 bg-white">
                <button type="button" onClick={handleScrollToPosition} className="text-black bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 ">ดูรายละเอียด</button>
                <button type="button" className="text-white bg-blue-900 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">ซื้อเลย</button>
              </div>
            </div>
          </div>
        </Grid>
        {/* -----------------------------  card3 ------------------------------------------------------------------- */}
        <Grid item xs={12} md={4}>
          <div className="max-w-xs mx-auto overflow-hidden rounded-lg shadow-lg flex">
            <div className="flex-1">
              <div className="px-4 py-2 bg-gradient-to-r from-white to-yellow-100" style={{ display: 'flex', alignItems: 'center' }}>
                <Typography sx={{ fontSize: { xs: '20px', md: '18px', marginRight: '40px' }, color: 'black', fontWeight: 'bold' }}>
                  สบายใจค่ารักษาสูง ครบทุกวัย
                </Typography>
                <div style={{ position: 'relative' }}>
                  <Image src={aia02} width={150} height={150} alt="Picture" style={{ marginLeft: '10px' }} />
                  <div style={{ position: 'absolute', top: '25px', left: '25px', zIndex: '1' }}>
                    <div style={{ backgroundColor: 'white', padding: '3px', borderRadius: '8px', width: '50px', height: '50px' }}>
                      <Image src={aia01} width={100} height={100} alt="Picture" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 py-2 bg-white">
                <Typography sx={{ fontSize: { xs: '18px', md: '18px' }, color: 'black', textAlign: 'center' }}>
                  เริ่มต้น <span style={{ fontSize: '26px', fontWeight: 'bold' }}>168</span> บาท
                </Typography>
              </div>
              <div className="flex justify-center px-4 py-2 bg-white">
                <button type="button" onClick={handleScrollToPosition} className="text-black bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 ">ดูรายละเอียด</button>
                <button type="button" className="text-white bg-blue-900 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">ซื้อเลย</button>
              </div>
            </div>
          </div>
        </Grid>

        <Grid container spacing={0} sx={{ marginTop: '80px' }}>
          <Grid item xs={12} md={12} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Image src={travelin} width={700} height={700} style={{ borderRadius: '8px' }} alt="Picture" />
          </Grid>
        </Grid>

      </Grid>
    </Container>
  )
}