"use client"
import React, { useEffect, useState } from 'react';
import '../../../../css/Font.css';
import '../../../../css/Checkinsurance.css';

import CustomNavbar from '@/component/CustomNavbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CustomFooter from '@/component/CustomFooter';
import Markdown from 'react-markdown'
import axios from 'axios';
import banner from '../../../../image/banner/banner-footer.jpg'
import Image from 'next/image';
import Link from 'next/link';
// import Content_choice from '../Content_choice';
import FacebookIcon from '@mui/icons-material/Facebook';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LineIcon from '@mui/icons-material/WhatsApp';
import { makeStyles } from '@mui/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import icon1 from '../../../../image/how-to/claim1.svg'
import color1 from '../../../../image/color/color5.jpg'
import color2 from '../../../../image/color/color8.png'
import color3 from '../../../../image/color/color3.jpeg'
import color4 from '../../../../image/color/color4.jpg'
import useMediaQuery from '@mui/material/useMediaQuery';


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
    detail_pm: string;
    head_name: string;
    conditions: string;
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
  const isMobile = useMediaQuery('(max-width:600px)');
  const [detailContent, setDetailContent] = useState<DetailContent | null>(null);
  const LOCALHOST = process.env.NEXT_PUBLIC_APP_LOCALHOST;
  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get(`${LOCALHOST}/api/promotion-details/${params.slug}?populate=*`);

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

    <ThemeProvider theme={theme}>
      <CustomNavbar />

      <Box sx={{ marginLeft: '200px', marginTop: '10px' }}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          <Link color="inherit" href="/">
            หน้าหลัก
          </Link>
          <Link color="inherit" href="/category">
            สาระประกันดี
          </Link>
          <Typography color="text.primary">โปรโมชั่น</Typography>
        </Breadcrumbs>
      </Box>

      <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography sx={{ color: 'black', paddingTop: 4 }} component="div">

          <Typography sx={{ fontSize: '26px', fontWeight: 'bold' }}>{detailContent && detailContent.attributes && detailContent.attributes.head_name}</Typography>

          <Markdown>{detailContent && detailContent.attributes && detailContent.attributes.detail_pm}</Markdown>

          <div className="flex items-center justify-center mt-8">
          <Link href="/checkinsurance">
            <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-2.5rem px-5 py-5 text-center me-2 mb-2">
              เช็คราคาเบี้ยประกันรถยนต์ <ArrowForwardIcon />
            </button>
            </Link>
          </div>

          <div className='mt-8'>
            <Accordion sx={{ backgroundColor: '#f9f9f4' }}>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography>เงื่อนไขโปรโมชั่น:</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component={'div'}>
                  <Markdown>{detailContent && detailContent.attributes && detailContent.attributes.conditions}</Markdown>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>

          <Typography sx={{ color: 'black', paddingTop: 4, display: 'flex', justifyContent: 'end' }} component="div">
            ที่มา : PPTV HD 36 และ Priceza Money
          </Typography>


          <div className='flex justify-center mt-8 '>

            <div className="max-w-2xl mx-4 w-full bg-white shadow-lg rounded-lg overflow-hidden my-4 relative">
              <Image src={color2} width={500} height={500} alt="Picture of the author" className="absolute top-0 left-0 w-full h-full object-cover z-0" />
              <div className="flex items-center px-8 py-8 relative z-10">
                {!isMobile && (
                  <Box component="span" className="bg-blue-500 rounded-full p-2 mr-4">
                    <Image src={icon1} width={35} height={35} alt="Picture" />
                  </Box>
                )}

                <Link href="/car_insurance/insurance_class1">
                  <div>
                    <h2 className="text-black text-xl font-semibold">ประกันรถยนต์</h2>
                    <p className="text-black mt-2 mb-2 text-4xl font-bold">ชั้น 1</p>
                  </div>
                </Link>


                {!isMobile && (
                  <div className="ml-auto">
                    <ArrowForwardIosIcon />
                  </div>
                )}
              </div>

              {!isMobile && (
                <div className="flex items-center justify-center px-4 py-2 bg-gray-100 relative z-10">

                </div>
              )}
            </div>

            {/* -----------------------------------------------2-------------------------------------------------------------------------------------------------------------------------- */}

            <div className="max-w-2xl mx-4 w-full bg-white shadow-lg rounded-lg overflow-hidden my-4 relative">
              <Image
                src={color2}
                width={500}
                height={500}
                alt="Picture of the author"
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
              />
              <div className="flex items-center px-8 py-8 relative z-10">
                {!isMobile && (
                  <Box component="span" className="bg-blue-500 rounded-full p-2 mr-4">
                    <Image src={icon1} width={35} height={35} alt="Picture" />
                  </Box>
                )}
                <div>
                <Link href="/car_insurance/insurance_class2">
                  <h2 className="text-black text-xl font-semibold">ประกันรถยนต์</h2>
                  <p className="text-black mt-2 mb-2 text-4xl font-bold">ชั้น 2+/2</p>
                  </Link>
                </div>
                {!isMobile && (
                  <div className="ml-auto">
                    <ArrowForwardIosIcon />
                  </div>
                )}
              </div>

              {!isMobile && (
                <div className="flex items-center justify-center px-4 py-2 bg-gray-100 relative z-10">

                </div>
              )}
            </div>
          </div>


          <div className='flex justify-center mt-8'>
            <div className="max-w-2xl mx-4 w-full bg-white shadow-lg rounded-lg overflow-hidden my-4 relative">
              <Image
                src={color2}
                width={500}
                height={500}
                alt="Picture of the author"
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
              />
              <div className="flex items-center px-8 py-8 relative z-10">
                {!isMobile && (
                  <Box component="span" className="bg-blue-500 rounded-full p-2 mr-4">
                    <Image src={icon1} width={35} height={35} alt="Picture" />
                  </Box>
                )}
                <div>
                <Link href="/car_insurance/insurance_class3">
                  <h2 className="text-black text-xl font-semibold">ประกันรถยนต์</h2>
                  <p className="text-black mt-2 mb-2 text-4xl font-bold">ชั้น 3+/3</p>
                  </Link>
                </div>
                {!isMobile && (
                  <div className="ml-auto">
                    <ArrowForwardIosIcon />
                  </div>
                )}
              </div>

              {!isMobile && (
                <div className="flex items-center justify-center px-4 py-2 bg-gray-100 relative z-10">

                </div>
              )}
            </div>
            {/* -----------------------------------------------2-------------------------------------------------------------------------------------------------------------------------- */}
            <div className="max-w-2xl mx-4 w-full bg-white shadow-lg rounded-lg overflow-hidden my-4 relative">
              <Image
                src={color1}
                width={500}
                height={500}
                alt="Picture of the author"
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
              />
              <div className="flex items-center px-8 py-8 relative z-10">
                {!isMobile && (
                  <Box component="span" className="bg-blue-500 rounded-full p-2 mr-4">
                    <Image src={icon1} width={35} height={35} alt="Picture" />
                  </Box>
                )}
                <div>
                <Link href="/car_insurance/insurance_ev">
                  <h2 className="text-white text-xl font-semibold">ประกันรถยนต์</h2>
                  <p className="text-white mt-2 mb-2 text-4xl font-bold">ไฟฟ้า EV</p>
                  </Link>
                </div>
                {!isMobile && (
                  <div className="ml-auto">
                    <ArrowForwardIosIcon />
                  </div>
                )}
              </div>
              {!isMobile && (
                <div className="flex items-center justify-center px-4 py-2 bg-gray-100 relative z-10">

                </div>
              )}
            </div>
          </div>

          <Typography sx={{ color: 'black', paddingTop: 4 }} component="div">
            Tag :  <span className="mr-2 border border-black px-1 whitespace-nowrap my-span">ประกันรถยนต์ </span>
            <span className="mr-2 border border-black px-1 whitespace-nowrap my-span">รถยนต์</span>
            <span className="mr-2 border border-black px-1 whitespace-nowrap my-span">รถยนต์ไฟฟ้า</span>
            <span className="mr-2 border border-black px-1 whitespace-nowrap my-span">เปรียบเทียบประกันรถยนต์</span>
          </Typography>

        </Typography>

        <div className={isMobile ? 'mt-6' : 'hidden-on-mobile'}>


          {!isMobile && (
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

      {/* <Content_choice /> */}
      <CustomFooter />
    </ThemeProvider>

  )
}