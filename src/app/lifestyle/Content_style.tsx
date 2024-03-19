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
import { fetchCars, selectCarData, selectStatus } from '../store/slice/lifestyleSlice';
import { RootState } from '../store/store';
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
        fontSize: '10px',
        color: 'black'
    },
    text2: {
        fontSize: '20px',
        color: 'black'
    },
});


export default function Content_style() {
    const classes = useStyles();
    const dispatch = useDispatch<any>();
    const carData = useSelector((state: RootState) => selectCarData(state));
    const status = useSelector((state: RootState) => selectStatus(state));

    const LOCALHOST = process.env.NEXT_PUBLIC_APP_LOCALHOST;

    useEffect(() => {
        dispatch(fetchCars());
    }, []);

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

            <div className={classes.cardGrid}>
                {carData && carData.length > 0 && carData.slice(0, 3).map((car: any) => (
                    <Card key={car.id} className={classes.card} sx={{ maxWidth: 345, marginBottom: '20px' }}>
                        <CardActionArea>
                            {car.attributes.lifestyle_image && car.attributes.lifestyle_image.data && car.attributes.lifestyle_image.data.length > 0 &&
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={`${LOCALHOST}${car.attributes.lifestyle_image.data[0].attributes.url}`}
                                    title="Car Image"
                                    component="img"
                                />
                            }
                            <CardContent className={classes.cardContent}>
                                <Typography component="div" className={classes.text}>
                                    {car.attributes.category_lifestyles.data[0].attributes.lifestyle_type}
                                    {/* {car.attributes.lifestyle_type} */}
                                </Typography>
                                <Typography gutterBottom component="div" className={classes.text2}>

                                    {car.attributes.lifestyle_name}
                                </Typography>
                                <Link href={`/lifestyle/lifestyle_detail/${car.id}`}>
                                    <div className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        ดูรายละเอียด
                                    </div>
                                </Link>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </div>

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
    )
}