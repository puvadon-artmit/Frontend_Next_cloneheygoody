import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import axios from 'axios';

const LOCALHOST = process.env.NEXT_PUBLIC_APP_LOCALHOST;

export const fetchCars = createAsyncThunk('travel/fetchCars', async () => {
    const response = await axios.get(`${LOCALHOST}/api/travel-insurances?populate=*`);
    return response.data.data;
});

const travelSlice = createSlice({
    name: 'travel',
    initialState: {
        travelData: [] as any[],
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
            state.travelData = action.payload;
        });

        builder.addCase(fetchCars.rejected, (state, action) => {
            state.status = 'failed';
        });
    },
});

export const selecttravelData = createSelector(
    (state) => state.travel.travelData,
    (travelData) => travelData
);

export const selectStatus = createSelector(
    (state) => state.travel.status,
    (status) => status
);


export default travelSlice.reducer;
