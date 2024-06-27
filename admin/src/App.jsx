import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products/Products";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import AddProducts from "./pages/AddProducts/AddProducts";
import Orders from "./pages/Orders/Orders";
import EditPage from "./pages/editPage/editPage";

function App() {
  const [allProducts, setAllProducts] = useState([]);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Products
              allProducts={allProducts}
              setAllProducts={setAllProducts}
            />
          }
        />
        <Route path="/addproduct" element={<AddProducts />} />
        <Route path="/orders" element={<Orders />} />
        <Route
          path="/edit/:id"
          element={
            <EditPage
              allProducts={allProducts}
              setAllProducts={setAllProducts}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
