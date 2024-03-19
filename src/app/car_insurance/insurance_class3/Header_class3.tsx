"use client"
import { useState } from 'react';
import { Grid, Box, Button } from '@mui/material';
import { Typography, Snackbar } from '@mui/material';
import Image from 'next/image'
import useMediaQuery from '@mui/material/useMediaQuery';
import Car from '../../../image/background/car_class_3.png'
import Employee from '../../../image/how-to/employee.jpg'
import Container from '@mui/material/Container';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { makeStyles } from '@mui/styles';
import Link from 'next/link'

import {
    createTheme,
    ThemeProvider,
} from '@mui/material';

const theme = createTheme({
    typography: {
        fontFamily: 'Kanit, sans-serif',
    },
});

export default function Header_class3() {
    const isMobile = useMediaQuery('(max-width:600px)');

    const [showFullContent, setShowFullContent] = useState(false);

    const handleToggleContent = () => {
        setShowFullContent(!showFullContent);
    };

    return (
        <div>
            <ThemeProvider theme={theme}>
                {!isMobile && (
                    <Container fixed>
                        <Grid container spacing={0} sx={{ marginTop: '60px' }}>
                            {/* -----------------------------  card1 ------------------------------------------------------------------- */}
                            <Grid item xs={12} md={5}>

                                <Box sx={{ whiteSpace: 'pre-line', marginLeft: '160px' }}>
                                    <Typography sx={{ fontSize: '30px', fontWeight: 'bold', color: '#08345c' }}>ซื้อประกันรถยนต์ชั้น 3+/3</Typography>
                                    <Typography sx={{ fontSize: '20px', marginTop: '10px' }}>คุ้มครองจัดหนัก ในค่าเบี้ยที่ลดลง</Typography>
                                    <Typography sx={{ fontSize: '16px', marginTop: '10px', fontWeight: 'bold', color: '#08345c' }}>ราคาเริ่มต้น</Typography>

                                    <Typography sx={{ fontSize: '45px', marginTop: '10px', fontWeight: 'bold' }}>7,5XX <span className='text-lg'>บาท</span></Typography>

                                </Box>
                                <Link href="/checkinsurance">
                                <div className="flex items-center justify-center mt-8 ml-16">
                                    <Typography className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-2.5rem px-5 py-5 text-center me-2 mb-2">
                                        เช็คราคาเบี้ยประกันรถยนต์ <ArrowForwardIcon />
                                    </Typography>
                                </div>
                                </Link>
                            </Grid>

                            {/* -----------------------------  card2 ------------------------------------------------------------------- */}

                            <Grid item xs={12} md={7}>
                                <div className='flex justify-start'>
                                    <Image src={Car} alt="HeyGoody Logo" width={600} height={600} />
                                </div>
                            </Grid>

                        </Grid>

                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textAlign: 'center',
                                color: 'white',
                                height: 'auto', // Adjusted height to 'auto' for responsiveness
                                padding: '20px', // Added padding for better spacing
                                maxWidth: '800px', // Added maxWidth for better content readability on larger screens
                                margin: '0 auto', // Center content horizontally
                            }}
                        >

                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: { xs: '18px', md: '18px' },
                                    display: 'flex',
                                    alignItems: 'center',
                                    color: 'black',
                                    marginTop: '80px'

                                }}
                            >
                                {showFullContent ? (
                                    <>
                                        &nbsp;&nbsp;&nbsp;&nbsp;ซื้อประกันรถยนต์ชั้น 2 ที่ heygoody คุ้มครองเมื่อรถชนรถแบบที่มีคู่กรณี ปกป้องอย่างครบถ้วน ดูแลอย่างครบครันไฟไหม้รถ รถหาย ก็ยังสบายใจได้สามารถซื้อความคุ้มครองภัยน้ำท่วมเพิ่มเติมได้ คุ้มครองครอบคลุมน้อยกว่าประกันชั้นแต่ยังคงคุ้มค่าในราคาที่อุ่นใจ
                                        <br />
                                        <br />
                                        ซื้อประกันรถยนต์ชั้น 2+ ที่ไหนดี? ต้อง heygoody!
                                        <br />
                                        <br />
                                        heygoody คือโบรกเกอร์ประกันภัยรถยนต์ออนไลน์ที่รวบรวมประกันภัยชั้น 2+ จากบริษัทประกันชั้นนำกว่า 15 บริษัท พร้อมให้คุณเช็คเบี้ยประกันรถยนต์ได้อย่างง่ายดายเพียงแค่ไม่กี่คลิก ไม่โทรจุกจิกกวนใจ ให้คุณซื้อประกันออนไลน์ได้ง่ายๆ ด้วยตัวเอง ไม่ต้องคุยผ่านเซลล์ ทำให้เราเอาเงินส่วนต่างมาลดราคาให้กับคุณได้ พร้อมโปรโมชั่น ผ่อน 0% สูงสุด 10 เดือน
                                    </>
                                ) : (
                                    'ซื้อประกันรถยนต์ชั้น 2 ที่ heygoody คุ้มครองเมื่อรถชนรถแบบที่มีคู่กรณี ปกป้องอย่างครบถ้วน ดูแลอย่างครบครันไฟไหม้รถ รถหาย ก็ยังสบายใจได้สามารถซื้อความคุ้มครองภัยน้ำท่วมเพิ่มเติมได้ คุ้มครองครอบคลุมน้อยกว่า'
                                )}
                            </Typography>

                            {!showFullContent && (
                                <Button
                                    variant="outlined"
                                    onClick={handleToggleContent}
                                    sx={{
                                        borderRadius: '20px',
                                        border: '1px solid black',
                                        color: 'black',
                                        marginTop: '10px',
                                        fontWeight: 'bold',

                                    }}
                                >
                                    อ่านต่อ
                                </Button>
                            )}

                        </Box>
                    </Container>
                )}




                {/* --------------------------------------------------------------------------------------------------------------------------------------------------------- */}
                {isMobile && (
                    <Container fixed>
                        <Grid container spacing={0} sx={{ marginTop: '20px' }}>
                            {/* -----------------------------  card1 ------------------------------------------------------------------- */}
                            <Grid item xs={12} md={5}>

                                <Box sx={{ whiteSpace: 'pre-line' }}>
                                    <Typography sx={{ fontSize: '30px', fontWeight: 'bold', color: '#08345c' }}>ซื้อประกันรถยนต์ชั้น 1</Typography>
                                    <Typography sx={{ fontSize: '20px', marginTop: '10px' }}>คุ้มครองสูงสุด ปกป้องทุกกรณี</Typography>
                                    <Typography sx={{ fontSize: '16px', marginTop: '10px', fontWeight: 'bold', color: '#08345c' }}>ราคาเริ่มต้น</Typography>

                                    <Typography sx={{ fontSize: '45px', marginTop: '10px', fontWeight: 'bold' }}>7,5XX <span className='text-lg'>บาท</span></Typography>

                                </Box>

                                <div className="flex items-center justify-start mt-8 ">
                                    <Typography className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-2.5rem px-5 py-5 text-center me-2 mb-2">
                                        เช็คราคาเบี้ยประกันรถยนต์ <ArrowForwardIcon />
                                    </Typography>
                                </div>

                            </Grid>

                            {/* -----------------------------  card2 ------------------------------------------------------------------- */}

                            <Grid item xs={12} md={7}>
                                <div className='flex justify-start'>
                                    <Image src={Car} alt="HeyGoody Logo" width={600} height={600} />
                                </div>
                            </Grid>

                        </Grid>

                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textAlign: 'center',
                                color: 'white',
                                height: 'auto', // Adjusted height to 'auto' for responsiveness
                                padding: '20px', // Added padding for better spacing
                                maxWidth: '800px', // Added maxWidth for better content readability on larger screens
                                margin: '0 auto', // Center content horizontally
                            }}
                        >

                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: { xs: '18px', md: '18px' },
                                    display: 'flex',
                                    alignItems: 'center',
                                    color: 'black',
                                    marginTop: '80px'

                                }}
                            >
                                {showFullContent ? (
                                    <>
                                        &nbsp;&nbsp;&nbsp;&nbsp;ISR มีประกันภัยรถยนต์ชั้น 1 ที่พร้อมให้ความคุ้มครองทุกกรณี เหมาะกับรถคันแรก คนที่เพิ่งหัดขับ  หรือรักรถเป็นพิเศษ อยากได้และมองหาความคุ้มครองสูงสุด
                                        เพิ่มความอุ่นใจจากอุ่นใจจากภัยธรรมชาติ หรือการโจรกรรม พร้อมปกป้องคุณและคู่กรณีเกี่ยวกับชีวิต และทรัพย์สิน สร้างความมั่นใจในราคาที่ใช่สำหรับคุณ
                                        <br />
                                        <br />
                                        ซื้อประกันรถยนต์ชั้น 2 ที่ไหนดี? ที่ heygoody ไง!
                                        <br />
                                        <br />
                                        ISR มีประกันรถยนต์ชั้น 2 ให้คุณซื้อประกันออนไลน์ในราคาพิเศษ ไม่ผ่านคนกลาง และนำมาเป็นส่วนลดให้กับคุณ เช็คเบี้ยประกันได้ง่ายๆ ผ่านเว็บไซต์ ผ่อน 0% สูงสุด 10 เดือนทุกแผนประกัน เคลมง่ายผ่านไลน์ @ISR มีเจ้าหน้าที่ของเราให้บริการตลอด 24 ชั่วโมง
                                    </>
                                ) : (
                                    'ISR มีประกันภัยรถยนต์ชั้น 2 ที่พร้อมให้ความคุ้มครองทุกกรณี เหมาะกับรถคันแรก คนที่เพิ่งหัดขับ  หรือรักรถเป็นพิเศษ อยากได้และมองหาความคุ้มครองสูงสุด '
                                )}
                            </Typography>

                            {!showFullContent && (
                                <Button
                                    variant="outlined"
                                    onClick={handleToggleContent}
                                    sx={{
                                        borderRadius: '20px',
                                        border: '1px solid black',
                                        color: 'black',
                                        marginTop: '10px',
                                        fontWeight: 'bold',

                                    }}
                                >
                                    อ่านต่อ
                                </Button>
                            )}

                        </Box>
                    </Container>
                )}
            </ThemeProvider>
        </div>

    )
}