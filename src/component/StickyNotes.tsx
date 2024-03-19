"use client"
import React, { useEffect } from 'react';
import { Card, CardContent, Typography, Rating, Stack, Grid, Avatar } from '@mui/material';
import Smail01 from '../image/pick_pay/smail01.svg'
import Smail02 from '../image/pick_pay/smail02.svg'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Image from 'next/image';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Markdown from 'react-markdown';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars, selectCarData, selectStatus } from '../app/store/slice/reviewSlice';
import { RootState } from '../app/store/store';
import Review from './Review';
import reviewSlice from '../app/store/slice/reviewSlice';
import Container from '@mui/material/Container';
import Slider from "react-slick";
import useMediaQuery from '@mui/material/useMediaQuery';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';

const theme = createTheme({
    typography: {
        fontFamily: 'Kanit, sans-serif',
    },
});

const colorList = ['#ffd47c', '#e0dcfc', '#b5e7d0'];
const imageList = [Smail01, Smail02];

const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colorList.length);
    return colorList[randomIndex];
};

const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * imageList.length);
    return imageList[randomIndex];
};


interface Review {
    id: number;
    attributes: {
        comment: string;
        name_comment: string;
        score: string;
    };
}

export default function StickyNotes() {
    const dispatch = useDispatch<any>();
    const reviews = useSelector(selectCarData);
    const status = useSelector(selectStatus);
    const isMobile = useMediaQuery('(max-width:600px)');
    const isIpad = useMediaQuery('(max-width:800px),(max-width:1000px),(max-width:1200px)')

    useEffect(() => {
        dispatch(fetchCars());
    }, [dispatch]);

    const shuffledReviews = [...reviews];

    for (let i = shuffledReviews.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledReviews[i], shuffledReviews[j]] = [shuffledReviews[j], shuffledReviews[i]];
    }

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1.2,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
    };

    const sliderSettingsMobile = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1.2,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
    };

    const sliderSettingsIpad = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1.2,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
    };
    return (
        <Container maxWidth="lg">
            {!isMobile && (
                !isIpad && (
                <Slider {...sliderSettings}>
                    {shuffledReviews.slice(0, 10).map((review: Review, index: number) => (
                        <Grid item key={review.id}>
                            <Card key={review.id} sx={{ backgroundColor: getRandomColor(), width: '350px', height: '300px' }}>
                                <CardContent sx={{ marginBottom: '30px' }}>
                                    <Stack spacing={1}>
                                        <Typography component="legend" sx={{ fontSize: '40px', fontWeight: 'bold' }}>
                                            {review.attributes.score}.0/<span style={{ fontSize: 'smaller', color: 'gray' }}>5</span>
                                        </Typography>
                                        <Rating name="size-large" defaultValue={parseFloat(review.attributes.score)} size="large" />
                                    </Stack>
                                    <Typography variant="body2" component="div" sx={{ marginTop: '20px', fontSize: '20px' }}>
                                        <Markdown>{review.attributes.comment}</Markdown>
                                    </Typography>
                                    <Typography variant="body2" component="div" sx={{ display: 'flex', alignItems: 'center', marginTop: '30px', fontSize: '16px', color: 'gray' }}>
                                        <AccountCircleIcon sx={{ marginRight: '8px' }} />
                                        <div>{review.attributes.name_comment}</div>
                                        <Image src={getRandomImage()} alt="" width={40} height={40} style={{ marginLeft: '85px' }} />
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Slider>
                )
            )}

{
            isMobile && (
                <Slider {...sliderSettingsMobile}>
                    {shuffledReviews.slice(0, 10).map((review: Review, index: number) => (
                        <div key={review.id}>
                            <Card key={review.id} sx={{ backgroundColor: getRandomColor(), maxWidth: 500, height: '100%', margin: '10px' }}>
                         
                                <CardContent sx={{ marginBottom: '30px', marginLeft: '20px', marginRight: '20px', width: '155em' }}>
                                    <Stack spacing={1}>
                                        <Typography component="legend" sx={{ fontSize: { xs: '24px', md: '40px' }, fontWeight: 'bold' }}>
                                            {review.attributes.score}.0/<span style={{ fontSize: 'smaller', color: 'gray' }}>5</span>
                                        </Typography>
                                        <Rating name="size-large" defaultValue={parseFloat(review.attributes.score)} size="large" />
                                    </Stack>
                                    <Typography variant="body2" component="div" sx={{ marginTop: '20px', fontSize: { xs: '14px', md: '20px' } }}>
                                        <Markdown>{review.attributes.comment}</Markdown>
                                    </Typography>
                                    <Typography variant="body2" component="div" sx={{ display: 'flex', alignItems: 'center', marginTop: '30px', fontSize: { xs: '12px', md: '16px' }, color: 'gray' }}>
                                        <AccountCircleIcon sx={{ marginRight: '8px' }} />
                                        <div>{review.attributes.name_comment}</div>
                                        <Image src={getRandomImage()} alt="" width={40} height={40} style={{ marginLeft: '15px' }} />
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </Slider>
            
            )}

{!isMobile && (
            isIpad && (
                <Slider {...sliderSettingsIpad}>
                    {shuffledReviews.slice(0, 10).map((review: Review, index: number) => (
                        <div key={review.id}>
                            <Card key={review.id} sx={{ backgroundColor: getRandomColor(), maxWidth: 500, height: '100%', margin: '10px' }}>
                         
                                <CardContent sx={{ marginBottom: '30px', marginLeft: '20px', marginRight: '20px', width: '155em' }}>
                                    <Stack spacing={1}>
                                        <Typography component="legend" sx={{ fontSize: { xs: '24px', md: '40px' }, fontWeight: 'bold' }}>
                                            {review.attributes.score}.0/<span style={{ fontSize: 'smaller', color: 'gray' }}>5</span>
                                        </Typography>
                                        <Rating name="size-large" defaultValue={parseFloat(review.attributes.score)} size="large" />
                                    </Stack>
                                    <Typography variant="body2" component="div" sx={{ marginTop: '20px', fontSize: { xs: '14px', md: '20px' } }}>
                                        <Markdown>{review.attributes.comment}</Markdown>
                                    </Typography>
                                    <Typography variant="body2" component="div" sx={{ display: 'flex', alignItems: 'center', marginTop: '30px', fontSize: { xs: '12px', md: '16px' }, color: 'gray' }}>
                                        <AccountCircleIcon sx={{ marginRight: '8px' }} />
                                        <div>{review.attributes.name_comment}</div>
                                        <Image src={getRandomImage()} alt="" width={40} height={40} style={{ marginLeft: '15px' }} />
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </Slider>
            )
            )}


        </Container>
    );

}