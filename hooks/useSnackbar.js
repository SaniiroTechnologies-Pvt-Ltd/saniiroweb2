// src/hooks/useSnackbar.js
import { useDispatch } from 'react-redux';
import { showSnackbar } from '@/redux/snackbarSlice';

const useSnackbar = () => {
  const dispatch = useDispatch();

  return (message, severity = 'info', duration = 3000) => {
    dispatch(showSnackbar({ message, severity, duration }));
  };
};

export default useSnackbar;
