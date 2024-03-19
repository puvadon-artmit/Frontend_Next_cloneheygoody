"use client"
import React, { useEffect, useState } from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Table from '@mui/joy/Table';
import Typography from '@mui/material/Typography';
import Sheet from '@mui/joy/Sheet';
import Container from '@mui/joy/Container';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars, selectCarData, selectStatus } from '../../store/slice/insurancecarsSlice';
import { fetchProtection, selectProtectionData, selectStatus2 } from '../../store/slice/protectionsSlice';
import { RootState } from '../../store/store';
import Image from 'next/image'
import { makeStyles } from '@mui/styles';
import icon01 from '../../../image/chacke_icon/icon-a1.svg'
import icon02 from '../../../image/chacke_icon/icon-a2.svg'
import icon03 from '../../../image/chacke_icon/icon-a3.svg'
import Markdown from 'react-markdown'
import {
    createTheme,
    ThemeProvider,
} from '@mui/material';

const theme = createTheme({
    typography: {
        fontFamily: 'Kanit, sans-serif',
    },
});


function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return { name, calories, fat, carbs, protein };
}

interface Brand {
    id: number;
    attributes: {
        detail_brand: string;
        name_insurance: string;
        collision: string;
        lost: string;
        fire: string;
        property: string;
        person: string;
        accident_pn: string;
        treatment: string;
        bail: string;
        image_brand: {
            data: {
                id: number;
                attributes: {
                    name: string;
                    url: string;
                };
            }[];
        };
    };
}

interface Protection {
    id: number;
    attributes: {
        protection_name: string;
        createdAt: string;
        name_logo: string;
        updatedAt: string;
        publishedAt: string;
        protections_image: {
            data: {
                id: number;
                attributes: {
                    name: string;
                    alternativeText: string | null;
                    caption: string | null;
                    width: number;
                    height: number;
                    formats: any;  // ปรับตามโครงสร้างที่มีจริง
                    hash: string;
                    ext: string;
                    mime: string;
                    size: number;
                    url: string;
                    previewUrl: string | null;
                    provider: string;
                    provider_metadata: any;  // ปรับตามโครงสร้างที่มีจริง
                    createdAt: string;
                    updatedAt: string;
                };
            }[];
        };
    };
}


const rows = [
    createData('1', 159, 6.0, 24, 4.0),
    createData('2', 237, 9.0, 37, 4.3),
    createData('3', 262, 16.0, 24, 6.0),
    createData('4', 305, 3.7, 67, 4.3),
];

const useStyles = makeStyles({
    table: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }

});



