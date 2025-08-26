import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  verify: boolean;
}

const initialState: AuthState = {
  verify: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setVerify(state, action: PayloadAction<boolean>) {
      state.verify = action.payload;
    },
  },
});

export const { setVerify } = authSlice.actions;
export default authSlice.reducer;