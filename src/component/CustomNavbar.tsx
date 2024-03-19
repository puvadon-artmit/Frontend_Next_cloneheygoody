"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import useMediaQuery from '@mui/material/useMediaQuery';
import logo from '../image/logoheygoody.png';
import Link from 'next/link';
import Popover from '@mui/material/Popover';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import SearchIcon from '@mui/icons-material/Search';
import Fade from '@mui/material/Fade';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ACG from '../image/acg-white.png'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { motion } from 'framer-motion';
import car1 from '../image/car 1.svg';
import car2 from '../image/car 2.svg';
import rocket from '../image/rocket.svg';
import sap from '../image/sap.svg';
import cow from '../image/cow.svg';
import hand1 from '../image/hand1.svg';
import hand2 from '../image/hand2.svg';
import gunpai from '../image/gunpai.svg';
import illustrate from '../image/illustrate.svg'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Kanit, sans-serif',
  },
});


const CustomNavbar = () => {

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const isMobile = useMediaQuery('(max-width:600px)');

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  const pages = ['ผลิตภัณฑ์ประกัน', 'โปรโมชั่น', 'ทำไมต้อง heygoody?', 'ช่วยเหลือ', 'goodyTalks', 'ติดต่อเรา'];


  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  // ----------------------------------------------------------------------------
  const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);
  const open2 = Boolean(anchorEl2);

  const handleClick2 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const handleMouseLeave2 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl2(null);
  };


  // ----------------------------------------------------------------------------
  const [anchorEl3, setAnchorEl3] = React.useState<null | HTMLElement>(null);
  const open3 = Boolean(anchorEl3);

  const handleClick3 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl3(event.currentTarget);
  };

  const handleClose3 = () => {
    setAnchorEl3(null);
  };

  const handleMouseLeave3 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl3(null);
  };
  return (

    <div>
       <ThemeProvider theme={theme}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <AppBar
          position="static"
          style={{
            backgroundColor: '#08345c',
            // position: 'fixed',
            //  zIndex: '999', 
            ...(isMobile
              ? {}
              : {
                borderBottomRightRadius: '25px',
                borderBottomLeftRadius: '25px',
                maxWidth: '85%',
                margin: '0 auto',
              }),
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>

              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >

                <Image src={ACG} alt="HeyGoody Logo" width={100} height={100} />

              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />

                </IconButton>

                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {/* ดึงข้อมูลเมื่อใช้ขนาดหน้าจอมือถือ */}
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                <Image src={logo} alt="HeyGoody Logo" width={120} height={120} />
              </Typography>
              <Box sx={{
                flexGrow: 1, display: {
                  xs: 'none', md: 'flex',
                  justifyContent: 'center',
                }
              }}>
                {/* ขนาดหน้าจอในคอม */}

                <Box
                  sx={{
                    flexGrow: 1,
                    display: {
                      xs: 'none',
                      md: 'flex',
                      justifyContent: 'center',
                      flexDirection: 'row',
                    },
                  }}
                >

                  {/* --------------------------------------------------------------------------------- */}
                  <Tooltip title="ผลิตภัณฑ์ประกัน" placement="bottom">
                    <Typography
                      variant="body1"
                      color="text.primary"
                      sx={{ color: '#f1efe3', paddingRight: '40px' }}
                      id="fade-button"
                      aria-controls={open ? 'fade-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onMouseEnter={handleClick}
                    >
                      ผลิตภัณฑ์ประกัน
                      <ExpandMoreIcon />
                    </Typography>
                  </Tooltip>

                  <Popover
                    id="fade-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Box
                      sx={{
                        width: '250px',
                        maxHeight: '400px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        padding: '10px',
                        backgroundColor: '#2a2a2a',
                      }}
                      onMouseLeave={handleMouseLeave}
                    >
                       <Link href="/checkinsurance">
                      <MenuItem sx={{ color: '#f1efe3' }}>
                        <Image src={car1} alt="Car Insurance" width={55} height={55} />
                        ประกันรถยนต์
                      </MenuItem>
                      </Link>
                      <a href="https://heygoody.easysunday.com/main/personal-accident?id=SEdHMjAyMzEyMTM3ODU5NTE=">
                        <MenuItem sx={{ color: '#f1efe3' }}>
                          <Image src={sap} alt="Car Insurance" width={55} height={55} />
                          ประกันอุบัติเหตุ
                        </MenuItem>
                      </a>
         
                      <Link href="/travelinsurance">
                      <MenuItem sx={{ color: '#f1efe3' }}>
                        <Image src={rocket} alt="Car Insurance" width={55} height={55} />
                        ประกันเดินทาง
                      </MenuItem>
                      </Link>
                      <a href="https://heygoody.easysunday.com/main/health-topup?id=SEdHMjAyMzEyMTM3ODU5NTE=">
                      <MenuItem sx={{ color: '#f1efe3' }}>
                        <Image src={cow} alt="Car Insurance" width={55} height={55} />
                        ประกันสุขภาพ
                      </MenuItem>
                      </a>
                    </Box>
                  </Popover>

                  {/* ----------------------------------------------------------------------------------------------------------------- */}
                  <Link href="/promotion">
                  <Typography variant="body1" color="text.primary" sx={{ color: '#f1efe3', paddingRight: '40px' }} >
                    โปรโมชั่น
                  </Typography>
                  </Link>

                  <Link href="/about_us">
                  <Typography variant="body1" color="text.primary" sx={{ color: '#f1efe3', paddingRight: '40px' }}>
                    ทำไมต้อง Autocorp?
                  </Typography>
                  </Link>

                  {/* ----------------------------------------------------------------------------------------------------------- */}
                  <Tooltip title="ช่วยเหลือ" placement="bottom">
                    <Typography
                      variant="body1"
                      color="text.primary"
                      sx={{ color: '#f1efe3', paddingRight: '40px' }}
                      id="fade-button2"
                      aria-controls={open2 ? 'fade-menu2' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open2 ? 'true' : undefined}
                      onClick={handleClick2}
                      onMouseEnter={handleClick2}

                    >
                      ช่วยเหลือ
                      <ExpandMoreIcon />
                    </Typography>
                  </Tooltip>

                  <Popover
                    id="fade-menu2"
                    anchorEl={anchorEl2}
                    open={open2}
                    onClose={handleClose2}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    onMouseLeave={handleMouseLeave2}
                  >
                    <Box
                      sx={{
                        width: '250px',
                        maxHeight: '400px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        padding: '10px',
                        backgroundColor: '#2a2a2a',
                      }}
                      onMouseLeave={handleMouseLeave2}
                    >
                      {/* เนื้อหาของ Popover */}
                      {/* <Link href="/howto_buy">
                      <MenuItem onClick={handleClose2} sx={{ color: '#f1efe3' }}>
                        การซื้อประกันและชำระเงิน
                      </MenuItem>
                      </Link> */}
                      <Link href="/howto_buy">
                      <MenuItem onClick={handleClose2} sx={{ color: '#f1efe3', marginTop: '20px' }}>
                        การเคลมประกัน
                      </MenuItem>
                      </Link>
                      <a href="https://www.gogo-garage.com/?id=SEdHMjAyMzEyMTM3ODU5NTE%3D">
                      <MenuItem onClick={handleClose2} sx={{ color: '#f1efe3', marginTop: '20px' }}>
                        ค้นหาอู่ซ่อม
                      </MenuItem>
                      </a>
                    </Box>
                  </Popover>
                  {/* ---------------------------------------------------------------------------------------------------------------------------------------------------- */}

                  <Tooltip title="goodyTalks" placement="bottom">
                    <Typography
                      variant="body1"
                      color="text.primary"
                      sx={{ color: '#f1efe3', paddingRight: '40px' }}
                      id="fade-button2"
                      aria-controls={open3 ? 'fade-menu2' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open3 ? 'true' : undefined}
                      onClick={handleClick3} // เพิ่มการใช้งานฟังก์ชันเมื่อคลิก
                      onMouseEnter={handleClick3}
                    >
                      AutocorpTalks
                      <ExpandMoreIcon />
                    </Typography>
                  </Tooltip>



                  <Popover
                    id="fade-menu2"
                    anchorEl={anchorEl3}
                    open={open3}
                    onClose={handleClose3}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    onMouseLeave={handleMouseLeave3}
                  >
                    <Box
                      sx={{
                        width: '250px',
                        maxHeight: '400px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        padding: '10px',
                        backgroundColor: '#2a2a2a',
                      }}
                      onMouseLeave={handleMouseLeave3}
                    >
            <Link href="/blogs"> 
                      <MenuItem onClick={handleClose3} sx={{ color: '#f1efe3' }}>
                        บทความ
                      </MenuItem>
                      </Link>
                      {/* <MenuItem onClick={handleClose3} sx={{ color: '#f1efe3', marginTop: '20px' }}>
                        ข่าวสาร
                      </MenuItem> */}

                    </Box>
                  </Popover>


                  <Link href="/contact"> 
                  <Typography variant="body1" color="text.primary" sx={{ color: '#f1efe3' }}>
                    ติดต่อเรา
                  </Typography>
                  </Link>
                </Box>
              </Box>


              {!isMobile && (
                <Link href="/search">

                  <SearchIcon sx={{ fontSize: 30, marginRight: '10px', color: '#f1efe3' }} />

                </Link>
              )}

              {!isMobile && (
                <Link href="/login">
                  <PersonOutlineIcon sx={{ fontSize: 30, marginRight: '10px', color: '#f1efe3' }} />
                </Link>
              )}

              {!isMobile && (
                <Link href="/login">
                  <Typography variant="body1" sx={{ fontSize: '16px', color: '#f1efe3' }}>
                    เข้าสู่ระบบ
                  </Typography>
                </Link>
              )}

            </Toolbar>
          </Container>
        </AppBar>
      </motion.div>
      </ThemeProvider>
    </div>
  );
};

export default CustomNavbar;