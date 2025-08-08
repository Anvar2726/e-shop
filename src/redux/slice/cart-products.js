import { createSlice } from "@reduxjs/toolkit";
import { ESHOP } from "../../constants";

const initialState = {
  cartProducts: JSON.parse(localStorage.getItem(ESHOP)) || [],
};

export const cartProductSlice = createSlice({
  name: "product-slice",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const isInCart = state.cartProducts.find((el) => el.id === payload.id);
      if (isInCart) {
        isInCart.quantity += 1;
      } else {
        state.cartProducts.push({ ...payload, quantity: 1 });
      }
      localStorage.setItem(ESHOP, JSON.stringify(state.cartProducts));
    },
    increaseQuantity: (state, { payload }) => {
      const product = state.cartProducts.find((el) => el.id === payload.id);
      if (product) {
        product.quantity += 1;
      }
      localStorage.setItem(ESHOP, JSON.stringify(state.cartProducts));
    },
    decreaseQuantity: (state, { payload }) => {
      const product = state.cartProducts.find((el) => el.id === payload.id);
      if (product) {
        if (product.quantity > 1) {
          product.quantity -= 1;
        } else {
          state.cartProducts = state.cartProducts.filter((el) => el.id !== payload.id);
        }
      }
      localStorage.setItem(ESHOP, JSON.stringify(state.cartProducts));
    },
    deleteProductInCart: (state, { payload }) => {
      state.cartProducts = state.cartProducts.filter((el) => el.id !== payload);
      localStorage.setItem(ESHOP, JSON.stringify(state.cartProducts));
    },
  },
});

export const { addToCart, decreaseQuantity, increaseQuantity, deleteProductInCart } =
  cartProductSlice.actions;

export default cartProductSlice.reducer;
