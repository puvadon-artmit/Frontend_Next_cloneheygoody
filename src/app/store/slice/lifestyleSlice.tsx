import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import axios from 'axios';

const LOCALHOST = process.env.NEXT_PUBLIC_APP_LOCALHOST;

export const fetchCars = createAsyncThunk('lifestyles/fetchCars', async () => {
    try {
        const response = await axios.get(`${LOCALHOST}/api/lifestyles?populate=*`);
        return response.data.data;
    } catch (error) {
        throw Error('Failed to fetch cars');
    }
});

const lifestylesSlice = createSlice({
    name: 'lifestyles',
    initialState: {
        carData: [] as any[],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCars.pending, (state) => {
            state.status = 'loading';
            state.error = null;
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

export const selectCarData = createSelector(
    (state) => state.lifestyles.carData,
    (carData) => carData
);

export const selectStatus = createSelector(
    (state) => state.lifestyles.status,
    (status) => status
);

export const selectError = createSelector(
    (state) => state.lifestyles.error,
    (error) => error
);

export default lifestylesSlice.reducer;
