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
    loading: false,
  },
  reducers: {
    infoPayment(state, action) {
      state.infoPayment = { ...state.infoPayment, ...action.payload };
    },
    registCreditCard(state, action) {
      state.loading = !state.loading;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(paymentProcess.pending, (state) => {})
      .addCase(paymentProcess.fulfilled, (state, action) => {
        state.paymentSucess = true;
        state.statusCreditCard = action.payload;
      })
      .addCase(customerPayment.fulfilled, (state, action) => {})
      .addCase(paymentProcess.rejected, (state) => {});
  },
});
export const { infoPayment, registCreditCard } = paymentSlicer.actions;

export const selectStatusCreditCard = (state) => state.payment.statusCreditCard;
export const selectPaymentSucess = (state) => state.payment.paymentSucess;
export const selectRegisterPayment = (state) => state.payment.infoPayment;
export const loadingCreateCreditCard = (state) => state.payment.loading;

export default paymentSlicer.reducer;
