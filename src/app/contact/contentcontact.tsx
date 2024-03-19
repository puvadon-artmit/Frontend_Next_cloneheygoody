"use client";
import * as React from 'react';
import { Card, Grid, styled } from '@mui/material';

import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Image from 'next/image';
import MT1 from '../../image/contect/chat.png'
import MT2 from '../../image/contect/call.png'
import MT3 from '../../image/contect/mail.png'
import MT4 from '../../image/background/bg.jpg'
import { makeStyles } from '@mui/styles';
import { motion } from 'framer-motion';
import Typography from '@mui/material/Typography';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Kanit, sans-serif',
    },
});


const useStyles = makeStyles({
    card: {
        maxWidth: 1045,
        position: 'relative',
        overflow: 'visible',
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '26px',
        borderTopLeftRadius: '50px',
        borderBottomLeftRadius: '50px',
        borderBottomRightRadius: '50px',
        borderTopRightRadius: '50px',

    },
    card2: {
        maxWidth: 1045,
        position: 'relative',
        overflow: 'visible',
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '26px',
        borderTopLeftRadius: '50px',
        borderBottomLeftRadius: '50px',
        borderBottomRightRadius: '50px',
        borderTopRightRadius: '50px',

    },
    card3: {
        maxWidth: 1045,
        position: 'relative',
        overflow: 'visible',
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '26px',
        borderTopLeftRadius: '50px',
        borderBottomLeftRadius: '50px',
        borderBottomRightRadius: '50px',
        borderTopRightRadius: '50px',
    },
    mediaContainer: {
        position: 'relative',
    },
    media: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '8px',
        overflow: 'hidden',
        transition: 'transform 0.3s ease',
        '&:hover': {
            transform: 'scale(1.5)',
        },
    },
    resizedCard: {
        width: '100%'
    }
});

const BlueGrid = styled(Grid)({
    borderRadius: '20px',
    padding: '8px',
    marginTop: '20px',
    backgroundColor: '#1062ac',
    color: 'white',
    '&:hover': {
        backgroundColor: '#08345c',
    },
});

