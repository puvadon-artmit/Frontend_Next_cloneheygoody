"use client"
import React from 'react'
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import { Typography, Snackbar } from '@mui/material';
import Image from 'next/image'
import ki01 from '../../image/travelinsurance/ki01.png'
import ki02 from '../../image/travelinsurance/ki02.png'
import visa01 from '../../image/travelinsurance/visa01.png'
import visa02 from '../../image/travelinsurance/visa02.png'
import aia01 from '../../image/travelinsurance/aia01.png'
import aia02 from '../../image/travelinsurance/aia02.png'
import { makeStyles } from '@mui/styles';
import { Card, CardContent } from '@mui/material';
import icon from '../../image/icon_car/small_travel.svg'
import Starbucks from '../../image/travelinsurance/Starbucks.png'
import Msig from '../../image/travelinsurance/msig.png'


const useStyles = makeStyles({
    typographyStyle: {
        fontSize: '15px',
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
    },
    iconStyle: {
        marginLeft: '10px',
    },
    textContent: {
        marginLeft: '10px',
    },
    typographyStyle2: {
        fontSize: '15px',
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: '10px'
    },
    textContent2: {
        marginLeft: '10px',
        marginRight: '20px'
    },
    typographyStyle3: {
        fontSize: '15px',
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: '10px',
        marginRight: '20px'
    },
    myTable: {
        width: '100%',
        borderRadius: '10px', // ปรับค่าตามที่ต้องการ
        borderCollapse: 'separate',
        borderSpacing: 0,
        overflow: 'hidden',
        border: '0.5px solid #EBEBEB',
        padding: '10px'
    },
    textstra: {
        color : 'white',
    }

});


