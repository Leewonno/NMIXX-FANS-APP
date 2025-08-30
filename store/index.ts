import { configureStore } from '@reduxjs/toolkit';
import scrollReducer from './scrollSlice';
import authReducer from './authSlice';
import pageReducer from './pageSlice';

export const store = configureStore({
  reducer: {
    scroll: scrollReducer,
    auth: authReducer,
    page: pageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;