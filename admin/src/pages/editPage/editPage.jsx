import React, { useEffect, useState } from "react";
import "./editPage.css";
import { useParams } from "react-router-dom";

function EditPage({ allProducts }) {
  const [foundProduct, setFoundProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const product = allProducts.find((product) => product._id === id);
    setFoundProduct(product);
  }, [allProducts, id]);

  console.log(foundProduct);

  return (
    <div>
      <div className="edit__header">
        <div>Edit Product</div>
      </div>
      <form id="productForm">
        <div className="form-group">
          <label htmlFor="product-name">Product Name:</label>
          <input
            type="text"
            id="product-name"
            name="productName"
            placeholder={foundProduct?.productName}
            // onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="old-price">Old Price:</label>
          <input
            type="number"
            id="old-price"
            name="oldPrice"
            placeholder={foundProduct?.oldPrice}
            // onChange={handleChange}
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
            placeholder={foundProduct?.newPrice}
            // onChange={handleChange}
            step="0.01"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="product-image">Image:</label>
          <input
            type="file"
            id="product-image"
            placeholder={foundProduct?.image}
            name="image"
            // onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="brand">Brand:</label>
          <input
            type="text"
            id="brand"
            name="brand"
            placeholder={foundProduct?.brand}
            // placeholder={foundProduct.brand}
            // onChange={handleChange}
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

export default EditPage;
