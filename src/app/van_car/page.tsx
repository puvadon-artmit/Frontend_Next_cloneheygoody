"use client"
import React from 'react';
import CustomNavbar from '@/component/CustomNavbar';
import '../../css/Font.css';
import '../../css/Checkinsurance.css';
import Van_brand from './Van_brand';
import Contentvan from './Contentvan';
import Company from './Company';
import  store  from '../store/store';
import { Provider } from 'react-redux';

export default function Page() {
  return (
    <Provider store={store}>
      <div>
        <CustomNavbar />
        <Contentvan />
        <Van_brand />
        {/* <Company /> */}
      </div>
    </Provider>
  );
}
