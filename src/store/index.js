import { configureStore, createSlice } from "@reduxjs/toolkit";
import userSlice from "./userSlicer/userSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

export default store;
