import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productApi, productsApi } from "./productsApi";
import cartSlice from "../cart/cartSlice";

export const store = configureStore({
  reducer: {
    cartttt: cartSlice,
    [productsApi.reducerPath]: productsApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware).concat(productApi.middleware),
});

setupListeners(store.dispatch);
