import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ScrollState {
  scrolled: boolean;
  y: number;
}

const initialState: ScrollState = {
  scrolled: false,
  y: 0,
};

const scrollSlice = createSlice({
  name: 'scroll',
  initialState,
  reducers: {
    setScrolled(state, action: PayloadAction<boolean>) {
      state.scrolled = action.payload;
    },
    setY(state, action: PayloadAction<number>) {
      state.y = action.payload;
    },
  },
});

export const { setScrolled, setY } = scrollSlice.actions;
export default scrollSlice.reducer;