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
import { Alert, Button } from '@mui/material';
import Card_travel from './Card_travel';
import Cardtl_detail from './Cardtl_detail';
import { createTheme } from '@mui/material/styles';
import { Card, CardContent } from '@mui/material';
import ki01 from '../../image/travelinsurance/ki02.png'
import visa01 from '../../image/travelinsurance/visa01.png'
import aia01 from '../../image/travelinsurance/aia01.png'
import icon from '../../image/icon_car/small_travel.svg'
import star from '../../image/travelinsurance/star.png'
import X from '../../image/icon_car/x.png'


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
        width: '50%',
        height: '50%',
        objectFit: 'cover',
        borderRadius: '8px',
    },

    imageiconx: {
        width: '650%',
        height: '65%',
        objectFit: 'cover',
        borderRadius: '8px',
    },
    fontname: {
        textAlign: 'center',
        marginTop: '10px',
    },
    fontdetail: {
        textAlign: 'center',
        color: 'black',
        margin: '20px',
        marginBottom: '20px'
    },
    fontsale: {
        textAlign: 'center',
    },
    fonttable: {
        marginTop: '10px',
        padding: '15px'
    },
    fonthead: {
        fontWeight: 'bold',
        display: 'flex',
        justifyItems: 'center',
        marginTop: '20px',
        marginBottom: '10px',
        color: 'black'
    }

}));

