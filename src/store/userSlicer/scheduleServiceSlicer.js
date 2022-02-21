import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fixHogarApi } from '../../services/fixHogarApi/fixHogarApi';

//Thunk actions
export const scheduleService = createAsyncThunk(
  'schedule/scheduleService',
  (schedule) => fixHogarApi.scheduleService(schedule)
);

const scheduleServiceSlicer = createSlice({
  name: 'scheduleService',
  initialState: { schedule: { loading: false, status: '' } },
  reducers: {
    clearStatus(state) {
      state.schedule.status = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(scheduleService.pending, (state) => {
        state.schedule.loading = true;
      })
      .addCase(scheduleService.fulfilled, (state, action) => {
        state.schedule.loading = false;
        state.schedule.status = action.payload.msg;
      })
      .addCase(scheduleService.rejected, (state, action) => {
        console.log(action.payload);
      });
  },
});
export const { clearStatus } = scheduleServiceSlicer.actions;
export const selectScheduleService = (state) => state.scheduleService.schedule;
export default scheduleServiceSlicer.reducer;
