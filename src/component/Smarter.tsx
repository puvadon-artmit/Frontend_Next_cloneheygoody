"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Smarters from '../image/smarter.png'
import Support from '../image/support.png'
import Best from '../image/best.png'
import { makeStyles } from '@mui/styles';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Kanit, sans-serif',
  },
});
const useStyles = makeStyles({
  card: {
    maxWidth: 380,
    height: 550,
    position: 'relative',
    overflow: 'visible',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    borderTopLeftRadius: '50px'
  },
  card2: {
    maxWidth: 380,
    minHeight: 500, // ใช้ minHeight แทน height
    position: 'relative',
    overflow: 'visible',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    borderBottomRightRadius: '50px'
    
  },
  card3: {
    maxWidth: 380,
    height: 550,
    position: 'relative',
    overflow: 'visible',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
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
});

export default function Smarter() {
  const classes = useStyles();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      // กำหนดตำแหน่งที่คุณต้องการให้แอนิเมชันเริ่มเล่น
      const triggerScroll = 500; // เปลี่ยนตามต้องการ

      if (currentScroll > triggerScroll) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const [isVisible2, setIsVisible2] = useState(false);
  useEffect(() => {
    const handleScroll2 = () => {
      const currentScroll2 = window.scrollY;
      // กำหนดตำแหน่งที่คุณต้องการให้แอนิเมชันเริ่มเล่น
      const triggerScroll = 400; // เปลี่ยนตามต้องการ

      if (currentScroll2 > triggerScroll) {
        setIsVisible2(true);
      } else {
        setIsVisible2(false);
      }
    };
    window.addEventListener('scroll', handleScroll2);

    return () => {
      window.removeEventListener('scroll', handleScroll2);
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
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1 }}
    >
<div style={{ position: 'relative', width: 'fit-content' }}>
       <Image src={Smarters} alt="HeyGoody Logo" width={550} height={550} style={{ position: 'absolute', top: '-75px', zIndex: '1' }} />
        <Card className={classes.card} sx={{ backgroundColor: '#b5e7d0' }}>
          <div className={classes.mediaContainer}>

          </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{
              fontSize: '40px', fontWeight: 'bold', marginTop: '260px',
              textAlign: 'center'
            }}>
              be smarter,for you
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{
              fontSize: '20px', fontWeight: 'bold', marginTop: '20px',
              textAlign: 'center'
            }}>
              ไม่โทร ไม่จุกจิก เพราะเราเข้าใจ จึงให้คุณเปรียบเทียบ เช็คเบี้ย และ ซื้อประกัน ออนไลน์ได้ง่ายๆ
            </Typography>
          </CardContent>

        </Card>
        </div>
        </motion.div>
        {/* ------------------------------------  2   -------------------------------------------------- */}

        <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={isVisible2 ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
      transition={{ duration: 1 }}
    >
        <div style={{ position: 'relative', width: 'fit-content' }}>
     
        <Card className={classes.card2} sx={{ backgroundColor: '#ffd47c' }}>
          <Typography gutterBottom variant="h5" component="div" sx={{
            fontSize: '40px', fontWeight: 'bold', marginTop: '20px',
            textAlign: 'center'
          }}>
            the best offer, no hidden cost
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{
            fontSize: '20px', fontWeight: 'bold', marginTop: '20px',
            textAlign: 'center'
          }}>
            ประกันราคาคุ้มค่ากว่า เพราะเราขายออนไลน์ไม่ผ่านคน จึงเอาค่าส่วนต่างมาลดให้คุณโดยเฉพาะ ไม่มีเงื่อนไขแอบแฝง
          </Typography>
          <div className={classes.mediaContainer}>

          </div>
          <CardContent>
          </CardContent>
          <Image src={Best} alt="HeyGoody Logo" width={320} height={320} style={{ position: 'absolute', zIndex: '1', top: '260px' }} />
        </Card>
        </div>
        </motion.div>
        {/* --------------------------------------  3  ------------------------------------------------- */}

        <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1 }}
    >
        <div style={{ position: 'relative', width: 'fit-content' }}>
       <Image src={Support} alt="HeyGoody Logo" width={250} height={250} style={{ position: 'absolute', top: '-40px',left : '20px', zIndex: '1' }} />
        <Card className={classes.card3} sx={{ backgroundColor: '#e0dcfc' }}>
          <div className={classes.mediaContainer} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

          </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '40px', fontWeight: 'bold', marginTop: '210px', textAlign: 'center' }}>
              24/7 support, we’ve got your back
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '20px', fontWeight: 'bold', marginTop: '20px' }}>
              ติดปัญหา ทัก Line @heygoody มาได้เลยตลอด 24 ชม. ตอบทุกคำถาม แนะนำทุกเรื่องประกันด้วยรอยยิ้ม
            </Typography>
          </CardContent>
        </Card>
        
        </div>
        
        </motion.div>
      </Box>
      
      <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1 }}
    >
      <div className=''>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh' }}>
        <Link href="/blogs"> 
          <Button variant="outlined" size="large" sx={{ color: 'black', borderColor: 'black', fontSize: '18px', padding: '10px 55px' }}>
            อ่านเพิ่มเติม
          </Button>
          </Link>
        </div>
      </div>
    </motion.div>
    </ThemeProvider>
    </div>
  )
}