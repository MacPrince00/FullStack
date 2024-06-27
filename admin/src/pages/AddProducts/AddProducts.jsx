import React, { useEffect, useState } from "react";
import "./AddProducts.css";

function AddProducts() {
  const [productDetails, setProductDetails] = useState({
    productName: "",
    oldPrice: "",
    newPrice: "",
    image: "",
    brand: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setProductDetails((prev) => ({ ...prev, [name]: value }));
  }

  async function uploadProduct(e) {
    e.preventDefault();
    let responseData;
    let product = productDetails;

    const form = document.getElementById("productForm");
    const formData = new FormData(form);

    await fetch("http://localhost:3000/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        responseData = data;
      });

    if (responseData.success) {
      product.image = responseData.image_url;

      await fetch("http://localhost:3000/api/v1/addproducts", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((resp) => {
          if (!resp.ok) {
            throw new Error("Network response was not ok");
          }
          return resp.json();
        }); 
    }
  }
  return (
    <div>
      <form onSubmit={uploadProduct} id="productForm">
        <div className="form-group">
          <label htmlFor="product-name">Product Name:</label>
          <input
            type="text"
            id="product-name"
            name="productName"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="old-price">Old Price:</label>
          <input
            type="number"
            id="old-price"
            name="oldPrice"
            onChange={handleChange}
            step="0.01"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="new-price">New Price:</label>
          <input
            type="number"
            id="new-price"
            name="newPrice"
            onChange={handleChange}
            step="0.01"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="product-image">Image:</label>
          <input
            type="file"
            id="product-image"
            name="image"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="brand">Brand:</label>
          <input
            type="text"
            id="brand"
            name="brand"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
            <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default AddProducts;
