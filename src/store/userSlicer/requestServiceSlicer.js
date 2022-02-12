import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fixHogarApi } from "../../services/fixHogarApi/fixHogarApi";

//Thunk actions
export const requestService = createAsyncThunk(
  "schedule/requestService",
  (id) => fixHogarApi.requestService(id)
);

const initialState = {
  request: [],
};
const requestSlicer = createSlice({
  name: "schedule",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(requestService.pending, (state) => {})
      .addCase(requestService.fulfilled, (state, action) => {
        state.request = action.payload;
      })
      .addCase(requestService.rejected, (state) => {});
  },
});

export const selectUserRegis = (state) => state.request;
