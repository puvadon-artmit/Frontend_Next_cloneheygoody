"use client";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Image from 'next/image';
import Messenger from '../image/messenger.png'
import Button from '@mui/material/Button';

export default function CustomSpeedDialv2() {
    const [showButton, setShowButton] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
    return (
        <>
      {showButton && (
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '35px',
            zIndex: '999',
            filter: 'drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25))',
            transition: 'filter 0.3s ease',
          }}
        >
          <Button
            sx={{
              color: '#fff',
              backgroundImage: 'linear-gradient(to right, #044983, #044983)',
              '&:hover': {
                backgroundImage: 'linear-gradient(to bottom left, #044983, #044983)',
              },
              fontFamily: 'Kanit, sans-serif',
              '&:focus': {
                ringWidth: 4,
                outline: 'none',
                ringColor: '#00345c',
              },
              '&.dark:focus': {
                ringColor: '#00345c',
              },
              fontWeight: 'medium',
              borderRadius: '10px',
              fontSize: '18px',
              padding: '10px 25px',
              textAlign: 'center',
              marginRight: '2px',
              marginBottom: '2px',
              position: 'relative',
              overflow: 'hidden',
              '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to right, #00345c, #00345c)',
                zIndex: -1,
                transition: 'transform 0.5s ease',
                pointerEvents: 'none',
              },
              '&:hover::after': {
                transform: 'scale(1.2)',
              },
            }}
          >
            เช็คดอกเบี้ย
          </Button>
        </div>
      )}
    </>

    );
}
