import React, { FC, useState } from "react";
import { ProductType } from "./product.type";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { addToCart, updateToCart } from "../cart/cartSlice";
interface IProduct {
  product: ProductType;
}
const Product: FC<IProduct> = ({ product }) => {
  const dispatch = useAppDispatch();
  const [showAmount, setShowAmount] = useState<boolean>(false);
  const [amount, setAmount] = useState<number>(1);

  return (
    <div style={{ padding: "50px" }}>
      {/* <img
        src={product.fields.image[0].url}
        width={product.fields.image[0].width}
      /> */}
      <img
        src={product.fields.image[0].thumbnails.large.url}
        width={product.fields.image[0].thumbnails.large.width}
      />

      <div>{product.fields.name}</div>
      <div>{product.fields.priceWithDiscount}</div>
      {!showAmount ? (
        <button
          onClick={() => {
            dispatch(
              addToCart({
                product,
                amout: amount,
                totalPrice: amount * product.fields.priceWithDiscount,
              })
            );
            setShowAmount(true);
          }}
        >
          Add to Cart
        </button>
      ) : (
        <div>
          <button
            onClick={() => {
              setAmount(amount + 1);
              dispatch(
                updateToCart({
                  product,
                  amout: amount + 1,
                  totalPrice: (amount + 1) * product.fields.priceWithDiscount,
                })
              );
            }}
          >
            +
          </button>
          <div>{amount}</div>
          <button
            onClick={() => {
              if (amount > 1) {
                setAmount(amount - 1);
                dispatch(
                  updateToCart({
                    product,
                    amout: amount - 1,
                    totalPrice: (amount - 1) * product.fields.priceWithDiscount,
                  })
                );
              }
            }}
          >
            -
          </button>
        </div>
      )}
    </div>
  );
};

export default Product;
