import { createSlice } from "@reduxjs/toolkit";

const SelectedProduct = createSlice({
  name: "SelectedProd",
  initialState: {
    items: [],
    num: 0,
  },
  reducers: {
    Selected: (state, action) => {
      state.items.push(action.payload);
      state.num++;
    },
    clearCart: (state) => {
      state.items = [];
      state.num = 0;
    },
    Shopping: (state) => {
      state.num++;
    },
  },
});
export const { Selected, clearCart, Shopping } =
  SelectedProduct.actions;
export default SelectedProduct.reducer;