export default function Table_travel() {
    const classes = useStyles();

    const [showFullContent, setShowFullContent] = useState(false);

    const handleToggleContent = () => {
        setShowFullContent(!showFullContent);
    };

    return (
        <Container maxWidth="md">
            <Card sx={{ marginTop: '80px' }}>
                <CardContent>
                    <Grid container>
                        <Grid item xs={4} className={classes.leftBorder}>

                            <Typography className={classes.fontdetail} sx={{ fontSize: { xs: '12px', md: '18px' } }}>ความคุ้มครอง</Typography>
                        </Grid>
                        <Grid item xs={8} >
                            <Grid container spacing={2}>

                                <Grid item xs={6} className={classes.leftBorder}>

                                    <Typography className={classes.fontdetail} sx={{ fontSize: { xs: '12px', md: '18px' } }}>ประกันเดินทาง</Typography>

                                </Grid>
                                <Grid item xs={6}>

                                    <Typography className={classes.fontdetail} sx={{ fontSize: { xs: '12px', md: '18px' } }}>ประกันสุขภาพ</Typography>

                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>
                    {/* ------------------------   1 ---------------------------------------------------------------------------------               */}
                    <hr />

                    <Grid container>
                        <Grid item xs={4} className={classes.leftBorder}>
                            <Typography className={classes.fonttable} sx={{ fontSize: { xs: '10px', md: '16px' } }}>
                                <span className="font-bold">  ชีวิต </span>
                            </Typography>


                        </Grid>

                        <Grid item xs={8} >
                            <Grid container spacing={2}>

                                <Grid item xs={6} className={classes.leftBorder}>
                                    <div className={classes.container}>
                                        <Image src={icon} className={classes.imageicon} alt="Picture" />

                                    </div>


                                </Grid>
                                <Grid item xs={6} >
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
                                <span className="font-bold">  ค่ารักษาพยาบาล </span>
                            </Typography>

                        </Grid>
                        <Grid item xs={8} >
                            <Grid container spacing={2}>

                                <Grid item xs={6} className={classes.leftBorder}>
                                    <div className={classes.container}>
                                        <Image src={icon} className={classes.imageicon} alt="Picture" />
                                    </div>


                                </Grid>
                                <Grid item xs={6} >
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
                                <span className="font-bold"> เที่ยวบินล่าช้า เที่ยวบินยกเลิก </span>
                            </Typography>

                        </Grid>
                        <Grid item xs={8} >
                            <Grid container spacing={2}>

                                <Grid item xs={6} className={classes.leftBorder}>
                                    <div className={classes.container}>
                                        <Image src={icon} className={classes.imageicon} alt="Picture" />
                                    </div>


                                </Grid>
                                <Grid item xs={6} >
                                    <div className={classes.container}>
                                        <Image src={X} className={classes.imageiconx} alt="Picture" />
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
                                <span className="font-bold">  กระเป๋าเดินทางล่าช้า </span>
                            </Typography>

                        </Grid>
                        <Grid item xs={8} >
                            <Grid container spacing={2}>

                                <Grid item xs={6} className={classes.leftBorder}>
                                    <div className={classes.container}>
                                        <Image src={icon} className={classes.imageicon} alt="Picture" />
                                    </div>


                                </Grid>
                                <Grid item xs={6} >
                                    <div className={classes.container}>
                                        <Image src={X} className={classes.imageiconx} alt="Picture" />
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
                                <span className="font-bold">  ทรัพย์สินส่วนตัวสูญหาย </span>
                            </Typography>

                        </Grid>
                        <Grid item xs={8} >
                            <Grid container spacing={2}>

                                <Grid item xs={6} className={classes.leftBorder}>
                                    <div className={classes.container}>
                                        <Image src={icon} className={classes.imageicon} alt="Picture" />
                                    </div>


                                </Grid>
                                <Grid item xs={6} >
                                    <div className={classes.container}>
                                        <Image src={X} className={classes.imageiconx} alt="Picture" />
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
                                <span className="font-bold">  ความรับผิดต่อบุคคลภายนอก </span>
                            </Typography>

                        </Grid>
                        <Grid item xs={8} >
                            <Grid container spacing={2}>

                                <Grid item xs={6} className={classes.leftBorder}>
                                    <div className={classes.container}>
                                        <Image src={icon} className={classes.imageicon} alt="Picture" />
                                    </div>


                                </Grid>
                                <Grid item xs={6} >
                                    <div className={classes.container}>
                                        <Image src={X} className={classes.imageiconx} alt="Picture" />
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
                                <span className="font-bold">  บริการช่วยเหลือฉุกเฉินในต่างแดน </span>
                            </Typography>

                        </Grid>
                        <Grid item xs={8} >
                            <Grid container spacing={2}>

                                <Grid item xs={6} className={classes.leftBorder}>
                                    <div className={classes.container}>
                                        <Image src={icon} className={classes.imageicon} alt="Picture" />
                                    </div>


                                </Grid>
                                <Grid item xs={6} >
                                    <div className={classes.container}>
                                        <Image src={X} className={classes.imageiconx} alt="Picture" />
                                    </div>

                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>
                    <hr />
                </CardContent>
            </Card>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                <Typography
                    variant="h1"
                    className={classes.fonthead}
                    sx={{
                        fontSize: { xs: '20px', md: '20px' },
                    }}
                >
                    อยากไปทริปชิคๆ แบบไม่ช็อค
                </Typography>

                <Typography
                    variant="h1"
                    sx={{
                        fontSize: { xs: '18px', md: '18px' },
                        fontWeight: 'bold',
                        display: 'flex',
                        justifyItems: 'center',
                        color: '#565656',
                        marginTop: '10px',

                    }}
                >
                    {showFullContent ? (
                        <>
                           มีประกันเดินทางไว้อุ่นใจกว่า เพราะอะไรก็เกิดขึ้นได้ ไม่ว่าจะเจ็บป่วยกะทันหัน หรือป่วยหนักจนต้องถูกเคลื่อนย้าย
                        เที่ยวบินดีเลย์บ้าง ถูกยกเลิกบ้าง กระเป๋าเดินทางล่าช้า หรือทรัพย์สินสูญหายบ้าง รู้งี้ให้ heygoody ช่วยคุณท่องโลกกว้างอย่างสบายใจ เพราะเรารวบตึงความคุ้มครองมาให้ครบ จบทุกความกังวล เลือกเลย!
                        </>
                    ) : (
                        'มีประกันเดินทางไว้อุ่นใจกว่า เพราะอะไรก็เกิดขึ้นได้ ไม่ว่าจะเจ็บป่วยกะทันหัน หรือป่วยหนักจนต้องถูกเคลื่อนย้าย...'
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
            </div>
        </Container>
    )
}