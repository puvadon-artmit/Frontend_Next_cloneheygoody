"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars, selectCarData, selectStatus } from '../../store/slice/aboutSlice';
import { RootState } from '../../store/store';



const useStyles = makeStyles({
    card: {
        margin: '0 10px',
        marginTop: '20px'
    },
    cardMedia: {
        height: 180,
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
            transform: 'scale(1.1)',
        },
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        textAlign: 'center',
    },
    cardGrid: {
        display: 'flex',
    },
    text: {
        fontSize: '40px',
        color: 'black'
    },
    text2: {
        fontSize: '20px',
        color: 'black'
    },
});

export default function Content_choice() {

    const classes = useStyles();
    const dispatch = useDispatch<any>();
    const carData = useSelector((state: RootState) => selectCarData(state));
    const status = useSelector((state: RootState) => selectStatus(state));
    const LOCALHOST = process.env.NEXT_PUBLIC_APP_LOCALHOST;

    useEffect(() => {
        dispatch(fetchCars());
    }, []);


    const [randomCars, setRandomCars] = useState<any[]>([]);
    const numberOfRandomCarsToShow = 2; // จำนวนข้อมูลที่ต้องการแสดง

    useEffect(() => {
        // สุ่มข้อมูลแบบสลับไปเรื่อยๆ
        const shuffleArray = (array: any[]) => {
            const newArray = [...array];
            for (let i = newArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
            }
            return newArray;
        };

        // สุ่มข้อมูลและกำหนดจำนวนข้อมูลที่จะแสดง
        const randomCarsToShow = shuffleArray(carData).slice(0, numberOfRandomCarsToShow);
        setRandomCars(randomCarsToShow);
    }, [carData, numberOfRandomCarsToShow]);
    return (
        <div>
            <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className='flex justify-center'>

                </div>
                <div className={classes.cardGrid}>
                    {randomCars.map((car: any) => (
                        <Card key={car.id} className={classes.card} sx={{ maxWidth: 345, marginBottom: '20px' }}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={`${LOCALHOST}${car.attributes.image_about.data[0].attributes.url}`}
                                    title="Car Image"
                                    component="img"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography component="div" sx={{ fontSize: '10px' }}>
                                        {car.attributes.category_abouts.data[0].attributes.name}
                                    </Typography>
                                    <Typography gutterBottom component="div" className={classes.text2}>
                                        {car.attributes.name}
                                    </Typography>
                                    <Link href={`/about_cars/about_deatail/${car.id}`}>
                                        <div className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                            ดูรายละเอียด
                                        </div>
                                    </Link>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))}
                </div>
            </Container>

        </div>
    )
}