export default function Cardtl_detail() {
    const classes = useStyles();
    return (
        <Container maxWidth="lg" className="card-detail-container">

            <Typography sx={{ fontSize: { xs: '28px', md: '28px' }, color: 'black', textAlign: 'center', fontWeight: 'bold', marginTop: '40px' }}>
                ทำการบ้านประกันเดินทางมาให้แล้ว ตัวจริงเรื่องเที่ยว!
            </Typography>

            <Grid container spacing={0} sx={{ marginTop: '20px' }}>
                {/* -----------------------------  card1 ------------------------------------------------------------------- */}
                <Grid item xs={12} md={4}>
                    <div className="max-w-xs mx-auto overflow-hidden rounded-lg shadow-lg flex">
                        <div className="flex-1">
                            <div className="px-4 py-2 bg-gradient-to-r from-fuchsia-50 to-fuchsia-100" style={{ display: 'flex', alignItems: 'center' }}>

                                <Typography sx={{ fontSize: { xs: '20px', md: '22px', marginRight: '40px' }, color: 'black', fontWeight: 'bold' }}>
                                    <span style={{ fontSize: '18px', fontWeight: 'bold', color: 'green' }}>ซมโปะประกันภัย</span><br />
                                    Destination ญี่ปุ่นสุดฮิต
                                </Typography>
                                <div style={{ position: 'relative' }}>
                                    <Image src={ki01} width={150} height={150} alt="Picture" style={{ marginLeft: '10px' }} />
                                    <div style={{ position: 'absolute', top: '25px', left: '25px', zIndex: '1' }}>
                                        <div style={{ backgroundColor: 'white', padding: '3px', borderRadius: '8px', width: '50px', height: '50px' }}>
                                            <Image src={ki02} width={100} height={100} alt="Picture" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 py-2 bg-fuchsia-50">
                                <Typography className={classes.typographyStyle}>
                                    <Image src={icon} width={15} height={15} alt="Picture" className={classes.iconStyle} />
                                    <span className={classes.textContent}>ไม่ต้องสำรองจ่ายทั้ง IPD และ OPD ที่ญี่ปุ่น</span>
                                </Typography>

                                <Typography className={classes.typographyStyle2}>
                                    <Image src={icon} width={15} height={15} alt="Picture" className={classes.iconStyle} />
                                    <span className={classes.textContent}>หาหมอไม่ต้องกลัว มีล่ามญี่ปุ่นให้</span>
                                </Typography>

                                <Typography className={classes.typographyStyle2}>
                                    <Image src={icon} width={15} height={15} alt="Picture" className={classes.iconStyle} />
                                    <span className={classes.textContent}>พายุเข้า น้ำท่วม หิมะถล่ม บินกลับไม่ได้</span>
                                </Typography>

                                <Typography >
                                    <span className={classes.textContent2} style={{ marginLeft: '35px' }}>ขยายความคุ้มครอง 15 วัน ทันที</span>
                                </Typography>

                                <Typography className={classes.typographyStyle2}>
                                    <Image src={icon} width={15} height={15} alt="Picture" className={classes.iconStyle} />
                                    <span className={classes.textContent}>คุ้มครองทรัพย์สินตั้งแต่บาทแรก</span>
                                </Typography>
                                {/* ---------------------------------------------------------------------------------------------- */}


                                <Card className='mt-4'>
                                    <CardContent>
                                        <div className="grid grid-cols-2 gap-4" >
                                            <div className={classes.myTable}>
                                                <Typography className="text-center mb-2">ราคาเอเชีย</Typography>
                                                <table className="w-full " >
                                                    <tbody>
                                                        <tr>
                                                            <td className=""> <Typography>5 วัน</Typography></td>
                                                            <td className="text-end "> <Typography>293.-</Typography></td>
                                                        </tr>
                                                        <tr>
                                                            <td className=""> <Typography>7 วัน</Typography></td>
                                                            <td className="text-end "> <Typography>337.-</Typography></td>
                                                        </tr>


                                                    </tbody>
                                                </table>


                                            </div>
                                            <div className={classes.myTable}>
                                                <Typography className="text-center mb-2">ราคาทั่วโลก</Typography>
                                                <table className="w-full">
                                                    <tbody>
                                                        <tr>
                                                            <td className=""> <Typography>10 วัน</Typography></td>
                                                            <td className="text-end "> <Typography>442.-</Typography></td>
                                                        </tr>
                                                        <tr>
                                                            <td className=""> <Typography>14 วัน</Typography></td>
                                                            <td className="text-end "> <Typography>552.-</Typography></td>
                                                        </tr>


                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* --------------------------------------------------------------------------------------       */}

                            </div>
                            <div className="flex justify-center px-4 py-2 bg-white">
                                <button type="button" className="text-black bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 ">ดูรายละเอียด</button>
                                <button type="button" className="text-white bg-blue-900 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">ซื้อเลย</button>
                            </div>
                        </div>
                    </div>

                </Grid>
                {/* -----------------------------  card2 ------------------------------------------------------------------- */}

                <Grid item xs={12} md={4}>
                    <div className="max-w-xs mx-auto overflow-hidden rounded-lg shadow-lg flex">
                        <div className="flex-1">
                            <div className="px-4 py-2 bg-gradient-to-r from-teal-50 to-teal-100" style={{ display: 'flex', alignItems: 'center' }}>
                            <Typography sx={{ fontSize: { xs: '20px', md: '22px' }, color: 'black', fontWeight: 'bold' }}>
                                    <span style={{ fontSize: '18px', fontWeight: 'bold', color: 'green' }}>เอ็ม เอส ไอ จี ประกันภัย</span><br />
                                    ขอ VISA ได้ ราคาสบายกระเป๋า
                                </Typography>
                                <div style={{ position: 'relative' }}>
                                    <Image src={visa02} width={150} height={150} alt="Picture" style={{ marginRight: '10px' }} />
                                    <div style={{ position: 'absolute', top: '25px', left: '25px', zIndex: '1' }}>
                                        <div style={{ backgroundColor: 'white', padding: '3px', borderRadius: '8px', width: '50px', height: '50px' }}>
                                            <Image src={visa01} width={100} height={100} alt="Picture" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="px-4 py-2 bg-teal-50">
                            <Typography className={classes.typographyStyle2}>
                                    <Image src={icon} width={15} height={15} alt="Picture" className={classes.iconStyle} />
                                    <span className={classes.textContent}>ยื่นวีซ่า ค่ารักษาพยาบาล 2,000,000 บาท</span>
                                </Typography>

                                <Typography >
                                    <span className={classes.textContent2} style={{ marginLeft: '35px' }}>ราคาเบาๆ</span>
                                </Typography>

                                <Typography className={classes.typographyStyle2}>
                                    <Image src={icon} width={15} height={15} alt="Picture" className={classes.iconStyle} />
                                    <span className={classes.textContent}>วีซ่าไม่ผ่าน คืนเงิน 100%</span>
                                </Typography>

                                <Typography className={classes.typographyStyle2}>
                                    <Image src={icon} width={15} height={15} alt="Picture" className={classes.iconStyle} />
                                    <span className={classes.textContent}>รับประกันรุ่นเดอะ จนถึงอายุ 80 ปี</span>
                                </Typography>

                                <Typography className={classes.typographyStyle2}>
                                    <Image src={icon} width={15} height={15} alt="Picture" className={classes.iconStyle} />
                                    <span className={classes.textContent}>เลื่อน ยกเลิก เดินทาง คุ้มครอง 500,000 </span>
                                </Typography>

                                <Typography >
                                    <span className={classes.textContent2} style={{ marginLeft: '35px' }}>บาท</span>
                                </Typography>
                                {/* ---------------------------------------------------------------------------------------------- */}


                                <Card className='mt-4'>
                                    <CardContent>
                                        <div className="grid grid-cols-2 gap-4" >
                                            <div className={classes.myTable}>
                                                <Typography className="text-center mb-2">ราคาเอเชีย</Typography>
                                                <table className="w-full " >
                                                    <tbody>
                                                        <tr>
                                                            <td className=""> <Typography>5 วัน</Typography></td>
                                                            <td className="text-end "> <Typography>205.-</Typography></td>
                                                        </tr>
                                                        <tr>
                                                            <td className=""> <Typography>7 วัน</Typography></td>
                                                            <td className="text-end "> <Typography>263.-</Typography></td>
                                                        </tr>


                                                    </tbody>
                                                </table>


                                            </div>
                                            <div className={classes.myTable}>
                                                <Typography className="text-center mb-2">ราคาทั่วโลก</Typography>
                                                <table className="w-full">
                                                    <tbody>
                                                        <tr>
                                                            <td className=""> <Typography>10 วัน</Typography></td>
                                                            <td className="text-end "> <Typography>331.-</Typography></td>
                                                        </tr>
                                                        <tr>
                                                            <td className=""> <Typography>14 วัน</Typography></td>
                                                            <td className="text-end "> <Typography>425.-</Typography></td>
                                                        </tr>


                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* --------------------------------------------------------------------------------------       */}

                                <div className="flex justify-center  bg-teal-50 mt-6">
                                <div className="bg-zinc-800 rounded-lg p-2 flex flex-row items-center" style={{ width: '280px',height : '80px' }}>
                                    <div className="flex-shrink-0">
                                        <Image src={Starbucks} width={60} height={60} alt="Picture" />
                                    </div>
                                    <div className="ml-4">
                                    <Typography className={classes.textstra}>รับ Starbucks e-Coupon</Typography>
                                    <div className="flex items-center">
                                        <Typography className={classes.textstra}>เมื่อซื้อประกัน</Typography>
                                        <Image src={Msig} width={60} height={60} alt="Picture" style={{marginLeft : '10px'}} />
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="flex justify-center px-4 py-2 bg-white">
                                <button type="button" className="text-black bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 ">ดูรายละเอียด</button>
                                <button type="button" className="text-white bg-blue-900 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">ซื้อเลย</button>
                            </div>
                        </div>
                    </div>
                </Grid>
                {/* -----------------------------  card3 ------------------------------------------------------------------- */}
                <Grid item xs={12} md={4}>
                    <div className="max-w-xs mx-auto overflow-hidden rounded-lg shadow-lg flex">
                        <div className="flex-1">
                            <div className="px-4 py-2 bg-gradient-to-r from-yellow-50 to-yellow-100" style={{ display: 'flex', alignItems: 'center' }}>
                            <Typography sx={{ fontSize: { xs: '20px', md: '22px' }, color: 'black', fontWeight: 'bold',marginRight : '40px' }}>
                                    <span style={{ fontSize: '18px', fontWeight: 'bold', color: 'green' }}>แอกซ่า ประกันภัย</span><br />
                                    เที่ยวสบายใจ ทั้งครอบครัว
                                </Typography>
                                <div style={{ position: 'relative' }}>
                                    <Image src={aia02} width={150} height={150} alt="Picture" style={{ marginLeft: '10px' }} />
                                    <div style={{ position: 'absolute', top: '25px', left: '25px', zIndex: '1' }}>
                                        <div style={{ backgroundColor: 'white', padding: '3px', borderRadius: '8px', width: '50px', height: '50px' }}>
                                            <Image src={aia01} width={100} height={100} alt="Picture" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 py-2 bg-yellow-50">
                            <Typography className={classes.typographyStyle}>
                                    <Image src={icon} width={15} height={15} alt="Picture" className={classes.iconStyle} />
                                    <span className={classes.textContent}>ค่ารักษาพยาบาลเด็ก วงเงินสูง</span>
                                </Typography>

                                <Typography >
                                    <span className={classes.textContent2} style={{ marginLeft: '35px' }}>4,000,000 บาท</span>
                                </Typography>


                                <Typography className={classes.typographyStyle2}>
                                    <Image src={icon} width={15} height={15} alt="Picture" className={classes.iconStyle} />
                                    <span className={classes.textContent}>คุ้มครองทรัพย์สินตั้งแต่บาทแรก</span>
                                </Typography>


                                <Typography className={classes.typographyStyle2}>
                                    <Image src={icon} width={15} height={15} alt="Picture" className={classes.iconStyle} />
                                    <span className={classes.textContent}>แผนรายปี ราคาดี เริ่มต้นเพียง 1,500</span>
                                </Typography>

                                <Typography >
                                    <span className={classes.textContent2} style={{ marginLeft: '35px' }}>บาท เดินทางสูงสุด 180 วัน / ทริป</span>
                                </Typography>

                                {/* ---------------------------------------------------------------------------------------------- */}


                                <Card className='mt-4'>
                                    <CardContent>
                                        <div className="grid grid-cols-2 gap-4" >
                                            <div className={classes.myTable}>
                                                <Typography className="text-center mb-2">ราคาเอเชีย</Typography>
                                                <table className="w-full " >
                                                    <tbody>
                                                        <tr>
                                                            <td className=""> <Typography>5 วัน</Typography></td>
                                                            <td className="text-end "> <Typography>282.-</Typography></td>
                                                        </tr>
                                                        <tr>
                                                            <td className=""> <Typography>7 วัน</Typography></td>
                                                            <td className="text-end "> <Typography>312.-</Typography></td>
                                                        </tr>


                                                    </tbody>
                                                </table>


                                            </div>
                                            <div className={classes.myTable}>
                                                <Typography className="text-center mb-2">ราคาทั่วโลก</Typography>
                                                <table className="w-full">
                                                    <tbody>
                                                        <tr>
                                                            <td className=""> <Typography>10 วัน</Typography></td>
                                                            <td className="text-end "> <Typography>414.-</Typography></td>
                                                        </tr>
                                                        <tr>
                                                            <td className=""> <Typography>14 วัน</Typography></td>
                                                            <td className="text-end "> <Typography>508.-</Typography></td>
                                                        </tr>


                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* --------------------------------------------------------------------------------------       */}

                            </div>
                            <div className="flex justify-center px-4 py-2 bg-white">
                                <button type="button" className="text-black bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 ">ดูรายละเอียด</button>
                                <button type="button" className="text-white bg-blue-900 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">ซื้อเลย</button>
                            </div>
                        </div>
                    </div>
                </Grid>


            </Grid>
        </Container>


    )
}