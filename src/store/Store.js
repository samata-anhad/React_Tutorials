import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../redux/slices/productSlice";
import cartReducer from "../redux/slices/cartSlice";

const Store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});

export default Store;

