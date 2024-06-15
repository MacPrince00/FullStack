import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function Layer({
  signupForm,
  cartItems,
  isLoggedIn,
  setIsLoggedIn,
  saveLogIN,
  saveEmail,
}) {
  return (
    <>
      <Header
        signupForm={signupForm}
        cartItems={cartItems}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        saveLogIN={saveLogIN}
        saveEmail={saveEmail}
      />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layer;
