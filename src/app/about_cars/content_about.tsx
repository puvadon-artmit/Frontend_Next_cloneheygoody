"use client"
import React, { useState, useEffect } from 'react';
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
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

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
        color: 'black',
        marginTop: '40px'
    },
    text2: {
        fontSize: '20px',
        color: 'black'
    },
});

export default function ContentAbout() {
    const classes = useStyles();
    const dispatch = useDispatch<any>();
    const carData = useSelector((state: RootState) => selectCarData(state));
    const status = useSelector((state: RootState) => selectStatus(state));
    const LOCALHOST = process.env.NEXT_PUBLIC_APP_LOCALHOST;
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 12;

    useEffect(() => {
        dispatch(fetchCars());
    }, []);

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = carData && carData.slice(indexOfFirstCard, indexOfLastCard);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
    };

    return (
        <Container maxWidth="lg">
            <div className='flex justify-center'>
                <Typography className={classes.text} component="div">
                    เรื่องรถน่ารู้
                </Typography>
            </div>
            <Grid container spacing={2} justifyContent="center">
                {currentCards && currentCards.map((car: any) => (
                    <Grid item key={car.id} xs={12} sm={6} md={6} lg={3.5}>
                        <Card className={classes.card} sx={{ marginBottom: '20px' }}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={`${LOCALHOST}${car.attributes.image_about.data[0].attributes.url}`}
                                    title="Car Image"
                                    component="img"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography component="div" sx={{ fontSize: '15px', marginBottom: '15px', color: '#1c4bd1' }}>
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
                    </Grid>
                ))}
            </Grid>
            <div className='flex justify-center'>
                <Stack spacing={2} sx={{ marginTop: '40px', marginBottom: '40px' }}>
                    <Pagination
                        count={Math.ceil(carData.length / cardsPerPage)}
                        size="large"
                        onChange={handleChange}
                    />
                </Stack>
            </div>
        </Container>
    );
}