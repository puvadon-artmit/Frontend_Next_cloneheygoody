"use client"
import * as React from 'react';
import { Typography } from '@mui/material';

interface SelectedCountryDisplayProps {
  selectedCountry: string; 
}

const SelectedCountryDisplay: React.FC<SelectedCountryDisplayProps> = ({ selectedCountry }) => {
  return (
    <Typography sx={{ color: 'black' }}>
      จังหวัดที่เลือก: {selectedCountry}
    </Typography>
  );
};

export default SelectedCountryDisplay;
