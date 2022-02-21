import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fixHogarApi } from '../../services/fixHogarApi/fixHogarApi';

//Thunk actions
export const createService = createAsyncThunk(
  'createService/createService',
  (infoService) => fixHogarApi.createService(infoService)
);
export const deleteService = createAsyncThunk(
  'createService/deleteService',
  (id) => fixHogarApi.deleteService(id)
);

const createServiceSlicer = createSlice({
  name: 'createService',
  initialState: {
    createdService: {
      loading: false,
      status: {
        created: false,
        duplicated: false,
        msg: '',
      },
    },
  },
  reducers: {
    clearStatus(state) {
      state.createdService.status.created = false;
      state.createdService.status.duplicated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createService.pending, (state) => {
        state.createdService.loading = true;
      })
      .addCase(createService.fulfilled, (state, action) => {
        state.createdService.loading = false;
        if (
          action.payload.msg === 'Ya has Credado un servicio para esa Categoria'
        ) {
          state.createdService.status.duplicated = true;
          state.createdService.status.msg = action.payload.msg;
          return;
        }
        if (action.payload.msg === 'Servicio creado con exito') {
          state.createdService.status.created = true;
          state.createdService.status.msg = action.payload.msg;
          return;
        }
      })
      .addCase(createService.rejected, (state, action) => {
        console.log(action.payload);
      })
      .addCase(deleteService.pending, (state) => {
        state.createdService.loading = true;
      })
      .addCase(deleteService.fulfilled, (state, action) => {
        state.createdService.loading = false;
        state.createdService.status.msg = action.payload.msg;
      })
      .addCase(deleteService.rejected, (state, action) => {
        console.log(action.payload);
      });
  },
});
export const { clearStatus, deleteService2 } = createServiceSlicer.actions;
export const selectCreatedService = (state) =>
  state.createService.createdService;

export default createServiceSlicer.reducer;
