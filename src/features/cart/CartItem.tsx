import React, { FC, useEffect, useState } from "react";
import { CartItemType } from "./cart.types";
import { updateToCart } from "./cartSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
interface ICartItem {
  item: CartItemType;
}
const CartItem: FC<ICartItem> = ({ item }) => {
  const [amount, setAmount] = useState<number>(item.amout);
  const [totalPrice, setTotalPrice] = useState<number>(
    item.product.fields.priceWithDiscount
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    setTotalPrice(amount * item.product.fields.priceWithDiscount);
  }, [amount]);

  return (
    <div key={item.product.id}>
      <h4>{item.product.fields.name}</h4>
      <div>
        <button
          onClick={() => {
            setAmount(amount + 1);
            dispatch(
              updateToCart({
                product: item.product,
                amout: amount + 1,
                totalPrice:
                  (amount + 1) * item.product.fields.priceWithDiscount,
              })
            );
          }}
        >
          +
        </button>
        <p>{amount}</p>
        <button
          onClick={() => {
            if (amount > 1) {
              setAmount(amount - 1);
              dispatch(
                updateToCart({
                  product: item.product,
                  amout: amount - 1,
                  totalPrice:
                    (amount - 1) * item.product.fields.priceWithDiscount,
                })
              );
            } else {
            }
          }}
        >
          -
        </button>
      </div>
      <p>{totalPrice}</p>
    </div>
  );
};

export default CartItem;
