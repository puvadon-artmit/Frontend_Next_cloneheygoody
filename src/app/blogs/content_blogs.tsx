"use client"
import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Image from 'next/image';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars, selectCarData, selectStatus } from '../store/slice/blogSlice';
import { RootState } from '../store/store';
import Blogs_Interesting from './Blogs_Interesting';
import Content_lifestyle from './content_lifestyle';

export default function ContentBlogs() {
    const dispatch = useDispatch<any>();
    const carData = useSelector((state: RootState) => selectCarData(state));
    const status = useSelector((state: RootState) => selectStatus(state));
    const LOCALHOST = process.env.NEXT_PUBLIC_APP_LOCALHOST;

    useEffect(() => {
        dispatch(fetchCars());
    }, []);

    return (
        <div>
            <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                <Typography sx={{ marginTop: '20px', marginBottom: '15px', fontSize: '35px', fontWeight: 'bold' }} component="div">
                    บทความ
                </Typography>

                <Stack direction="row" spacing={1} sx={{ marginTop: '20px' }}>
                    <Stack direction="row" spacing={1} sx={{ marginTop: '20px' }}>
                        <Chip label="บทความเด่น" component="a" href="#basic-chip" clickable />
                        <Chip
                            label="เรื่องน่ารู้"
                            component="a"
                            href="#basic-chip"
                            variant="outlined"
                            clickable
                        />

                        <Chip
                            label="ไลฟ์สไตล์"
                            component="a"
                            href="#basic-chip"
                            variant="outlined"
                            clickable
                        />
                    </Stack>
                </Stack>

                {carData && carData.slice(0, 1).map((car: any) => (
                    <div key={car.id}>
                        <Typography sx={{ marginTop: '20px', fontSize: '20px', fontWeight: 'bold', textAlign: 'center' }} component="div">
                            เรื่องรถน่ารู้
                        </Typography>
                        <div className='flex justify-center' >
                            <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg overflow-hidden my-4 flex">

                                <Image
                                    src={`${LOCALHOST}${car.attributes.blog_image.data[0].attributes.url}`}
                                    alt="Blog Image"
                                    width={400}
                                    height={1500}
                                    className="object-cover"
                                />

                                <div className="w-2/3 px-8 py-8">
                                    <Typography sx={{ fontSize: '25px', fontWeight: 'bold' }} component="div">
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


                <Typography sx={{ marginTop: '20px', fontSize: '20px', fontWeight: 'bold' }} component="div">
                    บทความเด่น
                </Typography>
                <Blogs_Interesting />

                <div className='flex justify-center'>
                    <div
                        className="mt-8 bg-white hover:bg-gray-300 text-gray-900 font-bold py-2 px-4 rounded border-solid border-2 border-black">
                        <Link href="/about_cars">
                            <Typography >
                                ดู "เรื่องน่ารู้" ทั้งหมด
                            </Typography>
                        </Link>
                    </div>
                </div>

                <Typography sx={{ marginTop: '20px', fontSize: '20px', fontWeight: 'bold' }} component="div">
                    ไลฟ์สไตล์
                </Typography>
                <Content_lifestyle />
                <div className='flex justify-center'>
                    <div
                        className="mt-8 bg-white hover:bg-gray-300 text-gray-900 font-bold py-2 px-4 rounded border-solid border-2 border-black">
                        <Link href="/lifestyle">
                            <Typography >
                                ดู "ไลฟ์สไตล์" ทั้งหมด
                            </Typography>
                        </Link>
                    </div>
                </div>

            </Container>
        </div>

    );
}