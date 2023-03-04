import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import cartSlice from "./cartSlice";
import toastSlice from "./toastSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice,
    toast: toastSlice,
  },
});

export default store;
