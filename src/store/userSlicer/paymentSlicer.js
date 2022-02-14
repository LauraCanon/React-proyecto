import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fixHogarApi } from '../../services/fixHogarApi/fixHogarApi';

//Thunk actions
export const paymentProcess = createAsyncThunk(
  'payment/paymentProcess',
  (ccInfo) => fixHogarApi.paymentProcess(ccInfo)
);

export const customerPayment = createAsyncThunk('payment/customerPayment', () =>
  fixHogarApi.customerPayment()
);
export const paymentService = createAsyncThunk(
  'payment/paymentService',
  (paymentValues) => fixHogarApi.paymentService(paymentValues)
);

//userSlice definition

const paymentSlicer = createSlice({
  name: 'payment',
  initialState: {
    paymentSucess: false,
    statusCreditCard: false,
    infoPayment: {},
  },
  reducers: {
    infoPayment(state, action) {
      state.infoPayment = { ...state.infoPayment, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(paymentProcess.pending, (state) => {})
      .addCase(paymentProcess.fulfilled, (state, action) => {
        state.statusCreditCard = action.payload;
      })
      .addCase(customerPayment.fulfilled, (state, action) => {})
      .addCase(paymentProcess.rejected, (state) => {});
  },
});
export const { infoPayment } = paymentSlicer.actions;

export const selectStatusCreditCard = (state) => state.payment.statusCreditCard;
export const selectRegisterPayment = (state) => state.payment.infoPayment;

export default paymentSlicer.reducer;
