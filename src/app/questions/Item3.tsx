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
                    ประกันภัยรถไฟฟ้า EV
                </Typography>


                <Container maxWidth="lg" sx={{ marginTop: '40px', marginBottom: '40px' }}>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                                รถยนต์ไฟฟ้า EV มีการชาร์จแบตเตอรี่ทั้งหมดกี่แบบ?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography >
                                โดยทั่วไปการชาร์จแบตเตอรี่รถยนต์พลังงานไฟฟ้า EV จะแบ่งออกเป็น 2 ประเภท ดังนี้ <br />
                                - AC (Normal charging) เป็นการชาร์จไฟฟ้ากระแสสลับ ซึ่งจะกินเวลานาน 10 - 12 ชั่วโมงขึ้นไป นิยมชาร์จทิ้งไว้ข้ามคืน โดยการชาร์จ AC บ่อยๆ นั้นจะไม่ทำให้แบตเตอรี่เสื่อมไว เนื่องจากเป็นการใช้กำลังไฟ kWh ที่ต่ำเหมือนไฟบ้านทั่วไป จึงไม่ต้องกังวลเรื่องความร้อนของแบตเตอรี่รถยนต์
                            </Typography><br />

                            <Typography >
                                – DC (Fast charging) เป็นการชาร์จไฟฟ้ากระแสตรง ซึ่งจะใช้เวลาชาร์จที่ไวกว่ามากๆ โดยการชาร์จหนึ่งครั้งใช้เวลาเพียง 30 นาที - 1 ชั่วโมง นิยมชาร์จตามสถานีชาร์จสาธารณะ โดยสถานีชาร์จแบตเตอรี่บางแห่ง สามารถส่งพลังงานไฟฟ้าได้ถึง 350 kWh ทำให้ระบบระบายความร้อนของแบตเตอรี่ต้องทำงานหนัก และ เนื่องจากเป็นการชาร์จแบบอัดประจุไฟฟ้าเข้าไปแบบรวดเร็วและเป็นจำนวนมาก การชาร์ตแบบ DC บ่อยๆ จึงส่งผลให้เกิดการเสื่อมสภาพของแบตเตอรี่ที่ไวขึ้น
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    {/* ---------------------------------- 3 -------------------------------------------------------------------------- */}
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                                ทำไมประกันรถยนต์ไฟฟ้าถึงมีค่าเบี้ยแพงกว่าประกันรถยนต์น้ำมันเชื้อเพลิง?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                เนื่องจากรถยนต์ไฟฟ้า (EV) นั้นมีอุปกรณ์และอะไหล่ที่ราคาสูงกว่ารถเครื่องยนต์สันดาป และมีอุปกรณ์ เช่น Inverters, Controllers และ Batteries ที่ไม่สามารถทำการซ่อมแซมได้ ต้องเปลี่ยนใหม่เท่านั้น ทำให้ต้นทุนมีราคาสูงขึ้น
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    {/* ---------------------------------- 4 -------------------------------------------------------------------------- */}
                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                                ซ่อมรถยนต์ไฟฟ้า EV ได้ที่ไหนบ้าง?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>

                            <Typography >
                                สามารถเข้าไปค้นหาอู่หรือศูนย์บริการได้ที่GoGo Garage
                            </Typography>
                        </AccordionDetails>

                    </Accordion>

                </Container>
            </Box>
        </div>
    )
}