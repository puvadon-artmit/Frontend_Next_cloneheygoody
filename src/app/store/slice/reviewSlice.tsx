import { createSlice, createAsyncThunk, createSelector, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const LOCALHOST = process.env.NEXT_PUBLIC_APP_LOCALHOST;

interface ReviewState {
    ReviewData: any[];
    status: string;
    error: null;
}

export const fetchCars = createAsyncThunk('review/fetchCars', async () => {
    const response = await axios.get(`${LOCALHOST}/api/reviews?populate=*`);
    return response.data.data;
});

const reviewSlice = createSlice({
    name: 'review',
    initialState: {
        ReviewData: [] as any[],
        status: 'idle',
        error: null,
    } as ReviewState,  
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCars.pending, (state) => {
            state.status = 'loading';
        });

        builder.addCase(fetchCars.fulfilled, (state, action: PayloadAction<any[]>) => {
            state.status = 'succeeded';
            state.ReviewData = action.payload;
        });

        builder.addCase(fetchCars.rejected, (state, action) => {
            state.status = 'failed';
        });
    },
});

export const selectReviewData = createSelector(
    (state: { review: ReviewState }) => state.review.ReviewData,
    (ReviewData) => ReviewData
);

export const selectCarData = createSelector(
    (state) => state.review.ReviewData,
    (ReviewData) => ReviewData
);

export const selectStatus = createSelector(
    (state: { review: ReviewState }) => state.review.status,
    (status) => status
);

export default reviewSlice.reducer;