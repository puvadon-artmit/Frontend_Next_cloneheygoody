"use client"
import { useState } from 'react';
import { Grid, Container } from '@mui/material';
import { Typography, Snackbar } from '@mui/material';
import Image from 'next/image'
import useMediaQuery from '@mui/material/useMediaQuery';
import Card from '@mui/material/Card';

import IC1 from '../../../image/background/typeclass_1.png'
import IC2 from '../../../image/background/typeclass_2.png'
import IC3 from '../../../image/background/typeclass_3.png'
import IC4 from '../../../image/autoinsurance/class_44.png'
import { makeStyles } from '@mui/styles';

import {
    createTheme,
    ThemeProvider,
} from '@mui/material';

const theme = createTheme({
    typography: {
        fontFamily: 'Kanit, sans-serif',
    },
});

const useStyles = makeStyles({
    card: {
        maxWidth: 275,
        position: 'relative',
        overflow: 'visible',
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '26px',
        borderTopLeftRadius: '50px'
    },
    card2: {
        maxWidth: 275,
        position: 'relative',
        overflow: 'visible',
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '26px',
        borderBottomRightRadius: '50px'
    },
    cardMobile: {
        maxWidth: 180,
        position: 'relative',
        overflow: 'visible',
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '26px',
        borderTopLeftRadius: '50px'
    },
    cardMobile2: {
        maxWidth: 180,
        position: 'relative',
        overflow: 'visible',
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '26px',
        borderBottomRightRadius: '50px'
    },

});


