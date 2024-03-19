"use client"
import { useState } from 'react';
import { Grid, Box, Button } from '@mui/material';
import { Typography, Snackbar } from '@mui/material';
import Image from 'next/image'
import useMediaQuery from '@mui/material/useMediaQuery';
import Car from '../../../image/background/car_ev.png'
import Employee from '../../../image/how-to/employee.jpg'
import Container from '@mui/material/Container';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { makeStyles } from '@mui/styles';
import banner from '../../../image/banner/MG_banner.png'
import backgroundImage from '../../../image/background/bg-mainins.png'
import CustomNavbar from '@/component/CustomNavbar'
import '../../../css/background.css'
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

export default function Header_Ev() {
    const isMobile = useMediaQuery('(max-width:600px)');

    const [showFullContent, setShowFullContent] = useState(false);

    const handleToggleContent = () => {
        setShowFullContent(!showFullContent);
    };

    return (
        <div>
            <ThemeProvider theme={theme}>
                {!isMobile && (
                    <div className="backgroundClass">
                        <CustomNavbar />
                        <Container maxWidth="lg">
                            <Grid container spacing={0} sx={{ marginTop: '60px' }}>
                                {/* -----------------------------  card1 ------------------------------------------------------------------- */}
                                <Grid item xs={12} md={7}>

                                    <div className='flex justify-center'>
                                        <Image src={Car} alt="HeyGoody Logo" width={800} height={800} />
                                    </div>


                                </Grid>

                                {/* -----------------------------  card2 ------------------------------------------------------------------- */}

                                <Grid item xs={12} md={5}>
                                    <Box sx={{ whiteSpace: 'pre-line', marginLeft: '60px' }}>
                                        <Typography sx={{ fontSize: '30px', fontWeight: 'bold', color: '#f9f9f4' }}>ประกันรถยนต์ไฟฟ้า</Typography>
                                        <Typography sx={{ fontSize: '20px', marginTop: '10px', color: '#f9f9f4' }}>ประเภทไหน heygoody ก็มีครบ!</Typography>
                                        <Typography sx={{ fontSize: '16px', marginTop: '10px', fontWeight: 'bold', color: '#3786f4' }}>ORA Good Cat ราคาเริ่มต้น</Typography>

                                        <Typography sx={{ fontSize: '45px', marginTop: '10px', fontWeight: 'bold', color: '#f9f9f4' }}>19,093 <span className='text-lg'>บาท</span></Typography>

                                    </Box>
                                    <Link href="/checkinsurance">
                                    <div className="flex items-center justify-center mt-8 mr-28">
                                        <Typography className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-2.5rem px-5 py-5 text-center me-2 mb-2">
                                            เช็คราคาเบี้ยประกันรถยนต์ <ArrowForwardIcon />
                                        </Typography>
                                    </div>
                                    </Link>
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
                                        color: 'white',
                                        marginTop: '80px',
                                        

                                    }}
                                >
                                    {showFullContent ? (
                                        <>
                                            &nbsp;&nbsp;&nbsp;&nbsp;heygoody รวมประกันรถยนต์ไฟฟ้าหลากหลายให้คุณได้เปรียบเทียบ ไม่ว่าจะเป็นรถยนต์ไฟฟ้า (EV) รถยนต์ไฟฟ้าแบบปลั๊กอินไฮบริด (PHEV) รวมถึงรถยนต์ไฟฟ้าประเภทอื่นๆ ที่มอบความคุ้มค่า ตอบโจทย์และพร้อมคุ้มครองแบบ จัดเต็ม ให้คุณเดินทางได้อย่างสบายใจ ไร้กังวล
                                            ซื้อวันนี้รับโปรโมชั่นพิเศษ ผ่อนประกันรถยนต์ไฟฟ้า 0% สูงสุด 10 เดือน!
                                            <br />
                                            <br />
                                            มีประกันรถยนต์ไฟฟ้าดียังไง
                                            <br />
                                            <br />
                                            การมีประกันรถยนต์ไฟฟ้าจะช่วยให้คุณใช้รถยนต์ไฟฟ้าได้อย่างปลอดภัย เพราะมีการเตรียมพร้อมสำหรับทุกสถานการณ์ โดยประกันรถยนต์ไฟฟ้าชั้น 1 นั้น คุ้มครองสูงสุดเหมือนประกันชั้น 1 รถยนต์พลังงานเชื้อเพลิง
และยังช่วยให้คุณประหยัดค่าซ่อมแบตเตอรี่และอะไหล่ส่วนอื่นๆ ที่มีราคาสูงอีกด้วย
                                        </>
                                    ) : (
                                        'heygoody รวมประกันรถยนต์ไฟฟ้าหลากหลายให้คุณได้เปรียบเทียบ ไม่ว่าจะเป็นรถยนต์ไฟฟ้า (EV) รถยนต์ไฟฟ้าแบบปลั๊กอินไฮบริด (PHEV) รวมถึงรถยนต์ไฟฟ้าประเภทอื่นๆ ที่มอบความคุ้มค่า ตอบโจทย์และพร้อมคุ้มครองแบบ จัดเต็ม ให้คุณเดินทางได้อย่างสบายใจ ไร้กังวล'
                                    )}
                                </Typography>

                                {!showFullContent && (
                                    <Button
                                        variant="outlined"
                                        onClick={handleToggleContent}
                                        sx={{
                                            borderRadius: '20px',
                                            border: '1px solid white',
                                            color: 'white',
                                            marginTop: '10px',
                                            fontWeight: 'bold',

                                        }}
                                    >
                                        อ่านต่อ
                                    </Button>
                                )}
                                <div className='flex justify-center rounded-lg overflow-hidden mt-16'>
                                    <Image src={banner} alt="HeyGoody Logo" width={800} height={600} />
                                </div>

                            </Box>
                        </Container>
                    </div>
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

                        <div className='flex justify-center rounded-lg overflow-hidden mt-16'>
                            <Image src={banner} alt="HeyGoody Logo" width={600} height={600} />
                        </div>
                    </Container>
                )}
            </ThemeProvider>
        </div>

    )
}