import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fixHogarApi } from "../../services/fixHogarApi/fixHogarApi";

//Thunk actions
export const collabRegister = createAsyncThunk(
  "collab/collabRegister",
  (collabs) => fixHogarApi.collabRegister(collabs)
);

const initialState = {
  collabs: [],
};
const collabSlicer = createSlice({
  name: "collabs",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(collabRegister.pending, (state) => {})
      .addCase(collabRegister.fulfilled, (state, action) => {
        state.collabs = true;
      })
      .addCase(collabRegister.rejected, (state) => {});
  },
});
