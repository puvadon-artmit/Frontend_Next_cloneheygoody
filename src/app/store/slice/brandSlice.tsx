import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CountryState {
  selectedDrand: string;
}

const initialState: CountryState = {
  selectedDrand: '',
};

const countrySlice = createSlice({
  name: 'brand',
  initialState,
  reducers: {
    setSelectedDrand(state, action: PayloadAction<string>) {
      state.selectedDrand = action.payload;
    },
  },
});

export const { setSelectedDrand } = countrySlice.actions;
export default countrySlice.reducer;
