// src/store/snackbarSlice.js
import { createSlice } from '@reduxjs/toolkit';

const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState: {
    open: false,
    message: '',
    severity: 'info',
    duration: 3000,
  },
  reducers: {
    showSnackbar: (state, action) => {
      const { message, severity = 'info', duration = 3000 } = action.payload;
      state.open = true;
      state.message = message;
      state.severity = severity;
      state.duration = duration;
    },
    closeSnackbar: (state) => {
      state.open = false;
    },
  },
});

export const { showSnackbar, closeSnackbar } = snackbarSlice.actions;
export default snackbarSlice.reducer;
