import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fixHogarApi } from '../../services/fixHogarApi/fixHogarApi';

//Thunk actions
export const createService = createAsyncThunk(
  'collab/createService',
  (infoService) => fixHogarApi.createService(infoService)
);

const initialState = {
  collabs: [],
};
const createServiceSlicer = createSlice({
  name: 'collabs',
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createService.pending, (state) => {})
      .addCase(createService.fulfilled, (state, action) => {})
      .addCase(createService.rejected, (state) => {});
  },
});
