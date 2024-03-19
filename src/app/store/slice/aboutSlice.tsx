import { createSlice, createAsyncThunk, createSelector, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const LOCALHOST = process.env.NEXT_PUBLIC_APP_LOCALHOST;

interface AboutState {
    carData: any[];
    status: string;
    error: null;
}

export const fetchCars = createAsyncThunk('about/fetchCars', async () => {
    const response = await axios.get(`${LOCALHOST}/api/about-cars?populate=*`);
    return response.data.data;
});

const aboutSlice = createSlice({
    name: 'about',
    initialState: {
        carData: [] as any[],
        status: 'idle',
        error: null,
    } as AboutState,  // ระบุชนิดของ initialState เพื่อช่วย TypeScript เข้าใจ
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCars.pending, (state) => {
            state.status = 'loading';
        });

        builder.addCase(fetchCars.fulfilled, (state, action: PayloadAction<any[]>) => {
            state.status = 'succeeded';
            state.carData = action.payload;
        });

        builder.addCase(fetchCars.rejected, (state, action) => {
            state.status = 'failed';
        });
    },
});

export const selectCarData = createSelector(
    (state: { about: AboutState }) => state.about.carData,
    (carData) => carData
);

export const selectStatus = createSelector(
    (state: { about: AboutState }) => state.about.status,
    (status) => status
);

export default aboutSlice.reducer;