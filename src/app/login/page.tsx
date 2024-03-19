import React from 'react'
import CustomNavbar from '@/component/CustomNavbar'
import Contentlogin from './contentlogin'
import Link from 'next/link';
import '../../css/Font.css'
export default function page() {
  return (
    <div>
        <CustomNavbar/>
        <Contentlogin/>
    </div>
  )
}