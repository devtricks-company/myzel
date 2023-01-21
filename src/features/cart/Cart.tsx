import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { CartItemType } from "./cart.types";
import CartItem from "./CartItem";
import { selectCarts } from "./cartSlice";
const Cart = () => {
  const items = useAppSelector(selectCarts);

  return (
    <div
      style={{
        padding: "50px",
      }}
    >
      {items.map((item: CartItemType) => (
        <CartItem key={item.product.id} item={item} />
      ))}

      <p>
        Total Price:
        {items.reduce((accumulator, item) => accumulator + item.totalPrice, 0)}
      </p>
    </div>
  );
};

export default Cart;
