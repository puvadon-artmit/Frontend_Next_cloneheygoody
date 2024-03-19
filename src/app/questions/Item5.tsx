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
    
    const [expanded, setExpanded] = React.useState<string | false>('');
    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };


    return (
        <div className='flex justify-center '>
            <Box className={classes.container}>
                <Typography className={classes.text} sx={{ fontSize: { xs: '16px', md: '34px' } }}>
                    ประกันเดินทางต่างประเทศ คุ้มครองอะไรบ้าง
                </Typography>
                <Typography className={classes.textdetail} sx={{ fontSize: { xs: '16px', md: '26px' } }}>
                    ความคุ้มครองขึ้นอยู่กับแผนที่เลือกซื้อ
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

                            <Accordion sx={{ bgcolor: '#4070FC' }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2-content"
                                    id="panel2-header"
                                >
                                    <Typography className={classes.textaccord}>คุ้มครองชีวิตและค่ารักษาพยาบาล</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography className={classes.textaccord}>
                                        - การเสียชีวิต สูญเสียอวัยวะ สูญเสียสายตา หรือทุพพลภาพถาวรสิ้นเชิง เนื่องจากอุบัติเหตุ <br />
                                        - ค่ารักษาพยาบาลที่เกิดขึ้นขณะเดินทางในต่างประเทศ ทั้งบาดเจ็บหรือเจ็บป่วย <br />
                                        - ผลประโยชน์ชดเชยค่าเดินทางเพื่อ รักษาพยาบาลแบบผู้ป่วยนอกในต่างประเทศ <br />
                                        - ชดเชยรายวันกรณีรักษาตัวในโรงพยาบาลในฐานะผู้ป่วยใน <br />
                                        - การเคลื่อนย้ายเพื่อการรักษาพยาบาลฉุกเฉินและการเคลื่อนย้ายกลับประเทศไทยหรือประเทศภูมิลำเนา <br />
                                        - ค่าใช้จ่ายในการส่งศพหรืออัฐิกลับ ประเทศไทยหรือประเทศภูมิลำเนา <br />
                                        - การเดินทางเพื่อเยี่ยมผู้ป่วยที่โรงพยาบาลในต่างประเทศ <br />
                                        - การเดินทางเพื่อจัดการพิธีศพ <br />
                                        - ความรับผิดต่อบุคคลภายนอก <br />
                                        - ความรับผิดส่วนแรกสำหรับรถเช่า <br />
                                        - ค่าโทรศัพท์กรณีฉุกเฉิน <br />
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion sx={{ bgcolor: '#4070FC' }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2-content"
                                    id="panel2-header"
                                >
                                    <Typography className={classes.textaccord}>คุ้มครองเครื่องบิน</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography className={classes.textaccord}>
                                        - ที่ยวบินล่าช้า (ดีเลย์) <br />
                                        - พลาดการต่อเที่ยวบิน <br />
                                        - พลาดเที่ยวบินเนื่องจากระบบการจัดจำหน่ายตั๋วของสายการบิน <br />
                                        - เลื่อนหรือถูกยกเลิกการเดินทาง <br />
                                        - ลดจำนวนวันเดินทาง <br />
                                        - โดนจี้เครื่องบิน โดนปล้นเครื่องบินกลางอากาศ <br />
                                        - ขยายระยะเวลาคุ้มครองโดยอัตโนมัติ กรณีการเดินทางกลับล่าช้าเนื่องจากสภาพอากาศ ภัยธรรมชาติ ความผิด <br />
                                        พลาดของอุปกรณ์การบิน หรือสายการบิน

                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion sx={{ bgcolor: '#4070FC' }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2-content"
                                    id="panel2-header"
                                >
                                    <Typography className={classes.textaccord}>คุ้มครองกรเป๋าเดินทางและทรัพสินส่วนตัว</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography className={classes.textaccord}>
                                        - กระเป๋าเดินทางล่าช้า <br />
                                        - กระเป๋าเดินทาง และ/หรือ ทรัพย์สินส่วนตัวเสียหายหรือสูญหาย เช่น กระเป๋าแตก ล้อพัง ก็เคลมได้ <br />
                                        - เอกสารการเดินทางเสียหายหรือสูญหาย เช่น Passport หาย ก็เคลมได้ <br />
                                        - เงินสดเสียหายหรือสูญหาย (ที่เกิดขึ้นจริง) <br />
                                        - คอมพิวเตอร์โน้ตบุ๊คเสียหายหรือสูญหาย <br />
                                        - อุปกรณ์กอล์ฟเสียหาย คุ้มครองตามมูลค่าจริง <br />
                                        - จ่ายผลประโยชน์รางวัลพิเศษสำหรับ โฮล-อิน-วัน

                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

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
                                - ผู้ขอเอาประกันภัยต้องมีถิ่นฐานอยู่ในประเทศไทย <br />
                                - อายุรับประกันภัย และเงื่อนไขเป็นไปตามบริษัทประกันกำหนด <br />
                                - ผู้ขอเอาประกันภัยสามารถขอเอาประกันภัยภายใต้กรมธรรม์นี้ได้เพียง 1 ฉบับในเวลาเดียวกัน <br />
                                - ผู้ขอเอาประกันภัยจะต้องเริ่มต้นเดินทางจากประเทศไทยเท่านั้น และสิ้นสุดที่ประเทศไทยเท่านั้น <br />
                                - ผู้ขอเอาประกันภัยจะต้องมีสุขภาพแข็งแรงและสมบูรณ์ ไม่มีอวัยวะส่วนใดส่วนหนึ่งพิการ และไม่ได้เดินทางไป เพื่อรับการรักษาพยาบาลใดๆ <br />
                                - โปรดตรวจสอบประเทศปลายทางที่ไม่ได้รับความคุ้มครองกับบริษัทผู้รับประกัน
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
                            <Typography>
                                - ผู้เอาประกันภัยฆ่าตัวตาย พยายามฆ่าตัวตาย หรือการทำร้ายร่างกายตนเอง <br />
                                - สภาพที่เป็นมาก่อนการเอาประกันภัย (Pre-existing Conditions) <br />
                                - กรณีที่ผู้เอาประกันภัยอยู่ภายใต้ฤทธิ์สุรา ยาเสพติด สารเสพติดให้โทษ<br />
                                - สงคราม การรุกราน การกระทำที่มุ่งร้ายของศัตรูต่างชาติ หรือการกระทำที่มุ่งร้ายคล้ายสงคราม สงครามกลางเมือง การปฏิวัติ การจลาจล การนัดหยุดงาน การก่อความวุ่นวาย หรือต่อต้านรัฐบาล การประกาศกฎอัยการศึก การก่อการร้าย <br />
                                - ขณะที่ผู้เอาประกันภัยปฏิบัติหน้าที่เป็นนักบิน, พนักงานต้อนรับบนเครื่องบิน, ทหาร, ตำรวจ หรืออาสาสมัคร และเข้าปฏิบัติการในสงคราม หรือปราบปราม <br />
                                - ขณะที่ผู้เอาประกันภัยไต่หน้าผาที่ต้องใช้เครื่องมือช่วยหรือปีนเขาที่มีความสูงไม่ต่ำกว่า 3,000 เมตรจากระดับน้ำทะเล <br />
                                - ขณะที่ผู้เอาประกันภัยเข้าร่วมเล่นหรือฝึกซ้อมหรือแข่งขันกีฬาอาชีพ <br />
                                - ขณะที่ผู้เอาประกันภัยทำงานในสถานที่ที่มีความเสี่ยงสูง เช่น อาคารสูง, แท่นขุดเจาะน้ำมันหรือแก๊สธรรมชาติ, เหมืองใต้ดิน หรืองานใช้แรงงาน เช่น ประมง, กรรมกรก่อสร้าง, คนงานเก็บผลไม้ หรืองานใช้เครื่องจักรกลขนาดใหญ่
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    {/* ---------------------------------- 4 -------------------------------------------------------------------------- */}
                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box component="span" sx={{ marginRight: '8px' }} className="bg-violet-400 rounded-full p-2">
                                    <Image src={icon4} width={25} height={25} alt="Picture" />
                                </Box>
                                บริการพิเศษ
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography >
                                บริการพิเศษเป็นเพียงส่วนหนึ่งของบริการทั้งหมดเท่านั้น บริการพิเศษที่ได้รับขึ้นอยู่กับแผนที่เลือกซื้อ
                            </Typography>
                            <Accordion sx={{ bgcolor: '#a78bfa', marginTop: '20px' }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2-content"
                                    id="panel2-header"
                                >
                                    <Typography className={classes.textaccord}>บริการช่วยเหลือด้านการแพทย์</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography className={classes.textaccord}>
                                        - ให้คำแนะนำทางการแพทย์ทางโทรศัพท์ เมื่อเกิดเหตุฉุกเฉินระหว่างเดินทาง <br />
                                        - นัดหมายกับแพทย์ <br />
                                        - ช่วยเหลือในการสื่อสารทางการแพทย์กับแพทย์ชาวญี่ปุ่นทางโทรศัพท์ <br />
                                        - รับการรักษาพยาบาลโดยไม่ต้องสำรองเงินจ่ายกับโรงพยาบาลในเครือ <br />
                                        - บริการฉุกเฉินทางการแพทย์ในการเคลื่อนย้ายผู้ป่วย <br />
                                        - บริการส่งญาติหรือเพื่อนไปเยี่ยมผู้ป่วย <br />


                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion sx={{ bgcolor: '#a78bfa' }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2-content"
                                    id="panel2-header"
                                >
                                    <Typography className={classes.textaccord}>บริการช่วยเหลือการเดินทาง</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography className={classes.textaccord}>
                                        - ให้ข้อมูลเกี่ยวกับการเดินทาง <br />
                                        - ให้ข้อมูลเกี่ยวกับสถานทูต <br />
                                        - ช่วยเหลือในกรณีหนังสือเดินทางสูญหาย <br />
                                        - แจ้งข่าวสารฉุกเฉิน <br />
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion sx={{ bgcolor: '#a78bfa' }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2-content"
                                    id="panel2-header"
                                >
                                    <Typography className={classes.textaccord}>บริการพิเศษผู้ช่วยส่วนบุคคล</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography className={classes.textaccord}>
                                        - จัดส่งของขวัญและดอกไม้ <br />
                                        - ให้ความช่วยเหลือด้านการสำรองร้านอาหาร <br />
                                        - ให้ข้อมูลและจองสนามกอล์ฟ <br />
                                        - ช่วยเหลือเกี่ยวกับโรงแรม <br />
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>



                        </AccordionDetails>
                    </Accordion>

                    {/* ---------------------------------- 5 -------------------------------------------------------------------------- */}
                    <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box component="span" sx={{ marginRight: '8px' }} className="bg-pink-300 rounded-full p-2">
                                    <Image src={icon5} width={25} height={25} alt="Picture" />
                                </Box>
                                ข้อมูลเบอร์ติดต่อสำคัญ
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                            </Typography>



                            <Grid container spacing={3}>

                                <Grid item xs={12} md={4} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <div style={{ backgroundColor: '#F0F0F0', padding: '3px', borderRadius: '8px', width: '50px', height: '50px' }}>
                                        <Image src={ki02} width={100} height={100} alt="Picture" />
                                    </div>
                                    <div className='text-center'>
                                        <Typography className='mt-4'>ซมโปะ ประกันภัย</Typography>
                                        <Typography >02 119 3000</Typography>
                                        <Typography >+662 205 7775</Typography>
                                        <Typography >(24 ชม. ทั่วโลก)</Typography>
                                    </div>
                                </Grid>

                                <Grid item xs={12} md={4} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                                    <div style={{ backgroundColor: '#F0F0F0', padding: '3px', borderRadius: '8px', width: '50px', height: '50px' }}>
                                        <Image src={visa01} width={100} height={100} alt="Picture" />
                                    </div>
                                    <div className='text-center'>
                                        <Typography className='mt-4'>เอ็ม เอส ไอ จี ประกันภัย</Typography>
                                        <Typography >02 007 9009</Typography>
                                        <Typography >+662 039 5704</Typography>
                                        <Typography >(24 ชม. ทั่วโลก)</Typography>
                                    </div>
                                </Grid>


                                <Grid item xs={12} md={4} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                                    <div style={{ backgroundColor: '#F0F0F0', padding: '3px', borderRadius: '8px', width: '50px', height: '50px' }}>
                                        <Image src={aia01} width={100} height={100} alt="Picture" />
                                    </div>
                                    <div className='text-center'>
                                        <Typography className='mt-4'>แอกซ่า ประกันภัย</Typography>
                                        <Typography >02 118 8111</Typography>
                                        <Typography >+662 118 8111</Typography>
                                        <Typography >(24 ชม. ทั่วโลก)</Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                </Container>


            </Box>

        </div>

    )
}