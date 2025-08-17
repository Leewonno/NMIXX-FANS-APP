import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ScrollState {
  scrolled: boolean;
}

const initialState: ScrollState = {
  scrolled: false,
};

const scrollSlice = createSlice({
  name: 'scroll',
  initialState,
  reducers: {
    setScrolled(state, action: PayloadAction<boolean>) {
      state.scrolled = action.payload;
    },
  },
});

export const { setScrolled } = scrollSlice.actions;
export default scrollSlice.reducer;