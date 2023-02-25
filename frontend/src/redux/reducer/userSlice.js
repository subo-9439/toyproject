import { createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

const initState = {
  email: "",
  password:"",
};


export const userSlice = createSlice({
  name: 'users',
  email: "kws3363@gmail.com",
  password: "1234",
  initialState: initState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initState);
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;