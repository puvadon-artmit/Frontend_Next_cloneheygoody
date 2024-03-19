"use client"
import React, { useEffect } from 'react';
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


import icon1 from '../../image/how-to/claim1.svg'
import icon2 from '../../image/how-to/claim2.svg'
import icon3 from '../../image/how-to/claim3.svg'
import icon4 from '../../image/how-to/claim4.svg'
import icon5 from '../../image/how-to/claim5.svg'
import icon6 from '../../image/how-to/claim6.svg'


import Markdown from 'react-markdown'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars, selectCarData, selectStatus } from '../store/slice/insuranceSlice';
import { RootState } from '../store/store';


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

interface Brand {
    id: number;
    attributes: {
        detail_brand: string;
        image_brand: {
            data: {
                id: number;
                attributes: {
                    name: string;
                    url: string;
                };
            }[];
        };
    };
}

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

const useStyles = makeStyles((theme) => ({
    container: {
        background: 'linear-gradient(to right, #1e3a8a, #1e3faa)',
        width: '160vw',
        height: 'auto',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: '40px',
    },
    textdetail: {
        color: 'white',
        textAlign: 'center',
    },
    textaccord: {
        color: 'white',
    },
}));

export default function Foreign_travel() {
    const classes = useStyles();

    const dispatch = useDispatch<any>();
    const brands = useSelector(selectCarData); // Update the selector name
    const status = useSelector(selectStatus);
    const LOCALHOST = process.env.NEXT_PUBLIC_APP_LOCALHOST;



    useEffect(() => {
        dispatch(fetchCars());
    }, [dispatch]);



    const [expanded, setExpanded] = React.useState<string | false>('');

    const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div className='flex justify-center mt-10'>
            <Box className={classes.container}>
                <Typography className={classes.text} sx={{ fontSize: { xs: '16px', md: '34px' } }}>
                    สิ่งที่ควรรู้ หากต้องแจ้งความเสียหาย
                </Typography>
                <Typography className={classes.textdetail} sx={{ fontSize: { xs: '16px', md: '20px' } }}>
                    เมื่อเกิดอุบัติเหตุ นอกจากความตกใจแล้วหลายคนไม่รู้ว่าควรทำยังไงต่อ  เรามีคำแนะนำดี ๆ <br />
                    ที่คนมีรถควรรู้ไว้หากต้องเคลมประกัน
                </Typography>

                <Container maxWidth="md" sx={{ marginTop: '40px', marginBottom: '40px' }}>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box component="span" sx={{ marginRight: '8px' }} className="bg-blue-500 rounded-full p-2">
                                    <Image src={icon1} width={25} height={25} alt="Picture" />
                                </Box>
                                ความคุ้มครอง
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                            ข้อมูลคู่กรณี <br />
                            1. พยาน<br />
                            2. ผู้โดยสาร<br />
                            3. บุคคลภายนอก<br />
                            <br />
                            รายละเอียดกรมธรรม์<br />
                            1. ข้อมูลส่วนตัวของคุณ<br />
                            2. เลขที่กรมธรรม์<br />
                            3. เลขที่ใบบันทึกประจำวัน (ถ้ามี)<br />
                            <br />
                            ข้อมูลอุบัติเหตุ<br />
                            1. เกิดอุบัติเหตุอะไร ที่ไหน เมื่อไหร่?<br />
                            2. ความเสียหายที่เกิดขึ้น?<br />
                            3. มีคู่กรณีไหม?<br />
                            4. มีคนบาดเจ็บไหม?<br />
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    {/* ---------------------------------- 2 -------------------------------------------------------------------------- */}
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box component="span" sx={{ marginRight: '8px' }} className="bg-red-400 rounded-full p-2">
                                    <Image src={icon2} width={25} height={25} alt="Picture" />
                                </Box>
                                เงื่อนไขรับประกันภัย
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                เกิดอุบัติเหตุแล้วต้องทำยังไง?<br />
                                1. โทรติดต่อบริษัทประกันทันทีหรือเร็วที่สุด<br />
                                2. บริษัทประกันจะส่งเจ้าหน้าที่มาบันทึกความเสียหายที่เกิดขึ้น ณ ที่เกิดเหตุ<br />
                                3. เลือกอู่/ศูนย์ที่ต้องการซ่อมเพื่อประเมิณราคา<br />
                                4. บริษัทประกันพิจารณา อนุมัติการซ่อม<br />
                                5. ทางอู่/ศูนย์ติดต่อ ลูกค้านัดหมายให้ทางอู่/ศูนย์ประเมิณราคา<br />
                                <br />
                                *เมื่อเกิดอุบัติเหตุแบบมีคู่กรณี ควรแจ้งเคลมภายใน 24 ชั่วโมง เพื่อให้เก็บหลักฐานในที่เกิดเหตุได้สะดวกและให้แจ้งเคลมได้ง่าย
                                <br /><br />
                                หลังจากแจ้งเหตุให้บริษัทฯ ทราบแล้ว ควรรอ ณ ที่เกิดเหตุ โดยทำตามคำแนะนำเบื้องต้นของเจ้าหน้าที่รับแจ้งอุบัติเหตุ, ตรวจดู<br />
                                คนบาดเจ็บและช่วยเหลือนำส่งโรงพยาบาล, สังเกตความเสียหายของรถยนต์ และอย่าลืมขอข้อมูลของคู่กรณีและพยานในที่<br />
                                เกิดเหตุเพื่อให้เคลมได้ง่ายขึ้น ทั้งนี้ ไม่ควรเคลื่อนย้ายรถ เว้นแต่<br />
                                - มีเจ้าหน้าที่ตำรวจดำเนินการ<br />
                                - ในกรณีที่รู้ว่าเป็นฝ่ายถูกหรือฝ่ายผิดแน่นอน พร้อมมีหลักฐานประกอบ<br />
                                <br />
                                หากมีการเคลื่อนย้ายรถ ต้องแจ้งให้บริษัทฯ ทราบ และไม่ควรตกลงชดใช้ค่าเสียหาย เมื่อไม่แน่ใจในลักษณะอุบัติเหตุ
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    {/* ---------------------------------- 3 -------------------------------------------------------------------------- */}
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box component="span" sx={{ marginRight: '8px' }} className="bg-amber-300 rounded-full p-2">
                                    <Image src={icon3} width={25} height={25} alt="Picture" />
                                </Box>
                                ข้อยกเว้นสำคัญ
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid container spacing={3}>

                                {brands.map((brand: Brand) => (
                                    <Grid item xs={12} md={3} key={brand.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <div className='flex justify-center'>
                                            <Image src={`${LOCALHOST}${brand.attributes.image_brand?.data[0].attributes.url || ''}`} width={55} height={55} alt="Brand Logo" loading="lazy"/>
                                        </div>
                                       
                                            <Typography sx={{ fontSize: { xs: '14px', md: '14px' } }} className='text-center mt-2' component="div"> 
                                                <Markdown>
                                                {brand.attributes.detail_brand}
                                                </Markdown>
                                            </Typography>
                                    </Grid>
                                ))}


                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                    {/* ---------------------------------- 4 -------------------------------------------------------------------------- */}
                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box component="span" sx={{ marginRight: '8px' }} className="bg-violet-400 rounded-full p-2">
                                    <Image src={icon4} width={25} height={25} alt="Picture" />
                                </Box>
                                ข้อมูลของคู่กรณีที่คุณควรขอไว้
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography >
                                1. ทะเบียนรถ <br />
                                2. ชื่อ-นามสกุล<br />
                                3. ที่อยู่<br />
                                4. เบอร์โทรศัพท์ที่ติดต่อได้<br />
                                5. รายละเอียดกรมธรรม์<br />
                                6. ใบขับขี่หรือบัตรประจำตัวอื่นๆ<br />
                            </Typography>

                        </AccordionDetails>
                    </Accordion>

                    {/* ---------------------------------- 5 -------------------------------------------------------------------------- */}
                    <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box component="span" sx={{ marginRight: '8px' }} className="bg-pink-300 rounded-full p-2">
                                    <Image src={icon5} width={25} height={25} alt="Picture" />
                                </Box>
                                รายละเอียดที่ต้องแจ้งเมื่อยื่นเบิกค่าเสียหาย
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                ทะเบียนรถ ยี่ห้อ สี <br />
                                หมายเลขกรมธรรม์ <br />
                                • หมายเลขโทรศัพท์ของผู้ขับขี่ <br />
                                • สถานที่เกิดเหตุ หรือบริเวณที่เห็นได้ง่าย <br />
                                • ลักษณะการเกิดเหตุ<br />
                            </Typography>

                        </AccordionDetails>
                    </Accordion>


                    {/* ---------------------------------- 5 -------------------------------------------------------------------------- */}
                    <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box component="span" sx={{ marginRight: '8px' }} className="bg-lime-300 rounded-full p-2">
                                    <Image src={icon6} width={25} height={25} alt="Picture" />
                                </Box>
                                เอกสารจำเป็นสำหรับเบิกค่าเสียหาย
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                1. รูปถ่ายความเสียหายของรถ<br />
                                2. ใบรับรองแพทย์<br />
                                3. ใบขับขี่<br />
                                4. เอกสารอื่นๆที่จะช่วยในการเคลม<br />
                                5. เอกสารการจดทะเบียนรถยนต์<br />
                                6. ชื่อพยานที่เกี่ยวข้อง<br />
                                7. ใบเสร็จและใบแจ้งหนี้ค่าใช้จ่ายต่างๆ<br />
                                <br />
                                ถ้ามีคนเจ็บในอุบัติเหตุ เราต้องการเอกสารเพิ่ม ดังนี้<br />
                                1. ใบบันทึกประจำวันจากเจ้าหน้าที่ตำรวจ<br />
                                2. ใบรับรองแพทย์และเอกสารที่เกี่ยวข้อง<br />
                            </Typography>

                        </AccordionDetails>
                    </Accordion>
                </Container>


            </Box>
        </div>

    )
}