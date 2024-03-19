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

import ClearIcon from '@mui/icons-material/Clear';

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

export default function Content_plan() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // -------------------- Modal  ------------------------------

    const [open2, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose2 = () => setOpen(false);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container alignItems="center" justifyContent="center" sx={{ color: 'black', width: '100%', marginTop: '20px' }}>
                <Grid item>
                    <Image src={Car} alt="Car Insurance" width={25} height={25} />
                </Grid>
                <Grid item>
                    <Typography sx={{ marginLeft: '20px' }}>
                        HONDA, ACCORD EL 1.5
                    </Typography>
                </Grid>
                <Grid item>
                    <IconButton edge="start" color="inherit" aria-label="ArrowBackIosIcon" sx={{ color: '#02345d', marginLeft: { xs: '10px', sm: '20px' } }}>
                        <CreateIcon />
                    </IconButton>
                </Grid>
                <Grid item>
                    <Typography sx={{ color: '#02345d', marginLeft: { xs: '10px', sm: '20px' } }}>
                        เปลี่ยน
                    </Typography>
                </Grid>
            </Grid>

            <Grid container justifyContent="center" alignItems="center" sx={{ color: 'black', marginTop: '20px', marginBottom: '20px' }}>
                <Grid item sx={{ marginRight: '10px' }}>
                    <Grid container justifyContent="center">
                        <Image src={HGD} alt="Car Insurance" width={1400} height={1000} style={{ borderRadius: '5px', maxWidth: '100%' }} />
                    </Grid>
                </Grid>
            </Grid>

            <Grid container style={{ height: '100vh' }}>
                <Grid item xs={12} md={4} style={{ backgroundColor: 'white' }}> {/* ส่วนสีน้ำเงิน */}

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography
                            sx={{
                                color: '#02345d',
                                marginLeft: { xs: '10px', sm: '120px' },
                                fontSize: { xs: '18px', sm: '25px' },
                                marginRight: { xs: '10px', sm: '140px' }
                            }}
                        >
                            ตัวกรอง
                        </Typography>

                        <Typography
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                color: '#02345d',
                                marginLeft: { xs: '10px', sm: '20px' },
                                fontSize: { xs: '18px', sm: '18px' },
                            }}
                        >
                            <RotateLeftIcon style={{ marginRight: '5px' }} />
                            ล้างค่า
                        </Typography>
                    </div>


                    <Typography
                        component="div"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            color: '#02345d',
                            marginLeft: { xs: '10px', sm: '120px' },
                            fontSize: { xs: '18px', sm: '20px' },
                            marginTop: { xs: '10px', sm: '20px' }
                        }}
                    >
                        ประเภทการซ่อม
                        <Typography
                            component="span"
                            variant="body1"
                            sx={{
                                fontSize: { xs: '14px', sm: '14px' },
                                marginLeft: '5px'
                            }}
                        >
                            ( เลือกได้มากกว่า 1 ข้อ )
                        </Typography>
                    </Typography>

                    <div className='flex justify-center mt-8'>
                        <Button className="bg-sky-100 text-black font-bold py-1 px-2 rounded" style={{ fontSize: '14px' }}

                        >
                            <FormControlLabel
                                control={<Checkbox defaultChecked />}
                                label="ซ่อมศูนย์"
                                style={{ fontSize: '14px' }}
                            />
                        </Button>
                        <Button className="bg-sky-100 text-black font-bold py-1 px-2 rounded" style={{ fontSize: '14px', marginLeft: '20px' }}>
                            <FormControlLabel
                                control={<Checkbox defaultChecked />}
                                label="ซ่อมอู่"
                                style={{ fontSize: '14px' }}
                            />
                        </Button>
                    </div>

                    <hr style={{ width: '70%', margin: '0 auto', display: 'block', marginTop: '20px' }} />

                    <Typography
                        component="div"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            color: '#02345d',
                            marginLeft: { xs: '10px', sm: '120px' },
                            fontSize: { xs: '18px', sm: '20px' },
                            marginTop: { xs: '10px', sm: '20px' }
                        }}
                    >
                        ค่าเสียหายส่วนแรก
                        <Typography
                            component="span"
                            variant="body1"
                            sx={{
                                fontSize: { xs: '14px', sm: '14px' },
                                marginLeft: '5px'
                            }}
                        >
                            ( เลือกได้มากกว่า 1 ข้อ )
                        </Typography>
                    </Typography>

                    <Container fixed sx={{ marginLeft: '100px' }}>
                        <FormGroup sx={{ display: 'flex', flexDirection: 'column' }}>
                            <FormControlLabel
                                control={<Checkbox />}
                                label={<span style={{ color: 'black' }}>ธนชาตประกันภัย</span>}
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox />}
                                label={<span style={{ color: 'black' }}>ประกันชั้น 1</span>}
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox />}
                                label={<span style={{ color: 'black' }}>ทุนประกัน</span>}
                            />
                        </FormGroup>
                    </Container>

                    <hr style={{ width: '70%', margin: '0 auto', display: 'block', marginTop: '20px' }} />
                    <Typography
                        component="div"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            color: '#02345d',
                            marginLeft: { xs: '10px', sm: '120px' },
                            fontSize: { xs: '18px', sm: '20px' },
                            marginTop: { xs: '10px', sm: '20px' }
                        }}
                    >
                        ทุนประกัน
                    </Typography>

                    <Container fixed >
                        <div className='flex justify-center'>

                            <Button className="mt-4 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-24 rounded"
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}>

                                ราคาต่ำไปสูง
                            </Button>

                        </div>
                        <div>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}

                            >
                                <MenuItem >0 บาท</MenuItem>
                                <MenuItem >50,000 บาท</MenuItem>

                            </Menu>
                        </div>
                    </Container>

                    <hr style={{ width: '70%', margin: '0 auto', display: 'block', marginTop: '20px' }} />

                    <Typography
                        component="div"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            color: '#02345d',
                            marginLeft: { xs: '10px', sm: '120px' },
                            fontSize: { xs: '18px', sm: '20px' },
                            marginTop: { xs: '10px', sm: '20px' }
                        }}
                    >
                        บริการเสริม
                        <Typography
                            component="span"
                            variant="body1"
                            sx={{
                                fontSize: { xs: '14px', sm: '14px' },
                                marginLeft: '5px'
                            }}
                        >
                            ( เลือกได้มากกว่า 1 ข้อ )
                        </Typography>
                    </Typography>

                    <Container fixed sx={{ marginLeft: '100px' }}>
                        <FormGroup sx={{ display: 'flex', flexDirection: 'column' }}>
                            <FormControlLabel
                                required control={<Checkbox />}
                                label={<span style={{ color: 'black' }}>ช่วยเหลือฉุกเฉิน</span>}
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormControlLabel
                                required control={<Checkbox />}
                                label={<span style={{ color: 'black' }}>ภัยธรรมชาติ</span>}
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormControlLabel
                                required control={<Checkbox />}
                                label={<span style={{ color: 'black' }}>ภัยน้ำท่วม</span>}
                            />
                        </FormGroup>
                    </Container>

                    <hr style={{ width: '70%', margin: '0 auto', display: 'block', marginTop: '20px' }} />
                    <Typography
                        component="div"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            color: '#02345d',
                            marginLeft: { xs: '10px', sm: '120px' },
                            fontSize: { xs: '18px', sm: '20px' },
                            marginTop: { xs: '10px', sm: '20px' }
                        }}
                    >
                        บริษัทประกันภัย
                        <Typography
                            component="span"
                            variant="body1"
                            sx={{
                                fontSize: { xs: '14px', sm: '14px' },
                                marginLeft: '5px'
                            }}
                        >
                            ( เลือกได้มากกว่า 1 ข้อ )
                        </Typography>
                    </Typography>

                    <Container fixed sx={{ marginLeft: '100px' }}>
                        <FormGroup sx={{ display: 'flex', flexDirection: 'column' }}>
                            <FormControlLabel
                                required control={<Checkbox />}
                                label={<span style={{ color: 'black' }}>กรุงเทพประกันภัย</span>}
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormControlLabel
                                required control={<Checkbox />}
                                label={<span style={{ color: 'black' }}>กรุงไทยพานิชประกันภัย</span>}
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormControlLabel
                                required control={<Checkbox />}
                                label={<span style={{ color: 'black' }}>คุ้มภัยโตเกียวมารีนประกันภัย</span>}
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormControlLabel
                                required control={<Checkbox />}
                                label={<span style={{ color: 'black' }}>ชับบ์สามัคคีประกันภัย</span>}
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormControlLabel
                                required control={<Checkbox />}
                                label={<span style={{ color: 'black' }}>ทิพยประกันภัย</span>}
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormControlLabel
                                required control={<Checkbox />}
                                label={<span style={{ color: 'black' }}>ธนชาตประกันภัย</span>}
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormControlLabel
                                required control={<Checkbox />}
                                label={<span style={{ color: 'black' }}>ประกันภัยไทยวิวัฒน์</span>}
                            />
                        </FormGroup>
                    </Container>

                </Grid>
                <Grid item xs={12} md={8} style={{ backgroundColor: '#f9f9f4' }}> {/* ส่วนที่แบ่งไว้ส่วนที่ 2 */}
                    <div className='flex justify-center'>
                        <ButtonGroup
                            disableElevation
                            variant="contained"
                            aria-label="Disabled elevation buttons"
                            sx={{
                                bgcolor: '#02345d',
                                width: '100%',
                                maxWidth: '600px',
                                height: '50px',
                                display: 'flex',
                                '@media (max-width: 600px)': {
                                    maxWidth: '100%',
                                },
                            }}
                        >
                            <Button sx={{ flex: 1 }}>ชั้น 1</Button>
                            <Button sx={{ flex: 1 }}>ชั้น 2</Button>
                            <Button sx={{ flex: 1 }}>ชั้น 2+</Button>
                            <Button sx={{ flex: 1 }}>ชั้น 3+</Button>
                            <Button sx={{ flex: 1 }}>ชั้น 3</Button>

                            <Button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}>
                                ราคาต่ำไปสูง
                            </Button>
                        </ButtonGroup>
                    </div>
                    <div>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem >ราคาต่ำไปสูง</MenuItem>
                            <MenuItem >ราคาสูงไปต่ำ</MenuItem>
                        </Menu>
                    </div>
                    {/* ---------------------- card -------------------------------------- */}

                    <div className='flex justify-center'>
                        <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, marginTop: '40px', height: '200px', maxWidth: '800px', width: '100%' }}>
                            <CardContent sx={{ display: 'flex', width: '100%' }}>
                                <div style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <Typography gutterBottom component="div" sx={{ fontSize: '18px', display: 'flex', alignItems: 'center' }}>
                                        <Image src={Thanachat} alt="Car Insurance" width={50} height={40} style={{ borderRadius: '5px', maxWidth: '100%', marginRight: '10px' }} />
                                        <span style={{ flex: 1 }}>ธนชาตประกันภัย <br /> ประกันชั้น 1 / ซ่อมอู่</span>
                                    </Typography>

                                    <Grid container alignItems="center" >
                                        <Typography variant="body1" sx={{ marginLeft: '60px' }}>ทุนประกัน</Typography>
                                        <Typography variant="body1" sx={{ marginLeft: '40px', fontWeight: 'bold' }}>1,150,000 บาท</Typography>
                                    </Grid>

                                    <Grid container alignItems="center" >
                                        <Typography variant="body1" sx={{ marginLeft: '60px' }}>ค่าเสียหายส่วนแรก</Typography>
                                        <Typography variant="body1" sx={{ marginLeft: '40px', fontWeight: 'bold' }}>ไม่มี</Typography>
                                    </Grid>
                                </div>

                                <div style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <div style={{ display: 'flex', gap: '10px' }}>
                                        <Button onClick={handleOpen} className="bg-sky-100 text-gray-600 font-bold py-2 px-4 rounded" style={{ fontSize: '14px' }}>
                                            <DehazeIcon />
                                            ดูรายระเอียด
                                        </Button>

                                        <Button className="bg-sky-100 text-black font-bold py-1 px-2 rounded" style={{ fontSize: '14px' }}>
                                            <FormControlLabel control={<Checkbox defaultChecked />} label="เปรียบเทียบ" style={{ fontSize: '14px' }} />
                                        </Button>
                                    </div>

                                    <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '20px', color: 'green' }}>
                                            9,500.53 <span style={{ fontSize: '15px' }}>บาท/ปี</span>
                                        </Typography>
                                        <Button className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded">
                                            ซื้อเลย
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* --------------------------------------------------  Modal  -------------------------------------------------------------------- */}

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
                                    <div className='flex justify-between items-center mb-4'>
                                        <Typography variant="body1" sx={{ fontSize: '20px', fontWeight: 'bold' }}>รายละเอียดแผนประกัน</Typography>
                                        <ClearIcon onClick={handleClose2} />
                                    </div>
                                    <hr />

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
                                                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '25px', color: 'green', marginRight: '20px' }}>
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
                    {/* ------------------------------------------------------------------------------------------------------------------ */}
                </Grid>
            </Grid>
        </Box>
    )
}
