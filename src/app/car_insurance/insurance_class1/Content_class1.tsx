"use client"
import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import CustomFooter from '@/component/CustomFooter';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Card_insurance from './Card_insurance'



export default function Content_class1() {
   


    return (
        <div>

            <Box sx={{ marginLeft: '200px', marginTop: '10px' }}>
                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                    <Link color="inherit" href="/">
                        หน้าหลัก
                    </Link>
                    <Link color="inherit" href="/category">
                        ประกันรถยนต์
                    </Link>
                    <Typography color="text.primary">ประกันรถยนต์ชั้น 1</Typography>
                </Breadcrumbs>
            </Box>

            {/* <Card_insurance /> */}
            {/* <CustomFooter /> */}
        </div>

    )
}