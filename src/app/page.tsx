"use client"
import Image from 'next/image'
import CustomNavbar from '@/component/CustomNavbar'
import Header from '@/component/Header'
import CarInsurance from '@/component/CarInsurance'
import CustomFooter from '@/component/CustomFooter'
import Benefit from '@/component/Benefit'
import Smarter from '@/component/Smarter'
import Allinsurance from '@/component/Allinsurance'
import Whyinsurance from '@/component/Whyinsurance'
import Cardinsurance from '@/component/Cardinsurance'
import Review from '@/component/Review'
import StickyNotes from '@/component/StickyNotes'
import GoodyTalks from '@/component/GoodyTalks'
import SimpleSlider from '@/component/SimpleSlider'
import Drobdown from '@/component/Drobdown'
import CustomSpeedDial from '@/component/CustomSpeedDial'
import CustomSpeedDialv2 from '@/component/CustomSpeedDialv2'
import { Provider } from 'react-redux'
import store from './store/store';

export default function Home() {
  return (

    <div>
      <Provider store={store}>
        <CustomNavbar />
        
        <Header />
        <CarInsurance />
        
        <Benefit />
        <Smarter />
        <Allinsurance />


        <Whyinsurance />
        <Cardinsurance />

        <Review />
        <StickyNotes />
        <GoodyTalks />
        <SimpleSlider />
        <CustomSpeedDial />
        <CustomSpeedDialv2 />
        <CustomFooter />

        {/* <Drobdown /> */}
      </Provider>
    </div>


  )
}
