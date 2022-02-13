import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fixHogarApi } from '../../services/fixHogarApi/fixHogarApi';

//Thunk actions
export const loginUser = createAsyncThunk('user/loginUser', (user) =>
  fixHogarApi.loginUser(user)
);

//userSlice definition
const initialState = {
  user:
    JSON.parse(window.localStorage.getItem('user')) ||
    JSON.parse(window.localStorage.getItem('collaborator')) ||
    null,
  stateLogin: null,
};
const userSlicer = createSlice({
  name: 'user',
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
        if (action.payload.msg === 'Email y Contraseña son requeridos') {
          state.user = null;
          state.stateLogin = action.payload.msg;
          return;
        }

        if (action.payload.msg === 'Email no esta registrado') {
          state.user = null;
          state.stateLogin = action.payload.msg;
          return;
        }
        if (action.payload.msg === 'Email o Contraseña Invalidos') {
          state.user = null;
          state.stateLogin = action.payload.msg;
          return;
        }
        if (
          action.payload.msg ===
          'Aun no has Activado tu cuenta. Revisa tu correo'
        ) {
          state.user = null;
          state.stateLogin = action.payload.msg;
          return;
        }
        if (action.payload.hasOwnProperty('user')) {
          window.localStorage.setItem(
            'user',
            JSON.stringify(action.payload.user)
          );
          window.localStorage.setItem(
            'token',
            JSON.stringify(action.payload.token)
          );
          state.user = action.payload.user;
          state.stateLogin = null;
          return;
        }
        if (action.payload.hasOwnProperty('collaborator')) {
          window.localStorage.setItem(
            'collaborator',
            JSON.stringify(action.payload.collaborator)
          );
          window.localStorage.setItem(
            'token',
            JSON.stringify(action.payload.token)
          );
          state.user = action.payload.collaborator;
          state.stateLogin = null;
          return;
        }
      })
      .addCase(loginUser.rejected, (state) => {});
  },
});

export const { logout } = userSlicer.actions;

export const selectUser = (state) => state.user.user;
export const selectStateLogin = (state) => state.user.stateLogin;

export default userSlicer.reducer;
