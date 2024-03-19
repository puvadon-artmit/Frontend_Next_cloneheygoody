import { createSlice, createAsyncThunk, createSelector, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const LOCALHOST = process.env.NEXT_PUBLIC_APP_LOCALHOST;

interface protectionsState {
    protectionData: any[];
    status: string;
    error: null;
}

export const fetchProtection = createAsyncThunk('protections/fetchProtection', async () => {
    const response = await axios.get(`${LOCALHOST}/api/protections?populate=*`);
    return response.data.data;
});


const protectionsSlice = createSlice({
    name: 'protections',
    initialState: {
        protectionData: [] as any[],
        status: 'idle',
        error: null,
    } as protectionsState,  // ระบุชนิดของ initialState เพื่อช่วย TypeScript เข้าใจ
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProtection.pending, (state) => {
            state.status = 'loading';
        });

        builder.addCase(fetchProtection.fulfilled, (state, action: PayloadAction<any[]>) => {
            state.status = 'succeeded';
            state.protectionData = action.payload;
        });

        builder.addCase(fetchProtection.rejected, (state, action) => {
            state.status = 'failed';
        });
    },
});

export const selectprotectionData = createSelector(
    (state: { protections: protectionsState }) => state.protections.protectionData,
    (protectionData) => protectionData
);

export const selectProtectionData = createSelector(
    (state) => state.protections.protectionData,
    (protectionData) => protectionData
);

export const selectStatus2 = createSelector(
    (state: { protections: protectionsState }) => state.protections.status,
    (status) => status
);

export default protectionsSlice.reducer;