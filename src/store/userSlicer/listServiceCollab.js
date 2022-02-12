import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fixHogarApi } from '../../services/fixHogarApi/fixHogarApi';

//Thunk actions
export const collabListService = createAsyncThunk(
  'listCollabServ/collabListService',
  () => fixHogarApi.listServiceCollab()
);

const listColServ = createSlice({
  name: 'listCollabServ',
  initialState: { listServCollab: null },
  extraReducers: (builder) => {
    builder
      .addCase(collabListService.pending, (state) => {})
      .addCase(collabListService.fulfilled, (state, action) => {
        state.listServCollab = action.payload.service;
      })
      .addCase(collabListService.rejected, (state) => {});
  },
});

export const selectListService = (state) => state.listCollabServ.listServCollab;

export default listColServ.reducer;
