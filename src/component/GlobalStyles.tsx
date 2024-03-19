"use client"
import { useEffect } from 'react';
import '../css/Font.css'

export default function GlobalStyles() {
  useEffect(() => {
    const body = document.querySelector('body');
    if (body) {
      body.style.fontFamily = 'Kanit, sans-serif';
    }
  }, []);

  return null;
}
