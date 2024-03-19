"use client"
import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { SelectChangeEvent } from '@mui/material/Select';
import Item1 from './Item1';
import Item2 from './Item2';
import Item3 from './Item3';
import Item5 from './Item5';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
    role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
    {...other}
  >
    {value === index && (
      <div style={{ padding: '24px' }}>
        {children}
      </div>
    )}
  </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicFormControl() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: SelectChangeEvent<number>) => {
    setValue(event.target.value as number);
  };

  return (
    <Container maxWidth="lg">
      <Typography sx={{ textAlign: 'center', marginTop: '40px', marginBottom: '20px',fontSize : '40px' }}>
        คำถามที่พบบ่อย
      </Typography>
      <div className='flex justify-center'>
      <FormControl fullWidth sx={{ width: '80%' }}>
        <InputLabel htmlFor="insurance-type">ประเภทประกัน</InputLabel>
        <Select
          value={value}
          onChange={handleChange}
          label="ประเภทประกัน"
          inputProps={{
            name: 'insurance-type',
            id: 'insurance-type',
          }}
        >
          <MenuItem value={0}>เลือกหมวดหมู่คำถาม</MenuItem>
          <MenuItem value={1}>ซื้อประกันกับ ACG</MenuItem>
          <MenuItem value={2}>ประกันรถยนต์</MenuItem>
          <MenuItem value={3}>ประกันรถยนต์ไฟฟ้า</MenuItem>
          <MenuItem value={4}>ประกันการเดินทาง</MenuItem>
        </Select>
      </FormControl>
      </div>
      <CustomTabPanel value={value} index={0}>
      
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}> 
      <Item1/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <Item2/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
      <Item3/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
      <Item5/>
      </CustomTabPanel>
    </Container>
  );
}