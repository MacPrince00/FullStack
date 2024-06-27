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
  const [allProducts, setAllProducts] = useState([]);
  const [savedName, setSavedName] = useState();
  const [cart, setCart] = useState([]);
  const fetchInfo = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/v1/products");
      if (!response.ok) {
        q;
        throw new Error("Failed to fetch products.");
      }
      const data = await response.json();
      setAllProducts(data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchCart = () => {
    if (localStorage.getItem(`auth-token`)) {
      fetch("http://localhost:3000/api/v1/userCart", {
        method: "GET",
        headers: {
          Accept: "application/form-data",
          "auth-token": `${localStorage.getItem(`auth-token`)}`,
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => setCart(data.userData.cartData));
    }
  };

  useEffect(() => {
    fetchInfo();
    fetchCart();
  }, []);

  const addToCart = (id) => {
    if (localStorage.getItem(`auth-token`)) {
      fetch("http://localhost:3000/api/v1/addtocart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": `${localStorage.getItem(`auth-token`)}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId: id }),
      })
        .then((response) => response.json())
        .then((data) => setCart(data.userData.cartData))
        .catch((error) => console.error("Error adding to cart:", error));
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layer cart={cart} savedName={savedName} />}>
          <Route
            index
            element={<Home addToCart={addToCart} allProducts={allProducts} />}
          />
          <Route element={<Authrequired />}>
            <Route
              path="cart"
              element={<Cart cart={cart} setCart={setCart} />}
            />
            <Route
              path=":id"
              element={
                <ProductDisplay
                  addToCart={addToCart}
                  allProducts={allProducts}
                />
              }
            />
          </Route>
        </Route>
        <Route
          element={<SignUp savedName={savedName} setSavedName={setSavedName} />}
          path="/signup"
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
