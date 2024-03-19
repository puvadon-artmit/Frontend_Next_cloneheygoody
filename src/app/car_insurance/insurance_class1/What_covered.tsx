"use client"
import React, { useEffect, useState } from 'react';
import { Box, Container } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { fetchCars, selectCarData, selectStatus } from '../../store/slice/insurancecarsSlice';
import { fetchProtection, selectProtectionData, selectStatus2 } from '../../store/slice/protectionsSlice';
import { RootState } from '../../store/store';
import Image from 'next/image'
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

import iocisr1 from '../../../image/icon_isr/iconisr1.png'
import iocisr2 from '../../../image/icon_isr/iconisr2.png'
import iocisr3 from '../../../image/icon_isr/iconisr3.png'
import iocisr4 from '../../../image/icon_isr/iconisr4.png'
import iocisr5 from '../../../image/icon_isr/iconisr5.png'
import iocisr6 from '../../../image/icon_isr/iconisr6.png'

import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import Markdown from 'react-markdown'
import Grid from '@mui/material/Grid';

import {
    createTheme,
    ThemeProvider,
} from '@mui/material';

const theme = createTheme({
    typography: {
        fontFamily: 'Kanit, sans-serif',
    },
});

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&::before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


export default function Compare_class1() {

    const [expanded, setExpanded] = React.useState<string | false>('panel4');

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };


    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);
    const [open5, setOpen5] = React.useState(false);
    const [open6, setOpen6] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpen2 = () => {
        setOpen2(true);
    };
    const handleClose2 = () => {
        setOpen2(false);
    };

    const handleClickOpen3 = () => {
        setOpen3(true);
    };
    const handleClose3 = () => {
        setOpen3(false);
    };

    const handleClickOpen4 = () => {
        setOpen4(true);
    };
    const handleClose4 = () => {
        setOpen4(false);
    };

    const handleClickOpen5 = () => {
        setOpen5(true);
    };
    const handleClose5 = () => {
        setOpen5(false);
    };

    const handleClickOpen6 = () => {
        setOpen6(true);
    };
    const handleClose6 = () => {
        setOpen6(false);
    };

    return (

        <Box sx={{ width: '100%', background: 'linear-gradient(to right, #d4d4d4, #888888)', height: 'auto' }}>

            <ThemeProvider theme={theme}>

                <Grid container spacing={2} >

                    <Grid item xs={12} sm={5} sx={{ marginTop: '50px' }}>
                        <Container maxWidth="xl">
                            <div>
                                <Typography textAlign="center" sx={{ fontSize: '30px', color: 'black', fontWeight: 'bold' }}>
                                    ประกันชั้น 1
                                    <span className='text-blue-800 ml-2'>
                                        คุ้มครองอะไรบ้าง
                                    </span>
                                </Typography>
                                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
                                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                        <Typography>คุ้มครองรถ (รถยนต์ที่เอาประกัน)</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            กรณีรถยนต์เสียหาย <br />
                                            ประกันจะคุ้มครองรถยนต์และอุปกรณ์ตกแต่งของคุณในอุบัติเหตุทุกกรณี <br />
                                            ทั้งที่มีคู่กรณีและไม่มีคู่กรณี โดยจะให้ความคุ้มครองสูงที่สุดตามทุนประกันภัย <br />
                                            <br />

                                            กรณีรถยนต์สูญหาย<br />
                                            คุ้มครองในกรณีรถยนต์และอุปกรณ์สูญหายจากการโจรกรรม ยักยอกทรัพย์<br />
                                            ลักทรัพย์ ชิงทรัพย์ ปล้นทรัพย์ ซึ่งเป็นให้รถยนต์หรืออุปกรณ์สูญหายในทุกกรณี<br />
                                            <br />

                                            กรณีรถยนต์ไฟไหม้<br />
                                            คุ้มครองในกรณีรถยนต์เกิดไฟลุกไหม้ในทุกกรณี ไม่ว่าจะลุกไหม้ด้วย<br />
                                            ตัวเองหรือมีเหตุปัจจัยอื่นๆเข้ามาเกี่ยวข้องทำให้เกิดไฟไหม้ ทางประกันก็จะชดใช้ทั้งสิ้น<br />

                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                        <Typography>คุ้มครองคน (บุคคลภายนอก)</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            ชีวิตบุคคลภายนอก<br />
                                            ประกันชั้น 1 คุ้มครองความเสียหายที่เกิดต่อชีวิต ร่างกาย หรือ<br />
                                            อนามัยของบุคคลภายนอกตามกฎหมาย ซึ่งเกิดจากรถยนต์คันที่มีการทำประกัน (ต่อคน)<br />
                                            <br />

                                            ทรัพย์สินบุคคลภายนอก<br />
                                            บริษัทประกันคุ้มครองทรัพย์สินของบุคคลภายนอกตามที่ผู้เอาประกันต้องรับผิดชอบตามกฎหมาย<br />
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                                        <Typography>ความคุ้มครองเพิ่มเติม</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            อุบัติเหตุส่วนบุคคล <br />
                                            ประกันภัยชั้น 1 จะคุ้มครองในกรณีเสียชีวิต เสียอวัยวะ หรือ <br />
                                            ทุพพลภาพแก่ผู้ขับขี่และผู้โดยสารในรถยนต์คันที่มีการเอาประกันภัย <br />
                                            <br />

                                            ค่ารักษาพยาบาลต่อคน<br />
                                            คุ้มครองค่ารักษาพยาบาลจากอาการบาดเจ็บที่เกิดจากอุบัติเหตุของ<br />
                                            บุคคลที่อยู่ในรถยนต์คันที่เอาประกันภัย<br />
                                            <br />

                                            ประกันตัวผู้ขับขี่<br />
                                            บริษัทประกันจะทำการประกันตัวผู้ขับในกรณีที่ถูกควบคุมตัวในคดี<br />
                                            อาญา และค่าใช้จ่ายในการดำเนินคดีตามกฎหมาย<br />

                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                                        <Typography>บริการเสริม</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            ช่วยเหลือฉุกเฉิน <br />
                                            บริการเสริมสำหรับบริษัทประกันที่จะคุ้มครองดูแลและบริการผู้เอา <br />
                                            ประกันตลอด 24 ชั่วโมง ในกรณีที่เกิดเหตุการณ์ไม่คาดคิด <br />
                                            <br />

                                            ภัยธรรมชาติ<br />
                                            บริษัทประกันภัยจะคุ้มครองเมื่อเกิดภัยธรรมชาติจนรถยนต์ได้รับ<br />
                                            ความเสียหาย เช่น ไฟไหม้ ลมพายุ แผ่นดินไหว ดินโคลน หรือภูเขา<br />
                                            ถล่ม เป็นต้น

                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        </Container>
                    </Grid>

                    {/* ส่วนที่ 2 */}
                    <Grid item xs={12} sm={7} sx={{ marginTop: '50px', marginBottom: '70px', backgroundColor : '#1e3fa9',borderTopLeftRadius : '10px',borderBottomLeftRadius : '10px'}} direction="row">
                        <Typography textAlign="center" sx={{ fontSize: '30px', color: '#f9f9f4', fontWeight: 'bold' }}>
                            ซื้อประกันชั้น 1 <span className='text-gray-400 ml-2'> ดียังไง? </span>
                        </Typography>

                        <Grid container spacing={2} sx={{ marginTop: '20px' }}>
                            {/* แบ่งเป็น 3 ส่วน */}
                            <Grid item xs={4}>
                                <div className='flex justify-center'>
                                    <Image
                                        src={iocisr1}
                                        width={80}
                                        height={80}
                                        alt="Picture of the author"
                                    />
                                </div>
                                <Typography textAlign="center" sx={{ fontSize: '14px', color: '#f9f9f4', marginTop: '10px' }}>
                                    เช็คเบี้ยประกันได้เอง <br />
                                    ตลอด 24 ชั่วโมง
                                </Typography>

                                <div className='flex justify-center mt-4'>
                                    <button onClick={handleClickOpen} type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 ">เพิ่มเติม</button>
                                </div>

                                <div className='flex justify-center mt-8'>
                                    <Image
                                        src={iocisr4}
                                        width={80}
                                        height={80}
                                        alt="Picture of the author"
                                    />
                                </div>
                                <Typography textAlign="center" sx={{ fontSize: '14px', color: '#f9f9f4', marginTop: '10px' }}>
                                    สะดวก สบาย จ่ายได้ <br />
                                    หลายช่องทาง
                                </Typography>

                                <div className='flex justify-center mt-4'>
                                    <button onClick={handleClickOpen4} type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 ">เพิ่มเติม</button>
                                </div>



                            </Grid>

                            <Grid item xs={4}>
                                <div className='flex justify-center'>
                                    <Image
                                        src={iocisr2}
                                        width={80}
                                        height={80}
                                        alt="Picture of the author"
                                    />
                                </div>
                                <Typography textAlign="center" sx={{ fontSize: '14px', color: '#f9f9f4', marginTop: '10px' }}>
                                    เปรียบเทียบประกันง่าย <br />
                                    กว่า 10 บริษัท
                                </Typography>

                                <div className='flex justify-center mt-4'>
                                    <button onClick={handleClickOpen2} type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 ">เพิ่มเติม</button>
                                </div>

                                <div className='flex justify-center mt-8'>
                                    <Image
                                        src={iocisr5}
                                        width={80}
                                        height={80}
                                        alt="Picture of the author"
                                    />
                                </div>
                                <Typography textAlign="center" sx={{ fontSize: '14px', color: '#f9f9f4', marginTop: '10px' }}>
                                    ซื้อประกันรถยนต์ใน <br />
                                    ราคาคุ้มค่ากว่า
                                </Typography>

                                <div className='flex justify-center mt-4'>
                                    <button onClick={handleClickOpen5} type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 ">เพิ่มเติม</button>
                                </div>

                            </Grid>
                            <Grid item xs={4}>
                                <div className='flex justify-center'>
                                    <Image
                                        src={iocisr3}
                                        width={80}
                                        height={80}
                                        alt="Picture of the author"
                                    />
                                </div>
                                <Typography textAlign="center" sx={{ fontSize: '14px', color: '#f9f9f4', marginTop: '10px' }}>
                                    ผ่อนประกันรถยนต์ <br />
                                    สบายๆ 0%
                                </Typography>

                                <div className='flex justify-center mt-4'>
                                    <button onClick={handleClickOpen3} type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 ">เพิ่มเติม</button>
                                </div>

                                <div className='flex justify-center mt-8'>
                                    <Image
                                        src={iocisr6}
                                        width={80}
                                        height={80}
                                        alt="Picture of the author"
                                    />
                                </div>
                                <Typography textAlign="center" sx={{ fontSize: '14px', color: '#f9f9f4', marginTop: '10px' }}>
                                    ติดต่อได้ <br />
                                    สบายใจ 24 ชั่วโมง
                                </Typography>

                                <div className='flex justify-center mt-4'>
                                    <button onClick={handleClickOpen6} type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 ">เพิ่มเติม</button>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>


                {/* ------------------------------- 1 -------------------------------------------------------------- */}
                <BootstrapDialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                >

                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <DialogContent dividers>
                        <div className='flex justify-center'>
                            <Image
                                src={iocisr1}
                                width={80}
                                height={80}
                                alt="Picture of the author"
                            />
                        </div>
                        <Typography textAlign="center" sx={{ fontSize: '18px', color: '#black', marginTop: '10px', marginBottom: '10px' }}>
                            เช็คเบี้ยประกันได้เอง <br />
                            ตลอด 24 ชั่วโมง
                        </Typography>
                        <Typography textAlign="center">
                            เพราะเราเข้าใจ จึงให้คุณเปรียบเทียบ เช็คเบี้ย และซื้อประกันรถยนต์ออนไลน์ <br /> ได้ง่ายๆ ตลอด 24 ชั่วโมง สะดวกเมื่อไหร่ก็ซื้อได้ทันที ไม่ต้องโทร <br /> หรือคอยรับสายให้กวนใจ
                        </Typography>
                    </DialogContent>

                </BootstrapDialog>
                {/* ----------------------------------------------------------------------------------------------      */}

                {/* ------------------------------- 2 -------------------------------------------------------------- */}
                <BootstrapDialog
                    onClose={handleClose2}
                    aria-labelledby="customized-dialog-title"
                    open={open2}
                >

                    <IconButton
                        aria-label="close"
                        onClick={handleClose2}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <DialogContent dividers>
                        <div className='flex justify-center'>
                            <Image
                                src={iocisr2}
                                width={80}
                                height={80}
                                alt="Picture of the author"
                            />
                        </div>
                        <Typography textAlign="center" sx={{ fontSize: '18px', color: '#black', marginTop: '10px', marginBottom: '10px' }}>
                            เช็คเบี้ยประกันได้เอง <br />
                            ตลอด 24 ชั่วโมง

                        </Typography>
                        <Typography textAlign="center" >
                            เรามีมากกว่า 10 บริษัทประกันภัยรถยนต์ชั้นนำให้คุณเลือก จะซ่อมห้าง ซ่อมอู่  <br /> หรือเลือกแผนประกันชั้นที่เหมาะกับความต้องการก็มีครบ!
                        </Typography>
                    </DialogContent>

                </BootstrapDialog>
                {/* ----------------------------------------------------------------------------------------------      */}
           
           {/* ------------------------------- 3 -------------------------------------------------------------- */}
           <BootstrapDialog
                    onClose={handleClose3}
                    aria-labelledby="customized-dialog-title"
                    open={open3}
                >

                    <IconButton
                        aria-label="close"
                        onClick={handleClose3}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <DialogContent dividers>
                        <div className='flex justify-center'>
                            <Image
                                src={iocisr3}
                                width={80}
                                height={80}
                                alt="Picture of the author"
                            />
                        </div>
                        <Typography textAlign="center" sx={{ fontSize: '18px', color: '#black', marginTop: '10px', marginBottom: '10px' }}>
                        ผ่อนประกันรถยนต์ <br />
                        สบายๆ 0%

                        </Typography>
                        <Typography textAlign="center" >
                        ซื้อง่าย แต่ผ่อนง่ายกว่า เพราะผ่อนชำระ 0% ได้ทั้งบัตรเครดิต  <br /> 
                        และเงินสด การันตีไม่มีดอกเบี้ย พร้อมคุ้มครองทันทีที่ซื้อ เคลมได้ทันทีเมื่อมีอุบัติเหตุ
                        </Typography>
                    </DialogContent>

                </BootstrapDialog>
                {/* ----------------------------------------------------------------------------------------------      */}

                {/* ------------------------------- 4 -------------------------------------------------------------- */}
           <BootstrapDialog
                    onClose={handleClose4}
                    aria-labelledby="customized-dialog-title"
                    open={open4}
                >

                    <IconButton
                        aria-label="close"
                        onClick={handleClose4}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <DialogContent dividers>
                        <div className='flex justify-center'>
                            <Image
                                src={iocisr4}
                                width={80}
                                height={80}
                                alt="Picture of the author"
                            />
                        </div>
                        <Typography textAlign="center" sx={{ fontSize: '18px', color: '#black', marginTop: '10px', marginBottom: '10px' }}>
                        สะดวก สบาย จ่ายได้ <br />
                        หลายช่องทาง

                        </Typography>
                        <Typography textAlign="center" >
                        ให้การชำระเบี้ยประกันเป็นเรื่องง่าย กับช่องทางการชำระเบี้ยที่หลากหลาย <br />  
                        ผ่านบัตรเครดิต บัตรเดบิต หรือ QR code สแกนเพื่อจ่ายผ่าน  <br /> 
                       mobile banking ได้ทุกธนาคาร
                        </Typography>
                    </DialogContent>

                </BootstrapDialog>
                {/* ----------------------------------------------------------------------------------------------  */}

                {/* ------------------------------- 5 -------------------------------------------------------------- */}
           <BootstrapDialog
                    onClose={handleClose5}
                    aria-labelledby="customized-dialog-title"
                    open={open5}
                >

                    <IconButton
                        aria-label="close"
                        onClick={handleClose5}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <DialogContent dividers>
                        <div className='flex justify-center'>
                            <Image
                                src={iocisr5}
                                width={80}
                                height={80}
                                alt="Picture of the author"
                            />
                        </div>
                        <Typography textAlign="center" sx={{ fontSize: '18px', color: '#black', marginTop: '10px', marginBottom: '10px' }}>
                        ซื้อประกันรถยนต์ <br />
                        ในราคาคุ้มค่ากว่า

                        </Typography>
                        <Typography textAlign="center" >
                        เพราะ heygoody ขายออนไลน์ ไม่ต้องมีเซลล์ จึง เอาค่าส่วนต่าง<br />  
                        มาลดราคาให้คุณได้ประกันที่คุ้มค่า  คุ้มราคา ไม่มีบวกเพิ่ม<br /> 
                        
                        </Typography>
                    </DialogContent>

                </BootstrapDialog>
                {/* ----------------------------------------------------------------------------------------------      */}

                {/* ------------------------------- 6 -------------------------------------------------------------- */}
           <BootstrapDialog
                    onClose={handleClose6}
                    aria-labelledby="customized-dialog-title"
                    open={open6}
                >

                    <IconButton
                        aria-label="close"
                        onClick={handleClose6}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <DialogContent dividers>
                        <div className='flex justify-center'>
                            <Image
                                src={iocisr6}
                                width={80}
                                height={80}
                                alt="Picture of the author"
                            />
                        </div>
                        <Typography textAlign="center" sx={{ fontSize: '18px', color: '#black', marginTop: '10px', marginBottom: '10px' }}>
                        ติดต่อได้ สบายใจ  <br />
                        24 ชม.

                        </Typography>
                        <Typography textAlign="center" >
                        ติดปัญหา หรือแค่อยากสอบถามข้อมูล ทัก LINE @ISR ได้เลย <br />  
                        พร้อมตอบทุกคำถาม ช่วยติดตามให้ทุกเรื่อง ตลอด 24 ชั่วโมง
                        
                        </Typography>
                    </DialogContent>

                </BootstrapDialog>
                {/* ----------------------------------------------------------------------------------------------      */}
            </ThemeProvider>

        </Box>

    );
}