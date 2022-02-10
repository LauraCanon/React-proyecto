import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fixHogarApi } from '../../services/fixHogarApi/fixHogarApi';

//Thunk actions
export const listOfCity = createAsyncThunk('citys/listOfCity', () =>
  fixHogarApi.listOfCity()
);

const initialState = {
  ciudades: [],
};

const citys = createSlice({
  name: 'ciudad',
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(listOfCity.pending, (state) => {})
      .addCase(listOfCity.fulfilled, (state, action) => {
        state.ciudades = action.payload;
      })
      .addCase(listOfCity.rejected, (state) => {});
  },
});

export const selectCitys = (state) => state.ciudades;

export default citys.reducer;
