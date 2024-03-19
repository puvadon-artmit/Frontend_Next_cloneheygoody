"use client";
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setSelectedCountry } from '../store/slice/countrySlice';
import { Box, Container, FormControl, InputLabel, MenuItem, Select, Typography, createTheme, ThemeProvider, SelectChangeEvent } from '@mui/material';
import DATACOUNTRY from '../data/Country/country_thai.json';

const theme = createTheme({
  typography: {
    fontFamily: 'Kanit, sans-serif',
  },
});

export default function Company() {
    
  const selectedCountry = useSelector((state: RootState) => state.country.selectedCountry);
  const dispatch = useDispatch();

  const handleCountryChange = (event: SelectChangeEvent<string>) => {
    dispatch(setSelectedCountry(event.target.value as string));
  };


  

  
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <div>
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
          </Box>
          <Typography sx={{ color: 'black' }}>
            จังหวัดที่เลือก: {selectedCountry}
          </Typography>
        </div>
      </ThemeProvider>
    </Container>
  );
}