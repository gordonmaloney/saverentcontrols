import { configureStore } from '@reduxjs/toolkit';
import rentReducer from './rentSlice';

export const store = configureStore({
  reducer: {
    rent: rentReducer,
  },
});