export default function Compare_class1() {
    const dispatch = useDispatch<any>();
    const brands = useSelector(selectCarData);
    const protections = useSelector(selectProtectionData);

    // console.log(protections);
    const status = useSelector(selectStatus);

    useEffect(() => {
        dispatch(fetchCars());
        dispatch(fetchProtection());
    }, [dispatch]);

    const getIconSrc = (value: string) => {
        switch (value) {
            case '1':
                return icon01.src || null;
            case '2':
                return icon02.src || null;
            case '3':
                return icon03.src || null;
            default:
                return null;
        }
    };

    const classes = useStyles();

    return (

        <Box sx={{ width: '100%', background: 'linear-gradient(to right, #1e3a8a, #1e3faa)', height: 'auto', marginTop: '60px' }}>
            <Container maxWidth="lg" >

                <Typography textAlign="start" sx={{ fontSize: '30px', color: 'white', fontWeight: 'bold' }}>
                    เปรียบเทียบประกันรถยนต์คุ้มครองต่างกันยังไง
                </Typography>

                <Sheet
                    variant="outlined"
                    sx={{
                        '--TableCell-height': '40px',
                        // the number is the amount of the header rows.
                        '--TableHeader-height': 'calc(1 * var(--TableCell-height))',
                        '--Table-firstColumnWidth': '80px',
                        '--Table-lastColumnWidth': '144px',
                        // background needs to have transparency to show the scrolling shadows
                        '--TableRow-stripeBackground': 'rgba(0 0 0 / 0.04)',
                        '--TableRow-hoverBackground': 'rgba(0 0 0 / 0.08)',
                        overflow: 'auto',
                        marginTop: '20px',
                        borderRadius: '10px',

                        background: (
                            theme,
                        ) => `linear-gradient(to right, ${theme.vars.palette.background.surface} 30%, rgba(255, 255, 255, 0)),
                        linear-gradient(to right, rgba(255, 255, 255, 0), ${theme.vars.palette.background.surface} 70%) 0 100%,
                        radial-gradient(
                        farthest-side at 0 50%,
                        rgba(0, 0, 0, 0.12),
                        rgba(0, 0, 0, 0)
                        ),
                        radial-gradient(
                            farthest-side at 100% 50%,
                            rgba(0, 0, 0, 0.12),
                            rgba(0, 0, 0, 0)
                        )
                        0 100%`,
                        backgroundSize:
                            '40px calc(100% - var(--TableCell-height)), 40px calc(100% - var(--TableCell-height)), 14px calc(100% - var(--TableCell-height)), 14px calc(100% - var(--TableCell-height))',
                        backgroundRepeat: 'no-repeat',
                        backgroundAttachment: 'local, local, scroll, scroll',
                        backgroundPosition:
                            'var(--Table-firstColumnWidth) var(--TableCell-height), calc(100% - var(--Table-lastColumnWidth)) var(--TableCell-height), var(--Table-firstColumnWidth) var(--TableCell-height), calc(100% - var(--Table-lastColumnWidth)) var(--TableCell-height)',
                        backgroundColor: 'background.surface',
                    }}
                >

                    <Table
                        borderAxis="bothBetween"
                        stripe="odd"
                        hoverRow
                        sx={{
                            '& tr > *:first-child': {
                                position: 'sticky',
                                left: 0,
                                boxShadow: '1px 0 var(--TableCell-borderColor)',
                                bgcolor: 'background.surface',
                            },
                            '& tr > *:last-child': {
                                position: 'sticky',
                                right: 0,
                                bgcolor: 'var(--TableCell-headBackground)',
                            },
                        }}
                    >

                        <thead>

                            <tr>
                                <th style={{ width: 100, textAlign: 'center' }}></th>
                                {protections.map((protectionData: Protection) => (

                                    <th key={protectionData.id} style={{ width: 100, textAlign: 'center' }}><Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                        <Image src={`http://localhost:1337${protectionData.attributes.protections_image?.data[0].attributes.url || ''}`} width={35} height={35} alt="Brand Logo" loading="lazy" />
                                    </Box>
                                        <ThemeProvider theme={theme}>
                                            <Typography component={'div'}>
                                                <Markdown>
                                                    {protectionData.attributes.name_logo}
                                                </Markdown>
                                            </Typography>
                                        </ThemeProvider>
                                    </th>

                                ))}
                                <th aria-label="last" style={{ width: 100, textAlign: 'center' }} />
                            </tr>

                        </thead>
                        <tbody>
                            {brands.map((brand: Brand) => (
                                <tr key={brand.attributes.name_insurance}>

                                    <td> <ThemeProvider theme={theme}> <Typography>{brand.attributes.name_insurance}</Typography> </ThemeProvider></td>

                                    <td><Box className={classes.table}>{brand.attributes.collision && <Image src={getIconSrc(brand.attributes.collision)} alt={`Icon ${brand.attributes.collision}`} width={40} height={40} />}</Box></td>
                                    <td><Box className={classes.table}>{brand.attributes.lost && <Image src={getIconSrc(brand.attributes.lost)} alt={`Icon ${brand.attributes.lost}`} width={40} height={40} />}</Box></td>
                                    <td><Box className={classes.table}>{brand.attributes.fire && <Image src={getIconSrc(brand.attributes.fire)} alt={`Icon ${brand.attributes.fire}`} width={40} height={40} />}</Box></td>
                                    <td><Box className={classes.table}>{brand.attributes.property && <Image src={getIconSrc(brand.attributes.property)} alt={`Icon ${brand.attributes.property}`} width={40} height={40} />}</Box></td>
                                    <td><Box className={classes.table}>{brand.attributes.person && <Image src={getIconSrc(brand.attributes.person)} alt={`Icon ${brand.attributes.person}`} width={40} height={40} />}</Box></td>
                                    <td><Box className={classes.table}>{brand.attributes.accident_pn && <Image src={getIconSrc(brand.attributes.accident_pn)} alt={`Icon ${brand.attributes.accident_pn}`} width={40} height={40} />}</Box></td>
                                    <td><Box className={classes.table}>{brand.attributes.treatment && <Image src={getIconSrc(brand.attributes.treatment)} alt={`Icon ${brand.attributes.treatment}`} width={40} height={40} />}</Box></td>
                                    <td><Box className={classes.table}>{brand.attributes.bail && <Image src={getIconSrc(brand.attributes.bail)} alt={`Icon ${brand.attributes.bail}`} width={40} height={40} />}</Box></td>

                                    <td>
                                        <Box sx={{ display: 'flex', gap: 1 }}>

                                            <Button size="sm" variant="plain" color="neutral">
                                                <ThemeProvider theme={theme}>
                                                    <Typography>
                                                        ดูเพิ่มเติม
                                                    </Typography>
                                                </ThemeProvider>
                                            </Button>

                                        </Box>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Sheet>
                <ThemeProvider theme={theme}>
                    <Typography sx={{ display: 'flex', alignItems: 'center', pb: 2, fontSize: '15px', color: 'white', fontWeight: 'bold', marginTop: '15px'}}>
                        <Image src={icon02} alt='' width={40} height={40} /> คุ้มครองความเสียหาย กรณีรถชนรถและมีคู่กรณีเท่านั้น
                    </Typography>
                </ThemeProvider>
            </Container>
        </Box>

    );
}