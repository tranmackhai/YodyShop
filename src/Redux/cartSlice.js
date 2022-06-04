import { createSlice } from "@reduxjs/toolkit";

const initialCart = JSON.parse(localStorage.getItem("cart"))
const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: initialCart ? initialCart : { items: [], count: 0, } },
  reducers: {
    getCart: (state, action) => {
      state.cart = action.payload;
      localStorage.setItem("cart", JSON.stringify(state.cart))
    },
    addToCart: (state, action) => {
      const cartItem = action.payload;
      const index = state.cart.items.findIndex(item => item.id === cartItem.id);
      if (index !== -1) {
        state.cart.items[index].quantity += cartItem.quantity;
      }
      else {
        state.cart.items.push(cartItem)
      }
      state.cart.count += cartItem.quantity;
      localStorage.setItem("cart", JSON.stringify(state.cart))
    },
    updateCartItem: (state, action) => {
      const cartItem = action.payload;
      const index = state.cart.items.findIndex(item => item.id === cartItem.id);
      if (index !== -1) {
        state.cart.count -= state.cart.items[index].quantity;
        state.cart.items[index].quantity = cartItem.quantity;
        state.cart.count += state.cart.items[index].quantity;
      }
      localStorage.setItem("cart", JSON.stringify(state.cart))
    },
    deleteCartItem: (state, action) => {
      const id = action.payload;
      const index = state.cart.items.findIndex(item => item.id === id);
      if (index !== -1) {
        state.cart.count -= state.cart.items[index].quantity;
        state.cart.items = state.cart.items.filter(item => item.id !== id)
      }
      localStorage.setItem("cart", JSON.stringify(state.cart))
    }
  }
})
export const { getCart, addToCart, updateCartItem, deleteCartItem } = cartSlice.actions;
export default cartSlice.reducer;