import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import axios from 'axios';

const LOCALHOST = process.env.NEXT_PUBLIC_APP_LOCALHOST;

export const fetchCars = createAsyncThunk('accident/fetchCars', async () => {
    const response = await axios.get(`${LOCALHOST}/api/accidents?populate=*`);
    return response.data.data;
});

const accidentSlice = createSlice({
    name: 'accident',
    initialState: {
        accidentData: [] as any[],
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
            state.accidentData = action.payload;
        });

        builder.addCase(fetchCars.rejected, (state, action) => {
            state.status = 'failed';
        });
    },
});

export const selectaccidentData = createSelector(
    (state) => state.accident.accidentData,
    (accidentData) => accidentData
);

export const selectStatus = createSelector(
    (state) => state.accident.status,
    (status) => status
);


export default accidentSlice.reducer;
