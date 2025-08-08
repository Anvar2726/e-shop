import React from "react";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { productsApi } from "../query/products.js";
import { cartProductSlice } from "../slice/cart-products.js";
import { favoriteProductsSlice } from "../slice/favorite-products.js";

const rootReducer = {
  cartProducts: cartProductSlice.reducer,
  favoriteProducts: favoriteProductsSlice.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>(getDefaultMiddleware().concat(productsApi.middleware)),
});
const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
