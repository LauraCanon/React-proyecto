import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fixHogarApi } from "../../services/fixHogarApi/fixHogarApi";

//Thunk actions
export const fileUser = createAsyncThunk("user/fileUser", (user) =>
  fixHogarApi.fileUser(user)
);

const initialState = {
  user: [],
};
const collabSlicer = createSlice({
  name: "user",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fileUser.pending, (state) => {})
      .addCase(fileUser.fulfilled, (state, action) => {
        state.user = true;
      })
      .addCase(fileUser.rejected, (state) => {});
  },
});
