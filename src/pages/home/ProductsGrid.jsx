import React from "react";
import Product from "./Product";
const ProductsGrid = ({ products, loadCart }) => {
  return (
    <div className="products-grid">
      {products.map((product) => {
        //takes each value in an array and maps it to a new array
        return (
          <Product key={product.id} product={product} loadCart={loadCart} />
        );
      })}
    </div>
  );
};

export default ProductsGrid;
