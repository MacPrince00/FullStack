import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Products.css";

function Products({ allProducts, setAllProducts }) {
  const fetchInfo = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/v1/products");
      if (!response.ok) {
        throw new Error("Failed to fetch products.");
      }
      const data = await response.json();
      setAllProducts(data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

 const remove__product = async (id) => {
   await fetch("http://localhost:3000/api/v1/products", {
     method: "POST",
     headers: {
       Accept: "application/json",
       "Content-Type": "application/json",
     },
     body: JSON.stringify({ id: id }),
   });
   await fetchInfo();
 };

  return (
    <div className="products">
      <div className="product__list">
        {allProducts.map((product) => (
          <div key={product._id} className="product__item">
            <hr className="style" />
            <div className="each__list">
              <div className="img__container">
                <img
                  className="product__img"
                  src={product.image}
                  alt={product.productName} // Ensure alt attribute is meaningful
                />
              </div>
              <div className="product__info">
                <div className="title">{product.productName}</div>
                <div className="price">
                  &#8358;{product.new_price || product.newPrice}
                </div>
              </div>
              <div className="decision__btn">
                <NavLink to={`/edit/${product._id}`}>
                  <button className="decision__nav">Edit</button>
                </NavLink>
                <button
                  className="delete__btn"
                  onClick={() => remove__product(product._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
