import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import Product from "./Product";
import { ProductType } from "./product.type";
import { getProductAsync, selectProducts } from "./productSlice";
const Products = () => {
  const { products, status } = useAppSelector(selectProducts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductAsync());
  }, []);

  if (status === "loading") {
    return <div>Loading....</div>;
  }
  return (
    <div>
      {products.map((item: ProductType) => (
        <Product key={item.id} product={item} />
      ))}
    </div>
  );
};

export default Products;
