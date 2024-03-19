import React from 'react';
import Image from 'next/image';
import { Typography, Button } from '@mui/material';
import Container from '@mui/material/Container';
import Contact from '../../image/icon_car/contact.png';
import Bg from '../../image/icon_car/bg.png';
import Link from 'next/link';

export default function Card_questions() {
    return (
        <Container maxWidth="lg" sx={{ marginTop: '60px' }}>
            <div className="flex justify-center flex-col items-center">
                <div>
                {/* <Image src={Contact}  alt="Picture" /> */}
                    <Typography sx={{ fontSize: '25px' }}>คำถามที่พบบ่อย</Typography>
                </div>
                <div className="mt-3">
                
                    <Link href="/questions">
                    <Button
                        variant="outlined"
                        size="large"
                        sx={{
                            color: 'black',
                            borderColor: 'black',
                            fontSize: '14px',
                            padding: '8px 16px',
                            '@media (max-width: 600px)': {
                                fontSize: '8px',
                                padding: '0.5px 6px',
                            },
                        }}
                        className="text-sm md:text-base lg:text-lg xl:text-xl"
                    >
                        อ่านเพิ่มเติม
                    </Button>
                    </Link>
                </div>
            </div>
        </Container>
    );
}
