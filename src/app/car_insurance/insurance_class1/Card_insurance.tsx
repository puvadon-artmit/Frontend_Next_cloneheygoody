"use client"
import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import CustomFooter from '@/component/CustomFooter';
import Image from 'next/image';
import Link from 'next/link';
// import Content_choice from '../Content_choice';
import FacebookIcon from '@mui/icons-material/Facebook';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Box from '@mui/material/Box';
import icon1 from '../../../image/how-to/claim1.svg'
import color1 from '../../../image/color/color5.jpg'
import color2 from '../../../image/color/color8.png'
import useMediaQuery from '@mui/material/useMediaQuery';


export default function Content_class1() {

    const isMobile = useMediaQuery('(max-width:600px)');

    return (

        <div>

            <Typography sx={{ color: 'black', paddingTop: 4 }} component="div">
                <div className='flex justify-center mt-8 '>

                    <div className="max-w-2xl mx-4 w-full bg-white shadow-lg rounded-lg overflow-hidden my-4 relative">
                        <Image src={color2} width={500} height={500} alt="Picture of the author" className="absolute top-0 left-0 w-full h-full object-cover z-0" />
                        <div className="flex items-center px-8 py-8 relative z-10">
                            {!isMobile && (
                                <Box component="span" className="bg-blue-500 rounded-full p-2 mr-4">
                                    <Image src={icon1} width={35} height={35} alt="Picture" />
                                </Box>
                            )}

                            <Link href="/car_insurance">
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
                                <h2 className="text-black text-xl font-semibold">ประกันรถยนต์</h2>
                                <p className="text-black mt-2 mb-2 text-4xl font-bold">ชั้น 2+/2</p>
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
                                <h2 className="text-black text-xl font-semibold">ประกันรถยนต์</h2>
                                <p className="text-black mt-2 mb-2 text-4xl font-bold">ชั้น 3+/3</p>
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
                                <h2 className="text-white text-xl font-semibold">ประกันรถยนต์</h2>
                                <p className="text-white mt-2 mb-2 text-4xl font-bold">ไฟฟ้า EV</p>
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

            </Typography>
            <CustomFooter />
        </div>

    )
}