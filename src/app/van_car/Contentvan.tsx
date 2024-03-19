"use client";
import * as React from 'react';
import { Grid, Box, Button } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import MT1 from '../../image/typecars/carx1.svg'
import MT2 from '../../image/typecars/carx2.svg'
import MT3 from '../../image/typecars/carx3.svg'

import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
    typography: {
        fontFamily: 'Kanit, sans-serif',
    },
});

export default function Contentvan() {
    return (
        <div>

            <ThemeProvider theme={theme}>

                <>
                    <Grid container justifyContent="center">
                        <Grid item xs={12}>
                            <Box
                                sx={{
                                    position: 'relative',
                                    width: '100%',
                                    flexDirection: 'column',
                                    height: '30vh',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >

                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{
                                        fontSize: '40px',
                                        fontWeight: 'bold',
                                        textAlign: 'start',
                                        color: 'black',
                                        position: 'relative',
                                        zIndex: 1,
                                        textDecoration: 'underline',
                                    }}
                                >
                                    คุณขับรถประเภทไหน
                                </Typography>

                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{
                                        fontSize: '20px',

                                        textAlign: 'start',
                                        color: 'black',
                                        position: 'relative',
                                        zIndex: 1,

                                    }}
                                >
                                    เฉพาะรถส่วนบุคคลเท่านั้น
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </>





                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'center',
                        alignItems: 'center',
                    }}>
                        <Grid container spacing={2} sx={{
                            width: '100%',
                            margin: 'auto',
                        }}>
                            <Grid item xs={12} sm={6} md={4}>
                                <Link href="/checkinsurance">

                                    <Box sx={{
                                        bgcolor: '#FFFFFF',
                                        height: '200px',
                                        width: '200px',
                                        borderRadius: '10%',
                                        overflow: 'hidden',
                                        flexDirection: 'column',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        margin: '0 auto',
                                        border: '0.5px solid gray',

                                        '&:hover': {
                                            backgroundColor: '#F5F5F5',
                                        }
                                    }}>
                                        <Image src={MT1} alt="HeyGoody Logo" width={140} height={140} />
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{
                                                fontSize: '18px',
                                                color: 'black',

                                            }}
                                        >
                                            รถเก๋ง / กระบะ 4 ประตู /
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{
                                                fontSize: '18px',
                                                color: 'black',

                                            }}
                                        >
                                            รถตู้ ไม่เกิน 7 ที่นั่ง
                                        </Typography>
                                    </Box>
                                </Link>
                            </Grid>


                            <Grid item xs={12} sm={6} md={4}>
                                <Link href="/Electric_car">

                                    <Box sx={{
                                        bgcolor: '#FFFFFF',
                                        height: '200px',
                                        width: '200px',
                                        borderRadius: '10%',
                                        overflow: 'hidden',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        margin: '0 auto',
                                        border: '0.5px solid gray',
                                        '&:hover': {
                                            backgroundColor: '#F5F5F5',
                                        }
                                    }}>
                                        <Image src={MT2} alt="HeyGoody Logo" width={140} height={140} />
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{
                                                fontSize: '18px',
                                                color: 'black',

                                            }}
                                        >
                                            รถไฟฟ้า EV
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{
                                                fontSize: '18px',
                                                color: 'black',

                                            }}
                                        >
                                            ไม่เกิน 7 ที่นั่ง
                                        </Typography>
                                    </Box>
                                </Link>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Link href="/van_car">

                                    <Box sx={{
                                        bgcolor: '#edf8f5',
                                        height: '200px',
                                        width: '200px',
                                        borderRadius: '10%',
                                        overflow: 'hidden',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        margin: '0 auto',
                                        border: '2.5px solid green',
                                    }}>
                                        <Image src={MT3} alt="HeyGoody Logo" width={140} height={140} />
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{
                                                fontSize: '18px',
                                                color: 'black',

                                            }}
                                        >
                                            รถตู้
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{
                                                fontSize: '18px',
                                                color: 'black',
                                            }}
                                        >
                                            เกิน 7 ที่นั่ง <span style={{
                                                fontSize: '10px',
                                                color: 'black',
                                                border: '1px solid blue',
                                                display: 'inline-block',
                                                padding: '2px', // เพิ่มระยะห่างรอบข้อความ
                                                borderRadius: '15%',

                                            }}>
                                                ป้ายฟ้า
                                            </span>
                                        </Typography>
                                    </Box>
                                </Link>
                            </Grid>
                        </Grid>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                                fontSize: '40px',
                                fontWeight: 'bold',
                                textAlign: 'start',
                                color: 'black',
                                position: 'relative',
                                zIndex: 1,
                                textDecoration: 'underline',
                                marginTop: '80px',
                                marginBottom: '20px'
                            }}
                        >
                            ยี่ห้อรถ
                        </Typography>
                    </Box>
                </Box>
            </ThemeProvider>
        </div>
    )
}