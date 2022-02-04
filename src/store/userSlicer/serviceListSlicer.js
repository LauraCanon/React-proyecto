import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fixHogarApi } from '../../services/fixHogarApi/fixHogarApi';

//Thunk actions
export const serviceListLoad = createAsyncThunk('service/serviceList', () =>
  fixHogarApi.servicesCollabs()
);

const initialState = {
  services: [],
};

const serviceList = createSlice({
  name: 'service',
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(serviceListLoad.pending, (state) => {})
      .addCase(serviceListLoad.fulfilled, (state, action) => {
        state.services = action.payload.service;
      })
      .addCase(serviceListLoad.rejected, (state) => {});
  },
});

export const selectService = (state) => state.service.services;

export default serviceList.reducer;
