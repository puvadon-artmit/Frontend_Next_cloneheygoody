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
import { fetchCars, selectpromotionData, selectStatus } from '../store/slice/promotionSlice';
import { RootState } from '../store/store';
import Grid from '@mui/material/Grid';


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
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    text: {
        fontSize: '14px',
        color: '#1173ce',
        marginBottom: '10px'
    },
    text2: {
        fontSize: '16px',
        color: 'black',
        marginBottom: '20px'
    },
    text3: {
        fontSize: '14px',
        color: 'black',
        arginBottom: '20px'
    },
});


export default function Card_promotion() {
    const classes = useStyles();

    const dispatch = useDispatch<any>();
    const promotionData = useSelector((state: RootState) => selectpromotionData(state));
    const status = useSelector((state: RootState) => selectStatus(state));
    const LOCALHOST = process.env.NEXT_PUBLIC_APP_LOCALHOST;


    useEffect(() => {
        dispatch(fetchCars());
    }, []);

    return (
        <Container maxWidth="lg">
            <Grid container spacing={2} className={classes.cardGrid}>
                {promotionData && promotionData.length > 0 && promotionData.slice(0, 3).map((car: any) => (
                    <Grid item key={car.id} xs={12} sm={6} md={6} lg={4}>
                        <Card key={car.id} className={classes.card} sx={{ maxWidth: 345, marginBottom: '20px' }} component="div">
                            <CardActionArea>
                                {car.attributes.promotion_image && car.attributes.promotion_image.data && car.attributes.promotion_image.data.length > 0 &&
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={`${LOCALHOST}${car.attributes.promotion_image.data[0].attributes.url}`}
                                        title="Car Image"
                                        component="img"
                                    />
                                }
                                <CardContent className={classes.cardContent}>
                                    <Typography component="div" className={classes.text}>
                                    {car.attributes.promotion_types?.data[0]?.attributes?.type_pm}
                                        {/* {car.attributes.category_abouts.data[0].attributes.name} */}
                                        {/* {car.attributes.promotion_title} */}
                                    </Typography>

                                    <Typography gutterBottom component="div" className={classes.text2}>

                                        {car.attributes.promotion_name}
                                    </Typography>

                                    <Typography gutterBottom component="div" className={classes.text2}>

                                        {car.attributes.promotion_date}
                                    </Typography>

                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}

            </Grid>
        </Container>
    );
}

// <Link href={`/about_cars/about_deatail/${car.id}`}>