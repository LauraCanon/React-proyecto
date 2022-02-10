import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fixHogarApi } from "../../services/fixHogarApi/fixHogarApi";

//Thunk actions
export const fileUser = createAsyncThunk("user/fileUser", (upload) =>
  fixHogarApi.fileUser(upload)
);

const collab = JSON.parse(window.localStorage.getItem("collaborator"));
const user = JSON.parse(window.localStorage.getItem("user"));

const initialState = {
  file: collab?.image || user?.image || null,
  loading: false,
};
const fileSlicer = createSlice({
  name: "file",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fileUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fileUser.fulfilled, (state, action) => {
        state.loading = false;
        const collab = JSON.parse(window.localStorage.getItem("collaborator"));
        const user = JSON.parse(window.localStorage.getItem("user"));
        if (collab) {
          collab.image = action.payload.secure_url;
          window.localStorage.setItem("collaborator", JSON.stringify(collab));
          state.file = action.payload.secure_url;
        } else if (user) {
          user.image = action.payload.secure_url;
          window.localStorage.setItem("user", JSON.stringify(user));
          state.file = action.payload.secure_url;
        }
      })
      .addCase(fileUser.rejected, (state) => {});
  },
});

export const selectFile = (state) => state.file.file;
export const selectLoading = (state) => state.file.loading;

export default fileSlicer.reducer;
