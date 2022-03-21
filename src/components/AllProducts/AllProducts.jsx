import React, { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";

const AllProducts = ({ setCartCount }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <h1>All Products</h1>
      <div className="row container">
        {products.map((product) => (
          <SingleProduct
            setCartCount={setCartCount}
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
