import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fixHogarApi } from "../../services/fixHogarApi/fixHogarApi";

//Thunk actions
export const userRegister = createAsyncThunk("users/userRegister", (users) =>
  fixHogarApi.userRegister(users)
);

const initialState = {
  users: [],
};
const userSlicer = createSlice({
  name: "users",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(userRegister.pending, (state) => {})
      .addCase(userRegister.fulfilled, (state, action) => {
        state.users = true;
      })
      .addCase(userRegister.rejected, (state) => {});
  },
});
