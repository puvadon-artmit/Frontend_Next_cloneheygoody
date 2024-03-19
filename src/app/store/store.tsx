import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import countryReducer from "./slice/countrySlice";
import brandReducer from "./slice/brandSlice";
import theyearReducer from "./slice/theyearSlice"
import aboutReducer from "./slice/aboutSlice";
import blogReducer from "./slice/blogSlice";
import lifestylesReducer from "./slice/lifestyleSlice";
import insuranceReducer from "./slice/insuranceSlice";
import reviewReducer from "./slice/reviewSlice";
import promotionReducer from "./slice/promotionSlice";
import healthReducer from "./slice/healthSlice";
import travelReducer from "./slice/travelSlice";
import accidentReducer from "./slice/accidentSlice";
import insurancecarsReducer from "./slice/insurancecarsSlice";
import protectionsReducer from "./slice/protectionsSlice";

import { combineReducers } from 'redux';

const store = configureStore({
    reducer: {
      country: countryReducer,
      brand: brandReducer,
      theyear: theyearReducer,
      about: aboutReducer,
      blog: blogReducer,
      lifestyles: lifestylesReducer,
      insurance: insuranceReducer,
      review: reviewReducer,
      promotion : promotionReducer,
      health : healthReducer,
      travel : travelReducer,
      accident : accidentReducer,
      insurancecars : insurancecarsReducer,
      protections : protectionsReducer
    },
  });
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
 
  export default store;