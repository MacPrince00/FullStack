import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function Layer({ cart, savedName }) {
  return (
    <>
      <Header cart={cart} savedName={savedName} />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layer;
