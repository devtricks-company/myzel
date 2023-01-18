import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { CartType, CartItemType } from "./cart.types";

interface CartState {
  items: CartType;
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: CartState, action: PayloadAction<CartItemType>) => {
      state.items.push(action.payload);
    },

    updateToCart: (state: CartState, action: PayloadAction<CartItemType>) => {
      state.items = state.items.map((item: CartItemType) =>
        item.product.id === action.payload.product.id
          ? (item = action.payload)
          : item
      );
    },
  },
});

export const { addToCart, updateToCart } = cartSlice.actions;

export default cartSlice.reducer;
