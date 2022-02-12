import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fixHogarApi } from '../../services/fixHogarApi/fixHogarApi';

//Thunk actions
export const collabRegister = createAsyncThunk(
  'collab/collabRegister',
  (collabs) => fixHogarApi.collabRegister(collabs)
);

const initialState = {
  collabRegister: false,
};
const regisCollab = createSlice({
  name: 'collab',
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(collabRegister.pending, (state) => {})
      .addCase(collabRegister.fulfilled, (state, action) => {
        state.collabRegister = true;
      })
      .addCase(collabRegister.rejected, (state) => {});
  },
});

export const selectRegister = (state) => state.collab.collabRegister;

export default regisCollab.reducer;
