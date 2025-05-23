import { configureStore } from "@reduxjs/toolkit";
import payUMoneyReducer from "./payuSlice"; // Adjust according to your file structure
import snackbarReducer from './snackbarSlice';

const store = configureStore({
  reducer: {
    payUMoney: payUMoneyReducer, // The slice for PayUMoney data
    snackbar: snackbarReducer,
  },
});

export default store;
