import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TheyearState {
  selectedtheyear: string;
}

const initialState: TheyearState = {
  selectedtheyear: '',
};

const theyearSlice = createSlice({
  name: 'theyear',
  initialState,
  reducers: {
    setselectedtheyear(state, action: PayloadAction<string>) {
      state.selectedtheyear = action.payload;
    },
  },
});

export const { setselectedtheyear } = theyearSlice.actions;
export default theyearSlice.reducer;
