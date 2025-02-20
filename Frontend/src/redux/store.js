import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';  // Adjust path as needed

const store = configureStore({
  reducer: {
    auth: authReducer,  // Ensure this is correctly mapped to the 'auth' key
  },
});

export default store;
