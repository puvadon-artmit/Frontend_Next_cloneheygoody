"use client"
import React from 'react';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Logo from '../image/acg-white.png'
import Typography from '@mui/material/Typography';
import Line from '../image/line.svg'
import Facebook from '../image/facebook.svg'
import Oic from '../image/oic.svg'
import Dbd from '../image/dbd.svg'
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Kanit, sans-serif',
  },
});


export default function CustomFooter() {
  return (


    <Box bgcolor="#08345c" color="#093760" marginTop="40px" padding="20px 0">
       <ThemeProvider theme={theme}>
      <Grid container justifyContent="center" alignItems="center" spacing={2} style={{ padding: '20px 0' }}>

        <Grid item xs={12} sm={6} md={3}>
          <Box>
            <Image src={Logo} alt="HeyGoody Logo" width={100} height={100} className="rounded-full" />
            <Typography variant="body1" sx={{ fontSize: '12px', marginTop: '15px',color: '#f1efe3' }}>
              ช่องทางติดต่อ heygoody
            </Typography>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
              <Image src={Line} alt="Line" width={35} height={35} className="rounded-full" />
              <Image src={Facebook} alt="Facebook" width={35} height={35} className="rounded-full" />
            </div>
            <Typography variant="body1" sx={{ fontSize: '12px', marginTop: '5px',color: '#f1efe3' }}>
              เลขที่ใบอนุญาตประกันวินาศภัย ว00015/2556
              เลขที่ใบอนุญาตเสนอขายประกันภัยผ่านช่องทางอิเล็กทรอนิกส์
              อลว 015521000/2563 บริษัท เงินติดล้อ จำกัด (มหาชน)
            </Typography>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
              <Image src={Oic} alt="Line" width={75} height={75} className="rounded-full" style={{ marginRight: '5px', borderRadius: '10%' }} />
              <Image src={Dbd} alt="Facebook" width={75} height={75} className="rounded-full" style={{ marginLeft: '5px', borderRadius: '10%' }} />
            </div>
            <Typography variant="body1" sx={{ fontSize: '12px', marginTop: '60px',color: '#f1efe3' }}>
              © 2566 บริษัท เงินติดล้อ จำกัด (มหาชน)
            </Typography>
          </Box>
        </Grid>
        
        <Grid item xs={2} sm={2} display={{ xs: 'none', sm: 'block' }} sx={{marginBottom : '120px'}}>

          <Typography variant="body1" sx={{ fontSize: '14px', marginTop: '5px', color: '#696969' }}>
            ประกันรถยนต์
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '15px', marginTop: '5px',color: '#f1efe3' }}>
            ประกันรถยนต์ทั้งหมด
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '15px', marginTop: '5px',color: '#f1efe3' }}>
            ประกันรถยนต์ไฟฟ้า EV
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '15px', marginTop: '5px',color: '#f1efe3' }}>
            ประกันรถยนต์ชั้น 1
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '15px', marginTop: '5px' ,color: '#f1efe3'}}>
            ประกันรถยนต์ชั้น 2+, 2
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '15px', marginTop: '5px' ,color: '#f1efe3'}}>
            ประกันรถยนต์ชั้น 3+, 3
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '15px', marginTop: '5px' ,color: '#f1efe3'}}>
            ประกันรถตู้ส่วนบุคคล
          </Typography>

        </Grid>
        <Grid item xs={2} sm={2} display={{ xs: 'none', sm: 'block' }} sx={{marginBottom : '105px'}}>
          <Typography variant="body1" sx={{ fontSize: '14px', marginTop: '5px', color: '#696969' }}>
            ประกันเดินทาง
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '15px', marginTop: '5px',color: '#f1efe3' }}>
            ประกันเดินทางต่างประเทศ
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '14px', marginTop: '5px', color: '#696969' }}>
            ประกันอุบัติเหตุ
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '15px', marginTop: '5px',color: '#f1efe3' }}>
            ประกันอุบัติเหตุส่วนบุคคล
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '14px', marginTop: '5px', color: '#696969' }}>
            ประกันสุขภาพ
          </Typography>

          <Typography variant="body1" sx={{ fontSize: '15px', marginTop: '5px',color: '#f1efe3' }}>
            ประกันเหมาจ่าย IPD
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '15px', marginTop: '5px',color: '#f1efe3' }}>
            ประกันเหมาจ่ายแพ็กเสริม IPD
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '15px', marginTop: '5px',color: '#f1efe3' }}>
            ประกันโรคร้ายแรง
          </Typography>
        </Grid>
        <Grid item xs={2} sm={2} display={{ xs: 'none', sm: 'block' }} sx={{marginBottom : '220px'}}>
          <Typography variant="body1" sx={{ fontSize: '14px', marginTop: '5px', color: '#696969' }}>
            ช่วยเหลือ
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '15px', marginTop: '5px',color: '#f1efe3' }}>
            การซื้อประกันและชำระเงิน
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '15px', marginTop: '5px',color: '#f1efe3' }}>
            การเคลมประกัน
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '15px', marginTop: '5px',color: '#f1efe3' }}>
            ค้นหาอู่ซ่อม
          </Typography>

        </Grid>
        <Grid item xs={2} sm={2} display={{ xs: 'none', sm: 'block' }} sx={{marginBottom : '170px'}}>
          <Typography variant="body1" sx={{ fontSize: '14px', marginTop: '5px', color: '#696969' }}>
            อื่นๆ
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '15px', marginTop: '5px',color: '#f1efe3' }}>
            โปรโมชั่น
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '15px', marginTop: '5px',color: '#f1efe3' }}>
            ทำไมต้อง heygoody?
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '15px', marginTop: '5px',color: '#f1efe3' }}>
            บทความ
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '15px', marginTop: '5px',color: '#f1efe3' }}>
            ข่าวสาร
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '15px', marginTop: '5px',color: '#f1efe3' }}>
            ติดต่อเรา
          </Typography>
        </Grid>
      </Grid>
      </ThemeProvider>
    </Box>
  );
}
