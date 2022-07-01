import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  toastMessage: {
    type: "success",
    isOpen: false,
    text: "",
  },
};
const toastSlice = createSlice({
  name: "toast",
  initialState: initialState,
  reducers: {
    showToast: (state, action) => {
      state.toastMessage = action.payload;
    },
  },
});
export const { showToast } = toastSlice.actions;
export default toastSlice.reducer;