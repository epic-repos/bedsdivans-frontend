import { configureStore } from "@reduxjs/toolkit";
import addToCartSlice from "./slices/addtocart";
import productSlice from "./slices/product";

const store = configureStore({
  reducer: {
    addToCart: addToCartSlice.reducer,
    // selectbed: selectbedSlice.reducer,
    product: productSlice.reducer,
  },
  devTools: process.env.NODE_ENV === 'development'
})
export default store;