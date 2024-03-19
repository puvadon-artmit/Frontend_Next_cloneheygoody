import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CountryState {
  selectedCountry: string;
}

const initialState: CountryState = {
  selectedCountry: '',
};

const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    setSelectedCountry(state, action: PayloadAction<string>) {
      state.selectedCountry = action.payload;
    },
  },
});

export const { setSelectedCountry } = countrySlice.actions;
export default countrySlice.reducer;
