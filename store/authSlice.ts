import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  verify: boolean;
  id: number | null;
  nick: string;
  profileImg: string;
  username: string;
}

const initialState: AuthState = {
  verify: false,
  id: null,
  nick: "",
  profileImg: "",
  username: "",
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setVerify(state, action: PayloadAction<boolean>) {
      state.verify = action.payload;
    },
    setId(state, action: PayloadAction<number | null>) {
      state.id = action.payload;
    },
    setNick(state, action: PayloadAction<string>) {
      state.nick = action.payload;
    },
    setProfileImg(state, action: PayloadAction<string>) {
      state.profileImg = action.payload;
    },
    setUsername(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
  },
});

export const { setVerify, setId, setNick, setProfileImg, setUsername } = authSlice.actions;
export default authSlice.reducer;