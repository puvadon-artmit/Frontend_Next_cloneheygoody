"use client"
import { useState } from 'react';
import { Grid, Container } from '@mui/material';
import { Typography, Snackbar } from '@mui/material';
import Image from 'next/image'
import useMediaQuery from '@mui/material/useMediaQuery';
import Card from '@mui/material/Card';

import IC1 from '../../image/about/iconss1.png'
import IC2 from '../../image/about/iconss2.png'
import IC3 from '../../image/about/iconss3.png'
import IC4 from '../../image/about/iconss4.png'
import IC5 from '../../image/about/iconss5.png'
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

    },
    card2: {
        maxWidth: 275,
        position: 'relative',
        overflow: 'visible',
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '26px',

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


export default function Card_about() {
    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <ThemeProvider theme={theme}>
            <div>
                {!isMobile && (
                    <Container maxWidth="xl">
                        <div className='flex justify-center mt-10'>
                            <Typography sx={{ fontSize: '40px', fontWeight: 'bold' }}>good benefits  <span className='text-blue-900'> ทำไมต้อง  ISR? </span></Typography>
                        </div>

                        <Grid container spacing={0} sx={{ marginTop: '100px' }}>

                            {/* -----------------------------  card1 ------------------------------------------------------------------- */}
                            <Grid item xs={12} md={2.4}>
                                <div style={{ position: 'relative', width: 'fit-content', margin: 'auto' }} >
                                    <Image src={IC1} alt="HeyGoody Logo" width={220} height={220} style={{ position: 'absolute', top: '-125px', left: '35px', zIndex: '1' }} />
                                    <Card className={classes.card} sx={{ backgroundColor: '#ffd47e' }} >

                                        <Typography gutterBottom variant="h5" component="div" sx={{
                                            fontSize: '24px',
                                            textAlign: 'start',
                                            marginTop: '50px'

                                        }}>
                                            be smarter,for you
                                        </Typography>

                                        <Typography sx={{
                                            fontSize: '18px', textAlign: 'start', color: 'black', marginTop: '10px'
                                        }}>
                                            ไม่โทร ไม่จุกจิก เพราะเราเข้าใจ จึงให้คุณเปรียบเทียบ เช็คเบี้ย และซื้อประกันออนไลน์ได้ง่าย ๆ ด้วยตัวเอง
                                        </Typography>



                                    </Card>
                                </div>

                            </Grid>
                            {/* -----------------------------  card2 ------------------------------------------------------------------- */}

                            <Grid item xs={12} md={2.4}>
                                <div style={{ position: 'relative', width: 'fit-content', margin: 'auto', marginTop: '80px' }}>
                                    <Image src={IC2} alt="HeyGoody Logo" width={180} height={180} style={{ position: 'absolute', top: '-75px', left: '35px', zIndex: '1' }} />
                                    <Card className={classes.card} sx={{ backgroundColor: '#e0dcfc' }} >

                                        <Typography gutterBottom variant="h5" component="div" sx={{
                                            fontSize: '24px',
                                            textAlign: 'start',
                                            marginTop: '50px'

                                        }}>
                                            the best offer, <br />
                                            no hidden cost
                                        </Typography>

                                        <Typography sx={{
                                            fontSize: '18px', textAlign: 'start', color: 'black'
                                        }}>
                                            ประกันราคาคุ้มค่ากว่า เพราะเราขายออนไลน์ไม่ผ่านคน จึงเอาค่าส่วนต่างมาลดให้คุณโดยเฉพาะ ไม่มีเงื่อนไขแอบแฝง
                                        </Typography>



                                    </Card>
                                </div>

                            </Grid>
                            {/* -----------------------------  card3 ------------------------------------------------------------------- */}
                            <Grid item xs={12} md={2.4}>
                                <div style={{ position: 'relative', width: 'fit-content', margin: 'auto' }}>
                                    <Image src={IC3} alt="HeyGoody Logo" width={140} height={140} style={{ position: 'absolute', top: '-75px', left: '75px', zIndex: '1' }} />
                                    <Card className={classes.card2} sx={{ backgroundColor: '#aac7ff' }} >

                                        <Typography gutterBottom variant="h5" component="div" sx={{
                                            fontSize: '24px',
                                            textAlign: 'start',
                                            marginTop: '50px'

                                        }}>
                                            24/7 support, we’ <br /> ve got your back
                                        </Typography>

                                        <Typography sx={{
                                            fontSize: '18px', textAlign: 'start', color: 'black'
                                        }}>
                                            ติดปัญหา ทัก Line @isr มาได้เลยตลอด 24 ชม. ตอบทุกคำถาม แนะนำทุกเรื่องประกันด้วยรอยยิ้ม
                                        </Typography>



                                    </Card>
                                </div>

                            </Grid>

                            <Grid item xs={12} md={2.4}>
                                <div style={{ position: 'relative', width: 'fit-content', margin: 'auto', marginTop: '80px' }}>
                                    <Image src={IC4} alt="HeyGoody Logo" width={120} height={120} style={{ position: 'absolute', top: '-55px', left: '75px', zIndex: '1' }} />
                                    <Card className={classes.card2} sx={{ backgroundColor: '#cff3ea' }} >

                                        <Typography gutterBottom variant="h5" component="div" sx={{
                                            fontSize: '24px',
                                            textAlign: 'start',
                                            marginTop: '50px'

                                        }}>
                                            the brand you <br /> can trust
                                        </Typography>

                                        <Typography sx={{
                                            fontSize: '18px', textAlign: 'start', color: 'black'
                                        }}>
                                            ISR  มีรางวัลการันตีคุณภาพทั้งไทยและต่างประเทศ กว่า 45 รางวัล อุ่นใจและมั่นใจได้เลยว่า เราเชี่ยวชาญมาก!
                                        </Typography>
                                    </Card>
                                </div>

                            </Grid>

                            <Grid item xs={12} md={2.4}>
                                <div style={{ position: 'relative', width: 'fit-content', margin: 'auto' }}>
                                    <Image src={IC5} alt="HeyGoody Logo" width={150} height={150} style={{ position: 'absolute', top: '-35px', left: '75px', zIndex: '1' }} />
                                    <Card className={classes.card2} sx={{ backgroundColor: '#fbd3d2' }} >

                                        <Typography gutterBottom variant="h5" component="div" sx={{
                                            fontSize: '24px',
                                            textAlign: 'start',
                                            marginTop: '50px'

                                        }}>
                                            0% worry-free installment plan
                                        </Typography>

                                        <Typography sx={{
                                            fontSize: '18px', textAlign: 'start', color: 'black'
                                        }}>
                                            หมดกังวล ด้วยทางเลือกผ่อนประกันรถยนต์ยาว ๆ 0% สูงสุด 10 งวด จะผ่อนเงินสดหรือผ่อนกับบัตรเครดิตก็ได้ สะดวกแบบไหน เลือกตามใจได้เลย
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
                                    <Grid item xs={12} md={3}>
                                        <div style={{ position: 'relative', width: 'fit-content', margin: 'auto' }} >
                                            <Image src={IC1} alt="HeyGoody Logo" width={140} height={140} style={{ position: 'absolute', top: '-55px', left: '85px', zIndex: '1' }} />
                                            <Card className={classes.card} sx={{ backgroundColor: '#ffd47e' }} >

                                                <Typography gutterBottom variant="h5" component="div" sx={{
                                                    fontSize: '20px',
                                                    textAlign: 'start',
                                                    marginTop: '50px'

                                                }}>
                                                    be smarter,for you
                                                </Typography>

                                                <Typography sx={{
                                                    fontSize: '15px', textAlign: 'start', color: 'black', marginTop: '10px'
                                                }}>
                                                    ไม่โทร ไม่จุกจิก เพราะเราเข้าใจ จึงให้คุณเปรียบเทียบ เช็คเบี้ย และซื้อประกันออนไลน์ได้ง่าย ๆ ด้วยตัวเอง
                                                </Typography>



                                            </Card>
                                        </div>

                                    </Grid>
                                    {/* -----------------------------  card2 ------------------------------------------------------------------- */}

                                    <Grid item xs={12} md={3}>
                                        <div style={{ position: 'relative', width: 'fit-content', margin: 'auto', marginTop: '40px' }}>
                                            <Image src={IC2} alt="HeyGoody Logo" width={140} height={140} style={{ position: 'absolute', top: '-35px', left: '65px', zIndex: '1' }} />
                                            <Card className={classes.card} sx={{ backgroundColor: '#e0dcfc' }} >

                                                <Typography gutterBottom variant="h5" component="div" sx={{
                                                    fontSize: '20px',
                                                    textAlign: 'start',
                                                    marginTop: '50px'

                                                }}>
                                                   the best offer,no hidden cost
                                                </Typography>

                                                <Typography sx={{
                                                    fontSize: '15px', textAlign: 'start', color: 'black'
                                                }}>
                                                    ประกันราคาคุ้มค่ากว่า เพราะเราขายออนไลน์ไม่ผ่านคน จึงเอาค่าส่วนต่างมาลดให้คุณโดยเฉพาะ ไม่มีเงื่อนไขแอบแฝง
                                                </Typography>



                                            </Card>
                                        </div>

                                    </Grid>
                                    {/* -----------------------------  card3 ------------------------------------------------------------------- */}
                                    <Grid item xs={12} md={3}>
                                        <div style={{ position: 'relative', width: 'fit-content', margin: 'auto', marginTop: '40px' }}>
                                            <Image src={IC3} alt="HeyGoody Logo" width={100} height={100} style={{ position: 'absolute', top: '-35px', left: '75px', zIndex: '1' }} />
                                            <Card className={classes.card2} sx={{ backgroundColor: '#aac7ff' }} >

                                                <Typography gutterBottom variant="h5" component="div" sx={{
                                                    fontSize: '20px',
                                                    textAlign: 'start',
                                                    marginTop: '50px'

                                                }}>
                                                    24/7 support, we’ve got your back
                                                </Typography>

                                                <Typography sx={{
                                                    fontSize: '15px', textAlign: 'start', color: 'black'
                                                }}>
                                                    ติดปัญหา ทัก Line @isr มาได้เลยตลอด 24 ชม. ตอบทุกคำถาม แนะนำทุกเรื่องประกันด้วยรอยยิ้ม
                                                </Typography>



                                            </Card>
                                        </div>

                                    </Grid>

                                    <Grid item xs={12} md={3}>
                                        <div style={{ position: 'relative', width: 'fit-content', margin: 'auto', marginTop: '40px' }}>
                                            <Image src={IC4} alt="HeyGoody Logo" width={100} height={100} style={{ position: 'absolute', top: '-35px', left: '75px', zIndex: '1' }} />
                                            <Card className={classes.card2} sx={{ backgroundColor: '#cff3ea' }} >

                                                <Typography gutterBottom variant="h5" component="div" sx={{
                                                    fontSize: '20px',
                                                    textAlign: 'start',
                                                    marginTop: '50px'

                                                }}>
                                                   the brand you can trust
                                                </Typography>

                                                <Typography sx={{
                                                    fontSize: '15px', textAlign: 'start', color: 'black'
                                                }}>
                                                   ISR มีรางวัลการันตีคุณภาพทั้งไทยและต่างประเทศ กว่า 45 รางวัล อุ่นใจและมั่นใจได้เลยว่า เราเชี่ยวชาญมาก!
                                                </Typography>
                                            </Card>
                                        </div>

                                    </Grid>

                                    <Grid item xs={12} md={3}>
                                        <div style={{ position: 'relative', width: 'fit-content', margin: 'auto', marginTop: '40px' }}>
                                            <Image src={IC5} alt="HeyGoody Logo" width={140} height={140} style={{ position: 'absolute', top: '-35px', left: '75px', zIndex: '1' }} />
                                            <Card className={classes.card2} sx={{ backgroundColor: '#fbd3d2' }} >

                                                <Typography gutterBottom variant="h5" component="div" sx={{
                                                    fontSize: '20px',
                                                    textAlign: 'start',
                                                    marginTop: '50px'

                                                }}>
                                                    0% worry-free installment plan
                                                </Typography>

                                                <Typography sx={{
                                                    fontSize: '15px', textAlign: 'start', color: 'black'
                                                }}>
                                                   หมดกังวล ด้วยทางเลือกผ่อนประกันรถยนต์ยาว ๆ 0% สูงสุด 10 งวด จะผ่อนเงินสดหรือผ่อนกับบัตรเครดิตก็ได้ สะดวกแบบไหน เลือกตามใจได้เลย
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