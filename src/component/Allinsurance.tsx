"use client"
import { useState, useEffect } from 'react';
import iconsmail from '../image/iconsmail.png';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Thanachart from '../image/insurance/thanachart.svg'
import Viriyah from '../image/insurance/viriyah.svg'
import Allianz from '../image/insurance/allianz-ayudhya.svg'
import Bangkok from '../image/insurance/bangkok.svg'
import Thaivivat from '../image/insurance/thaivivat.svg'
import Tip from '../image/insurance/tip.svg'
import Muangthai from '../image/insurance/muangthai.svg'
import Msig from '../image/insurance/msig.svg'
import Tokyomari from '../image/insurance/tokyomarinekumpai.svg'
import Lmg from '../image/insurance/lmg.svg'
import Kpi from '../image/insurance/kpi.svg'
import Sompo from '../image/insurance/sompo.svg'
import Chubb from '../image/insurance/chubb.svg'
import Ergo from '../image/insurance/ergo.svg'
import Axa from '../image/insurance/axa.svg'
import { motion } from 'framer-motion';

import Markdown from 'react-markdown'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars, selectCarData, selectStatus } from '../app/store/slice/insuranceSlice';
import { RootState } from '../app/store/store';

import { createTheme, ThemeProvider } from '@mui/material/styles';

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

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 120,
  height: 120,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
}));

const theme = createTheme({
  typography: {
    fontFamily: 'Kanit, sans-serif',
  },
});

export default function Allinsurance() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      // กำหนดตำแหน่งที่คุณต้องการให้แอนิเมชันเริ่มเล่น
      const triggerScroll = 700; // เปลี่ยนตามต้องการ

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

  const dispatch = useDispatch<any>();
    const brands = useSelector(selectCarData); // Update the selector name
    const status = useSelector(selectStatus);
    const LOCALHOST = process.env.NEXT_PUBLIC_APP_LOCALHOST;

    useEffect(() => {
        dispatch(fetchCars());
    }, [dispatch]);


  return (
    <Container>
      <Grid container spacing={1}>

        <Grid item xs={12} sm={4}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
          >
            <ThemeProvider theme={theme}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'black', fontSize: '35px' }}>ชอบประกันบริษัทไหน</Typography>
            <Typography variant="h4">
              <span style={{ color: '#888888'}} >ก็เลือกได้</span>
              <span style={{ fontWeight: 'bold', color: '#00345c' }}>ตามใจคุณ</span>
            </Typography>
            <Typography variant="h4" sx={{ fontSize: '20px', marginTop: '20px', color: 'black' }}>autocorp มอบความคุ้มครองที่ตอบโจทย์</Typography>
            <Typography variant="h4" sx={{ fontSize: '20px' }}>จากหลายบริษัทประกันชั้นนำ</Typography>
            </ThemeProvider>
          </motion.div>
        </Grid>

        <Grid item xs={12} sm={8}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1 }}>
            <Grid container spacing={2}>
           
              {brands.map((brand: Brand) => (
                <Grid item xs={4} md={2} key={brand.id}>           
                    <Image src={`${LOCALHOST}${brand.attributes.image_brand?.data[0].attributes.url || ''}`} width={120} height={120} alt="Brand Logo" loading="lazy"/>
            </Grid>
        ))}
            </Grid>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  )
}
