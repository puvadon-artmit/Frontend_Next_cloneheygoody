"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import {
    Typography,
    Snackbar,
    Grid,
    Container,
    Breadcrumbs,
    Box,
    Alert,
    Fade,
} from '@mui/material';

import type { AccordionProps } from '@mui/material/Accordion';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { makeStyles } from '@mui/styles';



import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Fab from '@mui/material/Fab';

import icon1 from '../../image/underwear/icon01.png'
import icon2 from '../../image/underwear/icon02.png'
import icon3 from '../../image/underwear/icon03.png'
import icon4 from '../../image/underwear/icon04.png'
import icon5 from '../../image/underwear/icon05.png'

import ki01 from '../../image/travelinsurance/ki01.png'
import ki02 from '../../image/travelinsurance/ki02.png'
import visa01 from '../../image/travelinsurance/visa01.png'
import visa02 from '../../image/travelinsurance/visa02.png'
import aia01 from '../../image/travelinsurance/aia01.png'
import aia02 from '../../image/travelinsurance/aia02.png'

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

const item1 = makeStyles((theme) => ({
    container2: {
        background: 'linear-gradient(to right, #1e3a8a, #1e3faa)',
        width: '160vw',
        height: 'auto',
    },
    text2: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: '40px',
    },
    textdetail2: {
        color: 'white',
        textAlign: 'center',
    },
    textaccord2: {
        color: 'white',
    },
    Fab: {  
        backgroundColor: '#00345c',
    },
}));

