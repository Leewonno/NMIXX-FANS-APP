import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PageState {
  refresh: boolean;
}

const initialState: PageState = {
  refresh: false,
};

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setRefresh(state, action: PayloadAction<boolean>) {
      state.refresh = action.payload;
    }
  },
});

export const { setRefresh } = pageSlice.actions;
export default pageSlice.reducer;