export default function contentcontact() {
    const classes = useStyles();

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
                                    height: '30vh',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                {/* <Image
    src={MT4}
    alt="Background Image"
    layout="fill"
    objectFit="cover"
    quality={100}
  /> */}
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
                                    ติดต่อเรา
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </>


                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'row',
                        fontSize: '24px',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        gap: '20px',
                    }}>

                    <div style={{ position: 'relative', width: 'fit-content' }}>
                        <Image src={MT1} alt="HeyGoody Logo" width={120} height={120} style={{ position: 'absolute', top: '-75px', right: '-25px', zIndex: '1' }} />

                        <Card className={classes.card2} sx={{
                            backgroundColor: '#ffd47c'
                        }}>
                            <Typography gutterBottom variant="h5" component="div" sx={{
                                fontSize: '40px',
                                fontWeight: 'bold',
                                textAlign: 'start',
                            }}>
                                Chat
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{
                                fontSize: '20px', fontWeight: 'bold',
                                textAlign: 'start',
                                color: 'black'
                            }}>
                                อยากแชท
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{
                                fontSize: '20px', fontWeight: 'bold', marginTop: '5px',
                                textAlign: 'start'
                            }}>
                                มีปัญหาทักมาสอบถามได้ตลอด 24 ชั่วโมง
                            </Typography>

                            <Grid container spacing={2} justifyContent="center">
                                <Grid item>
                                    <BlueGrid>
                                        Line : @hr.autocorp
                                    </BlueGrid>
                                </Grid>
                            </Grid>
                        </Card>
                    </div>

                    <div style={{ position: 'relative', width: 'fit-content' }}>
                        <Image src={MT2} alt="HeyGoody Logo" width={140} height={140} style={{ position: 'absolute', top: '-55px', right: '-25px', zIndex: '1' }} />
                        <Card className={classes.card3} sx={{ backgroundColor: '#e0dcfc' }} >

                            <Typography gutterBottom variant="h5" component="div" sx={{
                                fontSize: '40px',
                                fontWeight: 'bold',
                                textAlign: 'start',
                            }}>
                                Call
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{
                                fontSize: '20px', fontWeight: 'bold',
                                textAlign: 'start',
                                color: 'black'
                            }}>
                                อยากโทร
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{
                                fontSize: '20px', fontWeight: 'bold', marginTop: '5px',
                                textAlign: 'start'
                            }}>
                                พร้อมรับสายทุกวัน 08.00 น.- 20.00 น.
                            </Typography>
                            <Grid container spacing={2} justifyContent="center">
                                <Grid item>
                                    <BlueGrid>
                                        Call : 06 1020 2424
                                    </BlueGrid>
                                </Grid>
                            </Grid>
                        </Card>
                    </div>

                    <div style={{ position: 'relative', width: 'fit-content' }}>
                        <Image src={MT3} alt="HeyGoody Logo" width={140} height={140} style={{ position: 'absolute', top: '-55px', right: '-25px', zIndex: '1' }} />
                        <Card className={classes.card} sx={{ backgroundColor: '#e0dcfc' }} >

                            <Typography gutterBottom variant="h5" component="div" sx={{
                                fontSize: '40px',
                                fontWeight: 'bold',
                                textAlign: 'start',
                            }}>
                                Mail
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{
                                fontSize: '20px', fontWeight: 'bold',
                                textAlign: 'start',
                                color: 'black'
                            }}>
                                อยากส่งข้อความ
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{
                                fontSize: '20px', fontWeight: 'bold', marginTop: '5px',
                                textAlign: 'start'
                            }}>
                                จะสอบถาม แนะนำ หรือติชมเราก็ยินดี :)
                            </Typography>
                            <Grid container spacing={2} justifyContent="center">
                                <Grid item>
                                    <BlueGrid>
                                        Email : info@ach.co.th
                                    </BlueGrid>
                                </Grid>
                            </Grid>
                        </Card>
                    </div>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    <Box sx={{ flexDirection: 'column', textAlign: 'center' }}>
                        <Typography gutterBottom variant="h5" component="div" sx={{
                            fontSize: '40px',
                            fontWeight: 'bold',
                            color: 'black',
                            marginTop: '120px'
                        }}>
                            ที่อยู่ของเรา
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div" sx={{
                            fontSize: '20px',
                            color: 'black',
                            marginTop: '15px'
                        }}>
                            1111 หมู่ 1 ถนนมะลิวัลย์ ตําบลบ้านทุ่ม อ้าเภอเมือง จังหวัดขอนแก่น 40000
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div" sx={{
                            fontSize: '20px',
                            color: 'black',
                            marginTop: '15px'
                        }}>
                            เวลาทำการ จันทร์-ศุกร์ 08.00-17.30 น.
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3188.934953802183!2d102.74098965503254!3d16.449300539504744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31226114aea4bfa7%3A0xa3d980fbc7e6402e!2z4Liu4Lit4LiZ4LiU4LmJ4Liy4Lih4Liw4Lil4Li04Lin4Lix4Lil4Lii4LmMIOC4quC4s-C4meC4seC4geC4h-C4suC4meC5g-C4q-C4jeC5iA!5e0!3m2!1sth!2sth!4v1703144086201!5m2!1sth!2sth"
                        width="900"
                        height="450"
                        style={{ border: '0', borderRadius: '12px', margin: '0 auto', display: 'block' }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map"
                    ></iframe>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    <Button
                        variant="outlined"
                        size="large"
                        startIcon={<FmdGoodIcon />} // ใส่ไอคอนแผนที่ที่นี่
                        sx={{
                            color: 'black',
                            borderColor: 'black',
                            fontSize: '18px',
                            padding: '10px 55px',
                            margin: '0 auto',
                            fontFamily: 'Kanit, sans-serif',
                            marginTop: '20px',
                            marginBottom: '40px',
                            display: 'flex', // เพื่อให้ไอคอนและข้อความอยู่ติดกัน
                            alignItems: 'center', // ให้ไอคอนและข้อความอยู่ตรงกลางแนวตั้ง
                        }}
                    >
                        ดูเส้นทาง
                    </Button>
                </Box>
            </ThemeProvider>
        </div>
    )
}