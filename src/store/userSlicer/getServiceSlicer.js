import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fixHogarApi } from "../../services/fixHogarApi/fixHogarApi";

//Thunk actions
export const getService = createAsyncThunk("listUserService/getService", () =>
  fixHogarApi.getServiceUser()
);

const listUserServ = createSlice({
  name: "listUserService",
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

export const selectUserService = (state) => state.listUserService.services;

export default listUserServ.reducer;
