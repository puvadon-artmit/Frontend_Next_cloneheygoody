"use client"
import React, { useEffect, useState } from 'react';
import { Box, Container } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { fetchCars, selectCarData, selectStatus } from '../../store/slice/insurancecarsSlice';
import { fetchProtection, selectProtectionData, selectStatus2 } from '../../store/slice/protectionsSlice';
import { RootState } from '../../store/store';
import Image from 'next/image'
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';

import iocisr1 from '../../../image/banner/band_ev/iconev1.png'
import iocisr2 from '../../../image/banner/band_ev/iconev2.png'
import iocisr3 from '../../../image/banner/band_ev/iconev3.png'


import rricon1 from '../../../image/background/rrbg1.png'
import rricon2 from '../../../image/background/rrbg2.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ev1 from '../../../image/background/icon_ev/ev_1.png'
import ev2 from '../../../image/background/icon_ev/ev_2.png'
import ev3 from '../../../image/background/icon_ev/ev_3.png'
import ev4 from '../../../image/background/icon_ev/ev_4.png'
import ev5 from '../../../image/background/icon_ev/ev_5.png'
import ev6 from '../../../image/background/icon_ev/ev_6.png'
import ev7 from '../../../image/background/icon_ev/ev_7.png'
import ev8 from '../../../image/background/icon_ev/ev_8.png'

import Link from 'next/link'

import Typography from '@mui/material/Typography';


import Grid from '@mui/material/Grid';

import {
    createTheme,
    ThemeProvider,
} from '@mui/material';

const theme = createTheme({
    typography: {
        fontFamily: 'Kanit, sans-serif',
    },
});



