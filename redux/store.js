import { configureStore } from "@reduxjs/toolkit";
import payUMoneyReducer from "./payuSlice"; // Adjust according to your file structure

const store = configureStore({
  reducer: {
    payUMoney: payUMoneyReducer, // The slice for PayUMoney data
  },
});

export default store;
