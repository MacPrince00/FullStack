import { useEffect, useState } from "react";
import "./App.css";
import Home from "./Pages/Home.jsx";
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import Cart from "./Pages/Cart.jsx";
import Layer from "./components/Layer.jsx";
import ProductDisplay from "./Pages/ProductDisplay.jsx";
import SignUp from "./Pages/SignUp.jsx";
import Authrequired from "./assets/Authrequired.jsx";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [signupForm, setSignupForm] = useState({ email: "", password: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [loginForm, setLoginForm] = useState({ email: "", password: "" });

  function saveToCart() {
    localStorage.setItem('cart', JSON.stringify(cartItems))
  }


  const addToCart = (Products) => {
    const isProductInCart = cartItems.some(
      (item) => item.title === Products.title
    );

    if (!isProductInCart) {
      setCartItems([...cartItems, Products]);
    } else {
      return null;
    }

    saveToCart()
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layer
              signupForm={signupForm}
              cartItems={cartItems}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        >
          <Route index element={<Home addToCart={addToCart} />} />
          <Route element={<Authrequired isLoggedIn={isLoggedIn} />}>
            <Route
              path="cart"
              element={
                <Cart cartItems={cartItems} setCartItems={setCartItems} />
              }
            />
            <Route
              path=":productName"
              element={<ProductDisplay addToCart={addToCart} />}
            />
          </Route>
        </Route>
        {/* <Route
          element={<Login loginForm={loginForm} setLoginForm={setLoginForm} />}
          path="/login"
        /> */}
        <Route
          element={
            <SignUp
              signupForm={signupForm}
              setSignupForm={setSignupForm}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
          path="/signup"
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
