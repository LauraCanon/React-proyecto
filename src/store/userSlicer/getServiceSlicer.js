import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fixHogarApi } from '../../services/fixHogarApi/fixHogarApi';

//Thunk actions
export const getService = createAsyncThunk(
  'listRequestsService/getService',
  () => fixHogarApi.getServiceRequests()
);

const listRequestsService = createSlice({
  name: 'listRequestsService',
  initialState: { services: null },
  extraReducers: (builder) => {
    builder
      .addCase(getService.pending, (state) => {})
      .addCase(getService.fulfilled, (state, action) => {
        state.services = action.payload;
      })
      .addCase(getService.rejected, (state) => {});
  },
});

export const selectRequestsService = (state) =>
  state.listRequestsService.services;

export default listRequestsService.reducer;
