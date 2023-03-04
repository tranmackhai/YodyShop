import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || null,
    acessToken: localStorage.getItem("accessToken") || "",
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      localStorage.setItem("accessToken", state.accessToken);
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    
  },
});
export const authAction = authSlice.actions;
export default authSlice.reducer;
