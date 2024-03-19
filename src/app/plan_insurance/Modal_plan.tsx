"use client"
import React, { useState, ChangeEvent } from 'react';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Link from 'next/link';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import CreateIcon from '@mui/icons-material/Create';
import Car from '../../image/icon_car/grey-car.svg'
import HGD from '../../image/icon_car/hgd-auto-d.jpg'
import Thanachat from '../../image/insurance/thanachart.svg'

import {
    Typography,
    Box,
    Toolbar,
    ButtonGroup,
    Button,
    Menu,
    MenuItem,
    Card,
    CardContent,
    CardMedia,
    FormControlLabel,
    Checkbox,
} from '@mui/material';
import Container from '@mui/material/Container';
import FormGroup from '@mui/material/FormGroup';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import DehazeIcon from '@mui/icons-material/Dehaze';


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '80%',
    width: '60%',
    height: '42vw',
    bgcolor: 'background.paper',
    border: '0.5px solid #878986',
    boxShadow: 24,
    p: 4,
    borderRadius: '2%',
};

export default function Modal_plan() {

    const [open2, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose2 = () => setOpen(false);

  return (
    <div>

                        <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            open={open2}
                            onClose={handleClose2}
                            closeAfterTransition
                            slots={{ backdrop: Backdrop }}
                            slotProps={{
                                backdrop: {
                                    timeout: 500,
                                },
                            }}
                        >
                            <Fade in={open2}>
                                <Box sx={style}>
                                    <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, marginTop: '40px', height: '450px', maxWidth: '800px', width: '100%' }}>
                                        <CardContent sx={{ display: 'flex', width: '100%' }}>
                                            <div style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>


                                                <Grid container spacing={0} style={{ height: '10vh', width: '40vh', marginLeft: '60px' }}>

                                                    <Grid item xs={8} >
                                                        <Typography gutterBottom component="div" sx={{ fontSize: '18px', display: 'flex', alignItems: 'center' }}>
                                                            <span style={{ flex: 1 }}>ธนชาตประกันภัย <br /> ประกันชั้น 1 / ซ่อมอู่</span>
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={4} >
                                                        <Image src={Thanachat} alt="Car Insurance" width={50} height={40} style={{ borderRadius: '5px', maxWidth: '100%', marginRight: '10px', marginLeft: '10px' }} />
                                                    </Grid>
                                                </Grid>

                                                <Grid container alignItems="center" >
                                                    <Typography variant="body1" sx={{ marginLeft: '60px', marginRight: '40px' }}>ทุนประกัน</Typography>
                                                    <Typography variant="body1" sx={{ marginLeft: '40px', fontWeight: 'bold' }}>1,150,000 บาท</Typography>
                                                </Grid>

                                                <Grid container alignItems="center" >
                                                    <Typography variant="body1" sx={{ marginLeft: '60px', marginRight: '50px' }}>ค่าเสียหายส่วนแรก</Typography>
                                                    <Typography variant="body1" sx={{ marginLeft: '40px', fontWeight: 'bold' }}>ไม่มี</Typography>
                                                </Grid>

                                                <Grid container alignItems="center">

                                                    <div style={{ display: 'flex', gap: '10px', marginTop: '20px', marginLeft: '60px' }}>
                                                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '30px', color: 'green', marginRight: '50px' }}>
                                                            9,500.53 <span style={{ fontSize: '15px' }}>บาท/ปี</span>
                                                        </Typography>
                                                        <Button className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded">
                                                            ซื้อเลย
                                                        </Button>
                                                    </div>
                                                </Grid>
                                            </div>

                                            <div style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                                <div className='flex justify-center mb-4'>
                                                    <Typography id="transition-modal-title" variant="h6" component="h2">
                                                        คุ้มครองรถยนต์ที่เอาประกัน
                                                    </Typography>
                                                </div>
                                                <Grid container alignItems="center" >
                                                    <Typography variant="body1" sx={{ marginLeft: '30px', marginRight: '120px' }}>รถเสียหาย</Typography>
                                                    <Typography variant="body1" sx={{ marginLeft: '40px', fontWeight: 'bold' }}>1,150,000 บาท</Typography>
                                                </Grid>
                                                <Grid container alignItems="center" sx={{ marginTop: '10px' }}>
                                                    <Typography variant="body1" sx={{ marginLeft: '30px', marginRight: '40px' }}>รถยนต์สูญหาย/ไฟไหม้</Typography>
                                                    <Typography variant="body1" sx={{ marginLeft: '40px', fontWeight: 'bold' }}>1,150,000 บาท</Typography>
                                                </Grid>

                                                <div className='flex justify-center mb-4 mt-4'>
                                                    <Typography id="transition-modal-title" variant="h6" component="h2">
                                                        คุ้มครองบุคคลภายนอก
                                                    </Typography>
                                                </div>
                                                <Grid container alignItems="center" >
                                                    <Typography variant="body1" sx={{ marginLeft: '30px', marginRight: '50px' }}>ชีวิตบุคคลภายนอกต่อคน</Typography>
                                                    <Typography variant="body1" sx={{ marginLeft: '35px', fontWeight: 'bold' }}>50,000 บาท</Typography>
                                                </Grid>
                                                <Grid container alignItems="center" sx={{ marginTop: '10px' }}>
                                                    <Typography variant="body1" sx={{ marginLeft: '30px', marginRight: '40px' }}>ชีวิตบุคคลภายนอกต่อครั้ง</Typography>
                                                    <Typography variant="body1" sx={{ marginLeft: '25px', fontWeight: 'bold' }}>1,150,000 บาท</Typography>
                                                </Grid>
                                                <Grid container alignItems="center" sx={{ marginTop: '10px' }}>
                                                    <Typography variant="body1" sx={{ marginLeft: '30px', marginRight: '40px' }}>ทรัพย์สินบุคคลภายนอก</Typography>
                                                    <Typography variant="body1" sx={{ marginLeft: '40px', fontWeight: 'bold' }}>1,150,000 บาท</Typography>
                                                </Grid>
                                                <Grid container alignItems="center" sx={{ marginTop: '10px' }}>
                                                    <Typography variant="body1" sx={{ marginLeft: '30px', marginRight: '40px' }}>ค่าเสียหายส่วนแรกกรณีทรัพย์สิน</Typography>
                                                    <Typography variant="body1" sx={{ marginLeft: '45px', fontWeight: 'bold' }}>ไม่มี</Typography>
                                                </Grid>

                                                <div className='flex justify-center mb-4 mt-4'>
                                                    <Typography id="transition-modal-title" variant="h6" component="h2">
                                                        คุ้มครองเพิ่มเติม
                                                    </Typography>
                                                </div>
                                                <Grid container alignItems="center" >
                                                    <Typography variant="body1" sx={{ marginLeft: '30px', marginRight: '60px' }}>อุบัติเหตุส่วนบุคคล</Typography>
                                                    <Typography variant="body1" sx={{ marginLeft: '60px', fontWeight: 'bold' }}>50,000 บาท</Typography>
                                                </Grid>
                                                <Grid container alignItems="center" sx={{ marginTop: '10px' }}>
                                                    <Typography variant="body1" sx={{ marginLeft: '30px', marginRight: '40px' }}>ค่ารักษาพยาบาลต่อคน</Typography>
                                                    <Typography variant="body1" sx={{ marginLeft: '40px', fontWeight: 'bold' }}>1,150,000 บาท</Typography>
                                                </Grid>



                                            </div>
                                        </CardContent>
                                    </Card>
                                </Box>
                            </Fade>
                        </Modal>
                    </div>

  )
}