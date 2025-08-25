import { configureStore } from '@reduxjs/toolkit';
import scrollReducer from './scrollSlice';
import authReducer from './authSlice';

export const store = configureStore({
  reducer: {
    scroll: scrollReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;