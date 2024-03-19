"use client";
import React, { useEffect } from "react";
import Slider from "react-slick";
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars, selectCarData, selectStatus } from '../app/store/slice/blogSlice';
import { RootState } from '../app/store/store';
import useMediaQuery from '@mui/material/useMediaQuery';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

export default function SimpleSlider() {
  const dispatch = useDispatch<any>();
  const carData = useSelector((state: RootState) => selectCarData(state));
  const status = useSelector((state: RootState) => selectStatus(state));
  const LOCALHOST = process.env.NEXT_PUBLIC_APP_LOCALHOST;
  const isMobile = useMediaQuery('(max-width:600px),(max-width:800px),(max-width:1200px)');

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.9,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  };


  return (
    <div>
      {!isMobile && (
        <Slider {...settings}>
          {carData && carData.map((car: any) => (
            <div key={car.id}>

              <div className='flex justify-center' key={car.id}>
                <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg overflow-hidden my-4 flex">
                  <img
                    src={`${LOCALHOST}${car.attributes.blog_image.data[0].attributes.url}`}
                    alt="Blog Image"
                    width={400} />
                  <div className="w-2/3 px-8 py-8">
                    <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }} component="div">
                      {car.attributes.blog_name}
                    </Typography>
                    <Typography sx={{ marginTop: '10px', color: 'gray' }} component="div">
                      {car.attributes.blog_section}
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </Slider>
      )}

      {isMobile && (
        <Slider {...settings}>
          {carData && carData.map((car: any) => (
            <div key={car.id}>

              <Card sx={{ maxWidth: 345, height: '100%', margin: '10px' }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={`${LOCALHOST}${car.attributes.blog_image.data[0].attributes.url}`}
                    alt="image brand"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '14px', marginBottom: '10px' }}>
                      {car.attributes.blog_section}
                    </Typography>

                    <Typography gutterBottom component="div" sx={{ fontSize: '16px', height: '5em' }}>
                      {car.attributes.blog_name}
                    </Typography>

                  </CardContent>
                </CardActionArea>
              </Card>
            </div>


          ))}

        </Slider>
      )}
    </div>
  );
};



