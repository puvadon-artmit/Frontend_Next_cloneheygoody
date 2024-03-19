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
                    ซื้อประกันรถยนต์กับ ISR
                </Typography>


                <Container maxWidth="lg" sx={{ marginTop: '40px', marginBottom: '40px' }}>
                <Typography  sx={{ fontSize: { xs: '16px', md: '28px',color : 'white',marginLeft : '20px' } }}>
                    ชั้น 1
                </Typography>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                            ประกันภัยรถยนต์ชั้น 1 จำกัดอายุรถมั้ย?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography >
                            จำกัด โดยประกันรถยนต์ชั้น 1 จะมีการจำกัดอายุรถที่ 1-7 ปี เป็นส่วนใหญ่ แต่ก็มีบางบริษัทและกรมธรรม์ ที่รับทำสำหรับรถยนต์ที่มีอายุมากกว่านี้ ถ้าซื้อประกันรถยนต์ชั้น 1 ตั้งแต่อายุรถยังไม่ถึง 7 ปี บางบริษัทก็สามารถต่ออายุประกันแบบอัตโนมัติได้เช่นกัน

                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    {/* ---------------------------------- 3 -------------------------------------------------------------------------- */}
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                            ประกันรถยนต์ชั้น 1 เคลมอะไรได้บ้าง?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                            ประกันรถชั้น 1 เคลมได้ตั้งแต่ตัวรถยนต์ที่ทำประกันไปจนถึงอุปกรณ์รถยนต์ที่เกี่ยวข้อง
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    {/* ---------------------------------- 4 -------------------------------------------------------------------------- */}
                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                            ประกันรถยนต์ชั้น 1 ดีกว่าชั้นอื่นยังไง?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>

                            <Typography >
                            ประกันรถยนต์ชั้น 1 ดีกว่าตรงที่ให้ความคุ้มครองในทุกรูปแบบ ทุกอุบัติเหตุที่เกิดขึ้นกับตัวรถยนต์ และคุ้มครองตั้งแต่ตัวเราจนถึงคู่กรณี โดยไม่ต้องกังวลว่าประกันจะจ่ายมั้ย ซึ่งแลกมากับค่าเบี้ยที่ค่อนข้างสูง โดยประกันชั้นอื่นๆ จะให้ความคุ้มครองและราคาลดหย่อนลงมาตามลำดับ ทำให้บางกรณีประกันชั้นอื่นๆ อาจไม่คุ้มครอง
                            </Typography>
                        </AccordionDetails>

                    </Accordion>

                    {/* ---------------------------------- 5 -------------------------------------------------------------------------- */}
                    <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                            เลือกประกันรถยนต์ชั้น 1 แบบซ่อมห้าง หรือซ่อมอู่ดีกว่ากัน?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography >
                            ประกันรถยนต์ชั้น 1 แบบซ่อมห้างและแบบซ่อมอู่นั้นมีข้อดีแตกต่างกัน แต่แนะนำว่าให้เลือกแบบซ่อมห้างดีกว่า เพราะว่าจะได้ซ่อมกับศูนย์ของรถยนต์ยี่ห้อนั้นๆ โดยตรง ได้อะไหล่แท้และความเป็นมืออาชีพ แต่ก็แลกมาด้วยศูนย์อาจจะไม่เยอะเท่าอู่ เบี้ยประกันที่มีราคาแพงกว่า และต้องรอเวลาในการซ่อมที่ค่อนข้างนาน
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    {/* ---------------------------------- 5 -------------------------------------------------------------------------- */}

                    <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                            ประกันรถยนต์ชั้น 1 เคลมประกันรถยนต์ได้กี่ครั้งต่อปี?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography >
                            ประกันรถยนต์ชั้น 1 สามารถเคลมกี่ครั้งก็ได้ ถ้ามีการเคลมบ่อยหรือถี่จนเกินไปก็มีสิทธิ์ถูกขอยกเลิกกรมธรรม์ได้เหมือนกัน อาจทำให้เสียประวัติและต้องจ่ายค่าเบี้ยประกันแพงขึ้นในปีถัดไปด้วย
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    {/* ---------------------------------- 6 -------------------------------------------------------------------------- */}

                <Typography  sx={{ fontSize: { xs: '16px', md: '28px',color : 'white',marginLeft : '20px',marginTop : '20px' } }}>
                    ชั้น 2+, 2
                </Typography>

                    <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                            ประกันรถยนต์ชั้น 2+ ไม่คุ้มครองอะไรบ้าง?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography >
                            จำกัด โดยประกันรถยนต์ชั้น 1 จะมีการจำกัดอายุรถที่ 1-7 ปี เป็นส่วนใหญ่ แต่ก็มีบางบริษัทและกรมธรรม์ ที่รับทำสำหรับรถยนต์ที่มีอายุมากกว่านี้ ถ้าซื้อประกันรถยนต์ชั้น 1 ตั้งแต่อายุรถยังไม่ถึง 7 ปี บางบริษัทก็สามารถต่ออายุประกันแบบอัตโนมัติได้เช่นกัน
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    {/* ---------------------------------- 7 -------------------------------------------------------------------------- */}

                    <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                            ประกันรถยนต์ชั้น 2+ เหมาะกับรถอายุกี่ปี?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography >
                            เหมาะกับรถอายุตั้งแต่ 3 ปีขึ้นไป แต่ไม่เกิน 10 ปี ถ้าเกิน heygoody แนะนำว่าทำประกันรถยนต์ชั้น 3+ ที่มีความคุ้มครองใกล้เคียงกัน เบี้ยถูกกว่าและคุ้มค่ากว่า แต่ทั้งนี้ก็ยังสามารถทำประกันรถยนต์ชั้น 2+ ได้สำหรับรถเก่า ซึ่งขึ้นอยู่กับเงื่อนไขของบริษัทและกรมธรรม์นั้นๆ
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    {/* ---------------------------------- 8 -------------------------------------------------------------------------- */}

                    <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                            ประกันรถยนต์ชั้น 2+ มีประกันประเภทระบุชื่อผู้ขับหรือไม่?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography >
                            ประกันรถยนต์ชั้น 2+ ไม่มีประกันประเภทระบุชื่อผู้ขับ เนื่องจากเป็นส่วนลดสำหรับประกันรถยนต์ชั้น 1 เท่านั้น
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    {/* ---------------------------------- 9 -------------------------------------------------------------------------- */}

                    <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                            ยานพาหนะทางบกที่ประกันรถยนต์ชั้น 2+ จำเป็นต้องมีในการเคลมคืออะไร?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography >
                            ยานพาหนะทางบก หมายถึง รถที่มีการใช้งานเครื่องยนต์หรือมอเตอร์ไฟฟ้าในการขับเคลื่อน เช่น รถจักรยานยนต์ 2 ล้อ, รถยนต์ 4 ล้อ, รถตู้, รถบรรทุก, รถสิบล้อ, รถไถ เป็นต้น
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    {/* ---------------------------------- 10 -------------------------------------------------------------------------- */}

                    <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                            ค่าเบี้ยประกันรถยนต์ชั้น 2+ ใช้ลดหย่อนภาษีได้ไหม?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography >
                            ไม่ได้ เนื่องจากไม่ได้อยู่ในปัจจัยพื้นฐานในการดำรงชีวิตที่กำหนดโดยภาครัฐ
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    {/* ------------------------------33--------------------------------------------------------- */}

                    <Typography  sx={{ fontSize: { xs: '16px', md: '28px',color : 'white',marginLeft : '20px',marginTop : '20px' } }}>
                    ชั้น 3+, 3
                </Typography>

                    <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                            ประกันภัยรถยนต์ชั้น 3+ รับรถถึงอายุกี่ปี?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography >
                            ปกติแล้วจะรับทำประกันรถยนต์ชั้น 3+ จนถึงรถอายุ 25 ปี ทั้งนี้ก็ขึ้นอยู่กับกรมธรรม์และบริษัทประกันด้วย ซึ่งบางบริษัทก็ไม่ได้จำกัดอายุรถยนต์
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    {/* ---------------------------------- 11 -------------------------------------------------------------------------- */}

                    <Accordion expanded={expanded === 'panel13'} onChange={handleChange('panel13')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                            ต้องตรวจสภาพรถก่อนมั้ย ถึงจะทำประกันชั้น 3+ ได้?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography >
                            ไม่จำเป็นต้องตรวจสภาพรถยนต์ก็สามารถทำประกันรถยนต์ชั้น 3+ และ 3 ได้ทันที
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    {/* ---------------------------------- 12 -------------------------------------------------------------------------- */}

                    <Accordion expanded={expanded === 'panel14'} onChange={handleChange('panel14')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                            ประกันรถยนต์ชั้น 2+ และ ประกันรถยนต์ชั้น 3+ มีค่าเบี้ยประกันต่างกันมากมั้ย?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography >
                            ค่าเบี้ยประกันสำหรับประกันชั้น 2+ และ 3+ นั้นต่างกันไม่มาก ซึ่งต่างกันเพียงหลักพันจนบางทีต่างกันเพียงหลักร้อย ซึ่งนับว่าค่าเบี้ยใกล้เคียงกันมากในบางกรมธรรม์
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    {/* ---------------------------------- 13 -------------------------------------------------------------------------- */}

                    <Accordion expanded={expanded === 'panel15'} onChange={handleChange('panel15')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                            โดนชนแล้วหนี ไม่มีคู่กรณี ประกันชั้น 3+ และ 3 จะคุ้มครองค่าเสียหายมั้ย?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography >
                            ในกรณีรถโดนชน ประกันชั้น 3 จะไม่คุ้มครองในทุกกรณี และประกันชั้น 3+ จะคุ้มครองรถยนต์คันที่เอาประกันเมื่อเกิดอุบัติเหตุแบบที่มีคู่กรณีเท่านั้น
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    {/* ---------------------------------- 14 -------------------------------------------------------------------------- */}

                    <Accordion expanded={expanded === 'panel16'} onChange={handleChange('panel16')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                            ประกันภัยรถยนต์ชั้น 3+ มีแบบซ่อมห้างมั้ย?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography >
                            มีแบบที่เลือกซ่อมห้างได้สำหรับรถอายุไม่เกิน 5 ปี แต่จะมีค่าเบี้ยประกันที่แพงกว่ากรมธรรม์อื่น
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                </Container>
            </Box>

        </div>

    )
}