"use client";
import React from 'react';
import iconsmail from '../image/iconsmail.png';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';

type Props = {}

export default function Benefit({ }: Props) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                height: '35vh'
                ,color: '#888888'
                
            }}
        >
             <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography
                variant="h1"
                sx={{
                    fontSize: { xs: '35px', md: '45px' },
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                ทำประกันออนไลน์กับ <span style={{ color: '#00345c', paddingLeft: '12px',paddingRight: '12px' }}>autocorp </span>   {' '} ดียังไง?
              
            </Typography>
            </motion.div>
        </Box>

    )
}