"use client"
import React, { useEffect, useState } from 'react';
import '../../../css/Font.css';
import '../../../css/Checkinsurance.css';


import Image from 'next/image';
import Link from 'next/link';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import icon1 from '../../../image/how-to/claim1.svg'
import color1 from '../../../image/color/color5.jpg'
import color2 from '../../../image/color/color8.png'
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '@mui/material/Container';

import {
    createTheme,
    ThemeProvider,
} from '@mui/material';

const theme = createTheme({
    typography: {
        fontFamily: 'Kanit, sans-serif',
    },
});


export default function Card_all3() {

    const isMobile = useMediaQuery('(max-width:600px)');

    return (

        <ThemeProvider theme={theme}>
            {!isMobile && (
                <Container maxWidth="lg" sx={{ marginTop: '80px' }}>

                    <Typography sx={{ fontSize: '30px', textAlign: 'center' }}>
                        ประกันรถยนต์ประเภทอื่นๆ
                    </Typography>

                    {/* -----------------------------------------------2-------------------------------------------------------------------------------------------------------------------------- */}
                    <div className="flex ">

                        <div className="max-w-sm mx-4 w-full bg-white shadow-lg rounded-lg overflow-hidden my-4 relative">
                            <Image
                                src={color2}
                                width={300}  // ปรับขนาดรูปภาพตามต้องการ
                                height={300}
                                alt="Picture of the author"
                                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                            />
                            <div className="flex items-center px-4 py-4 relative z-10">

                                <Box component="span" className="bg-blue-500 rounded-full p-2 mr-4">
                                    <Image src={icon1} width={25} height={25} alt="Picture" />  {/* ปรับขนาดไอคอนตามต้องการ */}
                                </Box>

                                <div>
                                <Link href="/car_insurance/insurance_class1">
                                    <h2 className="text-black text-lg font-semibold">ประกันรถยนต์</h2>  {/* ปรับขนาดตัวอักษรตามต้องการ */}
                                    <p className="text-black mt-1 mb-1 text-2xl font-bold">ชั้น 1</p>  {/* ปรับขนาดตัวอักษรตามต้องการ */}
                                    </Link>
                                </div>

                                <div className="ml-auto">
                                    <ArrowForwardIosIcon />
                                </div>

                            </div>

                            <div className="flex items-center justify-center px-2 py-1 bg-gray-100 relative z-10">  {/* ปรับขนาดขอบและระยะห่าง */}
                                {/* เนื้อหาที่ต้องการ */}
                            </div>
                        </div>


                        {/* ----------------------------------2-------------------------------------------------------------------- */}

                        <div className="max-w-sm mx-4 w-full bg-white shadow-lg rounded-lg overflow-hidden my-4 relative">
                            <Image
                                src={color2}
                                width={300}  // ปรับขนาดรูปภาพตามต้องการ
                                height={300}
                                alt="Picture of the author"
                                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                            />
                            <div className="flex items-center px-4 py-4 relative z-10">

                                <Box component="span" className="bg-blue-500 rounded-full p-2 mr-4">
                                    <Image src={icon1} width={25} height={25} alt="Picture" />  {/* ปรับขนาดไอคอนตามต้องการ */}
                                </Box>

                                <div>
                                    <Link href="/car_insurance/insurance_class2">
                                        <h2 className="text-black text-lg font-semibold">ประกันรถยนต์</h2>  {/* ปรับขนาดตัวอักษรตามต้องการ */}
                                        <p className="text-black mt-1 mb-1 text-2xl font-bold">ชั้น 2+/2</p>  {/* ปรับขนาดตัวอักษรตามต้องการ */}
                                    </Link>
                                </div>

                                <div className="ml-auto">
                                    <ArrowForwardIosIcon />
                                </div>

                            </div>

                            <div className="flex items-center justify-center px-2 py-1 bg-gray-100 relative z-10">  {/* ปรับขนาดขอบและระยะห่าง */}

                            </div>
                        </div>

                        {/* ----------------------------------3-------------------------------------------------------------------- */}
                        <div className="max-w-sm mx-4 w-full bg-white shadow-lg rounded-lg overflow-hidden my-4 relative">
                            <Image
                                src={color1}
                                width={300}  // ปรับขนาดรูปภาพตามต้องการ
                                height={300}
                                alt="Picture of the author"
                                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                            />
                            <div className="flex items-center px-4 py-4 relative z-10">

                                <Box component="span" className="bg-blue-500 rounded-full p-2 mr-4">
                                    <Image src={icon1} width={25} height={25} alt="Picture" />  {/* ปรับขนาดไอคอนตามต้องการ */}
                                </Box>

                                <div>
                                <Link href="/car_insurance/insurance_ev">
                                    <h2 className="text-black text-lg font-semibold">ประกันรถยนต์</h2>  {/* ปรับขนาดตัวอักษรตามต้องการ */}
                                    <p className="text-black mt-1 mb-1 text-2xl font-bold">ไฟฟ้า EV</p>  {/* ปรับขนาดตัวอักษรตามต้องการ */}
                                    </Link>
                                </div>

                                <div className="ml-auto">
                                    <ArrowForwardIosIcon />
                                </div>

                            </div>

                            <div className="flex items-center justify-center px-2 py-1 bg-gray-100 relative z-10">  {/* ปรับขนาดขอบและระยะห่าง */}

                            </div>
                        </div>
                    </div>

                </Container>
            )}


            {isMobile && (
                <Container maxWidth="lg">
                    <Typography sx={{ fontSize: '30px', textAlign: 'center' }}>
                        ประกันรถยนต์ประเภทอื่นๆ
                    </Typography>
                    {/* -----------------------------------------------2-------------------------------------------------------------------------------------------------------------------------- */}

                    <div className="flex flex-wrap">

                        <div className="max-w-sm mx-4 w-full bg-white shadow-lg rounded-lg overflow-hidden my-4 relative">

                            <Image
                                src={color2}
                                width={300}  // ปรับขนาดรูปภาพตามต้องการ
                                height={300}
                                alt="Picture of the author"
                                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                            />
                            <div className="flex items-center px-4 py-4 relative z-10">

                                <Box component="span" className="bg-blue-500 rounded-full p-2 mr-4">
                                    <Image src={icon1} width={25} height={25} alt="Picture" />  {/* ปรับขนาดไอคอนตามต้องการ */}
                                </Box>

                                <div>
                                    <Link href="/insurance_class2">
                                        <h2 className="text-black text-lg font-semibold">ประกันรถยนต์</h2>  {/* ปรับขนาดตัวอักษรตามต้องการ */}
                                        <p className="text-black mt-1 mb-1 text-2xl font-bold">ชั้น 2+/2</p>  {/* ปรับขนาดตัวอักษรตามต้องการ */}
                                    </Link>
                                </div>

                                <div className="ml-auto">
                                    <ArrowForwardIosIcon />
                                </div>

                            </div>

                            <div className="flex items-center justify-center px-2 py-1 bg-gray-100 relative z-10">  {/* ปรับขนาดขอบและระยะห่าง */}
                                {/* เนื้อหาที่ต้องการ */}
                            </div>

                        </div>


                        {/* ----------------------------------2-------------------------------------------------------------------- */}

                        <div className="max-w-sm mx-4 w-full bg-white shadow-lg rounded-lg overflow-hidden my-4 relative">
                            <Image
                                src={color2}
                                width={300}  // ปรับขนาดรูปภาพตามต้องการ
                                height={300}
                                alt="Picture of the author"
                                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                            />
                            <div className="flex items-center px-4 py-4 relative z-10">

                                <Box component="span" className="bg-blue-500 rounded-full p-2 mr-4">
                                    <Image src={icon1} width={25} height={25} alt="Picture" />  {/* ปรับขนาดไอคอนตามต้องการ */}
                                </Box>

                                <div>
                                    <h2 className="text-black text-lg font-semibold">ประกันรถยนต์</h2>  {/* ปรับขนาดตัวอักษรตามต้องการ */}
                                    <p className="text-black mt-1 mb-1 text-2xl font-bold">ชั้น 3+/3</p>  {/* ปรับขนาดตัวอักษรตามต้องการ */}
                                </div>

                                <div className="ml-auto">
                                    <ArrowForwardIosIcon />
                                </div>

                            </div>

                            <div className="flex items-center justify-center px-2 py-1 bg-gray-100 relative z-10">  {/* ปรับขนาดขอบและระยะห่าง */}

                            </div>
                        </div>

                        {/* ----------------------------------3-------------------------------------------------------------------- */}
                        <div className="max-w-sm mx-4 w-full bg-white shadow-lg rounded-lg overflow-hidden my-4 relative">
                            <Image
                                src={color1}
                                width={300}  // ปรับขนาดรูปภาพตามต้องการ
                                height={300}
                                alt="Picture of the author"
                                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                            />
                            <div className="flex items-center px-4 py-4 relative z-10">

                                <Box component="span" className="bg-blue-500 rounded-full p-2 mr-4">
                                    <Image src={icon1} width={25} height={25} alt="Picture" />  {/* ปรับขนาดไอคอนตามต้องการ */}
                                </Box>

                                <div>
                                    <h2 className="text-black text-lg font-semibold">ประกันรถยนต์</h2>  {/* ปรับขนาดตัวอักษรตามต้องการ */}
                                    <p className="text-black mt-1 mb-1 text-2xl font-bold">ไฟฟ้า EV</p>  {/* ปรับขนาดตัวอักษรตามต้องการ */}
                                </div>

                                <div className="ml-auto">
                                    <ArrowForwardIosIcon />
                                </div>

                            </div>

                            <div className="flex items-center justify-center px-2 py-1 bg-gray-100 relative z-10">  {/* ปรับขนาดขอบและระยะห่าง */}

                            </div>
                        </div>
                    </div>

                </Container>
            )}
        </ThemeProvider >

    )
}