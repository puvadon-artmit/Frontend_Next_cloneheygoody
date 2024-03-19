import { createSlice, createAsyncThunk, createSelector, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const LOCALHOST = process.env.NEXT_PUBLIC_APP_LOCALHOST;

interface InsuranceState {
    insuranceData: any[];
    status: string;
    error: null;
}

export const fetchCars = createAsyncThunk('insurance/fetchCars', async () => {
    const response = await axios.get(`${LOCALHOST}/api/insurance-cars?populate=*`);
    return response.data.data;
});


const insurancecarsSlice = createSlice({
    name: 'insurance',
    initialState: {
        insuranceData: [] as any[],
        status: 'idle',
        error: null,
    } as InsuranceState,  // ระบุชนิดของ initialState เพื่อช่วย TypeScript เข้าใจ
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCars.pending, (state) => {
            state.status = 'loading';
        });

        builder.addCase(fetchCars.fulfilled, (state, action: PayloadAction<any[]>) => {
            state.status = 'succeeded';
            state.insuranceData = action.payload;
        });

        builder.addCase(fetchCars.rejected, (state, action) => {
            state.status = 'failed';
        });
    },
});

export const selectinsuranceData = createSelector(
    (state: { insurance: InsuranceState }) => state.insurance.insuranceData,
    (insuranceData) => insuranceData
);

export const selectCarData = createSelector(
    (state) => state.insurance.insuranceData,
    (insuranceData) => insuranceData
);

export const selectStatus = createSelector(
    (state: { insurance: InsuranceState }) => state.insurance.status,
    (status) => status
);

export default insurancecarsSlice.reducer;