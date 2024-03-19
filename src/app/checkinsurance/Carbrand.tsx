"use client"
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// MUI
import {
    Box,
    Container,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Typography,
    createTheme,
    ThemeProvider,
    SelectChangeEvent
} from '@mui/material';


// IMAGE
import Toyota from '../../image/brand/toyota.jpg'
import Honda from '../../image/brand/honda.jpg'
import Isuzu from '../../image/brand/isuzu.jpg'
import Mazda from '../../image/brand/mazda.jpg'
import Misu from '../../image/brand/mitsu.jpg'
import Nissan from '../../image/brand/nissan.jpg'
import Frod from '../../image/brand/ford.jpg'
import Suzuki from '../../image/brand/suzaki.jpg'
import Banz from '../../image/brand/banz.jpg'
import Chev from '../../image/brand/chevrolet.jpg'


// JSON DATA
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
import DATACP from '../data/insurance_company/data_ic.json';

//Redux
import { RootState } from '../store/store';
import { setSelectedCountry } from '../store/slice/countrySlice';
import DATACOUNTRY from '../data/Country/country_thai.json';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedDrand } from '../store/slice/brandSlice';
import { setselectedtheyear } from '../store/slice/theyearSlice';

// Aggregate data
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


export default function Carbrand() {

    const [brand, setBrand] = React.useState('');
    const [model, setModel] = React.useState('');
    const [manufactureYear, setManufactureYear] = React.useState('');
    const [subModel, setSubModel] = React.useState('');
    const [Company, setCompany] = React.useState('');

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

    const handleImageClick = (brand: string) => {
        setBrand(brand);
    };


    //เลือกวันที่ 
    const [selectedDate, setSelectedDate] = React.useState<number | ''>('');
    const [timeOptions, setTimeOptions] = React.useState<React.ReactNode[]>([]);

    React.useEffect(() => {
        const currentDate = new Date();
        const daysInMonth = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() + 1,
            0
        ).getDate();

        const options: React.ReactNode[] = [];
        for (let i = currentDate.getDate(); i <= daysInMonth; i++) {
            options.push(
                <MenuItem key={i} value={i}>
                    <Typography>{i}</Typography>
                </MenuItem>
            );
        }
        setTimeOptions(options);
    }, []);


    const handleDateChange = (event: SelectChangeEvent<number>) => {
        setSelectedDate(event.target.value as number);
    };

    //เลือกเดือน
    const [selectedMonth, setSelectedMonth] = React.useState<string>('');

    // Get current month
    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });

    const handleMonthChange = (event: SelectChangeEvent<string>) => {
        setSelectedMonth(event.target.value);
    };

    //เลือกปี
    const [selectedYear, setSelectedYear] = React.useState<number | ''>('');

    // Get current year
    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;

    // Handle year change
    const handleYearChange = (event: SelectChangeEvent<number>) => {
        const selectedValue = event.target.value;
        const yearAsNumber = typeof selectedValue === 'string' ? parseInt(selectedValue, 10) : selectedValue;
        setSelectedYear(yearAsNumber);
    };


    //Reaux selectedCountry----------------------------------------------------------------------

    const selectedCountry = useSelector((state: RootState) => state.country.selectedCountry);
    const dispatch = useDispatch();

    const handleCountryChange = (event: SelectChangeEvent<string>) => {
        dispatch(setSelectedCountry(event.target.value as string));
    };


    //Reaux selectedDrand----------------------------------------------------------------------

    const selectedDrand = useSelector((state: RootState) => state.brand.selectedDrand);
    const handleBrandChange = (event: SelectChangeEvent<string>) => {
        const selectedBrand = event.target.value;
        setBrand(selectedBrand);

        dispatch(setSelectedDrand(selectedBrand));
        setModel('');
        setManufactureYear('');
        setSubModel('');
    };

    //Reaux selectedTheYear----------------------------------------------------------------------

    const selectedTheYear = useSelector((state: any) => state.theyear.selectedtheyear);

    const theyears: number[] = [];
    for (let the = 2546; the >= 2481; the--) {
        theyears.push(the);
    }

    const handleTheYearChange = (event: SelectChangeEvent<string>) => {
        dispatch(setselectedtheyear(event.target.value as string));
    };

    const handleBOXClick = (Company: string) => {
        setCompany(Company);
    };

    const handleCompanyChange = (event: SelectChangeEvent<string>) => {
        setCompany(event.target.value);
    };

    return (
        <Container>
            <ThemeProvider theme={theme}>
                <Grid container spacing={1} justifyContent="center" alignItems="center">
                    <Grid item xs={10} sm={8}>
                        <Grid container spacing={2} justifyContent="center" alignItems="center">

                            <Grid item xs={4} sm={2}>
                                <Paper
                                    elevation={3}
                                    sx={{
                                        backgroundColor: 'white',
                                        border: '0.5px solid #CCCCCC',
                                        p: 1,
                                        '&:hover': {
                                            backgroundColor: '#f5f5f5',
                                            border: '0.5px solid #CCCCCC'
                                        }
                                    }}
                                    onClick={() => handleImageClick('TOYOTA')}
                                >
                                    <Image src={Toyota} alt="Your Image" width={100} height={100} />
                                </Paper>
                            </Grid>
                            <Grid item xs={4} sm={2}>
                                <Paper
                                    elevation={3}
                                    sx={{
                                        backgroundColor: 'white',
                                        border: '0.5px solid #CCCCCC',
                                        p: 1,
                                        '&:hover': {
                                            backgroundColor: '#f5f5f5',
                                            border: '0.5px solid #CCCCCC'
                                        }
                                    }}
                                    onClick={() => handleImageClick('HONDA')}
                                >
                                    <Image src={Honda} alt="Your Image" width={100} height={100} />
                                </Paper>
                            </Grid>
                            <Grid item xs={4} sm={2}>
                                <Paper
                                    elevation={3}
                                    sx={{
                                        backgroundColor: 'white',
                                        border: '0.5px solid #CCCCCC',
                                        p: 1,
                                        '&:hover': {
                                            backgroundColor: '#f5f5f5',
                                            border: '0.5px solid #CCCCCC'
                                        }
                                    }}
                                    onClick={() => handleImageClick('ISUZU')}
                                >
                                    <Image src={Isuzu} alt="Your Image" width={100} height={100} />
                                </Paper>
                            </Grid>
                            <Grid item xs={4} sm={2}>
                                <Paper
                                    elevation={3}
                                    sx={{
                                        backgroundColor: 'white',
                                        border: '0.5px solid #CCCCCC',
                                        p: 1,
                                        '&:hover': {
                                            backgroundColor: '#f5f5f5',
                                            border: '0.5px solid #CCCCCC'
                                        }
                                    }}
                                    onClick={() => handleImageClick('MAZDA')}
                                >
                                    <Image src={Mazda} alt="Your Image" width={100} height={100} />
                                </Paper>
                            </Grid>
                            <Grid item xs={4} sm={2}>
                                <Paper
                                    elevation={3}
                                    sx={{
                                        backgroundColor: 'white',
                                        border: '0.5px solid #CCCCCC',
                                        p: 1,
                                        '&:hover': {
                                            backgroundColor: '#f5f5f5',
                                            border: '0.5px solid #CCCCCC'
                                        }
                                    }}
                                    onClick={() => handleImageClick('MITSUBISHI')}
                                >
                                    <Image src={Misu} alt="Your Image" width={100} height={100} />
                                </Paper>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ marginTop: '2.5px' }}>
                            <Grid item xs={4} sm={2}>
                                <Paper
                                    elevation={3}
                                    sx={{
                                        backgroundColor: 'white',
                                        border: '0.5px solid #CCCCCC',
                                        p: 1,
                                        '&:hover': {
                                            backgroundColor: '#f5f5f5',
                                            border: '0.5px solid #CCCCCC'
                                        }
                                    }}
                                    onClick={() => handleImageClick('NISSAN')}
                                >
                                    <Image src={Nissan} alt="Your Image" width={100} height={100} />
                                </Paper>
                            </Grid>
                            <Grid item xs={4} sm={2}>
                                <Paper
                                    elevation={3}
                                    sx={{
                                        backgroundColor: 'white',
                                        border: '0.5px solid #CCCCCC',
                                        p: 1,
                                        '&:hover': {
                                            backgroundColor: '#f5f5f5',
                                            border: '0.5px solid #CCCCCC'
                                        }
                                    }}
                                    onClick={() => handleImageClick('FORD')}
                                >
                                    <Image src={Frod} alt="Your Image" width={100} height={100} />
                                </Paper>
                            </Grid>
                            <Grid item xs={4} sm={2}>
                                <Paper
                                    elevation={3}
                                    sx={{
                                        backgroundColor: 'white',
                                        border: '0.5px solid #CCCCCC',
                                        p: 1,
                                        '&:hover': {
                                            backgroundColor: '#f5f5f5',
                                            border: '0.5px solid #CCCCCC'
                                        }
                                    }}
                                    onClick={() => handleImageClick('SUZUKI')}
                                >
                                    <Image src={Suzuki} alt="Your Image" width={100} height={100} />
                                </Paper>
                            </Grid>
                            <Grid item xs={4} sm={2}>
                                <Paper
                                    elevation={3}
                                    sx={{
                                        backgroundColor: 'white',
                                        border: '0.5px solid #CCCCCC',
                                        p: 1,
                                        '&:hover': {
                                            backgroundColor: '#f5f5f5',
                                            border: '0.5px solid #CCCCCC'
                                        }
                                    }}
                                    onClick={() => handleImageClick('BANZ')}
                                >
                                    <Image src={Banz} alt="Your Image" width={100} height={100} />
                                </Paper>
                            </Grid>
                            <Grid item xs={4} sm={2}>
                                <Paper
                                    elevation={3}
                                    sx={{
                                        backgroundColor: 'white',
                                        border: '0.5px solid #CCCCCC',
                                        p: 1,
                                        '&:hover': {
                                            backgroundColor: '#f5f5f5',
                                            border: '0.5px solid #CCCCCC'
                                        }
                                    }}
                                    onClick={() => handleImageClick('CHEVROLET')}
                                >
                                    <Image src={Chev} alt="Your Image" width={100} height={100} />
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

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

                    {(brand === 'BANZ' || brand === 'MAZDA' || brand === 'HONDA' || brand === 'ISUZU' || brand === 'TOYOTA' || brand === 'FORD' || brand === 'SUZUKI' || brand === 'NISSAN' || brand === 'CHEVROLET' || brand === 'MITSUBISHI') && (

                        <>
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
                            {model && (
                                <>
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
                                </>
                            )}

                {manufactureYear && (
                    <>
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
                                </>
                            )}
                            {subModel && (
                                <>
                                    <Typography
                                        sx={{
                                            color: 'black',
                                            marginRight: { xs: '360px', md: '380px' },
                                            marginBottom: '30px',
                                            fontSize: { xs: '16px', md: '20px' },
                                            fontWeight: 'bold',
                                            [theme.breakpoints.down('sm')]: {
                                                marginRight: '20px', // ปรับค่าใหม่เมื่อขนาดหน้าจอเล็กลง
                                            },
                                        }}
                                    >

                                        บริษัทประกันรถยนต์ที่ใช้อยู่
                                    </Typography>


                                    <FormControl style={{ width: '100%', maxWidth: '650px', marginBottom: '20px' }}>
                                        <InputLabel id="year-label">บริษัทประกันรถยนต์ที่ใช้อยู่</InputLabel>
                                        <Select
                                            labelId="year-label"
                                            id="year-select"
                                            value={Company}
                                            label="Manufacture Year"
                                            onChange={handleCompanyChange}
                                            disabled={!subModel}
                                        >
                                            {DATACP.map((item, index) => (
                                                <MenuItem key={index} value={item.value} disabled={item.disabled}>
                                                    {item.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </>
                            )}
                            {subModel && (
                                <>
                                    <Box
                                        component="div"
                                        sx={{
                                            color: 'black',
                                            marginRight: '2px',
                                            marginBottom: '30px',
                                            fontSize: { xs: '16px', md: '20px' },
                                            flexDirection: 'column',
                                            fontWeight: 'bold',
                                            padding: { xs: '15px 20px', md: '16px 180px' },
                                            backgroundColor: '#f9f9f4',
                                            borderRadius: '5px',
                                            cursor: 'pointer',
                                            border: '0.5px solid gray',
                                            '&:hover': {
                                                border: '1px solid black',
                                            },
                                            [theme.breakpoints.down('sm')]: {
                                                padding: '10px',
                                            },
                                        }}
                                        onClick={() => handleBOXClick('start_again')}
                                    >
                                        <Typography sx={{ color: 'gray' }}>
                                            ประกันหมดหมดอายุแล้ว / ไม่มีประกันรถยนต์
                                        </Typography>
                                    </Box>
                                </>
                            )}

                            {Company && (
                                <>
                                    <Typography
                                        sx={{
                                            color: 'black',
                                            marginRight: { xs: '320px', md: '390px' },
                                            marginBottom: '10px',
                                            fontSize: { xs: '16px', md: '20px' },
                                            fontWeight: 'bold',
                                            [theme.breakpoints.down('sm')]: {
                                                marginRight: '20px',
                                            },
                                        }}
                                    >
                                        วันที่ต้องการให้เริ่มคุ้มครอง
                                    </Typography>

                                    <Typography
                                        sx={{
                                            color: 'black',
                                            marginRight: { xs: '320px', md: '90px' },
                                            marginBottom: '30px',
                                            fontSize: { xs: '10px', md: '16px' },

                                            [theme.breakpoints.down('sm')]: {
                                                marginRight: '20px',
                                            },
                                        }}
                                    >
                                        คุณสามารถซื้อประกันล่วงหน้าได้สูงสุด 90 วัน โดยวันที่เลือกจะมีผลต่อค่าเบี้ยประกัน
                                    </Typography>

                                    <FormControl style={{ width: '100%', maxWidth: '650px', marginBottom: '20px' }}>
                                        <InputLabel id="sub-model-label">เลือกวันที่</InputLabel>
                                        <Select
                                            labelId="sub-model-label"
                                            id="sub-model-select"
                                            value={selectedDate}
                                            label="Sub Model"
                                            onChange={handleDateChange}
                                        >
                                            {timeOptions}
                                        </Select>
                                    </FormControl>

                                    <FormControl style={{ width: '100%', maxWidth: '650px', marginBottom: '20px' }}>
                                        <InputLabel id="month-label">เลือกเดือน</InputLabel>
                                        <Select
                                            labelId="month-label"
                                            id="month-select"
                                            value={selectedMonth}
                                            label="Month"
                                            onChange={handleMonthChange}
                                        >
                                            <MenuItem value={currentMonth}>
                                                <Typography>{currentMonth}</Typography>
                                            </MenuItem>
                                        </Select>
                                    </FormControl>

                                    <FormControl style={{ width: '100%', maxWidth: '650px', marginBottom: '20px' }}>
                                        <InputLabel id="year-label">เลือกปี</InputLabel>
                                        <Select
                                            labelId="year-label"
                                            id="year-select"
                                            value={selectedYear}
                                            label="Year"
                                            onChange={handleYearChange}
                                        >
                                            <MenuItem value={currentYear}>
                                                <Typography>{currentYear}</Typography>
                                            </MenuItem>
                                            <MenuItem value={nextYear}>
                                                <Typography>{nextYear}</Typography>
                                            </MenuItem>
                                        </Select>
                                    </FormControl>

                                </>
                            )}
                            {selectedYear && (
                                <>
                                    <Box>
                                        <Typography
                                            sx={{
                                                color: 'black',
                                                marginRight: { xs: '320px', md: '450px' },
                                                marginBottom: '10px',
                                                fontSize: { xs: '16px', md: '20px' },
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            จังหวัดที่จดทะเบียนรถ
                                        </Typography>
                                    </Box>
                                    <FormControl style={{ width: '100%', maxWidth: '650px', marginBottom: '20px' }}>
                                        <InputLabel id="year-label">เลือกจังหวัด</InputLabel>
                                        <Select
                                            labelId="year-label"
                                            id="year-select"
                                            value={selectedCountry}
                                            label="Country"
                                            onChange={handleCountryChange}
                                        >
                                            {DATACOUNTRY.map((item, index) => (
                                                <MenuItem key={index} value={item.label}>
                                                    {item.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </>
                            )}

                            {selectedCountry && (
                                <>
                                    <FormControl style={{ width: '100%', maxWidth: '650px', marginBottom: '20px' }}>
                                        <InputLabel id="year-label">เลือกปีเกิดของคุณ</InputLabel>
                                        <Select
                                            labelId="year-label"
                                            id="year-select"
                                            value={selectedTheYear}
                                            label="เลือกปีเกิดของคุณ"
                                            onChange={handleTheYearChange}
                                        >
                                            {theyears.map((theyear) => (
                                                <MenuItem key={theyear} value={String(theyear)}>
                                                    {theyear}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                    <Link href="/plan_insurance"> 
                                    <button className="bg-blue-800 hover:bg-blue-700 text-white font-bold  py-4 px-8 w-60 rounded">
                                        เช็คเบี้ยประกัน
                                    </button>
                                    </Link>
                                </>)}
                        </>
                    )}

                    {/* <div style={{ color: 'black' }}>
                        <Typography>ยี่ห้อรถที่เลือก:</Typography> {brand}
                        <Typography>โมเดลที่เลือก:</Typography> {model}
                        <Typography>ปีที่ผลิตที่เลือก:</Typography> {manufactureYear}
                        <Typography>รุ่นย่อยที่เลือก:</Typography> {subModel}
                        <Typography>บริษัทประกันรถยนต์:</Typography>  {Company}
                        <Typography>วันที่ : {selectedDate}</Typography>
                        <Typography>เดือนที่เลือก : {selectedMonth}</Typography>
                        <Typography>จังหวัดที่จดทะเบียน : {selectedCountry}</Typography>
                        <Typography>ปี : {selectedYear}</Typography>
                        <Typography>ปีเกิด : {selectedTheYear}</Typography>
                    </div> */}
                </Box>

            </ThemeProvider>
        </Container>

    )
}