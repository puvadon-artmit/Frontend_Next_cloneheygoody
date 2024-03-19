"use client"
import React, { useEffect, useState } from 'react';
import '../../../../css/Font.css';
import '../../../../css/Checkinsurance.css';
import { Provider } from 'react-redux'
import store from '../../../store/store';
import CustomNavbar from '@/component/CustomNavbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CustomFooter from '@/component/CustomFooter';
import Markdown from 'react-markdown'
import axios from 'axios';
import banner from '../../../../image/banner/banner-footer.jpg'
import Image from 'next/image';
import Link from 'next/link';
import Content_choice from '../Content_choice';
import FacebookIcon from '@mui/icons-material/Facebook';
import LineIcon from '@mui/icons-material/WhatsApp';
import { useMediaQuery } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({

  iconWrapper: {
    borderRadius: '50%',
    padding: '8px',
    backgroundColor: '#ECECEC',
    margin: '8px',
  },
});


interface DetailContent {
  id: number;
  attributes: {
    detail: string;
    about_car: {
      data: {
        id: number;
        attributes: {
          name: string;
          image: string;
        };
      };
    };
  };
}

import {
  createTheme,
  ThemeProvider,
} from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'Kanit, sans-serif',
  },
});


export default function page({ params }: { params: { slug: number } }) {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:600px)');
  const [detailContent, setDetailContent] = useState<DetailContent | null>(null);
  const LOCALHOST = process.env.NEXT_PUBLIC_APP_LOCALHOST;
  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get(`${LOCALHOST}/api/about-details/${params.slug}?populate=*`);

        if (response.data && response.data.data) {
          setDetailContent(response.data.data);
        }

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [params.slug]);



  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CustomNavbar />

        <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'center', paddingTop: 4 }}>
          <Typography sx={{ color: 'black', paddingTop: 4 }} component="div">
            <Markdown>{detailContent && detailContent.attributes && detailContent.attributes.detail}</Markdown>

            <Typography sx={{ color: 'black', paddingTop: 4, display: 'flex', justifyContent: 'end' }} component="div">
              ที่มา : PPTV HD 36 และ Priceza Money
            </Typography>

            <Typography sx={{ color: 'black', paddingTop: 4 }} component="div">
              Tag :  <span className="mr-2 border border-black px-1 whitespace-nowrap my-span">ประกันรถยนต์ </span>
              <span className="mr-2 border border-black px-1 whitespace-nowrap my-span">รถยนต์</span>
              <span className="mr-2 border border-black px-1 whitespace-nowrap my-span">รถยนต์ไฟฟ้า</span>
              <span className="mr-2 border border-black px-1 whitespace-nowrap my-span">เปรียบเทียบประกันรถยนต์</span>
            </Typography>

            <div className='flex justify-center mt-8'>
              <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg overflow-hidden my-4 relative">
                <Image
                  src={banner}
                  width={500}
                  height={500}
                  alt="Picture of the author"
                  className="absolute top-0 left-0 w-full h-full object-cover z-0"
                />
                <div className="px-8 py-8 relative z-10">
                  <h2 className="text-slate-100 text-lg font-semibold">ไปเลือกประกันรถยนต์กัน!</h2>
                  <p className="text-slate-100 mt-2">แค่กรอกข้อมูลง่าย ๆ แล้วให้ heygoody เสนอแผนที่เหมาะกับคุณ</p>
                </div>
                <div className="flex items-center justify-center px-4 py-2 bg-gray-100 relative z-10">
                  <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">เช็คราคาเบี้ย</button>
                </div>
              </div>
            </div>

            <Typography sx={{ color: 'black', paddingTop: 4, display: 'flex', justifyContent: 'center', fontSize: '20px', textDecoration: 'underline' }} component="div">
              บทความอื่นๆ
            </Typography>

          </Typography>

          <div className={matches ? 'mt-6' : 'hidden-on-mobile'}>


            {matches && (
              <>

                <Typography sx={{ position: 'fixed', zIndex: '1000' }} component="div">


                  <Typography sx={{ color: 'black', fontSize: '15px', marginLeft: '15px' }} component="div">
                    แชร์
                  </Typography>
                  <div className={classes.iconWrapper}>
                    <FacebookIcon />
                  </div>
                  <div className={classes.iconWrapper}>
                    <LineIcon />
                  </div>
                </Typography>
              </>

            )}
          </div>
        </Container>

        <Content_choice />
        <CustomFooter />
      </ThemeProvider>
    </Provider>
  )
}