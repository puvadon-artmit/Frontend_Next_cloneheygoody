import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Logo from '../image/logo/logo-acg.png'


export default function Nevbarwhite() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ height: '70px', backgroundColor: 'white' }}> 
          <Toolbar variant="dense" sx={{ height: '80%' }}> 
          <Link href="/checkinsurance"> 
            <IconButton edge="start" color="inherit" aria-label="ArrowBackIosIcon" sx={{ mr: 2, color : 'black',marginTop : '15px' }}>
              <ArrowBackIosIcon />
            </IconButton>
            </Link>
            <div style={{ marginLeft: 'auto', marginRight: 'auto' }}> {/* ใช้ style สร้างการชิดกันตัวรูปภาพ */}
              <Image src={Logo} alt="Car Insurance" width={80} height={80} />
            </div>
           
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}
