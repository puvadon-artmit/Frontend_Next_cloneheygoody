import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import axios from 'axios';

const LOCALHOST = process.env.NEXT_PUBLIC_APP_LOCALHOST;

export const fetchCars = createAsyncThunk('promotion/fetchCars', async () => {
    const response = await axios.get(`${LOCALHOST}/api/promotion-cars?populate=*`);
    return response.data.data;
});

const promotionSlice = createSlice({
    name: 'promotion',
    initialState: {
        carData: [] as any[],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(fetchCars.pending, (state) => {
            state.status = 'loading';
        });

        builder.addCase(fetchCars.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.carData = action.payload;
        });

        builder.addCase(fetchCars.rejected, (state, action) => {
            state.status = 'failed';
        });
    },
});

export const selectpromotionData = createSelector(
    (state) => state.promotion.carData,
    (carData) => carData
);

export const selectStatus = createSelector(
    (state) => state.promotion.status,
    (status) => status
);


export default promotionSlice.reducer;
