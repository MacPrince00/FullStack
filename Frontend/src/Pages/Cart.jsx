import React, { useState } from "react";
import "./cart.css";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import { NavLink } from "react-router-dom";

function Cart({ cartItems, setCartItems }) {
  const removeItem = (name) => {
    let newPeople = cartItems.filter((prod) => prod.title !== name.name);
    setCartItems(newPeople);
    console.log(cartItems);
  };

  const incrementCount = (id) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        // Increment the count of the matching product
        return { ...item, count: item.count + 1 };
      }
      return item;
    });

    // Update the cartItems state with the modified array
    setCartItems(updatedCartItems);
  };

  const decrementCount = (id) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        if (item.count === 1) {
          return { ...item };
        } else {
          return { ...item, count: item.count - 1 };
        }
      }
      return item;
    });

    // Update the cartItems state with the modified array
    setCartItems(updatedCartItems);
  };
  return (
    <div className="cart__page">
      <div className="inner__cart__page">
        <div className="cart__display">
          Cart (
          {cartItems.length === 0
            ? "Add Item(s)"
            : cartItems.reduce((total, cart) => total + cart.count, 0)}
          )
        </div>
        {cartItems.map((cart) => (
          <div className="per__cart" key={cart.id}>
            <hr color="lightgray" size="1" />
            <div className="cart__details">
              <img className="cart__product__image" src={cart.image} />
              <div className="cart__title">
                <NavLink to={`/${cart.title}`} className="clicks">
                  <div className="each__title">{cart.title}</div>
                </NavLink>
                <div className="in__stocks">In Stock</div>
                <img
                  className="jumia__express__cart"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvOEGmYEqltfYO-lcm5yimMwMJPvhnaW-3aDyVfUxA&s"
                />
              </div>
              <div className="cart__price">
                &#x20A6;{(cart.price * cart.count).toLocaleString()}
              </div>
            </div>
            <div className="cart__quantity">
              <div
                className="cart__delete"
                onClick={() => removeItem({ name: cart.title })}
              >
                <DeleteOutlineOutlinedIcon /> REMOVE
              </div>
              <div className="quantity">
                <button
                  className="subtract__btn"
                  onClick={() => {
                    decrementCount(cart.id);
                  }}
                >
                  <RemoveOutlinedIcon />
                </button>
                <div>{cart.count}</div>
                <button
                  className="add__btn"
                  onClick={() => {
                    incrementCount(cart.id);
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
              {cartItems
                .reduce((total, cart) => total + cart.price * cart.count, 0)
                .toLocaleString()}
            </div>
          </div>
          <div className="smaller">Delivery fees not included yet.</div>
          <hr color="lightgray" size="1" />
          <div className="div__cover">
            <button className="product__btn">
              CHECKOUT (&#x20A6;
              {cartItems
                .reduce((total, cart) => total + cart.price * cart.count, 0)
                .toLocaleString()}
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
