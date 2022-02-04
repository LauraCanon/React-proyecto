import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fixHogarApi } from "../../services/fixHogarApi/fixHogarApi";

//Thunk actions
export const verifiedEmail = createAsyncThunk(
  "users/verifiedEmail",
  (id, hash) => fixHogarApi.verifiedEmail(id, hash)
);

const initialState = {
  users: [],
};
const userSlicer = createSlice({
  name: "users",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(verifiedEmail.pending, (state) => {})
      .addCase(verifiedEmail.fulfilled, (state, action) => {
        state.users = true;
      })
      .addCase(verifiedEmail.rejected, (state) => {});
  },
});
