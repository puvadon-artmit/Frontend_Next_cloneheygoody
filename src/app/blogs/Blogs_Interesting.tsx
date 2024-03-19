"use client"
import React, { useEffect } from 'react';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars, selectCarData, selectStatus } from '../store/slice/aboutSlice';
import { RootState } from '../store/store';

const Blog = makeStyles({
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


export default function Blogs_Interesting() {

    const classes = Blog();
    const dispatch = useDispatch<any>();
    const carData = useSelector((state: RootState) => selectCarData(state));
    const status = useSelector((state: RootState) => selectStatus(state));
    const LOCALHOST = process.env.NEXT_PUBLIC_APP_LOCALHOST;

    useEffect(() => {
        dispatch(fetchCars());
    }, []);

    return (
        <div>
            <Container maxWidth="lg">
                <div className='flex justify-center'>

                </div>
                <div className={classes.cardGrid}>

                    {carData.slice(0, 3).map((car: any) => (
                        <div key={car.id}>

                            <Card  className={classes.card} sx={{ maxWidth: 345, marginBottom: '20px' }}>

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
                                            <div
                                                className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                ดูรายละเอียด
                                            </div>
                                        </Link>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                    ))}
                </div>
            </Container>

        </div>
    )
}