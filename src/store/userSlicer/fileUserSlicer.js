import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fixHogarApi } from "../../services/fixHogarApi/fixHogarApi";

//Thunk actions
export const fileUser = createAsyncThunk("user/fileUser", (upload) =>
  fixHogarApi.fileUser(upload)
);

const initialState = {
  file: [],
};
const collabSlicer = createSlice({
  name: "file",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fileUser.pending, (state) => {})
      .addCase(fileUser.fulfilled, (state, action) => {
        state.file = true;
      })
      .addCase(fileUser.rejected, (state) => {});
  },
});
