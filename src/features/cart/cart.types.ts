import { ProductType } from "../products/product.type";

export type CartItemType = {
  product: ProductType;
  amout: number;
  totalPrice: number;
};

export type CartType = CartItemType[];
