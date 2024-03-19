"use client"
import React, { useState } from 'react';
import Image from 'next/image'
import Container from '@mui/material/Container';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from 'next/link';
import { Typography, Snackbar } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import AlertTitle from '@mui/material/AlertTitle';
import { Grid, Divider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Alert } from '@mui/material';
import Card_travel from './Card_travel';
import Cardtl_detail from './Cardtl_detail';
import { createTheme } from '@mui/material/styles';
import { Card, CardContent } from '@mui/material';
import ki01 from '../../image/travelinsurance/ki02.png'
import visa01 from '../../image/travelinsurance/visa01.png'
import aia01 from '../../image/travelinsurance/aia01.png'
import icon from '../../image/icon_car/small_travel.svg'
import star from '../../image/travelinsurance/star.png'



const useStyles = makeStyles((theme) => ({
    textWithMargin: {
        color: 'black',
        fontWeight: 'bold',
        marginLeft: '40px'
    },
    textShow: {
        color: 'green',
        fontWeight: 'bold',
        marginLeft: '40px'
    },
    textif: {
        textDecoration: 'underline',
        marginLeft: '40px'
    },
    leftBorder: {
        borderRight: `1.5px solid #D9D7D7`,

    },
    container: {
        backgroundColor: 'white',
        padding: '3px',
        borderRadius: '8px',
        flexDirection: 'column',
        width: '50px',
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
    },
    containerstar: {
        backgroundColor: 'white',
        padding: '3px',
        borderRadius: '8px',
        width: '50px',
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
    },
    image: {
        width: '140%',
        height: '140%',
        objectFit: 'cover',
        borderRadius: '8px',
    },
    imageicon: {
        width: '40%',
        height: '40%',
        objectFit: 'cover',
        borderRadius: '8px',
    },
    imageiconstar: {
        width: '50%',
        height: '50%',
        objectFit: 'cover',
        borderRadius: '8px',
    },
    fontname: {
        textAlign: 'center',
        marginTop: '10px',
    },
    fontdetail: {
        textAlign: 'center',
        color: '#0272e2'
    },
    fontsale: {
        textAlign: 'center',
    },
    fonttable: {
        marginTop: '10px'
    },

}));
export default function Promotion() {
    const classes = useStyles();
    return (
        <Container maxWidth="lg">
            <Card sx={{ marginTop: '80px' }}>
                <CardContent>
                    <Grid container>
                        <Grid item xs={4} className={classes.leftBorder}>
                            <Typography className={classes.textWithMargin} sx={{ fontSize: { xs: '10px', md: '30px' } }}>
                                เปรียบเทียบ
                            </Typography>
                            <Typography className={classes.textShow} sx={{ fontSize: { xs: '10px', md: '26px' } }} >
                                ความคุ้มครอง
                            </Typography>
                            <Typography className={classes.textif} sx={{ fontSize: { xs: '10px', md: '16px' } }} >
                                เงื่อนไขกรมธรรม์
                            </Typography>

                        </Grid>
                        <Grid item xs={8} >
                            <Grid container spacing={2}>

                                <Grid item xs={4} className={classes.leftBorder}>
                                    <div className={classes.container}>
                                        <Image src={visa01} className={classes.image} alt="Picture" />
                                    </div>
                                    <Typography className={classes.fontname} sx={{ fontSize: { xs: '10px', md: '12px' } }}>เริ่มต้น</Typography>
                                    <Typography className={classes.fontdetail} sx={{ fontSize: { xs: '12px', md: '22px' } }}>173</Typography>
                                    <Typography className={classes.fontsale} sx={{ fontSize: { xs: '10px', md: '14px' } }}>จาก 190 .-</Typography>
                                    <div className='flex justify-center'>
                                        <button type="button" className="mt-2 mb-4 text-white bg-blue-900 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-xs md:text-sm px-3 md:px-5 py-1 md:py-2 text-center">ซื้อเลย</button>
                                    </div>

                                </Grid>
                                <Grid item xs={4} className={classes.leftBorder}>
                                    <div className={classes.container}>
                                        <Image src={ki01} className={classes.image} alt="Picture" />
                                    </div>
                                    <Typography className={classes.fontname} sx={{ fontSize: { xs: '10px', md: '12px' } }}>เริ่มต้น</Typography>
                                    <Typography className={classes.fontdetail} sx={{ fontSize: { xs: '12px', md: '22px' } }}>180</Typography>
                                    <Typography className={classes.fontsale} sx={{ fontSize: { xs: '10px', md: '14px' } }}>จาก 200 .-</Typography>
                                    <div className='flex justify-center'>
                                        <button type="button" className="mt-2 mb-4 text-white bg-blue-900 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-xs md:text-sm px-3 md:px-5 py-1 md:py-2 text-center">ซื้อเลย</button>
                                    </div>
                                </Grid>
                                <Grid item xs={4} >
                                    <div className={classes.container}>
                                        <Image src={aia01} className={classes.image} alt="Picture" />
                                    </div>
                                    <Typography className={classes.fontname} sx={{ fontSize: { xs: '10px', md: '12px' } }}>เริ่มต้น</Typography>
                                    <Typography className={classes.fontdetail} sx={{ fontSize: { xs: '12px', md: '22px' } }}>168</Typography>
                                    <Typography className={classes.fontsale} sx={{ fontSize: { xs: '10px', md: '14px' } }}>จาก 186 .-</Typography>
                                    <div className='flex justify-center'>
                                        <button type="button" className="mt-2 mb-4 text-white bg-blue-900 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-xs md:text-sm px-3 md:px-5 py-1 md:py-2 text-center">ซื้อเลย</button>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* ------------------------   1 ---------------------------------------------------------------------------------               */}
                    <hr />

                    <Grid container>
                        <Grid item xs={4} className={classes.leftBorder}>
                            <Typography className={classes.fonttable} sx={{ fontSize: { xs: '10px', md: '16px' } }}>
                                <span className="font-bold">  เที่ยวญี่ปุ่น </span>    ไม่ต้องสำรองจ่าย ทั้งผู้ป่วยนอก ผู้ป่วยใน
                            </Typography>


                        </Grid>
                        <Grid item xs={8} >
                            <Grid container spacing={2}>

                                <Grid item xs={4} className={classes.leftBorder}>
                                    <div className={classes.container}>
                                        <Image src={star} className={classes.imageiconstar} alt="Picture" />
                                        <Typography sx={{ fontSize: { xs: '10px', md: '12px' } }}>
                                            แนะนำ
                                        </Typography>
                                    </div>


                                </Grid>
                                <Grid item xs={4} className={classes.leftBorder}>
                                    <div className={classes.container}>
                                        <Image src={star} className={classes.imageiconstar} alt="Picture" />
                                        <Typography sx={{ fontSize: { xs: '10px', md: '12px' } }}>
                                            แนะนำ
                                        </Typography>
                                    </div>

                                </Grid>
                                <Grid item xs={4} >
                                    <div className={classes.container}>
                                        <Image src={icon} className={classes.imageicon} alt="Picture" />
                                    </div>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* ----------------------------- 2  ----------------------------------------------------------------------------               */}
                    <hr />
                    <Grid container>
                        <Grid item xs={4} className={classes.leftBorder}>
                            <Typography className={classes.fonttable} sx={{ fontSize: { xs: '10px', md: '16px' } }}>
                                <span className="font-bold">  ใช้ขอวีซ่าได้ </span>  ราคาเบาๆ
                            </Typography>

                        </Grid>
                        <Grid item xs={8} >
                            <Grid container spacing={2}>

                                <Grid item xs={4} className={classes.leftBorder}>
                                    <div className={classes.container}>
                                        <Image src={star} className={classes.imageiconstar} alt="Picture" />
                                        <Typography sx={{ fontSize: { xs: '10px', md: '12px' } }}>
                                            แนะนำ
                                        </Typography>
                                    </div>


                                </Grid>
                                <Grid item xs={4} className={classes.leftBorder}>
                                    <div className={classes.container}>
                                        <Image src={icon} className={classes.imageicon} alt="Picture" />
                                    </div>

                                </Grid>
                                <Grid item xs={4} >
                                    <div className={classes.container}>
                                        <Image src={icon} className={classes.imageicon} alt="Picture" />
                                    </div>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* ---------------------------  3 ------------------------------------------------------------------------------               */}
                    <hr />
                    <Grid container>
                        <Grid item xs={4} className={classes.leftBorder}>
                            <Typography className={classes.fonttable} sx={{ fontSize: { xs: '10px', md: '16px' } }}>
                                <span className="font-bold">  ประกันเดินทางรายวัน </span>
                                คิดราคาตามวันเดินทางจริง
                            </Typography>

                        </Grid>
                        <Grid item xs={8} >
                            <Grid container spacing={2}>

                                <Grid item xs={4} className={classes.leftBorder}>
                                    <div className={classes.container}>
                                        <Image src={star} className={classes.imageiconstar} alt="Picture" />
                                        <Typography sx={{ fontSize: { xs: '10px', md: '12px' } }}>
                                            แนะนำ
                                        </Typography>
                                    </div>


                                </Grid>
                                <Grid item xs={4} className={classes.leftBorder}>
                                    <div className={classes.container}>
                                        <Image src={icon} className={classes.imageicon} alt="Picture" />
                                    </div>

                                </Grid>
                                <Grid item xs={4} >
                                    <div className={classes.container}>
                                        <Image src={icon} className={classes.imageicon} alt="Picture" />
                                    </div>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* --------------------------------  4 -------------------------------------------------------------------------               */}
                    <hr />
                    <Grid container>
                        <Grid item xs={4} className={classes.leftBorder}>
                            <Typography className={classes.fonttable} sx={{ fontSize: { xs: '10px', md: '16px' } }}>
                                <span className="font-bold">  พาพ่อแม่เที่ยวแบบสบายใจ </span>   รับประกันถึงอายุ 80 ปี
                            </Typography>

                        </Grid>
                        <Grid item xs={8} >
                            <Grid container spacing={2}>

                                <Grid item xs={4} className={classes.leftBorder}>
                                    <div className={classes.container}>
                                        <Image src={icon} className={classes.imageicon} alt="Picture" />
                                    </div>


                                </Grid>
                                <Grid item xs={4} className={classes.leftBorder}>
                                    <div className={classes.container}>
                                        <Image src={icon} className={classes.imageicon} alt="Picture" />
                                    </div>

                                </Grid>
                                <Grid item xs={4} >
                                    <div className={classes.container}>
                                        <Image src={star} className={classes.imageiconstar} alt="Picture" />
                                        <Typography sx={{ fontSize: { xs: '10px', md: '12px' } }}>
                                            แนะนำ
                                        </Typography>
                                    </div>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* ------------------------------------ 5 ---------------------------------------------------------------------               */}
                    <hr />
                    <Grid container>
                        <Grid item xs={4} className={classes.leftBorder}>
                            <Typography className={classes.fonttable} sx={{ fontSize: { xs: '10px', md: '16px' } }}>
                                <span className="font-bold">  กังวลเรื่องถูกยกเลิกหรือเลื่อน </span>  การเดินทางเที่ยวบิน
                            </Typography>

                        </Grid>
                        <Grid item xs={8} >
                            <Grid container spacing={2}>

                                <Grid item xs={4} className={classes.leftBorder}>
                                    <div className={classes.container}>
                                        <Image src={icon} className={classes.imageicon} alt="Picture" />
                                    </div>


                                </Grid>
                                <Grid item xs={4} className={classes.leftBorder}>
                                    <div className={classes.container}>
                                        <Image src={star} className={classes.imageiconstar} alt="Picture" />
                                        <Typography sx={{ fontSize: { xs: '10px', md: '12px' } }}>
                                            แนะนำ
                                        </Typography>
                                    </div>

                                </Grid>
                                <Grid item xs={4} >
                                    <div className={classes.container}>
                                        <Image src={star} className={classes.imageiconstar} alt="Picture" />
                                        <Typography sx={{ fontSize: { xs: '10px', md: '12px' } }}>
                                            แนะนำ
                                        </Typography>
                                    </div>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* ------------------------------------ 6 ---------------------------------------------------------------------               */}
                    <hr />
                    <Grid container>
                        <Grid item xs={4} className={classes.leftBorder}>
                            <Typography className={classes.fonttable} sx={{ fontSize: { xs: '10px', md: '16px' } }}>
                                <span className="font-bold">  คุ้มครองค่ารักษาพยาบาลเด็ก </span> ทุนประกันสูง
                            </Typography>

                        </Grid>
                        <Grid item xs={8} >
                            <Grid container spacing={2}>

                                <Grid item xs={4} className={classes.leftBorder}>
                                    <div className={classes.container}>
                                        <Image src={star} className={classes.imageiconstar} alt="Picture" />
                                        <Typography sx={{ fontSize: { xs: '10px', md: '12px' } }}>
                                            แนะนำ
                                        </Typography>
                                    </div>


                                </Grid>
                                <Grid item xs={4} className={classes.leftBorder}>
                                    <div className={classes.container}>
                                        <Image src={star} className={classes.imageiconstar} alt="Picture" />
                                        <Typography sx={{ fontSize: { xs: '10px', md: '12px' } }}>
                                            แนะนำ
                                        </Typography>
                                    </div>

                                </Grid>
                                <Grid item xs={4} >
                                    <div className={classes.container}>
                                        <Image src={icon} className={classes.imageicon} alt="Picture" />
                                    </div>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* ----------------------------------------  7 -----------------------------------------------------------------               */}
                    <hr />
                    <Grid container>
                        <Grid item xs={4} className={classes.leftBorder}>
                            <Typography className={classes.fonttable} sx={{ fontSize: { xs: '10px', md: '16px' } }}>
                                <span className="font-bold">  คุ้มครองทรัพย์สิน </span> ตั้งแต่บาทแรก
                            </Typography>

                        </Grid>
                        <Grid item xs={8} >
                            <Grid container spacing={2}>

                                <Grid item xs={4} className={classes.leftBorder}>
                                    <div className={classes.container}>
                                        <Image src={icon} className={classes.imageicon} alt="Picture" />
                                    </div>


                                </Grid>
                                <Grid item xs={4} className={classes.leftBorder}>
                                    <div className={classes.container}>
                                        <Image src={star} className={classes.imageiconstar} alt="Picture" />
                                        <Typography sx={{ fontSize: { xs: '10px', md: '12px' } }}>
                                            แนะนำ
                                        </Typography>
                                    </div>

                                </Grid>
                                <Grid item xs={4} >
                                    <div className={classes.container}>
                                        <Image src={icon} className={classes.imageicon} alt="Picture" />
                                    </div>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* --------------------------------------- 8 ------------------------------------------------------------------               */}
                    <hr />
                    <Grid container>
                        <Grid item xs={4} className={classes.leftBorder}>
                            <Typography className={classes.fonttable} sx={{ fontSize: { xs: '10px', md: '16px' } }}>
                                <span className="font-bold">  ขยายระยะเวลาคุ้มครองอัตโนมัติ </span> เมื่อเกิดอุบัติเหตุ
                            </Typography>

                        </Grid>
                        <Grid item xs={8} >
                            <Grid container spacing={2}>

                                <Grid item xs={4} className={classes.leftBorder}>
                                    <div className={classes.container}>
                                        <Image src={icon} className={classes.imageicon} alt="Picture" />
                                    </div>


                                </Grid>
                                <Grid item xs={4} className={classes.leftBorder}>
                                    <div className={classes.container}>
                                        <Image src={star} className={classes.imageiconstar} alt="Picture" />
                                        <Typography sx={{ fontSize: { xs: '10px', md: '12px' } }}>
                                            แนะนำ
                                        </Typography>
                                    </div>

                                </Grid>
                                <Grid item xs={4} >
                                    <div className={classes.container}>
                                        <Image src={icon} className={classes.imageicon} alt="Picture" />
                                    </div>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* ------------------------------------- 9 --------------------------------------------------------------------               */}
                    <hr />
                    <Grid container>
                        <Grid item xs={4} className={classes.leftBorder}>
                            <Typography className={classes.fonttable} sx={{ fontSize: { xs: '10px', md: '16px' } }}>
                                <span className="font-bold">  ซื้อแบบรายปี </span> เดินทางได้สูงสุดต่อทริป
                            </Typography>

                        </Grid>
                        <Grid item xs={8} >
                            <Grid container spacing={2}>

                                <Grid item xs={4} className={classes.leftBorder}>
                                    <div className={classes.container}>
                                        <Image src={star} className={classes.imageiconstar} alt="Picture" />
                                        <Typography sx={{ fontSize: { xs: '10px', md: '12px' } }}>
                                            แนะนำ
                                        </Typography>
                                    </div>


                                </Grid>
                                <Grid item xs={4} className={classes.leftBorder}>
                                    <div className={classes.container}>
                                        <Image src={star} className={classes.imageiconstar} alt="Picture" />
                                        <Typography sx={{ fontSize: { xs: '10px', md: '12px' } }}>
                                            แนะนำ
                                        </Typography>
                                    </div>

                                </Grid>
                                <Grid item xs={4} >
                                    <div className={classes.container}>
                                        <Image src={icon} className={classes.imageicon} alt="Picture" />
                                    </div>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* ------------------------------------ 10 ---------------------------------------------------------------------               */}
                    <hr />
                    <Grid container>
                        <Grid item xs={4} className={classes.leftBorder}>

                            <div className={classes.containerstar}>
                                <Image src={star} className={classes.imageiconstar} alt="Picture" />
                                <Typography sx={{ fontSize: { xs: '10px', md: '18px',padding : '8px' } }}>
                                    :
                                </Typography>
                                <Typography sx={{ fontSize: { xs: '10px', md: '18px' } }}>
                                    แนะนำ
                                </Typography>
                            </div>

                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    )
}