export default function Electric_insurance() {



    return (

        <Box sx={{ width: '100%', background: 'linear-gradient(to right, #1e42b2, #205246)', height: 'auto' }}>

            <ThemeProvider theme={theme}>
                <Typography sx={{ color: 'white', textAlign: 'center', fontSize: '35px' }}>
                    ประกันรถยนต์ไฟฟ้า ไม่เหมือนกับประกันรถยนต์ธรรมดายังไง
                </Typography>

                <div className='flex justify-center '>
                    <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden my-4 relative">

                        <div className="px-8 py-8 relative z-10 bg-gradient-to-r from-blue-800 to-blue-600">

                            <Typography className='text-2xl text-white text-center'> คำถามที่พบบ่อย</Typography>

                            <div className='flex justify-center mt-6'>
                                <Grid container spacing={2} >
                                    <Grid item xs={12} sm={4} >
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                            <Image
                                                src={iocisr1}
                                                width={80}
                                                height={80}
                                                alt="Picture of the author"
                                            />
                                            <Typography sx={{ color: 'white' }}>
                                                คุ้มครองเครื่องชาร์จ <br />
                                                รถยนต์ไฟฟ้าที่บ้าน
                                            </Typography>

                                            <button type="button" className="mt-4 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-4 py-2.5 me-2 mb-2">
                                                <Typography>
                                                    ดูเพิ่มเติม
                                                </Typography>
                                            </button>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={4} >

                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                                            <Image
                                                src={iocisr2}
                                                width={80}
                                                height={80}
                                                alt="Picture of the author"
                                            />

                                            <Typography sx={{ color: 'white' }} >
                                                คุ้มครองสายชาร์จ <br />
                                                รถยนต์ไฟฟ้าที่บ้าน
                                            </Typography>

                                            <button type="button" className="mt-4 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-4 py-2.5 me-2 mb-2">
                                                <Typography>
                                                    ดูเพิ่มเติม
                                                </Typography>
                                            </button>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={4} >
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                            <Image
                                                src={iocisr3}
                                                width={80}
                                                height={80}
                                                alt="Picture of the author"
                                            />
                                            <Typography sx={{ textAlign: 'center', color: 'white' }}>
                                                คุ้มครอง <br />
                                                บุคคลภายนอก
                                            </Typography>

                                            <button type="button" className="mt-4 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-4 py-2.5 me-2 mb-2">
                                                <Typography>
                                                    ดูเพิ่มเติม
                                                </Typography>
                                            </button>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                            <Typography sx={{ textAlign: 'center', color: 'white', marginTop: '20px' }}>
                                *เฉพาะความคุ้มครองบางบริษัทประกันเท่านั้น เช่น AXA
                            </Typography>
                        </div>

                    </div>
                </div>

                <Grid container spacing={2} >

                    <Grid item xs={12} sm={6} >

                        <div className='flex justify-end '>
                            <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden my-4 relative">

                                <div className="px-8 py-8  bg-gradient-to-r from-blue-800 to-blue-600">
                                    <div className='flex justify-center mt-6 mb-28'>
                                        <Typography className='text-xl text-white' sx={{ position: 'relative', zIndex: 10001 }} component={'div'}>

                                            <div style={{ fontSize: '22px' }}>คุ้มครองแบตเตอรี่</div>
                                            <div style={{ marginTop: '10px', fontSize: '18px' }}>ประกันรถยนต์ไฟฟ้าให้ความคุ้มครองความเสียหายที่เกิดขึ้นกับแบตเตอรี่ ในกรณีความเสียหายที่เกิดจากการชน กระแทก อุบัติเหตุ</div>
                                            <div style={{ marginTop: '10px', marginBottom: '30px' }}>รวมถึงความเสียหายหรือสูญหายของ
                                                สายชาร์จรถยนต์ไฟฟ้า และเครื่องชาร์จรถยนต์ไฟฟ้า</div>

                                        </Typography>
                                    </div>
                                </div>
                                <Image src={rricon2} width={250} height={250} style={{
                                    position: 'absolute',
                                    top: '75%',
                                    left: '75%',
                                    transform: 'translate(-50%, -50%)',
                                    zIndex: 9999,
                                    backgroundSize: 'cover',
                                }} alt="Brand Logo" loading="lazy" />
                            </div>
                        </div>

                    </Grid>

                    {/* ส่วนที่ 2 */}
                    <Grid item xs={12} sm={6} >
                        <div className='flex justify-start'>
                            <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden my-4 relative">
                                <div className="px-8 py-8  bg-gradient-to-r from-blue-800 to-blue-600">
                                    <div className='flex justify-center mt-6 mb-28'>
                                        <Typography sx={{ position: 'relative', zIndex: 10001 }} className='text-xl text-white' component={'div'}>
                                            <div style={{ fontSize: '22px' }}>บริการซ่อม</div>
                                            <div style={{ marginTop: '7px', fontSize: '18px' }}>มีเฉพาะบริการซ่อมศูนย์เท่านั้น (ซ่อมห้าง)</div>
                                            <div style={{ marginTop: '7px', fontSize: '18px' }}>ระยะเวลาซ่อมรถไฟฟ้าใช้ระยะเวลานานกว่ารถยนต์น้ำมัน เนื่องจากอะไหล่บางประเภทต้องสั่งจากต่างประเทศ</div>
                                            <div style={{ marginTop: '7px', fontSize: '18px' }}>ต้องเข้ารับบริการจากศูนย์ที่ได้รับมาตรฐาน ในการซ่อมรถไฟฟ้าเท่านั้น</div>

                                        </Typography>
                                    </div>
                                </div>
                                <Image src={rricon1} width={300} height={300} style={{
                                    position: 'absolute',
                                    top: '78%',
                                    left: '75%',
                                    transform: 'translate(-50%, -50%)',
                                    zIndex: 9999,
                                    backgroundSize: 'cover',
                                }} alt="Brand Logo" loading="lazy" />
                            </div>
                        </div>
                    </Grid>
                </Grid>

                <Typography className='text-2xl text-white text-center mt-24'> รวมแหล่งประกันรถยนต์ EV ที่ครบที่สุด</Typography>

                <Grid container spacing={2} >

                    <Grid item xs={12} sm={6} >

                        <div className='flex justify-end '>
                            <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden my-4 relative">

                                <div className="px-8 py-8  bg-gradient-to-r from-slate-900 to-slate-800">

                                    <Typography className='text-xl text-white' component={'div'}>
                                        <Grid container spacing={2} >
                                            <Grid item xs={12} sm={6} >
                                                <div className='text-xs'>ทุนประกัน</div>
                                                <div className='text-2xl'>555,00 <span className='text-base'>บาท</span></div>
                                                <div className='text-xs mt-4'>ค่าเบี้ยเริ่มต้น</div>
                                                <div className='text-2xl'>19,003 <span className='text-base'>บาท</span></div>
                                                <button type="button" className="mt-4 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-4 py-2.5 me-2 mb-2">
                                                    <Typography>
                                                        ดูรายล่ะเอียด
                                                    </Typography>
                                                </button>
                                            </Grid>
                                            <Grid item xs={12} sm={6} >
                                                <div className='flex justify-center'>
                                                    <Image src={ev1} width={100} height={100} alt="Brand Logo" />
                                                </div>
                                            </Grid>

                                        </Grid>

                                    </Typography>

                                </div>

                            </div>
                        </div>


                        <div className='flex justify-end '>
                            <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden my-4 relative">
                                <div className="px-8 py-8  bg-gradient-to-r from-slate-900 to-slate-800">
                                    <Typography className='text-xl text-white' component={'div'}>
                                        <Grid container spacing={2} >
                                            <Grid item xs={12} sm={6} >
                                                <div className='text-xs'>ทุนประกัน</div>
                                                <div className='text-2xl'>555,00 <span className='text-base'>บาท</span></div>
                                                <div className='text-xs mt-4'>ค่าเบี้ยเริ่มต้น</div>
                                                <div className='text-2xl'>19,003 <span className='text-base'>บาท</span></div>
                                             
                                            </Grid>
                                            <Grid item xs={12} sm={6} >
                                                <div className='flex justify-center'>
                                                    <Image src={ev2} width={100} height={100} alt="Brand Logo" />
                                                </div>
                                            </Grid>

                                        </Grid>

                                    </Typography>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-end '>
                            <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden my-4 relative">
                                <div className="px-8 py-8  bg-gradient-to-r from-slate-900 to-slate-800">
                                    <Typography className='text-xl text-white' component={'div'}>
                                        <Grid container spacing={2} >
                                            <Grid item xs={12} sm={6} >
                                                <div className='text-xs'>ทุนประกัน</div>
                                                <div className='text-2xl'>555,00 <span className='text-base'>บาท</span></div>
                                                <div className='text-xs mt-4'>ค่าเบี้ยเริ่มต้น</div>
                                                <div className='text-2xl'>19,003 <span className='text-base'>บาท</span></div>
                                              
                                            </Grid>
                                            <Grid item xs={12} sm={6} >
                                                <div className='flex justify-center'>
                                                    <Image src={ev3} width={100} height={100} alt="Brand Logo" />
                                                </div>
                                            </Grid>

                                        </Grid>

                                    </Typography>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-end '>
                            <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden my-4 relative">
                                <div className="px-8 py-8  bg-gradient-to-r from-slate-900 to-slate-800">
                                    <Typography className='text-xl text-white' component={'div'}>
                                        <Grid container spacing={2} >
                                            <Grid item xs={12} sm={6} >
                                                <div className='text-xs'>ทุนประกัน</div>
                                                <div className='text-2xl'>555,00 <span className='text-base'>บาท</span></div>
                                                <div className='text-xs mt-4'>ค่าเบี้ยเริ่มต้น</div>
                                                <div className='text-2xl'>19,003 <span className='text-base'>บาท</span></div>
                                               
                                            </Grid>
                                            <Grid item xs={12} sm={6} >
                                                <div className='flex justify-center'>
                                                    <Image src={ev4} width={100} height={100} alt="Brand Logo" />
                                                </div>
                                            </Grid>

                                        </Grid>

                                    </Typography>
                                </div>
                            </div>
                        </div>

                    </Grid>

                    {/* ส่วนที่ 2 */}
                    <Grid item xs={12} sm={6} >
                        <div className='flex justify-start '>
                            <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden my-4 relative">
                                <div className="px-8 py-8  bg-gradient-to-r from-slate-900 to-slate-800">
                                    <Typography className='text-xl text-white' component={'div'}>
                                        <Grid container spacing={2} >
                                            <Grid item xs={12} sm={6} >
                                                <div className='text-xs'>ทุนประกัน</div>
                                                <div className='text-2xl'>555,00 <span className='text-base'>บาท</span></div>
                                                <div className='text-xs mt-4'>ค่าเบี้ยเริ่มต้น</div>
                                                <div className='text-2xl'>19,003 <span className='text-base'>บาท</span></div>
                                                <button type="button" className="mt-4 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-4 py-2.5 me-2 mb-2">
                                                    <Typography>
                                                        ดูรายล่ะเอียด
                                                    </Typography>
                                                </button>
                                            </Grid>
                                            <Grid item xs={12} sm={6} >
                                                <div className='flex justify-center'>
                                                    <Image src={ev5} width={100} height={100} alt="Brand Logo" />
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </Typography>
                                </div>
                            </div>
                        </div>


                        <div className='flex justify-start '>
                            <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden my-4 relative">
                                <div className="px-8 py-8  bg-gradient-to-r from-slate-900 to-slate-800">
                                    <Typography className='text-xl text-white' component={'div'}>
                                        <Grid container spacing={2} >
                                            <Grid item xs={12} sm={6} >
                                                <div className='text-xs'>ทุนประกัน</div>
                                                <div className='text-2xl'>555,00 <span className='text-base'>บาท</span></div>
                                                <div className='text-xs mt-4'>ค่าเบี้ยเริ่มต้น</div>
                                                <div className='text-2xl'>19,003 <span className='text-base'>บาท</span></div>
                                                
                                            </Grid>
                                            <Grid item xs={12} sm={6} >
                                                <div className='flex justify-center'>
                                                    <Image src={ev6} width={100} height={100} alt="Brand Logo" />
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </Typography>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-start '>
                            <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden my-4 relative">
                                <div className="px-8 py-8  bg-gradient-to-r from-slate-900 to-slate-800">
                                    <Typography className='text-xl text-white' component={'div'}>
                                        <Grid container spacing={2} >
                                            <Grid item xs={12} sm={6} >
                                                <div className='text-xs'>ทุนประกัน</div>
                                                <div className='text-2xl'>555,00 <span className='text-base'>บาท</span></div>
                                                <div className='text-xs mt-4'>ค่าเบี้ยเริ่มต้น</div>
                                                <div className='text-2xl'>19,003 <span className='text-base'>บาท</span></div>
                                            
                                            </Grid>
                                            <Grid item xs={12} sm={6} >
                                                <div className='flex justify-center'>
                                                    <Image src={ev7} width={100} height={100} alt="Brand Logo" />
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </Typography>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-start '>
                            <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden my-4 relative">
                                <div className="px-8 py-8  bg-gradient-to-r from-slate-900 to-slate-800">
                                    <Typography className='text-xl text-white' component={'div'}>
                                        <Grid container spacing={2} >
                                            <Grid item xs={12} sm={6} >
                                                <div className='text-xs'>ทุนประกัน</div>
                                                <div className='text-2xl'>555,00 <span className='text-base'>บาท</span></div>
                                                <div className='text-xs mt-4'>ค่าเบี้ยเริ่มต้น</div>
                                                <div className='text-2xl'>19,003 <span className='text-base'>บาท</span></div>
                                              
                                            </Grid>
                                            <Grid item xs={12} sm={6} >
                                                <div className='flex justify-center'>
                                                    <Image src={ev8} width={100} height={100} alt="Brand Logo" />
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </Typography>
                                </div>
                            </div>
                        </div>

                    </Grid>
                </Grid>
                <Link href="/questions">
                <div className="flex items-center justify-center mt-8 ">
                                        <Typography className="mb-28 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-2.5rem px-5 py-5 text-center me-2">
                                            เช็คราคาเบี้ยประกันรถยนต์ <ArrowForwardIcon />
                                        </Typography>
                                    </div>
                                    </Link>
            </ThemeProvider>

        </Box>

    );
}