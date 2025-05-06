import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./User-Slice";
import SelectedProduct from "./Select-ProductSlice";
import productSlice from "./ProductSlice";

export const store = configureStore({
  reducer: {
    users: UserSlice,
    seleproducts: SelectedProduct,
    products: productSlice,
  },
});
