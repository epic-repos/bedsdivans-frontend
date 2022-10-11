import { configureStore } from "@reduxjs/toolkit";
import addToCartSlice from "./slices/addtocart";
import selectbedSlice from "./slices/selectbed";

const store = configureStore({
  reducer: {
    addToCart: addToCartSlice.reducer,
    selectbed: selectbedSlice.reducer
  },
  devTools: process.env.NODE_ENV === 'development'
})
export default store;