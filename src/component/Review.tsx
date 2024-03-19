"use client";
import { useState, useEffect } from 'react';
import iconsmail from '../image/iconsmail.png';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import car1 from '../image/car 1.svg'
import { motion } from 'framer-motion';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Kanit, sans-serif',
    },
});
export default function Review() {
    const [showFullContent, setShowFullContent] = useState(false);

    const handleToggleContent = () => {
        setShowFullContent(!showFullContent);
    };

    const [isVisible4, setIsVisible4] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            const triggerScroll = 1900;

            if (currentScroll > triggerScroll) {
                setIsVisible4(true);
            } else {
                setIsVisible4(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
                alignItems: 'start',
                textAlign: 'start',
                color: 'white',
                marginBottom: { xs: '20px', md: '10px' },
                marginLeft: { xs: '20px', md: '180px' },
                marginTop: { xs: '40px', md: '80px' }
            }}
        >
            <ThemeProvider theme={theme}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isVisible4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 1 }}
                >

                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: '32px', md: '35px' },
                            fontWeight: 'bold',
                            display: 'flex',
                            alignItems: 'start',
                            color: 'black'
                        }}
                    >

                        รีวิวจากเหล่า autocorp
                    </Typography>


                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: { xs: '16px', md: '18px' },
                            fontWeight: 'bold',
                            marginTop: { xs: '10px', md: '20px' },
                            color: '#888888',
                            fontFamily: 'Kanit, sans-serif',
                        }}
                    >
                        อ่านประสบการณ์ซื้อประกันจากลูกค้า autocorp
                    </Typography>
                </motion.div>
            </ThemeProvider>
        </Box>
    )
}