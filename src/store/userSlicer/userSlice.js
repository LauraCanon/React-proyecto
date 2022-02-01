import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fixHogarApi } from "../../services/fixHogarApi/fixHogarApi";

//Thunk actions
export const loginUser = createAsyncThunk("user/loginUser", (user) =>
  fixHogarApi.loginUser(user)
);

//userSlice definition
const initialState = {
  user: JSON.parse(window.localStorage.getItem("user")) || null,
};
const userSlicer = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    logout(state) {
      state.user = null;
      window.localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {})
      .addCase(loginUser.fulfilled, (state, action) => {
        window.localStorage.setItem(
          "user",
          JSON.stringify(action.payload.collaborator)
        );
        window.localStorage.setItem(
          "token",
          JSON.stringify(action.payload.token)
        );
        state.user = action.payload.collaborator;
      })
      .addCase(loginUser.rejected, (state) => {});
  },
});

export const { login, logout } = userSlicer.actions;

export const selectUser = (state) => state.user.user;

export default userSlicer.reducer;
