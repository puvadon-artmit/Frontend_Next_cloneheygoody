"use client"
import * as React from 'react';
// import data from './';
import honda from '../data/honda.json';
import toyota from '../data/toyota.json';
import isuzu from '../data/isuzu.json';
import mazda from '../data/mazda.json';
import mitsubishi from '../data/mitsubishi.json';
import nissan from '../data/nissan.json';
import ford from '../data/ford.json';
import suzuki from '../data/suzuki.json';
import banz from '../data/banz.json';
import chevrolet from '../data/chevrolet.json';



import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import '../../css/Font.css'

const data = {
    ...honda,
    ...toyota,
    ...isuzu,
    ...mazda,
    ...mitsubishi,
    ...nissan,
    ...ford,
    ...suzuki,
    ...banz,
    ...chevrolet
}

type Car = {
    model: string;
    manufacture: { year: string }[];
    sub_model: { sub_model: string }[];
};

const theme = createTheme({
    typography: {
        fontFamily: 'Kanit, sans-serif',
    },
});

export default function CarInsurance() {
    const [brand, setBrand] = React.useState('');
    const [model, setModel] = React.useState('');
    const [manufactureYear, setManufactureYear] = React.useState('');
    const [subModel, setSubModel] = React.useState('');

    const handleBrandChange = (event: SelectChangeEvent<string>) => {
        setBrand(event.target.value);
        setModel('');
        setManufactureYear('');
        setSubModel('');
    };

    const handleModelChange = (event: SelectChangeEvent<string>) => {
        setModel(event.target.value);
        setManufactureYear('');
        setSubModel('');
    };

    const handleManufactureYearChange = (event: SelectChangeEvent<string>) => {
        setManufactureYear(event.target.value);
        setSubModel('');
    };

    const handleSubModelChange = (event: SelectChangeEvent<string>) => {
        setSubModel(event.target.value);
    };


    return (
        <div>
            <Container >
                <ThemeProvider theme={theme}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            marginBottom: '180px',
                            marginTop: '40px',
                        }}
                    >
                        <FormControl style={{ width: '100%', maxWidth: '650px', marginBottom: '20px' }}>
                            <InputLabel id="brand-label">ยี่ห้อรถ</InputLabel>
                            <Select
                                labelId="brand-label"
                                id="brand-select"
                                value={brand}
                                label="Brand"
                                onChange={handleBrandChange}
                            >
                                {Object.keys(data).map((brandName, index) => (
                                    <MenuItem key={index} value={brandName}>
                                        {brandName}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>



                        <Box>
                            <Typography
                                sx={{
                                    color: 'black',
                                    marginRight: { xs: '320px', md: '580px' },
                                    marginBottom: '30px',
                                    fontSize: { xs: '16px', md: '20px' },
                                    fontWeight: 'bold',
                                }}
                            >
                                รุ่นรถ
                            </Typography>
                        </Box>


                        {(brand === 'BANZ' || brand === 'MAZDA' || brand === 'HONDA' || brand === 'ISUZU' || brand === 'TOYOTA' || brand === 'FORD' || brand === 'SUZUKI' || brand === 'NISSAN' || brand === 'CHEVROLET' || brand === 'MITSUBISHI') && (

                            <>
                                <FormControl style={{ width: '100%', maxWidth: '650px', marginBottom: '20px' }}>
                                    <InputLabel id="model-label">เลือกรุ่นรถ</InputLabel>
                                    <Select
                                        labelId="model-label"
                                        id="model-select"
                                        value={model}
                                        label="Model"
                                        onChange={handleModelChange}
                                        disabled={!brand}
                                    >
                                        {data[brand as keyof typeof data].reduce((uniqueModels: string[], car: Car) => {
                                            if (!uniqueModels.includes(car.model)) {
                                                uniqueModels.push(car.model);
                                            }
                                            return uniqueModels;
                                        }, []).map((uniqueModel: string, index: number) => (
                                            <MenuItem key={index} value={uniqueModel}>
                                                {uniqueModel}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>

                                <Box>
                                    <Typography
                                        sx={{
                                            color: 'black',
                                            marginRight: { xs: '320px', md: '580px' },
                                            marginBottom: '30px',
                                            fontSize: { xs: '16px', md: '20px' },
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        ปีที่ผลิต
                                    </Typography>
                                </Box>

                                {model && (
                                    <FormControl style={{ width: '100%', maxWidth: '650px', marginBottom: '20px' }}>
                                        <InputLabel id="year-label">เลือกปีผลิตรุ่นรถ</InputLabel>
                                        <Select
                                            labelId="year-label"
                                            id="year-select"
                                            value={manufactureYear}
                                            label="Manufacture Year"
                                            onChange={handleManufactureYearChange}
                                            disabled={!model}
                                        >
                                            {data[brand as keyof typeof data]
                                                .filter((car: Car) => car.model === model)
                                                .flatMap((car: Car) => car.manufacture)
                                                .map((yearData: { year: string }, index: number) => {
                                                    const year = yearData.year.split(' ')[0];
                                                    return (
                                                        <MenuItem key={index} value={year}>
                                                            {year}
                                                        </MenuItem>
                                                    );
                                                })}
                                        </Select>
                                    </FormControl>
                                )}


                                <Box>
                                    <Typography
                                        sx={{
                                            color: 'black',
                                            marginRight: { xs: '320px', md: '580px' },
                                            marginBottom: '30px',
                                            fontSize: { xs: '16px', md: '20px' },
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        รุ่นย่อย
                                    </Typography>
                                </Box>
                                {manufactureYear && (
                                    <FormControl style={{ width: '100%', maxWidth: '650px', marginBottom: '20px' }}>
                                        <InputLabel id="sub-model-label">เลือกรุ่นย่อย</InputLabel>
                                        <Select
                                            labelId="sub-model-label"
                                            id="sub-model-select"
                                            value={subModel}
                                            label="Sub Model"
                                            onChange={handleSubModelChange}
                                            disabled={!manufactureYear}
                                        >
                                            {data[brand as keyof typeof data]
                                                .find((car: Car) => car.model === model && car.manufacture.some(manuf => manuf.year.includes(manufactureYear)))
                                                ?.sub_model.map((sub: { sub_model: string }, index: number) => (
                                                    <MenuItem key={index} value={sub.sub_model}>
                                                        {sub.sub_model}
                                                    </MenuItem>
                                                ))}
                                        </Select>
                                    </FormControl>
                                )}
                            </>
                        )}

                        {/* <div style={{ color: 'black' }}>
                            <Typography>ยี่ห้อรถที่เลือก:</Typography> {brand}
                            <Typography>โมเดลที่เลือก:</Typography> {model}
                            <Typography>ปีที่ผลิตที่เลือก:</Typography> {manufactureYear}
                            <Typography>รุ่นย่อยที่เลือก:</Typography> {subModel}
                        </div> */}
                    </Box>
                </ThemeProvider>
            </Container>
        </div>

    );
}