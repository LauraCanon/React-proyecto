import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fixHogarApi } from '../../services/fixHogarApi/fixHogarApi';

//Thunk actions
export const cityListLoad = createAsyncThunk('city/cityList', (service) =>
  fixHogarApi.citysCollabs(service)
);

const cityList = createSlice({
  name: 'city',
  initialState: { citys: [] },
  extraReducers: (builder) => {
    builder
      .addCase(cityListLoad.pending, (state) => {})
      .addCase(cityListLoad.fulfilled, (state, action) => {
        state.citys = action.payload.cityService;
      })
      .addCase(cityListLoad.rejected, (state) => {});
  },
});

export const selectCity = (state) => state.city.citys;

export default cityList.reducer;
