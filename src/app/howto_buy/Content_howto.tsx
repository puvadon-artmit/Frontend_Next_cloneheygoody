"use client"
import { useState } from 'react';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import { Typography, Snackbar } from '@mui/material';
import Image from 'next/image'

import Card_howto from './Card_howto';
import Image_howto from './Image_howto';
import Should_know from './Should_know'
import Report_damage from './Report_damage';

export default function Content_howto() {
    return (
        <Container maxWidth="lg">
            <Image_howto />
            <Card_howto />
            <Should_know />
            <Report_damage />
        </Container>
    )
}