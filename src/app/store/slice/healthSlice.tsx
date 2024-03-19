import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import axios from 'axios';

const LOCALHOST = process.env.NEXT_PUBLIC_APP_LOCALHOST;

export const fetchCars = createAsyncThunk('health/fetchCars', async () => {
    const response = await axios.get(`${LOCALHOST}/api/health-insurances?populate=*`);
    return response.data.data;
});

const healthSlice = createSlice({
    name: 'health',
    initialState: {
        healthData: [] as any[],
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
            state.healthData = action.payload;
        });

        builder.addCase(fetchCars.rejected, (state, action) => {
            state.status = 'failed';
        });
    },
});

export const selecthealthData = createSelector(
    (state) => state.health.healthData,
    (healthData) => healthData
);

export const selectStatus = createSelector(
    (state) => state.health.status,
    (status) => status
);


export default healthSlice.reducer;
