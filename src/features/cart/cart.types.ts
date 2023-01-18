import { ProductType } from "../products/product.type";

export type CartItemType = {
  product: ProductType;
  amout: number;
};

export type CartType = CartItemType[];