export default function Foreign_travel() {
    const classes = item1();

    const [expanded, setExpanded] = React.useState<string | false>('');
    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };


    return (
        <div className='flex justify-center '>
            <Box className={classes.container2}>
                <Typography className={classes.text2} sx={{ fontSize: { xs: '16px', md: '34px' } }}>
                    ซื้อประกัน ISR
                </Typography>


                <Container maxWidth="lg" sx={{ marginTop: '40px', marginBottom: '40px' }}>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                                {/* <Box component="span" sx={{ marginRight: '8px', width: '34px', height: '34px', borderRadius: '50%', backgroundColor: '#888888', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Typography sx={{ color: 'white' }}>
                                        1
                                    </Typography>
                                </Box> */}
                                ประกันภัยรถยนต์จำเป็นแค่ไหน ไม่ทำได้มั้ย?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography >
                                ประกันภัยรถยนต์มีความจำเป็น เพราะสามารถช่วยแบ่งเบาภาระของผู้ขับขี่บนท้องถนน ทั้งตัวผู้ขับเองและผู้อื่น สำหรับประกันรถยนต์ภาคสมัครใจ ผู้ขับขี่ไม่ต้องทำก็ได้ แต่ประกันรถยนต์ภาคบังคับ (พ.ร.บ) ต้องทำทุกคน ถ้าไม่ทำจะถือว่าผิดกฎหมาย

                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    {/* ---------------------------------- 3 -------------------------------------------------------------------------- */}
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                                {/* <Box component="span" sx={{ marginRight: '8px', width: '34px', height: '34px', borderRadius: '50%', backgroundColor: '#888888', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Typography sx={{ color: 'white' }}>
                                        2
                                    </Typography>
                                </Box> */}
                                ซื้อรถยนต์คันแรก ควรทำประกันภัยรถยนต์ชั้นไหนดี?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                แนะนำให้ทำประกันรถยนต์ชั้น 1 เพราะให้ความคุ้มครองสูงสุดทุกกรณี เหมาะสำหรับมือใหม่ที่ยังขาดประสบการณ์ในการขับรถ หรือคนที่มีรถยนต์คันแรก
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    {/* ---------------------------------- 4 -------------------------------------------------------------------------- */}
                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                                {/* <Box component="span" sx={{ marginRight: '8px', width: '34px', height: '34px', borderRadius: '50%', backgroundColor: '#888888', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Typography sx={{ color: 'white' }}>
                                        3
                                    </Typography>
                                </Box> */}
                                วิธีเลือกซื้อประกันภัยรถยนต์ ให้ตอบโจทย์ผู้ซื้อมากที่สุด
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>

                            <Typography >
                                heygoody แนะนำให้ซื้อประกันภัยรถยนต์ที่ตอบโจทย์การใช้งานหรือการดำเนินชีวิตของผู้ขับเป็นหลักว่าใช้รถมากน้อยแค่ไหน ขับใกล้ไกลแค่ไหน เช็คดูน้ำหนักสิ่งของที่บรรทุก หรือการขับรถในเส้นทางที่มีความเสี่ยงเกิดอันตราย และดูจากประสบการณ์ความชำนาญของตัวผู้ขับขี่เอง
                            </Typography>
                        </AccordionDetails>

                    </Accordion>

                    {/* ---------------------------------- 5 -------------------------------------------------------------------------- */}
                    <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                                {/* <Box component="span" sx={{ marginRight: '8px', width: '34px', height: '34px', borderRadius: '50%', backgroundColor: '#888888', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Typography sx={{ color: 'white' }}>
                                        4
                                    </Typography>
                                </Box> */}
                                ถ้าต้องการซื้อประกันภัยรถยนต์ออนไลน์ ต้องใช้เอกสารอะไรบ้าง?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography >
                                แค่มีข้อมูลจากเล่มทะเบียนรถ และบัตรประชาชน ก็ซื้อประกันออนไลน์กับ heygoody ได้เลย ง่ายแค่นี้เอง!
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    {/* ---------------------------------- 5 -------------------------------------------------------------------------- */}

                    <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                                {/* <Box component="span" sx={{ marginRight: '8px', width: '34px', height: '34px', borderRadius: '50%', backgroundColor: '#888888', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Typography sx={{ color: 'white' }}>
                                        5
                                    </Typography>
                                </Box> */}
                                การแจ้งอุบัติเหตุกับบริษัทประกันภัย และช่องทางการเคลม เคลมได้ที่ไหนบ้าง?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography >
                                แค่มีข้อมูลจากเล่มทะเบียนรถ และบัตรประชาชน ก็ซื้อประกันออนไลน์กับ heygoody ได้เลย ง่ายแค่นี้เอง!
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    {/* ---------------------------------- 6 -------------------------------------------------------------------------- */}

                    <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                                {/* <Box component="span" sx={{ marginRight: '8px', width: '34px', height: '34px', borderRadius: '50%', backgroundColor: '#888888', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Typography sx={{ color: 'white' }}>
                                        6
                                    </Typography>
                                </Box> */}
                                อายุของผู้ขับมีผลต่อราคาค่าเบี้ยประกันมั้ย?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography >
                                อายุผู้ขับมีผลโดยตรงต่อค่าเบี้ย เพราะอายุสามารถบ่งบอกวุฒิภาวะ ประสบการณ์ และความเชี่ยวชาญด้านรถยนต์ได้ ทำให้ผู้ขับที่มีอายุน้อยจะต้องจ่ายเบี้ยที่แพงกว่านั่นเอง
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    {/* ---------------------------------- 7 -------------------------------------------------------------------------- */}

                    <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                                {/* <Box component="span" sx={{ marginRight: '8px', width: '34px', height: '34px', borderRadius: '50%', backgroundColor: '#888888', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Typography sx={{ color: 'white' }}>
                                        7
                                    </Typography>
                                </Box> */}
                                ประกันภัยรถยนต์ไม่คุ้มครองในกรณีไหนบ้าง?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography >
                                ประกันภัยรถยนต์ทุกรูปแบบจะไม่คุ้มครองในกรณีผู้ขับทำผิดกฎหมาย หรือใช้รถในทางที่ผิดต่อกฎหมาย เช่น เมาแล้วขับ ขนส่งสิ่งของผิดกฎหมาย นำพาหนะไปปล้นทรัพย์ เป็นต้น
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    {/* ---------------------------------- 8 -------------------------------------------------------------------------- */}

                    <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                                {/* <Box component="span" sx={{ marginRight: '8px', width: '34px', height: '34px', borderRadius: '50%', backgroundColor: '#888888', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Typography sx={{ color: 'white' }}>
                                        8
                                    </Typography>
                                </Box> */}
                                ซื้อประกันออนไลน์กับ heygoody ผ่อนชำระได้มั้ย?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography >
                                สบายใจหายห่วง ซื้อประกันกับ heygoody ผ่อนชำระผ่านบัตรเครดิตทุกประเภท ทุกธนาคาร โดยจะได้ส่วนลดดอกเบี้ย 0% เป็นระยะเวลา 10 เดือน
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    {/* ---------------------------------- 9 -------------------------------------------------------------------------- */}

                    <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                                {/* <Box component="span" sx={{ marginRight: '8px', width: '34px', height: '34px', borderRadius: '50%', backgroundColor: '#888888', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Typography sx={{ color: 'white' }}>
                                        9
                                    </Typography>
                                </Box> */}
                                หากรถยนต์มีแผลเก่า (ความเสียหาย) ก่อนซื้อประกัน เคลมได้มั้ย?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography >
                                หากตอนที่เกิดแผล รถยนต์ยังไม่มีประกัน บริษัทประกันจะไม่คุ้มครองความเสียหายส่วนนั้น เจ้าของรถต้องจัดการซ่อมแซมให้เรียบร้อยก่อน บริษัทประกันจึงจะเริ่มคุ้มครอง
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    {/* ---------------------------------- 9 -------------------------------------------------------------------------- */}

                    <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                            

                                
                                ลูกค้าประกันภัยรถยนต์ สามารถค้นหาอู่ หรือศูนย์บริการได้ที่ไหน?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography >
                                ลูกค้าสามารถเข้าไปค้นหาอู่หรือศูนย์บริการได้ที่ GoGo Garage
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                </Container>
            </Box>

        </div>

    )
}