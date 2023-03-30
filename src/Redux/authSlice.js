import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || null,
    accessToken: localStorage.getItem("accessToken") || "",
  },
  reducers: {
    login: (state, action) => {
      // console.log(action.payload)
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      localStorage.setItem("accessToken", state.accessToken);
      localStorage.setItem("user", JSON.stringify(state.user));
    },
  },
});
export const authAction = authSlice.actions;
export default authSlice.reducer;
