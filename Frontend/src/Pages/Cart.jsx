import React, { useState } from "react";
import "./cart.css";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import { NavLink } from "react-router-dom";

function Cart({ cart, setCart }) {
  const removeItem = (id) => {
    fetch("https://fullstack-backend-bqsv.onrender.com/api/v1/removefromcart", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "auth-token": `${localStorage.getItem(`auth-token`)}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ itemId: id }),
    })
      .then((response) => response.json())
      .then((data) => setCart(data))
      .catch((error) => console.error("Error removing item from cart:", error));
  };

  const incrementCount = (id) => {
    fetch("https://fullstack-backend-bqsv.onrender.com/api/v1/addcart", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "auth-token": `${localStorage.getItem(`auth-token`)}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ itemId: id }),
    })
    .then((response) => response.json())
    .then((data) => setCart(data));

    // Update the cartItems state with the modified array
    // setCart(updatedCartItems);
  };

  const decrementCount = (id) => {
    fetch("https://fullstack-backend-bqsv.onrender.com/api/v1/reducecart", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "auth-token": `${localStorage.getItem(`auth-token`)}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ itemId: id }),
    })
      .then((response) => response.json())
      .then((data) => setCart(data));
  };
  return (
    <div className="cart__page">
      <div className="inner__cart__page">
        <div className="cart__display">
          Cart {" "}
          {cart.length === 0
            ? "No Item In Cart"
            : `(${cart.reduce((total, cart) => total + cart.count, 0)})`}
        </div>
        {cart.map((cart) => (
          <div className="per__cart" key={cart._id}>
            <hr color="lightgray" size="1" />
            <div className="cart__details">
              <img className="cart__product__image" src={cart.image} />
              <div className="cart__title">
                <NavLink to={`/${cart._id}`} className="clicks">
                  <div className="each__title">{cart.productName}</div>
                </NavLink>
                <div className="in__stocks">In Stock</div>
                <img
                  className="jumia__express__cart"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvOEGmYEqltfYO-lcm5yimMwMJPvhnaW-3aDyVfUxA&s"
                />
              </div>
              <div className="cart__price">
                &#x20A6;{(cart.newPrice * cart.count).toLocaleString()}
              </div>
            </div>
            <div className="cart__quantity">
              <div
                className="cart__delete"
                onClick={() => removeItem(cart.productName)}
              >
                <DeleteOutlineOutlinedIcon /> REMOVE
              </div>
              <div className="quantity">
                <button
                  className="subtract__btn"
                  onClick={() => {
                    decrementCount(cart.productName);
                  }}
                >
                  <RemoveOutlinedIcon />
                </button>
                <div>{cart.count}</div>
                <button
                  className="add__btn"
                  onClick={() => {
                    incrementCount(cart.productName);
                  }}
                >
                  <AddOutlinedIcon />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="inner__area">
        <div className="upper__checkout">
          <div className="checkout__title">CART SUMMARY</div>
          <hr color="lightgray" size="1" />
          <div className="summary">
            <strong>Subtotal</strong>
            <div className="cart__price">
              &#x20A6;{" "}
              {cart
                .reduce((total, cart) => total + cart.newPrice * cart.count, 0)
                .toLocaleString()}
            </div>
          </div>
          <div className="smaller">Delivery fees not included yet.</div>
          <hr color="lightgray" size="1" />
          <div className="div__cover">
            <button className="product__btn">
              CHECKOUT (&#x20A6;
              {
                //cart.reduce((total, cart) => total + cart.count, 0)
                cart
                  .reduce(
                    (total, cart) => total + cart.newPrice * cart.count,
                    0
                  )
                  .toLocaleString()
              }
              )
            </button>
          </div>
        </div>
        <div className="upper__checkout asap__remove">
          <div className="checkout__title">Returns are easy</div>
          <div>Free return within 7 days for ALL eligible items Details</div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
