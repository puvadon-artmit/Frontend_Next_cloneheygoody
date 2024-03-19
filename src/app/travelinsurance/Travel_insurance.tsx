"use client"
import React from 'react';
import Container from '@mui/material/Container';
import { Grid, Typography, Card } from '@mui/material';
import Image from 'next/image';
import MT1 from '../../image/icon_car/air.png';
import MT2 from '../../image/icon_car/illustrate.png';
import MT3 from '../../image/icon_car/suitable.png';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    textWithMargin: {
        marginLeft: '120px',
        color: 'black',
        fontSize: '20px',
    },
    textClick: {
        marginTop: '20px',
        marginLeft: '120px',
        color: 'black',
        fontSize: '15px',
    },
    card2: {
        maxWidth: '100%',
        maxHeight: 400,
        minHeight: 350,
        position: 'relative',
        overflow: 'visible',
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '26px',
        borderTopLeftRadius: '50px',
        background: 'linear-gradient(to right, #3184F6, #3f6ed9)'
    },
    fonthead: {
        color: 'white'
    },
    card: {
        maxWidth: '100%',
        minWidth : '80px',
        position: 'relative',
        overflow: 'visible',
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '26px',
        borderBottomRightRadius: '50px',
        background: 'linear-gradient(to right, #FF45E0, #BA31F6)'
    },
    card3: {
        maxWidth: '100%',
        minWidth : '80px',
        position: 'relative',
        overflow: 'visible',
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '26px',
        borderTopLeftRadius: '50px',
        background: 'linear-gradient(to right, #BA31F6, #3f6ed9)'
    },
}));

export default function Travel_insurance() {
    const classes = useStyles();

    return (
        <Container maxWidth="lg">
            <Typography sx={{ fontSize: { xs: '28px', md: '28px' }, color: 'black', textAlign: 'center', fontWeight: 'bold', marginTop: '40px', marginBottom: '60px' }}>
                ทำการบ้านประกันเดินทางมาให้แล้ว ตัวจริงเรื่องเที่ยว!
            </Typography>

            <Grid container spacing={0} sx={{ marginTop: '20px' }}>
                <Grid item xs={12} md={6}>
                    <div className='flex justify-center'>
                        <div style={{ position: 'relative', width: 'fit-content' }}>
                            <Image src={MT1} alt="HeyGoody Logo" width={150} height={150} style={{ position: 'absolute', top: '-55px', right: '-25px', zIndex: '1' }} />

                            <Card className={classes.card2}>
                                <Typography variant="body2" className={classes.fonthead} sx={{ fontSize: { xs: '16px', md: '20px', marginTop: '55px' } }}>
                                    ประกันเดินทางเป็นสิ่งที่ควรมีก่อนเดินทาง
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '20px', marginTop: '5px',color : '#E3E3E3' }}>
                                    เพราะไม่เพียงคุ้มครองค่ารักษาพยาบาล แต่ยังคุ้มครองเที่ยวบินและทรัพย์สินส่วนตัวด้วย ช่วยให้การเดินทางของคุณไม่สะดุด แม้เกิดเหตุไม่คาดฝัน
                                </Typography>

                            </Card>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className='flex justify-start ml-8'>
                        <div style={{ position: 'relative', width: 'fit-content' }}>
                            <Image src={MT2} alt="HeyGoody Logo" width={80} height={80} style={{ position: 'absolute', top: '-45px', right: '-25px', zIndex: '1' }} />

                            <Card className={classes.card3}>
                                <Typography variant="body2" className={classes.fonthead} sx={{ fontSize: { xs: '16px', md: '20px',marginRight : '150px' } }}>
                                ประกันสุขภาพบางประเภท 
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '20px', marginTop: '5px',color : '#E3E3E3' }}>
                                คุ้มครองเฉพาะในประเทศไทย <br />เท่านั้น (อย่าลืมเช็คกรมธรรม์ที่คุณมี)
                                </Typography>
                            </Card>
                        </div>
                    </div>

                    <div className='flex justify-start ml-8 mt-4'>
                        <div style={{ position: 'relative', width: 'fit-content' }}>
                            <Image src={MT3} alt="HeyGoody Logo" width={80} height={80} style={{ position: 'absolute', top: '-45px', right: '-25px', zIndex: '1' }} />

                            <Card className={classes.card}>
                                <Typography variant="body2" className={classes.fonthead} sx={{ fontSize: { xs: '16px', md: '20px' } }}>
                                ค่าเบี้ยประกันเริ่มต้นหลักร้อย
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '20px', marginTop: '5px',color : '#E3E3E3' }}>
                                คุ้มครองสูงถึงหลักล้านเพราะคุ้มครอง <br /> ระยะสั้นตามจำนวนวันเดินทาง ราคาจึงไม่แพง
                                </Typography>
                            </Card>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}