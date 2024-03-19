"use client"
import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import Markdown from 'react-markdown'
import axios from 'axios';

interface DetailContent {
    id: number;
    attributes: {
        detail: string;
        about_car: {
            data: {
                id: number;
                attributes: {
                    name: string;
                    image: string;
                };
            };
        };
    };
}

export default function content_detail({ params }: { params: { slug: string } }) {

    const [detailContent, setDetailContent] = useState<DetailContent | null>(null);
    const LOCALHOST = process.env.NEXT_PUBLIC_APP_LOCALHOST;
   

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${LOCALHOST}/api/about-details/${params}`);
                if (response.data) {
                    setDetailContent(response.data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [params]);

    return (
        <div>
        <Container maxWidth="lg">
            <Typography sx={{ color: 'black',padding : 8 }} component="div">
                <Markdown>{detailContent && detailContent.attributes && detailContent.attributes.detail}</Markdown>
            </Typography>
        </Container>
    </div>
    );
}