export default function Card_class2() {
    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <ThemeProvider theme={theme}>
            <div>
                {!isMobile && (
                    <Container maxWidth="md">
                        <div className='flex justify-center mt-10'>
                            <Typography sx={{ fontSize: '30px', fontWeight: 'bold' }}>ประกันภัยรถยนต์ชั้น 2 + <span className='text-blue-900'> เหมาะกับใคร? </span></Typography>
                        </div>

                        <Grid container spacing={0} sx={{ marginTop: '60px' }}>

                            {/* -----------------------------  card1 ------------------------------------------------------------------- */}
                            <Grid item xs={12} md={4}>
                                <div style={{ position: 'relative', width: 'fit-content', margin: 'auto' }} >
                                    <Image src={IC1} alt="HeyGoody Logo" width={100} height={100} style={{ position: 'absolute', top: '-35px', left: '85px', zIndex: '1' }} />
                                    <Card className={classes.card} sx={{ backgroundColor: '#ffd47e' }} >

                                        <Typography gutterBottom variant="h5" component="div" sx={{
                                            fontSize: '20px',
                                            textAlign: 'start',
                                            marginTop: '50px',
                                            textAlignLast: 'center'

                                        }}>
                                            มีประสบการณ์และ <br />
                                            ขับชำนาญแล้ว
                                        </Typography>

                                        <Typography sx={{
                                            fontSize: '15px', textAlign: 'start', color: 'black', marginTop: '10px'
                                        }}>
                                            ประกันรถยนต์ชั้น 2+ ตอบโจทย์คุณ เพราะมีความเสี่ยงน้อยกว่ามือใหม่ คุ้มครองเทียบเท่าประกันรถยนต์ชั้น 1 แต่ไม่คุ้มครองในกรณีรถชนแบบไม่มีคู่กรณีเท่านั้นเอง
                                        </Typography>



                                    </Card>
                                </div>

                            </Grid>
                            {/* -----------------------------  card2 ------------------------------------------------------------------- */}

                            <Grid item xs={12} md={4}>
                                <div style={{ position: 'relative', width: 'fit-content', margin: 'auto', marginTop: '80px' }}>
                                    <Image src={IC2} alt="HeyGoody Logo" width={100} height={100} style={{ position: 'absolute', top: '-35px', left: '85px', zIndex: '1' }} />
                                    <Card className={classes.card} sx={{ backgroundColor: '#e0dcfc' }} >

                                        <Typography gutterBottom variant="h5" component="div" sx={{
                                            fontSize: '20px',
                                            textAlign: 'start',
                                            marginTop: '50px',
                                            textAlignLast: 'center'
                                        }}>
                                            เน้นประหยัด <br />
                                            แต่คุ้มครองสูง
                                        </Typography>

                                        <Typography sx={{
                                            fontSize: '15px', textAlign: 'start', color: 'black'
                                        }}>
                                            ประกันรถยนต์ชั้น 2+ คุ้มครองสูงรองจากประกันรถยนต์ชั้น 1 จึงตอบโจทย์คนอยากได้ความคุ้มครองเทียบเท่าประกันรถยนต์ชั้น 1 แต่จ่ายค่าเบี้ยประกันที่ถูกลง
                                        </Typography>



                                    </Card>
                                </div>

                            </Grid>
                            {/* -----------------------------  card3 ------------------------------------------------------------------- */}
                            <Grid item xs={12} md={4}>
                                <div style={{ position: 'relative', width: 'fit-content', margin: 'auto' }}>
                                    <Image src={IC3} alt="HeyGoody Logo" width={100} height={100} style={{ position: 'absolute', top: '-35px', left: '75px', zIndex: '1' }} />
                                    <Card className={classes.card2} sx={{ backgroundColor: '#aac7ff' }} >

                                        <Typography gutterBottom variant="h5" component="div" sx={{
                                            fontSize: '20px',
                                            textAlign: 'start',
                                            marginTop: '50px',
                                            textAlignLast: 'center'

                                        }}>
                                            ไม่ค่อยใช้รถ
                                            แต่อยากอุ่นใจ
                                        </Typography>

                                        <Typography sx={{
                                            fontSize: '15px', textAlign: 'start', color: 'black'
                                        }}>
                                            ถึงแม้คุณที่ไม่ค่อยขับรถบ่อยๆ แต่อุบัติเหตุเกิดได้ทุกเมื่อ อย่างน้อยการมีประกันรถยนต์ชั้น 2+ จะช่วยให้คุณรับมือกับเหตุการ์ณไม่คาดฝันได้ ในราคาที่ถูกลงมาจากประกันชั้น 1 มากทีเดียว
                                        </Typography>



                                    </Card>
                                </div>

                            </Grid>


                        </Grid>
                    </Container>
                )}

                {/* -------------------------------------------------------------------------------------------------------------------------------------      */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', marginTop: '20px' }}>
                    {isMobile && (
                        <>
                            <Container fixed>
                                <div className='flex justify-center mt-10'>
                                    <Typography sx={{ fontSize: '30px', fontWeight: 'bold' }}>ประกันภัยรถยนต์ชั้น 1 <span className='text-blue-900'> เหมาะกับใคร? </span></Typography>
                                </div>

                                <Grid container spacing={0} sx={{ marginTop: '60px' }}>

                                    {/* -----------------------------  card1 ------------------------------------------------------------------- */}
                                    <Grid item xs={12} md={4}>
                                        <div style={{ position: 'relative', width: 'fit-content', margin: 'auto' }} >
                                            <Image src={IC1} alt="HeyGoody Logo" width={100} height={100} style={{ position: 'absolute', top: '-35px', left: '85px', zIndex: '1' }} />
                                            <Card className={classes.card} sx={{ backgroundColor: '#ffd47e' }} >

                                                <Typography gutterBottom variant="h5" component="div" sx={{
                                                    fontSize: '20px',
                                                    textAlign: 'start',
                                                    marginTop: '50px'

                                                }}>
                                                    มือใหม่หัดขับ
                                                </Typography>

                                                <Typography sx={{
                                                    fontSize: '15px', textAlign: 'start', color: 'black', marginTop: '10px'
                                                }}>
                                                    ถ้าคุณเป็นมือใหม่ยังขับไม่คล่องแคล่ว หรือขาดประสบการณ์และความคุ้นเคยเส้นทาง ทำให้มีโอกาสเกิดอุบัติเหตุสูง จึงเหมาะกับประกันรถยนต์ชั้น 1 มากที่สุด
                                                </Typography>



                                            </Card>
                                        </div>

                                    </Grid>
                                    {/* -----------------------------  card2 ------------------------------------------------------------------- */}

                                    <Grid item xs={12} md={4}>
                                        <div style={{ position: 'relative', width: 'fit-content', margin: 'auto', marginTop: '40px' }}>
                                            <Image src={IC2} alt="HeyGoody Logo" width={100} height={100} style={{ position: 'absolute', top: '-35px', left: '85px', zIndex: '1' }} />
                                            <Card className={classes.card} sx={{ backgroundColor: '#e0dcfc' }} >

                                                <Typography gutterBottom variant="h5" component="div" sx={{
                                                    fontSize: '20px',
                                                    textAlign: 'start',
                                                    marginTop: '50px'

                                                }}>
                                                    รถคันแรก หรือรถใหม่
                                                </Typography>

                                                <Typography sx={{
                                                    fontSize: '15px', textAlign: 'start', color: 'black'
                                                }}>
                                                    รถยนต์ใหม่หรือรถป้ายแดงมักจะตกเป็นเป้าหมายของมิจฉาชีพ เพราะขายได้ราคาดี ถ้าคุณมีประกันรถยนต์ชั้น 1 ก็จะครอบคลุมรถหาย ไม่ว่าจะลักทรัพย์ ชิงทรัพย์ หรือปล้นทรัพย์
                                                </Typography>



                                            </Card>
                                        </div>

                                    </Grid>
                                    {/* -----------------------------  card3 ------------------------------------------------------------------- */}
                                    <Grid item xs={12} md={4}>
                                        <div style={{ position: 'relative', width: 'fit-content', margin: 'auto', marginTop: '40px' }}>
                                            <Image src={IC3} alt="HeyGoody Logo" width={100} height={100} style={{ position: 'absolute', top: '-35px', left: '75px', zIndex: '1' }} />
                                            <Card className={classes.card2} sx={{ backgroundColor: '#aac7ff' }} >

                                                <Typography gutterBottom variant="h5" component="div" sx={{
                                                    fontSize: '20px',
                                                    textAlign: 'start',
                                                    marginTop: '50px'

                                                }}>
                                                    ใช้รถบ่อย
                                                </Typography>

                                                <Typography sx={{
                                                    fontSize: '15px', textAlign: 'start', color: 'black'
                                                }}>
                                                    การใช้รถยนต์เป็นประจำย่อมทำให้รถสึกหรอมากกว่าปกติ นอกจากประกันรถยนต์ชั้น 1 จะคุ้มครองรอบด้านแล้ว ยังมีบริการช่วยเหลือฉุกเฉินตลอด 24 ชั่วโมงให้ด้วย
                                                </Typography>

                                            </Card>
                                        </div>

                                    </Grid>


                                </Grid>
                            </Container>
                        </>
                    )}
                </div>
            </div>
        </ThemeProvider>
    )
}