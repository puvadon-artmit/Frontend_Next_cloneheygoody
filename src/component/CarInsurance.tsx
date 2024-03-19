"use client";
import React from 'react';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import car1 from '../image/car 1.svg';
import car2 from '../image/car 2.svg';
import rocket from '../image/rocket.svg';
import sap from '../image/sap.svg';
import cow from '../image/cow.svg';
import hand1 from '../image/hand1.svg';
import hand2 from '../image/hand2.svg';
import gunpai from '../image/gunpai.svg';
import { motion } from 'framer-motion';
import { makeStyles } from '@mui/styles';
import Link from 'next/link';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import SaveIcon from '@mui/icons-material/Save';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const useStyles = makeStyles({
    customFab: {
        width: '100px',
        height: '100px',
        backgroundColor: '#00345c',

    },
});

const theme = createTheme({
    typography: {
      fontFamily: 'Kanit, sans-serif',
    },
  });
  

export default function CarInsurance() {

    const [loading, setLoading] = React.useState(false);
    const [primary, setprimary] = React.useState(false);
    const timer = React.useRef<number>();

    const buttonSx = {
        ...(primary && {
            bgcolor: green[500],
            '&:hover': {
                bgcolor: green[700],
            },
        }),
    };

    React.useEffect(() => {
        return () => {
            clearTimeout(timer.current);
        };
    }, []);

    const handleButtonClick = () => {
        if (!loading) {
            setprimary(false);
            setLoading(true);
            timer.current = window.setTimeout(() => {
                setprimary(true);
                setLoading(false);
            }, 2000);
        }
    };



    const classes = useStyles();

    return (

        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                fontSize: '24px',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '20px',
            }}
        >
             <ThemeProvider theme={theme}>
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', m: 1, position: 'relative' }}>
                <Link href="/checkinsurance">
                    <Box sx={{ m: 1, position: 'relative' }}>
                        <Fab
                            aria-label="save"
                            color="primary"
                            className={classes.customFab}

                        >
                            <Image src={car1} alt="Car" width={120} height={120} />
                        </Fab>

                    </Box>
                    
                    <Typography variant="body1" sx={{ fontSize: '18px', textAlign: 'center', margin: '10px', color: 'black', fontWeight: 'bold' }}>
                        ประกันรถยนต์
                    </Typography>
                    </Link>
                </Box>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', m: 1, position: 'relative' }}>
                <Link href="/Electric_car">
                    <Box sx={{ m: 1, position: 'relative' }}>
                        <Fab
                            aria-label="save"
                            color="primary"
                            className={classes.customFab}
                        >
                            <Image src={car2} alt="Car" width={120} height={120} />

                        </Fab>

                    </Box>
                    <Typography variant="body1" sx={{ fontSize: '18px', textAlign: 'center', margin: '10px', color: 'black', fontWeight: 'bold' }}>
                        ประกันรถ EV
                    </Typography>
                    </Link>
                </Box>
                
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                  <Link href="/travelinsurance">
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', m: 1, position: 'relative' }}>
                    <Box sx={{ m: 1, position: 'relative' }}>
                        <Fab
                            aria-label="save"
                            color="primary"
                            className={classes.customFab}
                        >

                            <Image src={rocket} alt="Car" width={120} height={120} />

                        </Fab>

                    </Box>
                    <Typography variant="body1" sx={{ fontSize: '18px', textAlign: 'center', margin: '10px', color: 'black', fontWeight: 'bold' }}>
                        ประกันเดินทาง
                    </Typography>
                </Box>
                </Link>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', m: 1, position: 'relative' }}>
                  <a href="https://heygoody.easysunday.com/main/personal-accident?id=SEdHMjAyMzEyMTM3ODU5NTE=">
                    <Box sx={{ m: 1, position: 'relative' }}>
                        <Fab
                            aria-label="save"
                            color="primary"
                            className={classes.customFab}
                        >

                            <Image src={sap} alt="Car" width={120} height={120} />

                        </Fab>

                    </Box>
                    <Typography variant="body1" sx={{ fontSize: '18px', textAlign: 'center', margin: '10px', color: 'black', fontWeight: 'bold' }}>
                        ประกันอุบัติเหตุ
                    </Typography>
                    </a>
                </Box>

            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >

                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', m: 1, position: 'relative' }}>
                    <a href="https://heygoody.easysunday.com/main/health-topup?id=SEdHMjAyMzEyMTM3ODU5NTE=">
                    <Box sx={{ m: 1, position: 'relative' }}>
                        <Fab
                            aria-label="save"
                            color="primary"
                            className={classes.customFab}
                        >

                            <Image src={hand1} alt="Car" width={120} height={120} />

                        </Fab>

                    </Box>
                    <Typography variant="body1" sx={{ fontSize: '18px', textAlign: 'center', margin: '10px', color: 'black', fontWeight: 'bold' }}>
                        ประกันสุขภาพ
                    </Typography>
                    </a>
                </Box>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', m: 1, position: 'relative', color: 'black', fontWeight: 'bold' }}>
                    <a href="https://heygoody.easysunday.com/main/health-topup?id=SEdHMjAyMzEyMTM3ODU5NTE=">
                    <Box sx={{ m: 1, position: 'relative' }}>
                        <Fab
                            aria-label="save"
                            color="primary"
                            className={classes.customFab}
                        >

                            <Image src={hand2} alt="Car" width={120} height={120} />

                        </Fab>

                    </Box>
                    <Typography variant="body1" sx={{ fontSize: '18px', textAlign: 'center', margin: '10px', color: 'black', fontWeight: 'bold' }}>
                        แพ็กเสริม IPD
                    </Typography>
                    </a>
                </Box>
                
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', m: 1, position: 'relative' }}>
                    <a href="https://heygoody.easysunday.com/main/critical-illness?id=SEdHMjAyMzEyMTM3ODU5NTE=">
                    <Box sx={{ m: 1, position: 'relative' }}>
                        <Fab
                            aria-label="save"
                            color="primary"
                            className={classes.customFab}
                        >

                            <Image src={cow} alt="Car" width={120} height={120} />

                        </Fab>
                        {loading && (
                            <CircularProgress
                                size={68}
                                sx={{
                                    color: green[500],
                                    position: 'absolute',
                                    top: '-6px',
                                    left: '-6px',
                                    zIndex: 1,
                                }}
                            />
                        )}
                    </Box>
                    <Typography variant="body1" sx={{ fontSize: '18px', textAlign: 'center', margin: '10px', color: 'black', fontWeight: 'bold' }}>
                        ประกันโรคร้ายแรง
                    </Typography>
                    </a>
                </Box>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', m: 1, position: 'relative' }}>


                    <Image src={gunpai} alt="Car" width={120} height={120} />

                </Box>
            </motion.div>
            </ThemeProvider>
        </Box>

    )
}