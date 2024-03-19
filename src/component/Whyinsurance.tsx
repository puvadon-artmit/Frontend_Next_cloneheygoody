"use client";
import { useState, useEffect } from 'react';
import iconsmail from '../image/iconsmail.png';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';


export default function Whyinsurance() {
    const [isVisible3, setIsVisible3] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            const triggerScroll = 1700;

            if (currentScroll > triggerScroll) {
                setIsVisible3(true);
            } else {
                setIsVisible3(false);
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
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                color: 'white',
                height: '35vh',
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 1 }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: { xs: '25px', md: '35px' },
                        fontWeight: 'bold',
                        display: 'flex',
                        alignItems: 'center',
                        color: '#888888',
                        fontFamily: 'Kanit, sans-serif'
                    }}
                >
                    ซื้อประกันออนไลน์กับ autocorp ง่ายๆ แค่ {' '}
                    <span style={{ color: '#00345c', paddingLeft: '8px' }}> Pick & Pay</span>
                </Typography>
            </motion.div>
        </Box>

    )
}