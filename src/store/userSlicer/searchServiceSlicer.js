import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fixHogarApi } from '../../services/fixHogarApi/fixHogarApi';

//Thunk actions
export const serviceCollabList = createAsyncThunk(
  'serviceByCollabs/serviceCollabList',
  (search) => fixHogarApi.serviceCollabList(search)
);

const initialState = {
  serviceByCollab: JSON.parse(window.localStorage.getItem('search')) || null,
};

const serviceCollab = createSlice({
  name: 'serviceByCollabs',
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(serviceCollabList.pending, (state) => {
        window.localStorage.removeItem('search');
      })
      .addCase(serviceCollabList.fulfilled, (state, action) => {
        window.localStorage.setItem(
          'search',
          JSON.stringify(action.payload.servByCollab)
        );
        state.serviceByCollab = action.payload.servByCollab;
      })
      .addCase(serviceCollabList.rejected, (state) => {});
  },
});

export const selectServiceCollab = (state) =>
  state.collabService.serviceByCollab;

export default serviceCollab.reducer;
