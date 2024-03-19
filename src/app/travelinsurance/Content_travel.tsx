"use client"
import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from 'next/link';
import { Typography, Snackbar } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import AlertTitle from '@mui/material/AlertTitle';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Alert } from '@mui/material';
import Card_travel from './Card_travel';
import Cardtl_detail from './Cardtl_detail';
import Promotion from './Promotion';
import Travel_insurance from './Travel_insurance';
import Table_travel from './Table_travel';



const travelStyles = makeStyles((theme) => ({
    textWithMargin: {
        marginLeft: '20%',
        color: 'black',
        fontSize: '20px',

    },
    textClick: {
        marginTop: '20px',
        marginLeft: '120px',
        color: 'black',
        fontSize: '15px',
    },
}));

export default function Content_travel() {
    const classes = travelStyles();
    const [openSnackbar, setOpenSnackbar] = useState(false);


    const copyText = () => {
        const textToCopy = 'Autocorp10';
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                setOpenSnackbar(true);
            })
            .catch((error) => {
                console.error('คัดลอกไม่สำเร็จ: ', error);
            });
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <Container maxWidth="lg">
            <Breadcrumbs aria-label="breadcrumb" sx={{ marginTop: '10px' }}>
                <Link href="/search" passHref>
                    หน้าแรก
                </Link>
                <Link href="/search" passHref>
                    ประกันเดินทาง
                </Link>
            </Breadcrumbs>

            <Grid container spacing={0} sx={{ marginTop: '20px' }}>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ fontSize: { xs: '20px', md: '40px' }, color: 'black', fontWeight: 'bold',marginLeft: '19%' }}>
                        <span style={{ color: '#000000', marginRight: '10px' }}>ใส่โค้ด</span><span style={{ color: '#08345c' }}>Autocorp10</span>
                    </Typography>
                    <Typography sx={{ fontSize: { xs: '20px', md: '30px' }, color: 'black', fontWeight: 'bold', marginBottom: '20px',marginLeft: '19%' }}>
                        ลด 10% ทุกแผน
                    </Typography>

                    <Typography className='ml-28 font-bold'>
                        ซื้อ MSIG รับเพิ่ม! Starbucks สูงสุด 600 บ.
                    </Typography>
                    <Typography className='ml-28 font-bold'>
                        ซื้อรายปีรับอีก! GrabGifts สูงสุด 600 บ.
                    </Typography>

                    <Typography className='ml-28 '>
                        ดูเงื่อนไขโปรโมชั่น <span style={{ color: '#3b84f3', fontSize: '15px', textDecoration: 'underline' }}>คลิ๊ก</span>
                    </Typography>


                </Grid>
                <Grid item xs={12} md={6}>
                    <div className="max-w-xs mx-auto overflow-hidden rounded-lg shadow-lg">
                        <div className="px-4 py-2 bg-gradient-to-r from-blue-900 to-blue-800">
                            <Typography sx={{ fontSize: { xs: '20px', md: '20px' }, color: 'white', fontWeight: 'bold' }}>
                                โค้ดส่วนลด 10% OFF
                            </Typography>
                        </div>
                        <div className="px-4 py-2 bg-white">
                            <Typography sx={{ fontSize: { xs: '26px', md: '26px' }, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>
                                Autocorp10
                            </Typography>
                        </div>
                        <div className="flex justify-end px-4 py-2 bg-white" onClick={copyText}>
                            <ContentCopyIcon sx={{ marginRight: '6px', color: '#3c87f0', cursor: 'pointer' }} />
                            <Typography sx={{ fontSize: { xs: '20px', md: '20px' }, color: '#3c87f0', fontWeight: 'bold', textAlign: 'center', cursor: 'pointer' }}>
                                คัดลอก
                            </Typography>
                        </div>
                    </div>
                </Grid>
            </Grid>

            <Card_travel />

            <Cardtl_detail />

            <Promotion />

            <Travel_insurance />

            <Table_travel />



            <Snackbar
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>

                <Alert onClose={handleCloseSnackbar} severity="success">
                    คัดลอกสำเร็จ
                </Alert>
            </Snackbar>
        </Container>
    );
}