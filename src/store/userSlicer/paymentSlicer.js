import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fixHogarApi } from '../../services/fixHogarApi/fixHogarApi';

//Thunk actions
export const getCreditCards = createAsyncThunk('payment/getCreditCards', () =>
  fixHogarApi.getCreditCards()
);
export const createTokenCreditCard = createAsyncThunk(
  'payment/createTokenCreditCard',
  (ccInfo) => fixHogarApi.createTokenCreditCard(ccInfo)
);

export const customerPayment = createAsyncThunk('payment/customerPayment', () =>
  fixHogarApi.customerPayment()
);
export const makePayment = createAsyncThunk(
  'payment/makePayment',
  (paymentValues) => fixHogarApi.makePayment(paymentValues)
);

//userSlice definition

const paymentSlicer = createSlice({
  name: 'payment',
  initialState: {
    paymentHandler: {
      statusCreditCard: false,
      statusCustomerId: false,
      infoPayment: 'sin Info',
      loading: false,
      paymentSuccess: false,
    },
    creditCards: null,
  },
  reducers: {
    infoPayment(state, action) {
      state.paymentHandler.infoPayment = action.payload;
    },
    clearPaymentSuccess(state) {
      state.paymentHandler.paymentSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTokenCreditCard.pending, (state) => {
        state.paymentHandler.loading = true;
      })
      .addCase(createTokenCreditCard.fulfilled, (state, action) => {
        state.paymentHandler.statusCreditCard = action.payload;
      })
      .addCase(createTokenCreditCard.rejected, (state) => {})
      .addCase(customerPayment.fulfilled, (state, action) => {
        state.paymentHandler.loading = false;
        state.paymentHandler.statusCustomerId = true;
      })
      .addCase(getCreditCards.fulfilled, (state, action) => {
        state.creditCards = action.payload;
      })
      .addCase(makePayment.pending, (state, action) => {
        state.paymentHandler.loading = true;
      })
      .addCase(makePayment.fulfilled, (state, action) => {
        state.paymentHandler.loading = false;
        state.paymentHandler.paymentSuccess = true;
      });
  },
});
export const { infoPayment, clearPaymentSuccess } = paymentSlicer.actions;

export const selectPaymentHandler = (state) => state.payment.paymentHandler;
export const selectCreditCards = (state) => state.payment.creditCards;

export default paymentSlicer.reducer;
