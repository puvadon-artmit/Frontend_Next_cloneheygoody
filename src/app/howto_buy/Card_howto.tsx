"use client"
import { useState } from 'react';
import { Grid } from '@mui/material';
import { Typography, Snackbar } from '@mui/material';
import Image from 'next/image'
import useMediaQuery from '@mui/material/useMediaQuery';
import Card from '@mui/material/Card';
import IC1 from '../../image/how-to/icon1.png'
import IC2 from '../../image/how-to/icon2.png'
import IC3 from '../../image/how-to/icon3.png'
import IC4 from '../../image/how-to/icon4.png'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    card: {
        maxWidth: 250,
        position: 'relative',
        overflow: 'visible',
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '26px',
        borderTopLeftRadius: '50px'
    },
    card2: {
        maxWidth: 250,
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


export default function Card_howto() {
    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width:600px),(max-width:800px)');
    return (
        <div>
            {!isMobile && (
                <Grid container spacing={0} sx={{ marginTop: '60px' }}>
                    {/* -----------------------------  card1 ------------------------------------------------------------------- */}
                    <Grid item xs={12} md={3}>
                        <div style={{ position: 'relative', width: 'fit-content', margin: 'auto' }} >
                            <Image src={IC1} alt="HeyGoody Logo" width={100} height={100} style={{ position: 'absolute', top: '-35px', right: '-25px', zIndex: '1' }} />
                            <Card className={classes.card} sx={{ backgroundColor: '#ffd47e' }} >

                                <Typography gutterBottom variant="h5" component="div" sx={{
                                    fontSize: '30px',
                                    textAlign: 'start',

                                }}>
                                    <span style={{ fontSize: '60px', }}>1</span> โทร
                                </Typography>

                                <Typography sx={{
                                    fontSize: '16px', textAlign: 'start', color: 'black'
                                }}>
                                    หาบริษัทประกันของคุณทันที<br />
                                    ทันนทีเมื่อเกิดเหตุ
                                </Typography>

                                <div className='flex justify-center mt-6'>
                                    <button type="button" className="text-white bg-blue-900 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">ดูเบอร์ติดต่อ</button>
                                </div>

                            </Card>
                        </div>

                    </Grid>
                    {/* -----------------------------  card2 ------------------------------------------------------------------- */}

                    <Grid item xs={12} md={3}>
                        <div style={{ position: 'relative', width: 'fit-content', margin: 'auto' }}>
                            <Image src={IC2} alt="HeyGoody Logo" width={100} height={100} style={{ position: 'absolute', top: '-25px', right: '-25px', zIndex: '1' }} />
                            <Card className={classes.card} sx={{ backgroundColor: '#e0dcfc' }} >

                                <Typography gutterBottom variant="h5" component="div" sx={{
                                    fontSize: '30px',
                                    textAlign: 'start',

                                }}>
                                    <span style={{ fontSize: '60px', }}>2</span> แจ้ง
                                </Typography>

                                <Typography sx={{
                                    fontSize: '16px', textAlign: 'start', color: 'black'
                                }}>
                                    เลขกรมธรรม์หรือเลขบัตร<br />
                                    ประชาชนกับเจ้าหน้าที่
                                </Typography>

                                <div className='flex justify-center mt-6'>
                                    <button type="button" className="text-white bg-blue-900 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">ดูเลขกรมกรมธรรม์</button>
                                </div>

                            </Card>
                        </div>

                    </Grid>
                    {/* -----------------------------  card3 ------------------------------------------------------------------- */}
                    <Grid item xs={12} md={3}>
                        <div style={{ position: 'relative', width: 'fit-content', margin: 'auto' }}>
                            <Image src={IC3} alt="HeyGoody Logo" width={100} height={100} style={{ position: 'absolute', top: '-25px', right: '-25px', zIndex: '1' }} />
                            <Card className={classes.card2} sx={{ backgroundColor: '#aac7ff' }} >

                                <Typography gutterBottom variant="h5" component="div" sx={{
                                    fontSize: '30px',
                                    textAlign: 'start',

                                }}>
                                    <span style={{ fontSize: '60px', }}>3</span> เตรียม
                                </Typography>

                                <Typography sx={{
                                    fontSize: '16px', textAlign: 'start', color: 'black'
                                }}>
                                    เอกสาร ระหว่างรอ เจ้าหน้าที่ <br />
                                    ทำการ
                                </Typography>

                                <div className='flex justify-center mt-6'>
                                    <button type="button" className="text-white bg-blue-900 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">ดูเอกสาร</button>
                                </div>

                            </Card>
                        </div>

                    </Grid>

                    <Grid item xs={12} md={3}>
                        <div style={{ position: 'relative', width: 'fit-content', margin: 'auto' }}>
                            <Image src={IC4} alt="HeyGoody Logo" width={100} height={100} style={{ position: 'absolute', top: '-25px', right: '-25px', zIndex: '1' }} />
                            <Card className={classes.card2} sx={{ backgroundColor: '#fbd3d2' }} >

                                <Typography gutterBottom variant="h5" component="div" sx={{
                                    fontSize: '30px',
                                    textAlign: 'start',

                                }}>
                                    <span style={{ fontSize: '60px', }}>4</span> เช็ค
                                </Typography>

                                <Typography sx={{
                                    fontSize: '16px', textAlign: 'start', color: 'black'
                                }}>
                                    ค้นหาอู่ซ่อม ใกล้คุณทันนที<br />
                                    เมื่อเกิดเหตุ
                                </Typography>

                                <div className='flex justify-center mt-6'>
                                    <button type="button" className="text-white bg-blue-900 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">ค้นหาอู่</button>
                                </div>

                            </Card>
                        </div>

                    </Grid>
                </Grid>
            )}

            {/* -------------------------------------------------------------------------------------------------------------------------------------      */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', marginTop: '20px' }}>
                {isMobile && (
                    <>
                        <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', justifyContent: 'center' }}>
                            <div style={{ position: 'relative', width: 'fit-content' }}>
                                <Image src={IC1} alt="HeyGoody Logo" width={100} height={100} style={{ position: 'absolute', top: '-35px', right: '-25px', zIndex: '1' }} />
                                <Card className={classes.cardMobile} sx={{ backgroundColor: '#ffd47e' }}>
                                    <Typography gutterBottom variant="h5" component="div" sx={{

                                        textAlign: 'start',
                                        fontSize: { xs: '28px', md: '34px' }

                                    }}>
                                        <span style={{ fontSize: '60px', }}>1</span> โทร
                                    </Typography>

                                    <Typography sx={{
                                        fontSize: '16px', textAlign: 'start', color: 'black'
                                    }}>
                                        หาบริษัทประกันของคุณทันที<br />
                                        ทันนทีเมื่อเกิดเหตุ
                                    </Typography>

                                    <div className='flex justify-center mt-6'>
                                        <button type="button" className="text-white bg-blue-900 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">ดูเบอร์ติดต่อ</button>
                                    </div>

                                </Card>
                            </div>

                            <div style={{ position: 'relative', width: 'fit-content' }}>
                                <Image src={IC2} alt="HeyGoody Logo" width={100} height={100} style={{ position: 'absolute', top: '-25px', right: '-25px', zIndex: '1' }} />
                                <Card className={classes.cardMobile2} sx={{ backgroundColor: '#e0dcfc' }}>
                                    <Typography gutterBottom variant="h5" component="div" sx={{
                                        fontSize: { xs: '28px', md: '34px' },
                                        textAlign: 'start',

                                    }}>
                                        <span style={{ fontSize: '60px', }}>2</span> แจ้ง
                                    </Typography>

                                    <Typography sx={{
                                        fontSize: '16px', textAlign: 'start', color: 'black'
                                    }}>
                                        เลขกรมธรรม์หรือเลขบัตร<br />
                                        ประชาชนกับเจ้าหน้าที่
                                    </Typography>

                                    <div className='flex justify-center mt-6'>
                                        <button type="button" className="text-white bg-blue-900 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">ดูเลขกรมกรมธรรม์</button>
                                    </div>
                                </Card>
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', justifyContent: 'center' }}>
                            <div style={{ position: 'relative', width: 'fit-content' }}>
                                <Image src={IC3} alt="HeyGoody Logo" width={100} height={100} style={{ position: 'absolute', top: '-25px', right: '-25px', zIndex: '1' }} />
                                <Card className={classes.cardMobile} sx={{ backgroundColor: '#aac7ff' }}>
                                    <Typography gutterBottom variant="h5" component="div" sx={{
                                        fontSize: { xs: '28px', md: '34px' },
                                        textAlign: 'start',

                                    }}>
                                        <span style={{ fontSize: '60px', }}>3</span> เตรียม
                                    </Typography>

                                    <Typography sx={{
                                        fontSize: '16px', textAlign: 'start', color: 'black'
                                    }}>
                                        เอกสาร ระหว่าง<br />รอ เจ้าหน้าที่
                                        <br />ทำการ
                                    </Typography>

                                    <div className='flex justify-center mt-6'>
                                        <button type="button" className="text-white bg-blue-900 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">ดูเอกสาร</button>
                                    </div>
                                </Card>
                            </div>

                            <div style={{ position: 'relative', width: 'fit-content', margin: 'auto' }}>
                                <Image src={IC4} alt="HeyGoody Logo" width={100} height={100} style={{ position: 'absolute', top: '-25px', right: '-25px', zIndex: '1' }} />
                                <Card className={classes.cardMobile2} sx={{ backgroundColor: '#fbd3d2' }} >

                                    <Typography gutterBottom variant="h5" component="div" sx={{
                                        fontSize: { xs: '28px', md: '34px' },
                                        textAlign: 'start',

                                    }}>
                                        <span style={{ fontSize: '60px', }}>4</span> เช็ค
                                    </Typography>

                                    <Typography sx={{
                                        fontSize: '16px', textAlign: 'start', color: 'black'
                                    }}>
                                        ค้นหาอู่ซ่อมใกล้<br />คุณทันนที
                                        เมื่อ<br />เกิดเหตุ
                                    </Typography>

                                    <div className='flex justify-center mt-6'>
                                        <button type="button" className="text-white bg-blue-900 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">ค้นหาอู่</button>
                                    </div>

                                </Card>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>

    )
}