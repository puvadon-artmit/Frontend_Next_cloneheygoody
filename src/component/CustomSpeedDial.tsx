"use client";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Image from 'next/image';
import Messenger from '../image/messenger.png'
import Button from '@mui/material/Button';

export default function CustomSpeedDial() { 
  return (
    <div style={{
      position: 'fixed',
      bottom: '90px', 
      right: '40px', 
      zIndex: '999', 
    }}>
      <Avatar sx={{ width: 45, height: 45 }}>
      <Image src={Messenger} alt="Your Image" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
      </Avatar>
  
 
    </div>
  
  );
}
