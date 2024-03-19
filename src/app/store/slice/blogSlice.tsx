import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import axios from 'axios';

const LOCALHOST = process.env.NEXT_PUBLIC_APP_LOCALHOST;

export const fetchCars = createAsyncThunk('blog/fetchCars', async () => {
    const response = await axios.get(`${LOCALHOST}/api/blogs-cars?populate=*`);
    return response.data.data;
});

const blogSlice = createSlice({
    name: 'blog',
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

export const selectCarData = createSelector(
    (state) => state.blog.carData,
    (carData) => carData
);

export const selectStatus = createSelector(
    (state) => state.blog.status,
    (status) => status
);


export default blogSlice.reducer;
