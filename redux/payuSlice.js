import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  payUMoneyData: null,
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    savePayUMoneyData: (state, action) => {
      state.payUMoneyData = action.payload;
    },
  },
});

export const { savePayUMoneyData } = paymentSlice.actions;
export default paymentSlice.reducer;
