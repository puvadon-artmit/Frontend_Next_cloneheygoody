"use client";
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Logo from '../../image/logo/logo-acg.png'
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
  typography: {
    fontFamily: 'Kanit, sans-serif',
  },
});

const BootstrapButton = styled('button')({

    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0b4982',
    borderColor: '#0b4982',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        backgroundColor: '#02345d',
        borderColor: '#02345d',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#02345d',
        borderColor: '#005cbf',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
});

export default function contentlogin() {
    return (
        <React.Fragment>
             <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container fixed>
                
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 'auto',
                        marginTop: '20px',
                        padding: '20px',

                    }}
                >
                    <Image src={Logo} alt="Your Image" width={120} height={120} />
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: '25px', md: '25px' },
                            fontWeight: 'bold',
                            display: 'flex',
                            alignItems: 'center',
                            color: 'black',
                            textAlign: 'center',
                            marginTop: '35px'
                        }}
                    >
                        เข้าสู่ระบบ เพื่อดูรายละเอียดกรมธรรม์
                    </Typography>
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: '20px', md: '20px' },
                            display: 'flex',
                            alignItems: 'center',
                            color: 'black',
                            textAlign: 'center',
                            marginTop: '18px'
                        }}
                    >
                        เฉพาะประกันรถยนต์เท่านั้น โดยกรอกหมายเลข
                    </Typography>
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: '20px', md: '20px' },
                            display: 'flex',
                            alignItems: 'center',
                            color: 'black',
                            textAlign: 'center',
                            marginTop: '5px',
                            marginBottom: '20px'
                        }}
                    >
                        บัตรประชาชนของผู้เอาประกัน
                    </Typography>
                    <Stack spacing={2} direction="column" sx={{ maxWidth: '500px', width: '100%' }}>
                        <TextField label="เลขบัตรประชาชน" variant="outlined" fullWidth />
                        <BootstrapButton sx={{color : 'white', width: '100%', borderRadius: '20px', height: '55px', marginTop: '20px',fontFamily: 'Kanit, sans-serif' }}>
                            เข้าสู่ระบบ
                        </BootstrapButton>
                    </Stack>

                    <Box
                        sx={{
                            width: '100%',
                            textAlign: 'center',
                            position: 'fixed',
                            bottom: '0',
                            left: '0',
                            padding: '10px',
                            backgroundColor: '#f9f9f9',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: { xs: '16px', md: '16px' },
                                color: 'black',
                            }}
                        >
                            มีปัญหา ทักหาเราได้ตลอด 24 ชม.
                        </Typography>
                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: { xs: '16px', md: '16px' },
                                color: 'black',marginTop: '10px'
                            }}
                        >
                            Email info@ach.co.th
                        </Typography>
                    </Box>
                </Box>
            </Container>
            </ThemeProvider>
        </React.Fragment>
    )
}