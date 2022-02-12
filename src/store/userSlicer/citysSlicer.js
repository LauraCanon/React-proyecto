import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fixHogarApi } from '../../services/fixHogarApi/fixHogarApi';

//Thunk actions
export const listOfCity = createAsyncThunk('citys/listOfCity', () =>
  fixHogarApi.listOfCity()
);

const citys = createSlice({
  name: 'ciudad',
  initialState: { ciudades: [] },
  extraReducers: (builder) => {
    builder
      .addCase(listOfCity.pending, (state) => {})
      .addCase(listOfCity.fulfilled, (state, action) => {
        state.ciudades = action.payload;
      })
      .addCase(listOfCity.rejected, (state) => {});
  },
});

export const selectCitys = (state) => state.ciudad.ciudades;

export default citys.reducer;
