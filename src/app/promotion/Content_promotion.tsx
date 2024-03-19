"use client"
import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Image from 'next/image';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars, selectpromotionData, selectStatus } from '../store/slice/promotionSlice';
import { RootState } from '../store/store';
import Card_promotion from './Card_promotion';
import Card_health from './Card_health';
import Card_travel from './Card_travel';
import Card_accident from './Card_accident';

export default function Content_promotion() {
    const dispatch = useDispatch<any>();

    const carData = useSelector((state: RootState) => selectpromotionData(state));
    const status = useSelector((state: RootState) => selectStatus(state));
    const LOCALHOST = process.env.NEXT_PUBLIC_APP_LOCALHOST;

    useEffect(() => {
        dispatch(fetchCars());
    }, []);
    return (
        <div>
            <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                <Typography sx={{ marginTop: '20px', marginBottom: '15px', fontSize: '35px', fontWeight: 'bold' }} component="div">
                    โปรโมชั่น
                </Typography>

                <Stack direction="row" spacing={1} sx={{ marginTop: '20px' }}>
                    <Stack direction="row" spacing={1} sx={{ marginTop: '20px' }}>
                        <Chip label="บทความเด่น" component="a" href="#basic-chip" clickable />
                        <Chip label="ประกันรถยนต์" component="a" href="#basic-chip" variant="outlined" clickable/>
                        <Chip label="ประกันสุขภาพ" component="a" href="#basic-chip" variant="outlined" clickable/>
                        <Chip label="ประกันเดินทาง" component="a" href="#basic-chip" variant="outlined" clickable/>
                        <Chip label="ประกันอุบัติเหตุ" component="a" href="#basic-chip" variant="outlined" clickable/>
                    </Stack>
                </Stack>

                {carData && carData.slice(0, 1).map((car: any) => (
                    <div key={car.id}>
                        <Typography sx={{ marginTop: '20px', fontSize: '20px', fontWeight: 'bold', textAlign: 'center', marginBottom: '30px' }} component="div">
                            เรื่องรถน่ารู้
                        </Typography>
                        <div className='flex justify-center' >
                        <Link href={`/promotion/promotion_slug/${car.id}`}>
                            <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg overflow-hidden my-4 flex">

                                <Image
                                    src={`${LOCALHOST}${car.attributes.promotion_image.data[0].attributes.url}`}
                                    alt="Blog Image"
                                    width={400}
                                    height={1500}
                                    className="object-cover"
                                />

                                <div className="w-2/3 px-8 py-8">
                                    <Typography sx={{ marginBottom: '10px', color: 'gray' }} component="div">
                                        {car.attributes.promotion_title}
                                    </Typography>
                                    <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }} component="div">
                                        {car.attributes.promotion_name}
                                    </Typography>
                                    <Typography sx={{ marginTop: '40px', color: 'gray' }} component="div">
                                        {car.attributes.promotion_date}
                                    </Typography>
                                </div>
                            </div>
                            </Link>
                        </div>
                    </div>
                ))}


                <Typography sx={{ marginTop: '20px', fontSize: '20px', fontWeight: 'bold', marginBottom: '20px' }} component="div">
                    บทความเด่น
                </Typography>
                <Card_promotion />

                <div className='flex justify-center'>
                    <div
                        className="mt-8 bg-white hover:bg-gray-300 text-gray-900 font-bold py-2 px-4 rounded border-solid border-2 border-black">
                        <Link href="/about_cars">
                            <Typography >
                                โปรโมชั่น "ประกันรถยนต์" ทั้งหมด
                            </Typography>
                        </Link>
                    </div>
                </div>

                <Typography sx={{ marginTop: '40px', fontSize: '20px', fontWeight: 'bold', marginBottom: '30px' }} component="div">
                    ประกันสุขภาพ
                </Typography>
                <Card_health />
                <div className='flex justify-center'>
                    <div
                        className="mt-8 bg-white hover:bg-gray-300 text-gray-900 font-bold py-2 px-4 rounded border-solid border-2 border-black">
                        <Link href="/lifestyle">
                            <Typography >
                                โปรโมชั่น "ประกันสุขภาพ" ทั้งหมด
                            </Typography>
                        </Link>
                    </div>
                </div>


                <Typography sx={{ marginTop: '40px', fontSize: '20px', fontWeight: 'bold', marginBottom: '30px' }} component="div">
                    ประกันเดินทาง
                </Typography>
                <Card_travel />
                <div className='flex justify-center'>
                    <div
                        className="mt-8 bg-white hover:bg-gray-300 text-gray-900 font-bold py-2 px-4 rounded border-solid border-2 border-black">
                        <Link href="/lifestyle">
                            <Typography >
                                โปรโมชั่น "ประกันเดินทาง" ทั้งหมด
                            </Typography>
                        </Link>
                    </div>
                </div>


                <Typography sx={{ marginTop: '40px', fontSize: '20px', fontWeight: 'bold', marginBottom: '30px' }} component="div">
                ประกันอุบัติเหตุ
                </Typography>
                <Card_accident />
                <div className='flex justify-center'>
                    <div
                        className="mt-8 bg-white hover:bg-gray-300 text-gray-900 font-bold py-2 px-4 rounded border-solid border-2 border-black">
                        <Link href="/lifestyle">
                            <Typography >
                                โปรโมชั่น "ประกันอุบัติเหตุ" ทั้งหมด
                            </Typography>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}