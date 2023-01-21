import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";
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

    deleteItemFromCart: (
      state: CartState,
      action: PayloadAction<CartItemType>
    ) => {
      state.items = state.items.filter((item: CartItemType) => {
        item.product.id === action.payload.product.id;
      });
    },
  },
});

export const { addToCart, updateToCart } = cartSlice.actions;

export const selectCarts = (state: RootState) => state.cart.items;

export default cartSlice.reducer;
