"use client";
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Image from 'next/image';
import MT1 from '../image/pick_pay/m01.png'
import MT2 from '../image/pick_pay/m02.png'
import { makeStyles } from '@mui/styles';
import { motion } from 'framer-motion';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const useStyles = makeStyles({
    card: {
        maxWidth: 1045,
        position: 'relative',
        overflow: 'visible',
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '26px',
        borderBottomRightRadius: '50px'

    },
    card2: {
        maxWidth: 1045,
        position: 'relative',
        overflow: 'visible',
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '26px',
        borderTopLeftRadius: '50px'

    },
    mediaContainer: {
        position: 'relative',
    },
    media: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '8px',
        overflow: 'hidden',
        transition: 'transform 0.3s ease',
        '&:hover': {
            transform: 'scale(1.5)',
        },
    },
    resizedCard: {
        width: '100%'
    }
});

const theme = createTheme({
    typography: {
      fontFamily: 'Kanit, sans-serif',
    },
  });

export default function Cardinsurance() {
    const classes = useStyles();
    const [showFullContent, setShowFullContent] = useState(false);

    const handleToggleContent = () => {
        setShowFullContent(!showFullContent);
    };

    const [isVisible3, setIsVisible3] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            const triggerScroll = 1700;

            if (currentScroll > triggerScroll) {
                setIsVisible3(true);
            } else {
                setIsVisible3(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <ThemeProvider theme={theme}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row',
                    fontSize: '24px',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: '20px',
                }}
            >

                <motion.div
                    initial={{ opacity: 0, x: -50 }} // ใช้ค่า x: -50 เพื่อให้มันเคลื่อนไหวมาทางขวา
                    animate={isVisible3 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 1 }}
                >
                    <div style={{ position: 'relative', width: 'fit-content' }}>
                        <Image src={MT1} alt="HeyGoody Logo" width={150} height={150} style={{ position: 'absolute', top: '-95px', right: '-25px', zIndex: '1' }} />

                        <Card className={classes.card2} sx={{
                            backgroundColor: '#ffd47c'
                        }}>


                            <Typography gutterBottom variant="h5" component="div" sx={{
                                fontSize: '40px',
                                fontWeight: 'bold',
                                textAlign: 'start',
                            }}>
                                <span style={{ fontSize: '60px' }}>1</span> Pick
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{
                                fontSize: '20px', fontWeight: 'bold',
                                textAlign: 'start',
                                color: 'black'
                            }}>
                                เลือกประกันที่เหมาะกับคุณ
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{
                                fontSize: '20px', fontWeight: 'bold', marginTop: '5px',
                                textAlign: 'start'
                            }}>
                                มีแผนประกันให้เลือก กว่า 15 บริษัท
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{
                                fontSize: '20px', fontWeight: 'bold', marginTop: '5px',
                                textAlign: 'start', marginBottom: '30px'
                            }}>
                                ประกันชั้นนำ
                            </Typography>
                        </Card>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }} // ใช้ค่า x: 50 เพื่อให้มันเคลื่อนไหวไปทางซ้าย
                    animate={isVisible3 ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                    transition={{ duration: 1 }}
                >
                    <div style={{ position: 'relative', width: 'fit-content' }}>
                        <Image src={MT2} alt="HeyGoody Logo" width={180} height={180} style={{ position: 'absolute', top: '-55px', right: '-25px', zIndex: '1' }} />
                        <Card className={classes.card} sx={{ backgroundColor: '#e0dcfc' }} >

                            <Typography gutterBottom variant="h5" component="div" sx={{
                                fontSize: '40px',
                                fontWeight: 'bold',
                                textAlign: 'start',
                            }}>
                                <span style={{ fontSize: '60px' }}>2</span> Pay
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{
                                fontSize: '20px', fontWeight: 'bold',
                                textAlign: 'start',
                                color: 'black'
                            }}>
                                เลือกช่องทางการจ่ายเงิน
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{
                                fontSize: '20px', fontWeight: 'bold', marginTop: '5px',
                                textAlign: 'start'
                            }}>
                                มีทั้งจ่ายผ่าน บัตรเครดิต บัตรเดบิต
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{
                                fontSize: '20px', fontWeight: 'bold', marginTop: '5px',
                                textAlign: 'start'
                            }}>
                                ผ่อน 0% 10 เดือน ทั้งผ่านบัตรเครดิต
                            </Typography>

                            <Typography variant="body2" color="text.secondary" sx={{
                                fontSize: '20px', fontWeight: 'bold', marginTop: '5px',
                                textAlign: 'start'
                            }}>
                                หรือ ผ่อนสดกับเงินติดล้อ
                            </Typography>

                        </Card>
                    </div>
                </motion.div>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    color: 'white',
                    height: 'auto', // Adjusted height to 'auto' for responsiveness
                    padding: '20px', // Added padding for better spacing
                    maxWidth: '800px', // Added maxWidth for better content readability on larger screens
                    margin: '0 auto', // Center content horizontally
                }}
            >

                <Typography
                    variant="h1"
                    sx={{
                        fontSize: { xs: '20px', md: '20px' },
                        fontWeight: 'bold',
                        display: 'flex',
                        alignItems: 'center',
                        marginTop: '20px',
                        marginBottom: '10px',
                        color: 'black'
                    }}
                >
                    ทำไมต้องซื้อประกันออนไลน์
                </Typography>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isVisible3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 1 }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: '18px', md: '18px' },
                            fontWeight: 'bold',
                            display: 'flex',
                            alignItems: 'center',
                            color: '#778899',
                            marginTop: '20px'
                        }}
                    >
                        {showFullContent ? (
                            <>
                                การทำประกันออนไลน์ หรือ ซื้อประกันกับโบรกเกอร์ประกันออนไลน์ ช่วยประหยัดเวลาให้คุณไม่ต้องเข้าเว็บไซต์ของบริษัทแต่ละเจ้าเพื่อหาข้อมูลด้วยตัวเอง heygoody “เข้าใจ” เราไม่มีคนโทรขายให้กวนใจ เราทำการบ้านไว้แล้วโดยคัดสรรประกันดีๆ มาเพื่อคุณ ให้คุณมีโอกาสเลือกแผนที่ตอบโจทย์ อยากหาข้อมูลตอนไหน อ่านรายละเอียดความคุ้มครอง และเงื่อนไข นานเท่าไหร่ก็ได้ ไม่มีคนคอยกดดัน สามารถเปรียบเทียบประกันภัยที่สนใจและเช็คราคาได้เลย ไม่ต้องรอคนติดต่อกลับ รวมประกันมาให้คุณเลือกหลากหลายประเภทกว่า 15 บริษัทชั้นนำ ขั้นตอนการซื้อประกัน heygoody นั้นง่าย สะดวก สงสัยติดต่อในเวลาที่คุณพร้อม เรายินดีช่วยเหลือตลอด 24 ชม. อยากซื้อประกันออนไลน์ ทุนประกันสูง คุ้มครองทันที ต้อง heygoody โบรกเกอร์ประกันภัยที่ “เข้าใจ”คุณ
                            </>
                        ) : (
                            'การทำประกันออนไลน์ หรือ ซื้อประกันกับโบรกเกอร์ประกันออนไลน์ ช่วยประหยัดเวลาให้คุณไม่ต้องเข้าเว็บไซต์ของ...'
                        )}
                    </Typography>

                    {!showFullContent && (
                        <Button
                            variant="outlined"
                            onClick={handleToggleContent}
                            sx={{
                                borderRadius: '20px',
                                border: '1px solid black',
                                color: 'black',
                                marginTop: '10px',
                                fontWeight: 'bold',

                            }}
                        >
                            อ่านต่อ
                        </Button>
                    )}
                </motion.div>
            </Box>
            </ThemeProvider>
        </div>
    )
}